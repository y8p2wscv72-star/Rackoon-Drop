// RACKOON — Telegram Mini App (демо-версия).
// Экраны лежат в src/screens/*.dc.html: разметка + логика игры.
// Этот файл — маленький движок, который превращает их в React-приложение,
// плюс интеграция с Telegram WebApp (кнопка «Назад», вибро, имя игрока, тема).
import React from 'react';
import { createRoot } from 'react-dom/client';

import MainSrc from './screens/Main.dc.html';
import CrashSrc from './screens/Crash.dc.html';
import UpgradeSrc from './screens/Upgrade.dc.html';
import CasesSrc from './screens/Cases.dc.html';
import MinesSrc from './screens/Mines.dc.html';
import PvpSrc from './screens/Pvp.dc.html';
import InventorySrc from './screens/Inventory.dc.html';
import TasksSrc from './screens/Tasks.dc.html';
import LeadersSrc from './screens/Leaders.dc.html';
import AdminSrc from './screens/Admin.dc.html';
import GIFTCAT from './gifts.js';
import CASESMOD from './cases.js';

// ---------- Telegram ----------
const tg = window.Telegram && window.Telegram.WebApp;

// ---------- Сохранение: на устройстве + в облаке Telegram (CloudStorage) ----------
// Облако Telegram привязано к аккаунту игрока и боту: данные не пропадут,
// даже если Telegram почистит кэш или игрок зайдёт с другого телефона.
const SYNC_KEYS = ['rk_guest', 'rk_wd_addr'];
const CHUNK = 3900;
const cloud = (() => {
  try { return tg && tg.CloudStorage && (!tg.isVersionAtLeast || tg.isVersionAtLeast('6.9')) ? tg.CloudStorage : null; } catch (e) { return null; }
})();
const store = {
  _m: {}, _t: {},
  get(k) { let v = null; try { v = localStorage.getItem(k); } catch (e) {} return v != null ? v : (k in this._m ? this._m[k] : null); },
  set(k, v) {
    v = String(v); this._m[k] = v;
    try { localStorage.setItem(k, v); } catch (e) {}
    if (cloud && SYNC_KEYS.indexOf(k) !== -1) {
      clearTimeout(this._t[k]);
      this._t[k] = setTimeout(() => {
        const parts = []; for (let i = 0; i < v.length; i += CHUNK) parts.push(v.slice(i, i + CHUNK));
        if (!parts.length) parts.push('');
        try { cloud.setItem(k + '__n', String(parts.length)); parts.forEach((part, i) => cloud.setItem(k + '__' + i, part)); } catch (e) {}
      }, 400);
    }
  },
  remove(k) { delete this._m[k]; try { localStorage.removeItem(k); } catch (e) {} if (cloud) { try { cloud.setItem(k + '__n', '0'); } catch (e) {} } },
  getJSON(k, def) { try { const v = JSON.parse(this.get(k) || 'null'); return v == null ? def : v; } catch (e) { return def; } },
  setJSON(k, v) { this.set(k, JSON.stringify(v)); }
};
// При запуске подтягиваем сохранённое из облака Telegram
function loadFromCloud() {
  return new Promise((resolve) => {
    if (!cloud) return resolve();
    const done = setTimeout(resolve, 2500);
    try {
      cloud.getItems(SYNC_KEYS.map((k) => k + '__n'), (err, counts) => {
        if (err || !counts) { clearTimeout(done); return resolve(); }
        const want = [];
        SYNC_KEYS.forEach((k) => { const n = parseInt(counts[k + '__n'] || '0', 10) || 0; for (let i = 0; i < n; i++) want.push(k + '__' + i); });
        if (!want.length) { clearTimeout(done); return resolve(); }
        cloud.getItems(want, (err2, vals) => {
          if (!err2 && vals) {
            SYNC_KEYS.forEach((k) => {
              const n = parseInt(counts[k + '__n'] || '0', 10) || 0;
              if (!n) return;
              let v = ''; for (let i = 0; i < n; i++) v += vals[k + '__' + i] || '';
              store._m[k] = v; try { localStorage.setItem(k, v); } catch (e) {}
            });
          }
          clearTimeout(done); resolve();
        });
      });
    } catch (e) { clearTimeout(done); resolve(); }
  });
}

// ---------- Баланс и инвентарь: их хранит и считает СЕРВЕР ----------
// Игра держит у себя только копию для показа. Изменить её на телефоне бесполезно:
// любая ставка, выигрыш или продажа проходят через сервер, а он присылает правильные значения.
const acct = { bal: 0, inv: [], freeAt: 0, loaded: false };
const wallet = {
  get() { return acct.bal; },
  set() { /* баланс меняет только сервер */ }
};
const inventory = {
  list() { return acct.inv.slice(); },
  add() {}, remove() {}, reset() { return acct.inv.slice(); }
};
const stats = { day: () => ({}), range: () => ({}), total: () => ({}) }; // статистика — на сервере
function track() {}
// ---------- Уведомление поверх любого экрана ----------
let toastEl = null, toastT = null;
function showToast(text, ok) {
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.setAttribute('role', 'status');
    toastEl.style.cssText = 'position:fixed;left:50%;top:20px;transform:translateX(-50%);z-index:90;max-width:340px;box-sizing:border-box;padding:12px 16px;border-radius:16px;background:#1f2330;color:#fff;font:500 14px Rubik,system-ui,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.5);transition:opacity .25s;pointer-events:none';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = text;
  toastEl.style.border = '1px solid ' + (ok === false ? '#ff5d73' : ok ? '#2bd46b' : '#ffc83d');
  toastEl.style.opacity = '1';
  clearTimeout(toastT); toastT = setTimeout(() => { toastEl.style.opacity = '0'; }, 2800);
}
// ---------- Экран блокировки (бан) ----------
function showBanned(reason) {
  if (document.getElementById('rk-banned')) return;
  const el = document.createElement('div');
  el.id = 'rk-banned'; el.setAttribute('role', 'alertdialog'); el.setAttribute('aria-label', 'Аккаунт заблокирован');
  el.style.cssText = 'position:fixed;inset:0;z-index:100;background:#0b0d12;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:24px;box-sizing:border-box;text-align:center;font-family:Rubik,system-ui,sans-serif;color:#fff';
  const icon = document.createElement('div'); icon.textContent = '⛔'; icon.style.cssText = 'font-size:56px';
  const h = document.createElement('div'); h.textContent = 'Аккаунт заблокирован'; h.style.cssText = 'font-size:22px;font-weight:900';
  const p = document.createElement('div'); p.textContent = reason ? 'Причина: ' + reason : 'Если это ошибка — напиши администрации.'; p.style.cssText = 'font-size:14px;color:#a3a8b5;max-width:300px;line-height:1.45';
  el.appendChild(icon); el.appendChild(h); el.appendChild(p);
  document.body.appendChild(el);
}
// ---------- Окно «подпишись на канал» (для бесплатного бонуса и кейса) ----------
function showSubPrompt(channel) {
  if (document.getElementById('rk-sub')) return;
  const url = 'https://t.me/' + channel;
  const wrap = document.createElement('div');
  wrap.id = 'rk-sub'; wrap.setAttribute('role', 'dialog'); wrap.setAttribute('aria-label', 'Подписка на канал');
  wrap.style.cssText = 'position:fixed;inset:0;z-index:95;background:rgba(5,6,10,.72);display:flex;align-items:flex-end;justify-content:center;font-family:Rubik,system-ui,sans-serif';
  const box = document.createElement('div');
  box.style.cssText = 'width:100%;max-width:390px;box-sizing:border-box;background:#151821;border-top:1px solid #262b3a;border-radius:24px 24px 0 0;padding:22px 18px 26px;display:flex;flex-direction:column;align-items:center;gap:12px;color:#fff;text-align:center';
  const ic = document.createElement('div'); ic.textContent = '📣'; ic.style.cssText = 'font-size:44px';
  const h = document.createElement('div'); h.textContent = 'Подпишись на канал'; h.style.cssText = 'font-size:20px;font-weight:900';
  const p = document.createElement('div'); p.textContent = 'Ежедневный бонус и бесплатный кейс — для подписчиков @' + channel + '. Подпишись и возвращайся за наградой.'; p.style.cssText = 'font-size:14px;color:#a3a8b5;line-height:1.45;max-width:320px';
  const go = document.createElement('button'); go.type = 'button'; go.textContent = 'Подписаться';
  go.style.cssText = 'width:100%;height:54px;border:0;border-radius:16px;background:#ffc83d;color:#1a1300;font:900 16px Rubik,system-ui,sans-serif;cursor:pointer;margin-top:4px';
  const close = document.createElement('button'); close.type = 'button'; close.textContent = 'Позже';
  close.style.cssText = 'width:100%;height:46px;border:0;border-radius:14px;background:transparent;color:#8a90a0;font:700 14px Rubik,system-ui,sans-serif;cursor:pointer';
  const done = () => { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); };
  go.onclick = () => { const tg = window.Telegram && window.Telegram.WebApp; try { if (tg && tg.openTelegramLink) tg.openTelegramLink(url); else window.open(url, '_blank'); } catch (e) { window.open(url, '_blank'); } done(); };
  close.onclick = done; wrap.onclick = (e) => { if (e.target === wrap) done(); };
  box.appendChild(ic); box.appendChild(h); box.appendChild(p); box.appendChild(go); box.appendChild(close); wrap.appendChild(box);
  document.body.appendChild(wrap);
}
// ---------- Сеть: сервер игры ----------
// Адрес сервера: window.RK_SERVER (задаётся в index.html), иначе тот же сайт.
let currentScreen = null; // открытый экран — чтобы новый баланс сразу попал в него
function applyAcct(a) {
  acct.bal = Math.round((a.bal || 0) * 100) / 100; acct.inv = Array.isArray(a.inv) ? a.inv : []; if (a.freeAt != null) acct.freeAt = a.freeAt; acct.loaded = true;
  const lg = currentScreen && currentScreen.logic;
  if (lg && lg.state && 'balance' in lg.state) lg.state.balance = acct.bal;
  if (currentScreen) currentScreen.forceUpdate();
}
function addBalance() {} // совместимость: баланс меняет только сервер
const net = (() => {
  const handlers = {}; const rooms = new Set(); const pending = {};
  let ws = null, retry = 0, pingIv = null, ridN = 0;
  const api = { connected: false, me: null, online: 0, offset: 0, feed: [], wd: [] };
  function emit(t, m) { (handlers[t] || []).slice().forEach((fn) => { try { fn(m); } catch (e) { console.error(e); } }); }
  function url() {
    let base = (window.RK_SERVER || '').trim();
    if (!base) base = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host;
    return base.replace(/^http/, 'ws').replace(/\/+$/, '') + '/ws';
  }
  function guestId() {
    let id = store.get('rk_guest');
    if (!id) { id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4); store.set('rk_guest', id); }
    return id;
  }
  function raw(m) { if (ws && ws.readyState === 1) { ws.send(JSON.stringify(m)); return true; } return false; }
  // Запрос к серверу с ответом: net.req('case.open', { id }) → Promise({ ok, data, err })
  api.req = (op, args) => new Promise((resolve) => {
    const rid = 'q' + (++ridN);
    if (!raw({ t: 'req', rid, op, args: args || {} })) return resolve({ ok: false, err: 'Нет связи с сервером' });
    const timer = setTimeout(() => { delete pending[rid]; resolve({ ok: false, err: 'Сервер не ответил, попробуй ещё раз' }); }, 15000);
    pending[rid] = (m) => { clearTimeout(timer); if (m.needSub) { showSubPrompt(m.needSub); m.err = 'Нужна подписка на канал'; } resolve(m); };
  });
  api.withdrawals = () => api.wd.slice();
  api.withdraw = (w) => raw({ t: 'wd.create', id: w.id, kind: w.kind, amount: w.amount, address: w.address, items: w.items });
  function connect() {
    try { ws = new WebSocket(url()); } catch (e) { return later(); }
    ws.onopen = () => {
      retry = 0;
      raw({ t: 'hello', initData: (tg && tg.initData) || '', guestId: guestId() });
      rooms.forEach((r) => raw({ t: 'sub', room: r }));
      clearInterval(pingIv);
      const ping = () => raw({ t: 'ping', c: Date.now() });
      ping(); pingIv = setInterval(ping, 10000);
    };
    ws.onmessage = (ev) => {
      let m; try { m = JSON.parse(ev.data); } catch (e) { return; }
      if (m.t === 'pong') { const now = Date.now(); api.offset = m.now - (m.c + now) / 2; return; }
      if (m.t === 'res') { const f = pending[m.rid]; if (f) { delete pending[m.rid]; f(m); } return; }
      if (m.t === 'welcome') {
        if (window.rkLoaderDone) window.rkLoaderDone();
        api.me = m.me; api.online = m.online; api.deposit = m.deposit || null; api.cryptobot = m.cryptobot || null; api.gifts = m.gifts || null; api.connected = true;
        api.feed = m.feed || [];
        if (m.acct) applyAcct(m.acct);
        if (m.me && m.me.tg) raw({ t: 'wd.list' });
        // PIN админки: после переподключения отправляем заново (хранится только в памяти до закрытия игры)
        api.pinOk = !!(m.me && m.me.admin && !m.me.needPin);
        if (m.me && m.me.admin && m.me.needPin && api.adminPin) raw({ t: 'admin.pin', pin: api.adminPin });
        emit('status', api);
      }
      if (m.t === 'acct') { applyAcct(m); }
      if (m.t === 'online') { api.online = m.n; }
      if (m.t === 'feed') { api.feed = [m.item].concat(api.feed).slice(0, 20); }
      if (m.t === 'notify') showToast(m.text, true);
      if (m.t === 'wd.list') api.wd = m.items || [];
      if (m.t === 'wd.ok' || m.t === 'wd.update') { api.wd = [m.w].concat(api.wd.filter((w) => w.id !== m.w.id)).sort((x, y) => y.at - x.at); }
      if (m.t === 'wd.err') showToast(m.msg, false);
      if (m.t === 'auth.expired') api.expired = true;
      if (m.t === 'admin.pinOk') api.pinOk = true;
      if (m.t === 'admin.pinBad') api.adminPin = '';
      if (m.t === 'banned') { api.expired = true; api.banned = true; showBanned(m.reason); }
      emit(m.t, m);
    };
    ws.onclose = () => {
      const was = api.connected; api.connected = false; clearInterval(pingIv);
      Object.keys(pending).forEach((rid) => { pending[rid]({ ok: false, err: 'Связь с сервером прервалась' }); delete pending[rid]; });
      if (was) emit('status', api);
      if (!api.expired) later();
    };
    ws.onerror = () => {};
  }
  function later() { retry = Math.min(retry + 1, 6); setTimeout(connect, 500 * retry); }
  api.on = (t, fn) => { (handlers[t] = handlers[t] || []).push(fn); return () => { handlers[t] = (handlers[t] || []).filter((f) => f !== fn); }; };
  api.send = raw;
  api.sub = (r) => { rooms.add(r); raw({ t: 'sub', room: r }); };
  api.unsub = (r) => { rooms.delete(r); raw({ t: 'unsub', room: r }); };
  api.now = () => Date.now() + api.offset; // время сервера
  api.isMe = (uid) => !!(api.me && api.me.uid === uid);
  api.start = connect;
  return api;
})();

// Подарок из общего каталога: название, сегодняшняя цена, картинка, цвет редкости (или null)
// Картинка-эмодзи для звёздных подарков (настоящие картинки докинем позже)
function emojiImg(e) { return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><text x='32' y='50' font-size='46' text-anchor='middle'>" + e + '</text></svg>'); }
function starGifts() {
  return GIFTCAT.STARS.map((r) => { const g = GIFTCAT.STAR[r[0]]; return { name: g.name, star: true, stars: g.stars, supply: 0, base: g.price, price: g.price, prev: g.price, img: emojiImg(g.emoji), color: '#8fa3c7' }; });
}
function giftInfo(name) {
  const n = GIFTCAT.canon(name);
  if (!n) return null;
  const price = GIFTCAT.priceOf(n);
  if (GIFTCAT.isStar(n)) { const g = GIFTCAT.STAR[n]; return { name: n, price, color: '#8fa3c7', star: true, stars: g.stars, img: emojiImg(g.emoji) }; }
  const local = GIFTCAT.IMG[n] || GIFTCAT.GIFT_IMG;
  return { name: n, price, color: GIFTCAT.rarityColor(price), img: window.rkThumb ? window.rkThumb(n, local) : fixAssets(local) };
}
// Лестница подарков: самый дорогой на сумму / следующий дороже
function giftBestFor(v) { const b = GIFTCAT.bestFor(v); return b ? giftInfo(b.name) : null; }
function giftNextAbove(p) { const b = GIFTCAT.nextAbove(p); return b ? giftInfo(b.name) : null; }
window.RK = { wallet, inventory, store, stats, track, net, addBalance, acct, toast: showToast, cases: CASESMOD, gift: giftInfo, giftBestFor, giftNextAbove, starGifts, botName: 'RackoonDropBot', user: (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) || null };

if (tg) {
  tg.ready();
  tg.expand();
  try { tg.setHeaderColor('#0b0d12'); tg.setBackgroundColor('#0b0d12'); } catch (e) {}
  try { if (tg.disableVerticalSwipes) tg.disableVerticalSwipes(); } catch (e) {}
}
document.addEventListener('click', (e) => {
  if (tg && tg.HapticFeedback && e.target.closest && e.target.closest('button, a')) {
    try { tg.HapticFeedback.impactOccurred('light'); } catch (err) {}
  }
}, true);

// ---------- Ассеты: /_blob/<id> из макета → локальные файлы ----------
const ASSETS = {
  '16b8be03ec4054a9ad560c5be1c9ab9e': 'banner-crash.jpg', '88b023f22e2d3006641849bb168e073d': 'banner-cases.jpg',
  '63c10368990e8788e655de65d5a9b515': 'banner-upgrade.jpg', 'b81dc491ff982e1892b4eeeb94570e3c': 'banner-mines.jpg',
  '661884b648dd965ea69af44ea8c7ee95': 'avatar.jpg', 'a8d1e2a1f1626c9b8edd4755d9c32150': 'rocket.png',
  '29f965541d768edadf1aad890a105f4f': 'space.jpg',
  'ac9e83f513d62d0c7fc3250c8a2d1f89': 'candle.svg', '1f689ff254757e970266197964c5d390': 'lolpop.svg',
  '9b7049b84c84b25ce8e457f56c837c42': 'calendar.svg', 'b4c8d4f914ed6e253c933045ab9e3461': 'hypno.svg',
  '808ef5efdbeb6b276f70430b220f760b': 'bells.svg', '6ef5ecbeb712d1b1d752a33d1e9c279d': 'cake.svg',
  '6e3628fac94b5266f3b64cea9c5fe7ee': 'globe.svg', 'c2c0de4f1d0a4ed1dd2df84eff4c7f73': 'berry.svg',
  '45ac385132ce7b83da133306d9a330f8': 'muffin.svg', '8f4c023d08704d2319e54c9872a8c46d': 'record.svg',
  'fe01a5a2d2ff76e0192e008ed6267558': 'tophat.svg', 'ef580f1649ad89b5e268954da6ea30b2': 'dring.svg',
  '5bb7da32fc8a6f8dbe91cf7cedc20c65': 'lpotion.svg', '734e25b54462cda990767f69381d8355': 'rose.svg',
  'c02bc9477e447f6f71962df1fc7a399a': 'bear.svg', '4826a2db621709393534f8feae3d3f4a': 'signet.svg',
  '5efc0b426406d53e3b649c727079f26d': 'watch.svg', 'e562d84d61312007f5108ab64cbfe6f9': 'iongem.svg',
  '923c4583ef32f1e6549c08d5a1839d4c': 'peach.svg', '500977bc4572974cf066e4c08b276369': 'cap.svg',
  'a64ccb23ba5a5ab0f1f789ab412cf3af': 'pepe.svg', 'bb8c4faf5d5477b7abe934698601360a': 'none.svg',
  '34af5661e80ecf394b0a48aeeb28ab6c': 'r-fire.svg', '7629870dfcd56d08701d6a71de1e83df': 'r-laugh.svg',
  'f5a9ceb49eb8c4c03e26914bcd1e2576': 'r-angry.svg', '89d4ee9117e73bee099492a4ce5c5498': 'r-heart.svg',
  'c22eeb9eb2c04b336c2c7f989a2a93a7': 'r-party.svg',
  'fcf5bf14ee8b1ae499c387610e4d1977': 'case-c1.jpg',
  '06ce572b9077b276c1d8a7b06b5e8713': 'case-c2.jpg',
  '9e1537bfc41c71475ce556a1aaf4884f': 'case-c3.jpg',
  'c0847d0dc5fbcb1a68d80763032f0675': 'case-c4.jpg',
  'db1a02051117bc41aa898a143cdc3d48': 'case-c5.jpg',
  '72f77fc4af6bf75c8e7d10aa33580007': 'case-c6.jpg',
  'b289144243be3c7e4e7176e3a0070caa': 'case-c7.jpg',
  '313d5daa64736bbfb70ecfcd97ed3141': 'case-c8.jpg'
};
function fixAssets(src) {
  return src.replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => ASSETS[id] ? 'assets/' + ASSETS[id] : m);
}
// Окна результата: в приложении — по центру экрана, а не наверху длинной страницы
function fixOverlays(src) {
  return src.replace(/position: absolute; left: 0; top: 0; right: 0; bottom: 0; background: rgba\(5, 6, 10, ([0-9.]+)\); display: flex; justify-content: center; align-items: flex-start; padding-top: \d+px/g,
    'position: fixed; left: 0; top: 0; right: 0; bottom: 0; z-index: 50; background: rgba(5, 6, 10, $1); display: flex; justify-content: center; align-items: center; padding: 16px');
}

// ---------- Картинки NFT: официальные превью коллекций с Fragment ----------
// Цепочка: превью коллекции → картинка подарка #1 → своя иконка (если Fragment недоступен)
const IMG_FALLBACK = {};
window.rkThumb = function (name, local) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const thumb = 'https://fragment.com/file/gifts/' + slug + '/thumb.webp';
  const first = 'https://nft.fragment.com/gift/' + slug + '-1.webp';
  IMG_FALLBACK[thumb] = first;
  IMG_FALLBACK[first] = local.replace(/\/_blob\/([0-9a-f]{32})/, (m, id) => ASSETS[id] ? 'assets/' + ASSETS[id] : m);
  return thumb;
};
window.addEventListener('error', (e) => {
  const el = e.target;
  if (el && el.tagName === 'IMG') {
    if (window.RK && window.RK.user && el.getAttribute('src') === window.RK.user.photo_url) { el.setAttribute('src', 'assets/avatar.jpg'); return; }
    // Аватар другого игрока не загрузился — показываем заглушку
    if (el.hasAttribute('data-av')) { el.removeAttribute('data-av'); el.setAttribute('src', 'assets/avatar.jpg'); return; }
    const next = IMG_FALLBACK[el.getAttribute('src')];
    if (next) el.setAttribute('src', next);
  }
}, true);

// ---------- Разбор экрана ----------
function parseScreen(name, raw) {
  const src = fixOverlays(fixAssets(raw));
  const doc = new DOMParser().parseFromString(src, 'text/html');
  const xdc = doc.querySelector('x-dc');
  const helmet = xdc.querySelector('helmet');
  const head = [];
  if (helmet) {
    helmet.querySelectorAll('link, style').forEach((n) => head.push(n.outerHTML));
    helmet.remove();
  }
  const root = Array.from(xdc.children)[0];
  const script = doc.querySelector('script[data-dc-script]').textContent;
  const Logic = new Function('DCLogic', script + '\n;return Component;')(DCLogic);
  return { name, head, root, Logic };
}

class DCLogic {
  constructor(props) { this.props = props || {}; this.state = {}; this._host = null; }
  setState(partial, cb) {
    if (typeof partial === 'function') partial = partial(this.state, this.props);
    Object.assign(this.state, partial);
    if (this._host) this._host.forceUpdate(cb);
    else if (cb) cb();
  }
  forceUpdate(cb) { if (this._host) this._host.forceUpdate(cb); }
}

// ---------- Шаблон → React ----------
const camel = (s) => s.replace(/-([a-z])/g, (m, c) => c.toUpperCase());
function lookup(path, scope) {
  path = path.trim();
  if (path === 'true') return true;
  if (path === 'false') return false;
  if (path === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(path)) return parseFloat(path);
  const parts = path.split('.');
  let v;
  for (let i = scope.length - 1; i >= 0; i--) { if (scope[i] && parts[0] in scope[i]) { v = scope[i][parts[0]]; break; } }
  for (let j = 1; j < parts.length && v != null; j++) v = v[parts[j]];
  return v;
}
const HOLE = /\{\{([^}]+)\}\}/g;
function interp(str, scope) {
  const whole = str.match(/^\s*\{\{([^}]+)\}\}\s*$/);
  if (whole) return lookup(whole[1], scope);
  return str.replace(HOLE, (m, p) => { const v = lookup(p, scope); return v == null ? '' : String(v); });
}
function styleObj(str) {
  const o = {};
  str.split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i < 0) return;
    let k = decl.slice(0, i).trim(); const v = decl.slice(i + 1).trim();
    if (!k) return;
    if (k.startsWith('--')) { o[k] = v; return; }
    if (k.startsWith('-webkit-')) k = 'Webkit' + camel(k.slice(8)).replace(/^./, (c) => c.toUpperCase()).slice(0);
    o[k.startsWith('Webkit') ? k : camel(k)] = v;
  });
  return o;
}

function renderNode(node, scope, nav, key) {
  if (node.nodeType === 3) {
    const t = node.nodeValue;
    if (!t.trim() && t.indexOf('\n') !== -1) return null;
    return t.indexOf('{{') === -1 ? t : interp(t, scope);
  }
  if (node.nodeType !== 1) return null;
  const tag = node.tagName.toLowerCase();
  const kids = (sc) => Array.from(node.childNodes).map((c, i) => renderNode(c, sc, nav, i)).filter((x) => x !== null && x !== undefined && x !== false);

  if (tag === 'sc-if') {
    const v = interp(node.getAttribute('value') || '', scope);
    return v ? React.createElement(React.Fragment, { key }, ...kids(scope)) : null;
  }
  if (tag === 'sc-for') {
    const list = interp(node.getAttribute('list') || '', scope) || [];
    const as = node.getAttribute('as') || 'item';
    return React.createElement(React.Fragment, { key }, ...list.map((item, idx) =>
      React.createElement(React.Fragment, { key: idx }, ...kids(scope.concat([{ [as]: item, $index: idx }])))));
  }

  const isSvg = node.namespaceURI === 'http://www.w3.org/2000/svg';
  const props = { key };
  for (const attr of Array.from(node.attributes)) {
    let name = attr.name; const raw = attr.value;
    let val = raw.indexOf('{{') === -1 ? raw : interp(raw, scope);
    if (name.startsWith('hint-')) continue;
    if (name === 'class') name = 'className';
    else if (name === 'for') name = 'htmlFor';
    else if (name === 'style') { props.style = styleObj(String(val)); continue; }
    else if (name.startsWith('on')) {
      let ev = 'on' + name.charAt(2).toUpperCase() + name.slice(3);
      if (ev === 'Onclick') ev = 'onClick';
      if (name.toLowerCase() === 'onclick') ev = 'onClick';
      if (name.toLowerCase() === 'oninput') ev = 'onChange';
      if (name.toLowerCase() === 'onkeydown') ev = 'onKeyDown';
      if (typeof val === 'function') props[ev] = val;
      continue;
    } else if (isSvg && name.indexOf('-') !== -1 && !name.startsWith('aria-') && !name.startsWith('data-')) name = camel(name);
    else if (name === 'tabindex') name = 'tabIndex';
    else if (name === 'referrerpolicy') name = 'referrerPolicy';
    else if (name === 'inputmode') name = 'inputMode';
    else if (name === 'enterkeyhint') name = 'enterKeyHint';
    else if (name === 'autocomplete') name = 'autoComplete';
    else if (name === 'readonly') name = 'readOnly';
    else if (name === 'disabled') { val = val === true || val === '' || val === 'disabled' || val === 'true'; }
    props[name] = val;
  }
  // Переходы между экранами
  if (tag === 'a') {
    const href = String(props.href || node.getAttribute('href') || '');
    const m = href.match(/([A-Za-z]+)\.dc\.html$/);
    props.href = '#';
    props.onClick = (e) => { e.preventDefault(); if (m) nav(m[1]); };
  }
  if (tag === 'input' && 'value' in props && !props.onChange) props.readOnly = true;
  const children = kids(scope);
  const VOID = { img: 1, input: 1, br: 1, hr: 1, meta: 1, link: 1 };
  return VOID[tag] ? React.createElement(tag, props) : React.createElement(tag, props, ...children);
}

class Screen extends React.Component {
  constructor(p) {
    super(p);
    this.logic = new p.screen.Logic({});
    if (this.logic.state && 'balance' in this.logic.state) this.logic.state.balance = wallet.get();
    this.logic._host = this;
  }
  componentDidMount() { currentScreen = this; if (this.logic.componentDidMount) this.logic.componentDidMount(); }
  componentWillUnmount() { if (currentScreen === this) currentScreen = null; if (this.logic.componentWillUnmount) this.logic.componentWillUnmount(); this.logic._host = null; }
  render() {
    const vals = this.logic.renderVals ? this.logic.renderVals() : {};
    return renderNode(this.props.screen.root, [vals], this.props.nav, 'root');
  }
}

// ---------- Приложение ----------
const SCREENS = {
  Main: parseScreen('Main', MainSrc), Crash: parseScreen('Crash', CrashSrc),
  Upgrade: parseScreen('Upgrade', UpgradeSrc), Cases: parseScreen('Cases', CasesSrc), Mines: parseScreen('Mines', MinesSrc), Pvp: parseScreen('Pvp', PvpSrc), Inventory: parseScreen('Inventory', InventorySrc), Tasks: parseScreen('Tasks', TasksSrc), Leaders: parseScreen('Leaders', LeadersSrc), Admin: parseScreen('Admin', AdminSrc)
};
const injected = new Set();
Object.values(SCREENS).forEach((s) => s.head.forEach((h) => {
  if (injected.has(h)) return; injected.add(h);
  const tmp = document.createElement('div'); tmp.innerHTML = h;
  const el = tmp.firstElementChild;
  if (el.tagName === 'STYLE' && /body\{/.test(el.textContent)) el.textContent = el.textContent.replace(/body\{[^}]*\}/, '');
  document.head.appendChild(el);
}));

function routeFromHash() { const r = (location.hash || '').replace('#/', ''); return SCREENS[r] ? r : 'Main'; }

class App extends React.Component {
  constructor(p) { super(p); this.state = { route: routeFromHash() }; this.nav = this.nav.bind(this); this.back = () => this.nav('Main'); }
  componentDidMount() {
    window.addEventListener('hashchange', () => this.setState({ route: routeFromHash() }));
    if (tg && tg.BackButton) tg.BackButton.onClick(this.back);
    this.syncBack();
  }
  componentDidUpdate() { this.syncBack(); }
  syncBack() {
    if (!tg || !tg.BackButton) return;
    if (this.state.route === 'Main') tg.BackButton.hide(); else tg.BackButton.show();
  }
  nav(route) {
    if (!SCREENS[route]) return;
    location.hash = route === 'Main' ? '' : '#/' + route;
    this.setState({ route });
    window.scrollTo(0, 0);
  }
  render() {
    const r = this.state.route;
    return React.createElement(Screen, { key: r, screen: SCREENS[r], nav: this.nav });
  }
}

// Макет рассчитан на ширину 390px — масштабируем под экран телефона
function fit() {
  const el = document.getElementById('app');
  const w = Math.min(window.innerWidth, 480);
  el.style.zoom = String(w / 390);
}
window.addEventListener('resize', fit);
fit();
loadFromCloud().then(() => { net.start(); createRoot(document.getElementById('app')).render(React.createElement(App)); });
