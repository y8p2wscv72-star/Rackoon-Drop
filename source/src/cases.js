// Общий список кейсов: игра (экран «Кейсы») и сервер (rackoon-server/cases.js) используют ОДИН файл,
// поэтому шансы, которые видит игрок, совпадают с тем, как реально крутит сервер.
// cat: cheap — дешёвые (обычные подарки за ⭐ + немного NFT), mid — средние (только NFT), exp — дорогие, free — бесплатный.
var GIFTCAT = require('./gifts.js');
var RTP = 0.90;                       // кейсы дешевле 1 TON в среднем возвращают 90% цены
// RTP по категориям: дешёвые (до 3.5 TON) — 85%, средние (5–25 TON) — 72%, дорогие (от 50 TON) — 60%
function rtpFor(price) { return price >= 50 ? 0.60 : price >= 5 ? 0.72 : 0.85; }
var FREE_COOLDOWN = 24 * 3600 * 1000; // бесплатный кейс — раз в сутки
var TON_PRIZES = { 'TON_0.1': 0.1, 'TON_0.25': 0.25, 'TON_0.5': 0.5, 'TON_1': 1, 'TON_3': 3 }; // призы-TON: сразу на баланс
var CASES = [
  { id: 's05', cat: 'cheap', art: 'assets/case-s05.jpg', ratio: '1 / 1', name: 'Мелочь', price: 0.5, color: '#ff7ab8', dark: '#c4447f', bg: '#2e1022', glow: 'rgba(255,122,184,0.9)', edge: '#5a1c3e', opened: 0, isNew: true,
    pool: ['Heart', 'Teddy Bear', 'Rose', 'Gift Box', 'Cake', 'Bouquet', 'Ring', 'Lol Pop'] },
  { id: 's1', cat: 'cheap', art: 'assets/case-s1.jpg', ratio: '1 / 1', name: 'Плюшевый', price: 1, color: '#c98a5a', dark: '#94582e', bg: '#2a1a10', glow: 'rgba(201,138,90,0.9)', edge: '#4f3220', opened: 0, isNew: true,
    pool: ['Teddy Bear', 'Heart', 'Rose', 'Cake', 'Ring', 'Trophy', 'Lol Pop', 'Chill Flame', 'Ice Cream', 'B-Day Candle'] },
  { id: 's2', cat: 'cheap', art: 'assets/case-s2.jpg', ratio: '1 / 1', name: 'Сладкий', price: 2, color: '#ff9f43', dark: '#c46a12', bg: '#2e1d0c', glow: 'rgba(255,159,67,0.9)', edge: '#5a3714', opened: 0, isNew: true,
    pool: ['Cake', 'Bouquet', 'Ring', 'Trophy', 'Diamond', 'Lol Pop', 'Instant Ramen', 'Candy Cane', 'Homemade Cake', 'Snow Globe', 'Desk Calendar', 'Jester Hat'] },
  { id: 's35', cat: 'cheap', art: 'assets/case-s35.jpg', ratio: '1 / 1', name: 'Колечко', price: 3.5, color: '#7fd6ff', dark: '#3f9ccc', bg: '#0e2230', glow: 'rgba(127,214,255,0.9)', edge: '#1d4560', opened: 0, isNew: true,
    pool: ['Ring', 'Lol Pop', 'Candy Cane', 'Hypno Lollipop', 'B-Day Candle', 'Homemade Cake', 'Snow Globe', 'Spy Agaric', 'Light Sword', 'Jelly Bunny', 'Bunny Muffin', 'Berry Box', 'Top Hat'] },
  { id: 'c1', cat: 'mid', art: 'assets/case-c1.jpg', name: 'Карманник', price: 5, color: '#2bbf5a', dark: '#1a8a3e', bg: '#10291a', glow: 'rgba(43,191,90,0.9)', edge: '#1f4a2c', opened: 2591 },
  { id: 'c2', cat: 'mid', art: 'assets/case-c2.jpg', name: 'Конфетный', price: 10, color: '#f2c218', dark: '#b88f00', bg: '#2a240c', glow: 'rgba(242,194,24,0.9)', edge: '#4a4010', opened: 1036, isNew: true },
  { id: 'c3', cat: 'mid', art: 'assets/case-c3.jpg', name: 'Пиратский', price: 15, color: '#2f86ff', dark: '#1a5ccc', bg: '#0f1d33', glow: 'rgba(47,134,255,0.9)', edge: '#1c3560', opened: 1554 },
  { id: 'c4', cat: 'mid', art: 'assets/case-c4.jpg', name: 'Налётчик', price: 25, color: '#ff4d4d', dark: '#c02a2a', bg: '#2e1212', glow: 'rgba(255,77,77,0.9)', edge: '#5a2020', opened: 2591, isNew: true },
  { id: 'c5', cat: 'exp', art: 'assets/case-c5.jpg', name: 'Медвежатник', price: 50, color: '#ff8a1f', dark: '#c45f00', bg: '#2e1c0c', glow: 'rgba(255,138,31,0.9)', edge: '#5a3612', opened: 5181 },
  { id: 'c6', cat: 'exp', art: 'assets/case-c6.jpg', name: 'Ночной рейд', price: 100, color: '#9b5cff', dark: '#6a32d0', bg: '#1d1233', glow: 'rgba(155,92,255,0.9)', edge: '#3a2460', opened: 311 },
  { id: 'c7', cat: 'exp', art: 'assets/case-c7.jpg', name: 'Сейф', price: 250, color: '#14c8c8', dark: '#0a8c8c', bg: '#0c2a2a', glow: 'rgba(20,200,200,0.9)', edge: '#164a4a', opened: 518 },
  { id: 'c8', cat: 'exp', art: 'assets/case-c8.jpg', name: 'Крёстный енот', price: 500, color: '#ffc83d', dark: '#c79400', bg: '#2e250c', glow: 'rgba(255,200,61,0.95)', edge: '#5a4a14', opened: 10362 },
  // Единственный бесплатный кейс: раз в сутки, внутри TON на баланс
  { id: 'free', cat: 'free', name: 'Ежедневный', price: 0, free: true, color: '#5fd4ff', dark: '#2fa0d0', bg: '#0c2430', glow: 'rgba(95,212,255,0.9)', edge: '#18465a', opened: 8812,
    pool: ['TON_0.1', 'TON_1'], probs: [0.99, 0.01] },
  // Промо-кейс: открывается промокодом (каждый код — один раз на игрока), внутри TON на баланс
  { id: 'promo', cat: 'free', name: 'Промо-кейс', price: 0, free: true, promo: true, color: '#c77dff', dark: '#8a45d6', bg: '#1d1233', glow: 'rgba(199,125,255,0.9)', edge: '#3a2460', opened: 0, isNew: true,
    pool: ['TON_0.1', 'TON_0.25', 'TON_0.5', 'TON_1', 'TON_3'], probs: [0.75, 0.23, 0.015, 0.004, 0.001] }
];
// Состав кейса без явного pool: 12 NFT от ~¼ до ~40 цен кейса (по сегодняшним ценам)
function nftList(t) {
  return GIFTCAT.RAW.map(function (r) { return { name: r[0], price: GIFTCAT.priceOf(r[0], t) }; })
    .sort(function (a, b) { return a.price - b.price; });
}
function buildPool(P, list) {
  var cand = list.filter(function (c) { return c.price >= 0.25 * P && c.price <= 40 * P; });
  var n = 12, out = [];
  for (var i = 0; i < n && i < cand.length; i++) {
    var idx = Math.round(i * (cand.length - 1) / Math.max(1, n - 1));
    if (out.indexOf(cand[idx].name) === -1) out.push(cand[idx].name);
  }
  return out;
}
function prizePrice(k, t) { return TON_PRIZES[k] != null ? TON_PRIZES[k] : GIFTCAT.priceOf(k, t); }
// Составы и вероятности на сегодня: { id: { price, free, pool: [...], probs: [...], top } }
var _cache = { day: -1, map: null };
function build(t) {
  var day = Math.floor(((t || Date.now()) + 3 * 3600 * 1000) / 86400000);
  if (_cache.day === day) return _cache.map;
  var list = nftList(t), map = {};
  CASES.forEach(function (c0) {
    var c = { id: c0.id, price: c0.price, free: !!c0.free, promo: !!c0.promo };
    if (c0.free) { c.pool = c0.pool.slice(); c.probs = c0.probs.slice(); }
    else {
      c.pool = (c0.pool || buildPool(c0.price, list)).filter(function (k) { return prizePrice(k, t) != null; });
      // если самый дешёвый приз слишком дорог для нужного RTP — добавляем утешительные призы TON
      var minP = Math.min.apply(null, c.pool.map(function (k) { return prizePrice(k, t); }));
      if (minP > c0.price * rtpFor(c0.price) * 0.85) c.pool = ['TON_0.5', 'TON_1'].filter(function (k) { return TON_PRIZES[k] < c0.price * rtpFor(c0.price); }).concat(c.pool);
      var prices = c.pool.map(function (k) { return prizePrice(k, t); });
      var target = c0.price * rtpFor(c0.price);
      var ev = function (a) { var S = 0, E = 0; prices.forEach(function (p) { var w = Math.pow(p, -a); S += w; E += w * p; }); return E / S; };
      var lo = -5, hi = 12;
      for (var i = 0; i < 80; i++) { var mid = (lo + hi) / 2; if (ev(mid) > target) lo = mid; else hi = mid; }
      var a = (lo + hi) / 2, Ssum = 0;
      var w = prices.map(function (p) { var x = Math.pow(p, -a); Ssum += x; return x; });
      c.probs = w.map(function (x) { return x / Ssum; });
    }
    c.top = c.pool.reduce(function (best, k) { return !best || prizePrice(k, t) > prizePrice(best, t) ? k : best; }, null);
    map[c.id] = c;
  });
  _cache = { day: day, map: map };
  return map;
}
// Розыгрыш: r — случайное число [0, 1)
function roll(c, r) { var acc = 0; for (var i = 0; i < c.pool.length; i++) { acc += c.probs[i]; if (r < acc) return c.pool[i]; } return c.pool[c.pool.length - 1]; }
module.exports = { CASES: CASES, RTP: RTP, rtpFor: rtpFor, FREE_COOLDOWN: FREE_COOLDOWN, TON_PRIZES: TON_PRIZES, build: build, roll: roll, prizePrice: prizePrice };
