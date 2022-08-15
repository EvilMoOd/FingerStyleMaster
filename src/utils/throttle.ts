export default function throttle(fn: Function, delay = 1000) {
  let flag = true;

  return function (...args: any) {
    if (!flag) return;
    flag = false;
    fn.apply(this, args);
    const timer = setTimeout(() => {
      flag = true;
      clearTimeout(timer);
    }, delay);
  };
}
