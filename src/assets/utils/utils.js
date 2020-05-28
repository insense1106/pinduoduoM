function jsonpCallback() {
  return 1;
}
function utils_debounce(func, delay = 1100) {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
      console.log('debounce');
    }, delay);
  };
}

export { utils_debounce, jsonpCallback };
