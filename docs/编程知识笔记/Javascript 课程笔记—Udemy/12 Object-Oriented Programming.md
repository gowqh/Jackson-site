【【Udemy 排名第一的 JavaScript 课程】2023 最新完整 JavaScript 课程 从入门到精通 -- 通过项目、挑战和理论掌握 JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=192&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

Javascript 有两大编程特性，**面向对象和 函数式编程**
这一节会讲到**面向对象编程**的所有知识

为了实现代码的**可维护性**和**可拓展性**
实现类之间的继承

- **两大问题**
- 如何设计一个好的类 class
- 如何将数据传入 class 中，让其成为一个具体的对象

## 如何设计一个好的类 class——四个原则

1. **抽象（Abstraction）**：抽象是指将对象的共同特征提取出来形成类的过程。在类设计中，需要考虑到对象的核心特征和行为，将其抽象为类的属性和方法。通过抽象，可以忽略对象的具体实现细节，专注于对象的本质特征，提高了代码的可读性和可维护性。
2. **封装（Encapsulation）**：封装是指将数据（属性）和行为（方法）封装在类内部，并对外部隐藏对象的内部实现细节。通过封装，可以保护对象的数据不受外部直接访问和修改，只能通过类的方法来访问和修改数据，提高了代码的安全性和可靠性。
3. **继承（Inheritance）**：继承是指一个类（子类）可以继承另一个类（父类）的属性和方法，从而实现代码的重用和扩展。通过继承，子类可以拥有父类的所有属性和方法，并可以根据需要添加新的属性和方法，提高了代码的灵活性和可扩展性。
4. **多态（Polymorphism）**：多态是指同一个方法可以根据对象的不同表现出不同的行为。在面向对象编程中，多态可以通过方法的重写（override）和方法的重载（overload）来实现。通过多态，可以提高代码的灵活性和可扩展性，使得程序更加易于理解和维护。

# 三种方法 实现面向对象编程

![[Pasted image 20240423005137.png]]
**现在多用 ES6 classes**

# constructor functions and new

【【Udemy 排名第一的 JavaScript 课程】2023 最新完整 JavaScript 课程 从入门到精通 -- 通过项目、挑战和理论掌握 JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=195&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

## 如何构建一个基本的构造函数（constructor function）

```js
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);

console.log(jonas instanceof Person);

Person.hey = function () {
  console.log("Hey there 👋");
  console.log(this);
};
Person.hey();
```

- **构造函数** constructor function 就是一个蓝图，函数的模版，也叫做类。可以用这个类，传入参数然后复制出很多函数——称之为**实例**。

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName; //
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
```

- 这是一种约定，为构造函数**建立属性**，this.firstName 就是该函数的属性

```js
this.firstName = firstName; //
```

然后函数会自动调回 **两个属性**

instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

```js
console.log(jonas instanceof Person);
```

## 千万不要在构造函数里面 写入一个函数，那样会被复制并且执行，我们应该用原型和原型继承。

过时的技术。现在多用 ES6 classes
三大知识点，了解 class 的背后的原理
构造函数

## prototype 原型

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this!
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};
```

```js
console.log(Person.prototype);
```

- Person.prototype.calcAge（）
- 对 Person 创建一个原型继承的 function，建立后，其他的对象也可以使用这个 calcAge()， 但是 calcAge() 本身并不在 class 里面，只是被继承了。

```js
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};
```

- 但是 Person.prototype 指的是有链接继承的 Person.prototype。 不是原来定义的那个 Person。
- 所以 jonas.**proto** === Person.prototype 是真的
- 但是**Person.prototype** 不等于 **PrototypeOf(Person)**

```js
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects
```

## prototype inheritance 原型继承

proto-property 是 已经继承了链接的原型
prototype of constructor 是 Person 的原型构造函数
两者是不一样的。

```js
Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // flase
```

Person 只是一个 构造函数，并不是一个 class

## inheritance chain 继 承链

- 每一个 object 都有一个 prototype
- **——proto——** 就是指向这个 prototype 的一个函数
- Person 是一个**构造函数**，他的 prototype 是 Object.prototype 最原始的原型，每个 object 最终指向的原型。
- 而 Object.prototype 的原型（**——proto——** ）是 **null**，没有可被继承的原型了
- 这就是整个**原型继承链**的关系
- **Object.prototype** 本身就有很多原始的继承函数。这就构建了继承链和内部函数的总和  
  ![[Pasted image 20240424204852.png]]
  这也是为什么 hasOwnProperty() 没有被定义也使用 hasOwnProperty() 的原因。因为**继承链** ，hasOwnProperty() 是被写在 Object 里面的，原始继承的对象。 所以函数会根据继承链，一步一步地从 jonas 找到 Object 的继承对象，最终发现并且使用。 这就是继承链的功劳。

```js
console.log(jonas.hasOwnProperty("firstName")); // true
console.log(jonas.hasOwnProperty("species")); // flase
```

## Prototypal Inheritance on Built-In Objects object 里面的内置继承对象

也就是 Object.prototype 的东西
Object.prototype 是原型链的最顶层

```js
Object.prototype.__ proto__ ; // null
```

# ES6 classes

Javascript 的 class 的特性不像 JAVA 和 c++。他只是我们学到的**语法糖**。
幕后是采用 **原型继承** （implement prototypal inheritance）的方法

# object.creat()

#

# class 方法 —— ES6 classes

## class 的定义

```js
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
```

构造函数就是

- 以上实例创建了一个类，名为 "Runoob"。
- 类中初始化了两个属性： "name" 和 "url"。
- 定义好类后，我们就可以使用  **new  关键字来创建对象**：
- 以上实例创建了一个类，名为 "Runoob"。类中初始化了两个属性： "name" 和 "url"。
- 创建对象时会自动调用**构造函数方法  constructor()**

```js
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
```

## 都在严格模式进行

类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter 和 setter 都在严格模式下执行。

```js
class Runoob {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    // date = new Date();  // 错误
    let date = new Date(); // 正确
    return date.getFullYear() - this.year;
  }
}
```

## getter and setter

## static method 静态方法，只用来 class 中

在实例化对象之前可以通过   类名.方法名   调用静态方法。

静态方法不能在对象上调用，只能在类中调用。
所有的对象都**不会继承**这个**静态方法**，因为这个静态方法不在**原型**中。只有 class 本身才能使用
**仅仅局限于构造函数中使用**

# object.creat()
