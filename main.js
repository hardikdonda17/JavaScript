function hello() {
    console.log('Hello World!');
}
hello();
console.log('');

const goodbye = function() {
    console.log('Goodbye');
};
goodbye();
console.log('');

const hi = new Function('console.log("Hello");');
hi();
console.log('');
seeya = goodbye;
seeya();
console.log('');

function howdy() {
    return 'Howdy World!';
}

const message = howdy();

console.log(message);
console.log('');

function square(x) {
    return x * x;
}
console.log(square(2));
console.log('');

function mean(a, b, c) {
    return (a + b + c) / 3;
}

console.log(mean(2, 6, 10));
console.log('');

function rest(...args) {
    for (arg of args) {
        console.log(arg);
    }
}
rest(2, 4, 6, 8);
console.log('');

function mean_rest(...args) {
    var sum = 0;
    for (arg of args) {
        sum = sum + arg;
    }
    console.log(sum / args.length);
}
mean_rest(2, 4);
console.log('');

function hello(name = 'Hardik') {
    console.log(`Hello ${name}!`);
}
hello();
console.log('');
hello('Universe');
console.log('');

function discount(price, amount = 10) {
    return price * (100 - amount) / 100;
}
console.log(discount(20));
console.log(discount(100, 50));
console.log('');
const hello1 = () => alert('Hello World!');
// hello1();
function numerically(a, b) {
    return a - b;
}
const ar = [1, 3, 12, 5, 23, 18, 7];
ar.sort(numerically);
console.log(ar);
console.log('');

const colors = ['Red', 'Green', 'Blue'];
for (let i = 0; max = colors.length, i < max; i++) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}
console.log('');

colors.forEach((color, index) => {
    console.log(`Color at position ${index} is ${color}`);
});