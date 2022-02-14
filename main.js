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
console.log('');

function Tune(song, artist) {
    this.title = song;
    this.artist = artist;
    this.concat = function() {
        return this.title + "-" + this.artist;
    }
}

var happySong = new Array();
happySong[0] = new Tune("Putting on the Ritz", "Ella Fitzgerald");
happySong[1] = new Tune("Balle Balle te shava shava", "Shinchan");

console.log(happySong[0].concat());
console.log(happySong[1].concat());

console.log('');

const array = [1, 0, null, ' ', false, 5, 6, 7, undefined, null, 0, 9, 10];

for (let index = 0; index < array.length; index++) {
    console.log(Number.isInteger(array[index]));
    if (Number.isInteger(array[index])) {

    } else {
        array.splice(index, 1);
    }
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log(' ');

const country = ['INDIA', 'UK', 'USA', 'HINDUSTAN'];
var long_country = country[0];
for (let index = 0; index < country.length; index++) {
    let element = country[index];
    if (element.length > long_country.length) {
        long_country = element;
    }
}
console.log(long_country);
console.log(' ');

let person = prompt('Enter number');
var coins = [];
while (person >= 1) {
    if (person >= 10) {
        coins.push(10);
        person = person - 10;
    } else if (person >= 5) {
        coins.push(5);
        person = person - 5;
    } else if (person >= 2) {
        coins.push(2);
        person = person - 2;
    } else if (person >= 1) {
        coins.push(1);
        person = person - 1;
    }
}
for (let i = 0; i < coins.length; i++) {
    console.log(coins[i]);
}