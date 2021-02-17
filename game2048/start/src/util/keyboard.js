import hotkeys from 'hotkeys-js';

// 옵저버 패턴
// hotkeys 사용 - hotkeys(key, () => {}))
const observerMap = {};
export function addKeyObserver(key, callback) {
  if (!observerMap[key]) {
    // 초기화
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
  observerMap[key] = observerMap[key].filter((item) => item !== callback);
}

function executeCallbacks(key) {
  for (const ob of observerMap[key]) {
    ob();
  }
}
