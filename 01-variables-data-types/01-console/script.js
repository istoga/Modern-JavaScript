//This is a single line of code being commented out
/* Multiple
lines being
commented out*/

const x = 100;

console.log(x);

console.error("Alert");

console.warn("Warning!");

console.table({ name: "Brad", email: "brad@gmail.com" });

console.group('simple');
console.log(x);
console.error("Alert");
console.warn("Warning!");
console.groupEnd();

const styles = 'padding: 10px; background: white; color: green';
console.log('%cHello World', styles);