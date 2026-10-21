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

// ---------- Telegram ----------
const tg = window.Telegram && window.Telegram.WebApp;
const START_BALANCE = 100;

const wallet = {
  get() {
    try { const v = parseFloat(localStorage.getItem('rk_balance')); return isNaN(v) ? START_BALANCE : v; } catch (e) { return START_BALANCE; }
  },
  set(v) { try { localStorage.setItem('rk_balance', String(Math.round(v * 100) / 100)); } catch (e) {} }
};
// Общий инвентарь подарков (демо: хранится на устройстве игрока)
const STARTER_GIFTS = ['B-Day Candle', 'Lol Pop', 'Desk Calendar', 'Homemade Cake', 'Homemade Cake', 'Jingle Bells', 'Hypno Lollipop', 'Snow Globe', 'Berry Box'];
const inventory = {
  _load() { try { const v = JSON.parse(localStorage.getItem('rk_inv') || 'null'); return Array.isArray(v) ? v : null; } catch (e) { return null; } },
  _save(a) { try { localStorage.setItem('rk_inv', JSON.stringify(a)); } catch (e) {} this._mem = a; },
  list() {
    let a = this._load() || this._mem;
    if (!a) { const t = Date.now(); a = STARTER_GIFTS.map((k, i) => ({ uid: 's' + i + '_' + t, key: k, at: t - (i + 1) * 3600000 })); this._save(a); }
    return a.slice();
  },
  add(key) { const a = this.list(); const it = { uid: 'g' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), key, at: Date.now() }; a.unshift(it); this._save(a); return it; },
  remove(uids) { const set = new Set([].concat(uids)); this._save(this.list().filter((x) => !set.has(x.uid))); },
  reset() { try { localStorage.removeItem('rk_inv'); } catch (e) {} this._mem = null; return this.list(); }
};
window.RK = { wallet, inventory, user: (tg && tg.initDataUnsafe && tg.initDataUnsafe.user) || null };

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
  'c22eeb9eb2c04b336c2c7f989a2a93a7': 'r-party.svg'
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
    if (partial && 'balance' in partial) wallet.set(partial.balance);
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
      if (typeof val === 'function') props[ev] = val;
      continue;
    } else if (isSvg && name.indexOf('-') !== -1 && !name.startsWith('aria-') && !name.startsWith('data-')) name = camel(name);
    else if (name === 'tabindex') name = 'tabIndex';
    else if (name === 'readonly') name = 'readOnly';
    else if (name === 'disabled') { val = val === true || val === '' || val === 'disabled' || val === 'true'; }
    props[name] = val;
  }
  // Переходы между экранами
  if (tag === 'a') {
    const href = node.getAttribute('href') || '';
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
  componentDidMount() { if (this.logic.componentDidMount) this.logic.componentDidMount(); }
  componentWillUnmount() { if (this.logic.componentWillUnmount) this.logic.componentWillUnmount(); this.logic._host = null; }
  render() {
    const vals = this.logic.renderVals ? this.logic.renderVals() : {};
    return renderNode(this.props.screen.root, [vals], this.props.nav, 'root');
  }
}

// ---------- Приложение ----------
const SCREENS = {
  Main: parseScreen('Main', MainSrc), Crash: parseScreen('Crash', CrashSrc),
  Upgrade: parseScreen('Upgrade', UpgradeSrc), Cases: parseScreen('Cases', CasesSrc), Mines: parseScreen('Mines', MinesSrc), Pvp: parseScreen('Pvp', PvpSrc), Inventory: parseScreen('Inventory', InventorySrc)
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
createRoot(document.getElementById('app')).render(React.createElement(App));
