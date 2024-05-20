
# Javascript 的特性

## high-level
高级语言，不是机器语言。
用 Javascript 的内核把高级语言翻译成机器语言

## garbage-collected 垃圾回收


## interpreted or just-in-time compiled


## muti-paradigm 多范式

 程序式编程
oop  面向对象编程
function programming  函数式编程

## prototype-based object-oriented

- prototypal inheritance 原型继承
	例如创建一个数组，依照数组原型来创造。这个原型则会继承数组的所有函数对象

 



## first-class functions
函数可以被视为一个常规变量，即让函数返回函数，这就是函数式编程。 
是非常强大的功能，可以调佣非常多强大的技术。
例如：
```js
btnsOpenModal[i].addEventListener('click', openModal);
```
这就是在函数中使用函数的方法，函数式编程。


## dynamic  动态,type类型是动态的语言

```js
let x = 12;
let y = 44;
x = 'www'; // x 变成会在被执行前检测它对应的类型，即会由数字转变成字符。

```

typescrip 就是强类型语言，要在使用变量前定义变量的类型。
## single-threaded 单线程


## non-blocking event loop 非阻塞



# what is Javascript engine and Runtime 运行时

## 1.什么是Javascript engine 

浏览器中有 Javascript  engine 用来运行 Javascript。 
例如 Chrome V8，就是一个 Javascript engine  一个 Javascript 的运行时 runtime

node.js 是一个浏览器之外的 runtime，也是 Javascript engine

- call stack 栈 
- heap 堆 —— 非结构化的内存池  unstructure memery poor

![[Pasted image 20240419181513.png]]

## 有两种转化成机器语言的方式
- 编译 Compilation
	- 一次性将代码**全部翻译**成机器语言，再执行。特点是计算速度非常快，但是反馈结果很慢
	- ![[Pasted image 20240419185114.png]]
- 解释 Interpretation
	- 将代码**一行一行翻译**成机器语言，一边翻译一般运行。特点是计算非常慢，但是结果反馈很快。 例如你每次拖动地图都要一秒之后才显示效果。
	- 以前的 Javascript 是纯解释语言，但是现在不是了，因为要提升性能
	- ![[Pasted image 20240419185207.png]]




## Javascript 是一个即时编译的语言，结合了编译和解释的特性 （just-in-time compilation）

- Javascript 的编译方式。**两种特点同时具备**
- 编译，但是**不生成文件**，并且马上反馈结果。速度快
![[Pasted image 20240419185614.png]]

- 将一段有语义的代码，先转化为机器语言，然后执行，并且反馈结果。这样就会非常快速
- **另一个特点**： optimization 的部分。**我不懂**。 他是将已经编译的代码再储存起来，可以不断的重复运行，储存在 call stack 中。 新的代码才要继续编译。 所以这样使得 V8的速度非常快。
![[Pasted image 20240419183854.png]]



## 2.什么是 Javascript Runtime 
Runtime 就是一整个浏览器的大集成，包括 engine 和其他所需要的材料等
- Javascript Engine
- Web API
	- DOm
	- Timers
	- fetch APi
	- 等
- CallBack queue 回调队列  ——  是一个 数据类型
	- onClick
	- timer
	- data

![[Pasted image 20240419191042.png]]

但是其中最重要的就是 Engine。
所以讨论 Runtime 就是在讨论 Engine。

## node.js 是与浏览器不同的 Javascript  Runtime
还存在其他不同的 Runtime ，例如 Node.js
- 因为没有浏览器，所以就**没有 Web API 部分**
- 添加了 **C++ bindings and Thread Pool**
![[Pasted image 20240419184607.png]]
具体的细节先不在这里展开。后续的课程再学习


# what is an execution context？什么是执行内容  利用Call Stack 来储存和追踪context 的位置和顺序    execution context, variable environment, call Stack, scope chain
不懂什么意思
##  what is 执行上下文（execution context)
执行上下文（execution context）是一个抽象概念，它描述了代码在执行过程中的环境和条件。执行上下文可以理解为一个包含了代码运行所需的所有信息的对象，包括变量、函数、作用域链、this等。

在JavaScript中，有三种主要的执行上下文：

1. **全局执行上下文（Global Execution Context）**：全局执行上下文是代码在最顶层执行时创建的执行上下文。它在整个代码运行期间始终存在，并且是所有其他执行上下文的最外层包裹。
    
2. **函数执行上下文（Function Execution Context）**：每当一个函数被调用时，都会创建一个函数执行上下文。函数执行上下文与函数的调用相关联，它包含了函数的局部变量、参数以及在函数内部创建的其他执行上下文。
    
3. **eval函数执行上下文（Eval Function Execution Context）**：在使用eval函数执行代码时，也会创建一个执行上下文，其中包含了eval函数执行的代码。

## call stack 的作用  variable environment 为每一个小的context
因为 Javascript 只有一个 only one thread of execution ， 所有只有一个 Call stack 来记录这些 context 的数量和位置

- 由下到上记录每一个 context 的先后顺序，并记住位置
- 执行时，从上到下依次执行，直到 global 执行完毕为止。
![[Pasted image 20240419221858.png]]

![[Pasted image 20240419222051.png]]


## Scope chain  作用域链

作用域控制我们的程序的变量 被 Javascript engine 执行和访问
所以作用域最关心的问题就是我们的变量在哪里，或者在哪里可以访问，在哪里不能被访问
- 作用域就是变量可以被访问的范围

有三种类型的 scope
- global 
- function scope
	-  在函数内定义的变量，只能在函数中使用
- block scope
	- 在 **{} 大括号** 里面，即 if 和 for 里面 。 用 let 和 const 定义的变量。只能在{} 这个 block 里面使用
	- 所以被称为 block scpoe
	- **var 定义的变量**，是 function scope ， 只有函数能限制它，block 不能限制
	- 所以  **let  和 const**  是属于 block scope

![[Pasted image 20240419223618.png]]

**原则**：
- 所有的子作用域都可以访问 外层作用域的变量
	![[Pasted image 20240419224609.png]]
	
这就是 **scope chain**
- 但是不能反过来，外层不能访问内层作用于的变量
	

这张图阐述了所有的知识，
execution context
variable environment
call Stack
scope chain
![[Pasted image 20240419225019.png]]


## 总结

Scoping asks the question "Where do variables live?"or "Where can we access a certain variable, and where not?"

There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks:Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;

In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;

Every scope always has access to all the variables from all its outer scopes. This is the scope chain!When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it's looking for. This is called variable lookup;

The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;

The scope chain in a certain scope is equal to adding together allthe variable environments of the all parent scopes;

The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!



#  variable Hoisting 变量提升
**看不懂**

temporal dead zone  TDZ  
- es6 引入的概念
 - 在使用了为定义的变量就会出现这个问题
 - 

用 var 声明的对象会在全局窗口对象中出现，而 let 和 const 则不会
	所以不要使用 var 来定义

被 var 申明的变量，会被升级。跳出 TDZ。不利于 bug 的审查

- **变量  let const var  的区别**
```js
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

```

- 三种函数的区别
- 传统函数会提升变量
- 但是函数表达式和箭头函数则是根据声明而定，如果是用 let，const 声明则不会提升。  如果用 var 声明，就会提升 。
- 所以不要用 var  声明变量
```js
// Functions
console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

```


#  ”this“ keyword  this 保留字
是一个特殊的变量，为每一个 execution context 自动生成的。

- 普通函数有 **this**，但是箭头函数没有 this
```js
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980); // 这里调用的 this 是全局的，第一行的 this
```

- **函数借用**
```js
matilda.calcAge = jonas.calcAge;
```

- this 是**动态的**，是直接指向调用它的函数，而不是函数
- this会直接调用 matilda 的 2017，而不是 jonas 本身。 所以是谁调用
- this，this 就是谁本身
```js
const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge(); 

```

- f() 函数没有定义 year ， 所以会报错， undefined
```js
const f = jonas.calcAge;
f();
```
# regular function and arrow function ///  this keyword 在传统函数和箭头函数中的不同
**不想看了，太烦了**
联系上文，回头再看这个视频 
第 98 集



# Primitives type and Objects  原始类型和对象的本质区别

**没有看视频**，先看看代码理解吧。太累了，不想看这些理论视频了
```js
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
```
- output
```
31
30
Friend: { name: 'Jonas', age: 27 }
Me { name: 'Jonas', age: 27 }
```

我们可以看出，对象会直接调用那个被更改的数值，即只有一个唯一对象。 被复制后仍然有联系
但是普通数据被复制后，就没有了联系。只是单纯复制了数值，后面再有改变的话，已经没有联系了。




