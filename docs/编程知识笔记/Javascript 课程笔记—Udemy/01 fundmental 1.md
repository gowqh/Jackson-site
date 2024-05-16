## 1.如何连接 Javascript 文件

```js

h1 {

font-family: sans-serif;

font-size: 50px;

line-height: 1.3;

width: 100%;

padding: 30px;

text-align: center;

color: white;

}

</style>

<script src="script.js"></script>

</head>

<body>

<h1>JavaScript Fundamentals – Part 1</h1>

</body>

</html>
```

# 2.变量的使用，变量命名的规则

```js
console.log("john");
console.log("23");
let firstName = "john";
console.log(firstName);
```

- **驼峰命名法 camleCase**——第一个字母全小写，第二个往后首字母大写== “firstNamePerson”
- **其他命名法**：使用斜杠 c "first_name_person"
- **3year** ——不能以数字开头：“” ，是错误的。 ——threeYear
- **不能全大写**——不能定义全大写的变量名，可能与保留变量重名，“PI”是圆周率；
  **全大写的是常亮**
- **Person** ——单独的首字母大写，用于构造函数。

  ```js

  function Person（）
  ```

- 要赋予变量名，只管的意思
  第一个的名字，能够只管的看出意思

  ```
  let myFirstJob = "Coder";
  let myCurrentJob = "Teacher";

  let job1 = "programmer";
  let job2 = "teacher";
  ```

# 3.变量类型

数字
字符串
布尔
未定义
空值

1. **Number**. Floating point numbersUsed for decimals and integers
   let age = 23;
2. **String**: Sequence of characters Used for text
   Let firstName = "Jonas"

3. **Boolean**: Logical type that can only be true or false
   Used for taking decisions
   let fullAge = true;

4. **Undefined**: Value taken by a variable that is not yet defined (empty value)
   Let children;

5. **Null**: Also means 'empty value'

- **Symbol ** (ES2015):
  - Value that is unique and cannot be changed Not useful for now

7. **BigInt** (ES2020): Larger integers than the Number type can hold

例子：

```js
let javascriptIsFun = true;

console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

//重复使用已声明的变量时，不用在用“let”
javascriptIsFun = "Great";
console.log(typeof javascriptIsFun);
```

# 4.let var const 的区别

- let 声明变量

```js
let age = 30;
age = 41; //改变了变量的数值
```

```js
// let, const and var

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
```

- const 声明常量，不改变数值啦
  //建议一律使用 const 定义变量, 如果确定会改变值的才用 let, 不使用 var--已被淘汰

# 5.基础的运算符

## // math operators 数学运算

```
const now = 2037;

const ageJonas = now - 1991;

const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
```

2 \*\* 3——2 的 3 次方

## // assignment operaters 赋值运算符

```js
let x = 10 + 5; //15

x += 10; // x = x + 10

x *= 4; // x = x * 4

x++; //x = x + 1

x--;

x--;

console.log(x);
```

## // comparison operators 比较运算符

```js
console.log(ageJonas > ageSarah); // >, <, >= , <=

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18; // boolean值

console.log(now - 1990 > now - 2020); //先做数值运算,再做比较运算
```

# 6.operators precedence 运算优先级

在 Javascript 语言中已经定义了优先级列表，严格按照这个执行

[MDN 查询运算优先级--网站](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

```js
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
```

没仔细看，下次补上

# 7.challenge 1

计算身体 BMI 指数

```js
const massJohn = 85;
const heightJohn = 1.76;
const massMark = 95;
const heightMark = 1.88;

const BMIJohn = massJohn / heightJohn ** 2;
const BMIMark = massMark / heightMark ** 2;
const isMarkhighterBMI = BMIMark > BMIJohn;

console.log(BMIJohn, BMIMark, isMarkhighterBMI);
```

# 8.strings and template literals 字符串，模板文字

## template literals 语法

变量或表达式用 `${}` 包裹起来，可以在字符串中直接插入变量的值或表达式的结果。
使用``包裹整个字符串，然后用${}包括变量

```js
let firstName = "Alice";
console.log(`Hello, ${firstName}!`); // 输出 "Hello, Alice!"

console.log(`Hello, ${firstName}!`);
```

这种语法相比传统的字符串拼接方式更加直观和方便，特别是在需要插入多个变量或表达式时。

## 实例，传统与模板变量的区别

```js
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string..`);
```

# 9.taking decisions if—else 判断语句

这种判断的语句和 python 很像， 我会的
判断年龄

```js
const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
```

# 10.coding challenge 2

```js
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
} //使用字符串模板，和 if-else。把结果答应出来
```

使用字符串模板，和 if-else。把结果答应出来

# 11.type conversion and corecion 类型的转换和强制变化

**type conversion--类型转换**

```js
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991'1991' ,一个数值一个字符
console.log(Number(inputYear) + 18); // 数值:2009

console.log(Number("Jonas")); // 转换一个字符串为数字,会得到 NaN--错误
console.log(typeof NaN); // NaN 是一个数字类型,但是无效数字

console.log(String(23), 23); // '23'23, 一个字符一个数值
```

展示了数字和字符结合的时候，会发生的情况

---

**type coercion 类型强制**
当有两个不同类型发生运算时，后台会做一个默认转换

```js
// type coercion
console.log("I am " + 23 + " years old"); // 'I am 23 years old'
console.log("23" - "10" - 3); // num: 10
console.log("23" / "2"); // num : 11.5

let n = "1" + 1; // '11'
n = n - 1;
console.log(n); // num: 10
```

# 12.truthy and falsy values 虚假值和真值的转换

**Javascript 中只有 5 个 falsy values 虚假值:**
0, '', undefined, null, NaN
除了这 5 个值，其他的值都会被转为真值

```js
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
```

布尔的转换是隐性的，是强制转换，后台运行的。

---

**- 在 if--else 中的 type corecison**

```js
const money = 100; // 真值
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0; // 假值，height = 12，let height。 试试不同的结果
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
```

# equality operators == vs === 相等运算

**=== —— 严格相等符号** strict equality 严格相等 。所有的相等符号都应使用这个

```js
18 === 18; // ture
"18" === 18; // false
```

严格相等，不做任何的类型转换

**== 两个等于 会做类型转换** 松散相等 loose equality
避免使用这个类型的相等符号，

```js
"18" == 18; // ture
```

# boolean logic，operators —— &&，||，！

- **A and B ， A 和 B——全为真值，才是真值。 符号表示：”&&“**
  [[Pasted image 20240406114446.png]]

- **A or B ， A 或 B——有一个真，就是真值 符号表示：“||”**
  [[Pasted image 20240406114554.png]]

- \*_not——非值。 “!A”_
- **练习**

```js
A === false;
B === true;
!A; // ture
A or B; // ture
A and B; // false
!A and B; // true

```

## logical operators——只用逻辑判断符号

```js
const hasDriversLicense = true; // A
const hasGoodVision = false; // B
const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
```

# coding challenge 3

```js
/* 题目要求
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉

4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
*/
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;

console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
```

# switch statement——switch 语法

使用 switch 语句来选择要执行的多个代码块之一

- 语法展示

```js
switch (n) {
	case 0:
	x = "今天是星期日";
	break;

	case 1:
	x = "今天是星期一";
	break;
```

```js
const d = new Date().getDay();
switch (d) {
  case 0:
    x = "今天是星期日";
    break;

  case 1:
    x = "今天是星期一";
    break;

  case 2:
    x = "今天是星期二";
    break;

  case 3:
    x = "今天是星期三";
    break;

  case 4:
    x = "今天是星期四";
    break;

  case 5:
    x = "今天是星期五";
    break;

  case 6:
    x = "今天是星期六";
    break;
}

console.log(d);
console.log(x);
```

# statements and expressions 语句和表达句的区别

是一个高级的陈述

我们编写程序是就是在写表达式句子， statement 就是简短的陈述
表达式产生值，陈述不产生值

```js
// Statements and Expressions

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
```

# The Conditional (Ternary) Operator 条件运算符 （三元运算符）？？ 需要实践

三元运算符并不是 if--else 的代替品，还有很多的作用

```js
const age = 23;
const drink = age >= 18 ? "wine 🍷" : "water 💧"; // 三元运算符
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); // 加入三元运算符和字符模版
```

```js
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); // 加入三元运算符和字符模版
```

# Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

```js

```
