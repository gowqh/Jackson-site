## 01 activating strict mode 使用严格模式

```js
"use strict";
```

在第一行写上即可

---

## 为什么使用严格模式:

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为。
- 消除代码运行的一些不安全之处，保证代码运行的安全。
- 提高编译器效率，增加运行速度。
- 为未来新版本的 Javascript 做好铺垫。

"严格模式"体现了 Javascript 更合理、更安全、更严谨的发展方向，包括 IE 10 在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解 Javascript，让你变成一个更好的程序员。

## 严格模式有许多限制 的规范语法：

不允许使用未声明的变量

不允许删除变量或对象。

不允许删除函数。

```js
"use strict";
function x(p1, p2) {}
delete x; // 报错
```

不允许使用转义字符:

等等，还有许多限制

## 严格模式新增保留关键字：

- implements
- interface
- let
- package
- private
- protected
- public
- static
- yield

---

# 02 function 函数

## 带参数的函数

在调用函数时，您可以向其传递值，这些值被称为参数。
这些参数可以在函数中使用。
您可以发送任意多的参数，由逗号 (,) 分隔：
当您声明函数时，请把参数作为变量来声明：

```js
function myFunction(_var1_, _var2_) {
  _代码_;
}
```

## 函数有返回值

有时，我们会希望函数将值返回调用它的地方。
通过使用 return 语句就可以实现。
在使用 return 语句时，函数会停止执行，并返回指定的值。

```js
function myFunction() {
  var x = 5;
  return x;
}
```

```js
// calling / running / invoking function

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
```

## 局部 JavaScript 变量

在 JavaScript 函数内部声明的变量（使用 var）是*局部*变量，所以只能在函数内部访问它。（该变量的作用域是局部的）。
您可以在不同的函数中使用名称相同的局部变量，因为只有声明过该变量的函数才能识别出该变量。
只要函数运行完毕，本地变量就会被删除。

## 全局 JavaScript 变量

在函数外声明的变量是*全局*变量，网页上的所有脚本和函数都能访问它。

## JavaScript 变量的生存期

JavaScript 变量的生命期从它们被声明的时间开始。
局部变量会在函数运行以后被删除。
全局变量会在页面关闭后被删除。

# 03 三种函数的写法

## function declaration 函数声明

在前面声明，后面的语句中调用

```js
// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);
```

## function expression 函数表达式——写法

```js
// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
// 这一行就是函数表达式，他会产生值

const age2 = calcAge2(1991);
console.log(age2);
```

## arrow function 箭头函数

its a special form of function expression
faster to write
dont need curly braces 不需要花括号
自动提供返回值的功能

```js
const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);
```

更复杂的箭头函数，有两个参数。和多行语句，需要使用到括号

```js
const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
```

正常时候还是推荐使用**函数表达式**的方式来定义，或者用更为传统的。

# 04 functions calling others functions 函数调用其他函数

```js
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));
```

理解函数调用的逻辑，看懂这两个函数调用的顺序。

# 05 coding challenge 1

```js

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!


1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.


TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3

HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
```

```js
// Test 1
let scoreDolphins = calcAverage(44, 23, 71);

let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);
```

# 06 array 数组的介绍

- 和 python 的应用差不多
- 可以在数组中存入多种类型的数据，比如变量，数字，字符串，数组中嵌套数组，都是可以的。

```js
// Introduction to Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends]; // 可以在数组中存入多种类型的数据，比如变量，数字，字符串，数组中嵌套数组，都是可以的。

console.log(jonas);

console.log(jonas.length);
```

可以在数组中存入多种类型的数据，比如变量，数字，字符串，数组中嵌套数组，都是可以的。

# 07 basic array operation 基本数组操作

添加元素的方法——2 个方法

- .push()
- .unshift()

```js
// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);
friends.unshift("John");

console.log(friends);
```

移出元素的方法——3 个方法

- pop
- shift
- push 从最末尾添加
- indexOf 返回这个字符在数组的位置
- includes 检查这个字符是否在数组中

```js
// Remove elements
const friends = ["Michael", "Steven", "Peter"];

const popped = friends.pop(); // Last 从末尾开始删除 ’peter‘
console.log(popped);
console.log(friends);

friends.shift(); // First 从第一个开始删除 ’micheal‘
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
```

# object 介绍对象的性质

是另一种数据类型——对象

- 像是 python 中的字典类型，有键值对
- 可以说 "JavaScript 对象是变量的容器"。
- 但是，我们通常认为 "JavaScript 对象是键值对的容器"。
- 键值对通常写法为  **name : value** (键与值以冒号分割)。

对象键值对的写法类似于：

- PHP 中的关联数组
- Python 中的字典
- C 语言中的哈希表
- Java 中的哈希映射
- Ruby 和 Perl 中的哈希表

## 对象的操作方法

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

```js
//访问对象的方法
person["lastName"]; //使用键对象的字符串可以调出
person.lastName; //使用变量，可以调出对应的值
name = person.fullName; //直接作为函数方法使用
```

- 对象方法，调出对应的值。作为一个函数定义存储在对象属性中

```js
<script>
const person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function()
	{
       return this.firstName + " " + this.lastName;
    }
};
document.getElementById("demo").innerHTML = person.fullName();
</script>
```

如果使用 fullName 属性，不添加  **()**, 它会返回函数的定义。

- **这里加入了 this 的用法，特别注意**
- **this** —— 代表整个 Person 对象的信息，所以在 person 对象里面的函数，可以直接用 this 调用 person 里面的数据，非常方便。
- 使用 **this**是非常方便的。 如果使用 person.id 的方法调用，当 person 改变时，就要同步改变对应的调用位置的名称，非常麻烦。——还是 **this** 好用

```JS
const person = {
    firstName: "John",
    lastName : "Doe",
    id : 5566,
    fullName : function()
	{
	   console.log(this);
       return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());

```

- 写入某些值的方法

```js
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
```

```js
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);
```

- 对象方法的使用——例子。

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    console.log(this);
    return this.firstName + " " + this.lastName;
  },
  callAge: function () {
    this.age = 6 + 1000;
    return (this.age = 6 + 1000);
  },
};

console.log(person.callAge()); // 先执行一遍函数，就会在对象里面添加 age 。然后可以把 age 打印出来。
console.log(person);
console.log(person.age);
```

# challenge

比较两个人的 bmi

- 代码实例

```js
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}
```

# for loop for 循环

- JavaScript 支持不同类型的循环：
- **for** - 循环代码块一定的次数
- **for/in** - 循环遍历对象的属性
- **while** - 当指定的条件为 true 时循环指定的代码块
- **do/while** - 同样当指定的条件为 true 时循环指定的代码块

```js
for (_语句 1_; _语句 2_; _语句 3_)
{
    _被执行的代码块_
}

```

**语句 1** （代码块）开始前执行
**语句 2**  定义运行循环（代码块）的条件
**语句 3**  在循环（代码块）已被执行之后执行

## for 循环

例子 1

```js
for (var i = 0; i < 5; i++) {
  x = x + "该数字为 " + i + "<br>";
}
```

Statement 1 在循环开始之前设置变量 (var i=0)。
Statement 2 定义循环运行的条件（i 必须小于 5）。
Statement 3 在每次代码块已被执行后增加一个值 (i++)。

## for in 循环

```js
const person = { fname: "Bill", lname: "Gates", age: 56 };
for (x in person) { // x 为属性名
  txt = txt + person[x];
}
```

## continue and break

```js
// continue and break
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}
```

## 循环内嵌套循环

```js
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
```

# while loop while 循环

```js
while (i < 5) {
  x = x + "The number is " + i + "<br>";
  i++;
}
```

## - do while 循环

```js
do {
  x = x + "The number is " + i + "<br>";
  i++;
} while (i < 5);
```

## for 循环和 while 循环的对比

这两个循环其实很像

```js
cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
for (; cars[i]; ) {
  console.log(cars[i]);
  i++;
}
```

```js
cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
while (cars[i]) {
  console.log(cars[i]);
  i++;
}
```

例子 while 循环：

```js
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
```

# coding challenge 4
