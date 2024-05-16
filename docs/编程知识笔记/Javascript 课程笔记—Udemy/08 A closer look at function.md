
high oder function 高阶函数
bind method 绑定方法
closure 闭包

# 01 default parameters 默认参数

- 设置默认参数，直接在参数里面用 = 赋值
- 如果某个参数没有被传入，就会使用默认参数
```js
const createBooking = function (
flightNum,
numPassengers = 1,
price = 199 * numPassengers
)
```

- **跳过参数**——第二个参数设置，使用 **undefined**
```js
createBooking('LH123', undefined, 1000);
```


```js
// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
```


# How it works to pass arguments into functions  传递参数是如何完成的

**没有看这集，太无聊了，太困了**


# first class  and higher — oder functions
可以让我们写出高阶函数
对象和函数都可以看做是一个值， 函数只是另一种**对象**

高阶函数就是 函数作为参数 或是 返回新的函数

## 函数接受 回调函数 callback function
- 其实就是**学习代码的封装**。将完整的小功能封装成函数，然后被大的函数或者其他的函数调用
- 将 oneWord 的功能从 transformer 中分离出来，实现小的**函数封装**，使代码的功能性能够能**更好地维护**。
```js
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
}; 

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);
```

- **高阶函数**就是将 一个函数作为参数，传递到 一个函数里面
- oneWord  and  upperFirstword  是**两个初始的函数**，作为参数传到 transfomer 里面
```js
const transformer = function (str, fn) {
```

例子 2：
addEventListener() 是一个**高阶函数**；
high5（） 被作为**回调函数**，当有 click 动作是，才被回调执行
```JS
// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

```

- forEach () 是一个高阶函数
```js
['Jonas', 'Martha', 'Adam'].forEach(high5);
```

**回调函数在js 里面是非常常见**的，普遍使用—— JS uses callbacks all the time



## 函数返回函数  functions return functions
- 即 做一个模版函数，可以不断使用这个函数来叠加输出东西
```js
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

```

# call and apply method

- **this**  可以直接使用上一个 Window的属性，即 lufthansa 的各种属性。所以 **this** 指的就是lufthansa 这个对象。
- 用 **push**  方法在 booking 中加入信息，
```js
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

```

- 用 **call method** 方法 改变 this 的绑定，直接指向eurowings
```js
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

```

- **apply method** 方法  在最新的 Javascript 已经不在使用了。
- 使用 **call method** 来操作即可
```js


```

# bind method 绑定方法
与 **call method 相似**
```js
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

```

- 还可以进阶，**绑定第二个参数**
- 将 book 函数的第一个参数也绑定了，即 flnum 为 '23'
```js
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
```

例子 2：
```js
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


```

- 如果**this** 没有要指向的对象，可以用 **null**
```js
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

```

## 总结 
call  和  bind 的方法有什么区别

# coding challenge 1

这个 题目看不懂，不会做
以后再看吧


# immediately invoked function expressions 立即调用的函数表达式  （IIFE）

- **是为了保护某些 特定的变量，使外部不能访问这些内部的变量**
- **匿名函数**，不用给函数命名，在后面立即调用它
- (function () {} )();
- 用上面这个模板就可以实现匿名函数，立即调用
```js
// Immediately Invoked Function Expressions (IIFE)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();  // 立即调用这个函数

```

```js
(() => console.log('This will ALSO never run again'))
();
```
- **为什么**要用这种表达？？  **非常重要**
- **最终的目的是为了隐藏变量，建立一个作用域**
函数会产生作用域，外部的没法访问内部的变量
是为了立马建立一个函数，分装好变量的作用域，
**是为了保护某些 特定的变量，使外部不能访问这些内部的变量，也不会被外部的变量重名或者被外部的脚本，函数，库给覆盖**，


```js
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
```

# closure 函数闭包 （重点部分）
  
JavaScript 中的闭包（Closure）是指一个函数与其周围状态（lexical environment，词法环境）的组合。这个环境包含了这个函数创建时所能访问的所有局部变量、外部函数的变量，以及全局变量。在 JavaScript 中，函数可以访问其创建时所在的词法作用域中的变量，**即使函数在这个词法作用域外被调用**。

闭包使得函数可以**保留对其词法作用域的访问权限**，即使这个函数在它的词法作用域之外执行。

- 当**const booker = secureBooking();**  创建时，也同时创建了对于一个闭包环境， **passengerCount** 就在这个闭包环境里。所以当 **secureBooking** 已经执行完了，但是**booker** 还是能访问到 **secureBooking** 这个变量
- **闭包**就是 将  封闭变量的 executed context环境，在函数初始定义是就确定。
```js

const secureBooking = function () {
  let secureBooking = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

```

- 例子 2
```js
function outerFunction() {
  let outerVariable = 'I am outside!';
  
  function innerFunction() {
    console.log(outerVariable);
  }
  
  return innerFunction;
}

let closureExample = outerFunction();
closureExample(); // 输出: I am outside!

```

- 闭包确保了函数不会与相关变量诞生时，执行环境的联系。

例子 3
```js
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); //第一次改变,f
h(); // 第二次改变 f
f();
console.dir(f);
```

# coding challenge 2
不想做 coding 了，麻了

```js
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    if (header.style.color == 'red') {
      header.style.color = 'blue';
    } else {
      header.style.color = 'red';
    }
    header.style.fontSize = 10;
  });
})();

```


