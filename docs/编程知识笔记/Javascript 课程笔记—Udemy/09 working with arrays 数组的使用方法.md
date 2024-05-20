有无数的现代数组方法，正是我们要学习的数组工具
然我们更了解数组的使用方法

# simple array method  简单数组方法

参考手册包含了所有属性和方法的描述（和更多的例子）。

## 数组的方法和属性合集资料——菜鸟教程
[完整Javascript 语言，数组对象参考手册](https://www.runoob.com/js/jsref-obj-array.html)

|array 的属性 不用加()|描述|
|---|---|
|[constructor](https://www.runoob.com/jsref/jsref-constructor-array.html)|返回创建数组对象的原型函数。|
|[length](https://www.runoob.com/jsref/jsref-length-array.html)|设置或返回数组元素的个数。|
|[prototype](https://www.runoob.com/jsref/jsref-prototype-array.html)|允许你向数组对象添加属性或方法。|

|  array 对象方法 | 描述  |
|---|---|
|[concat()](https://www.runoob.com/jsref/jsref-concat-array.html)|连接两个或更多的数组，并返回结果。|
|[copyWithin()](https://www.runoob.com/jsref/jsref-copywithin.html)|从数组的指定位置拷贝元素到数组的另一个指定位置中。|
|[entries()](https://www.runoob.com/jsref/jsref-entries.html)|返回数组的可迭代对象。|
|[every()](https://www.runoob.com/jsref/jsref-every.html)|检测数值元素的每个元素是否都符合条件。|
|[fill()](https://www.runoob.com/jsref/jsref-fill.html)|使用一个固定值来填充数组。|
|[filter()](https://www.runoob.com/jsref/jsref-filter.html)|检测数值元素，并返回符合条件所有元素的数组。|
|[find()](https://www.runoob.com/jsref/jsref-find.html)|返回符合传入测试（函数）条件的数组元素。|
|[findIndex()](https://www.runoob.com/jsref/jsref-findindex.html)|返回符合传入测试（函数）条件的数组元素索引。|
|[forEach()](https://www.runoob.com/jsref/jsref-foreach.html)|数组每个元素都执行一次回调函数。|
|[from()](https://www.runoob.com/jsref/jsref-from.html)|通过给定的对象中创建一个数组。|
|[includes()](https://www.runoob.com/jsref/jsref-includes.html)|判断一个数组是否包含一个指定的值。|
|[indexOf()](https://www.runoob.com/jsref/jsref-indexof-array.html)|搜索数组中的元素，并返回它所在的位置。|
|[isArray()](https://www.runoob.com/jsref/jsref-isarray.html)|判断对象是否为数组。|
|[join()](https://www.runoob.com/jsref/jsref-join.html)|把数组的所有元素放入一个字符串。|
|[keys()](https://www.runoob.com/jsref/jsref-keys.html)|返回数组的可迭代对象，包含原始数组的键(key)。|
|[lastIndexOf()](https://www.runoob.com/jsref/jsref-lastindexof-array.html)|搜索数组中的元素，并返回它最后出现的位置。|
|[map()](https://www.runoob.com/jsref/jsref-map.html)|通过指定函数处理数组的每个元素，并返回处理后的数组。|
|[pop()](https://www.runoob.com/jsref/jsref-pop.html)|删除数组的最后一个元素并返回删除的元素。|
|[push()](https://www.runoob.com/jsref/jsref-push.html)|向数组的末尾添加一个或更多元素，并返回新的长度。|
|[reduce()](https://www.runoob.com/jsref/jsref-reduce.html)|将数组元素计算为一个值（从左到右）。|
|[reduceRight()](https://www.runoob.com/jsref/jsref-reduceright.html)|将数组元素计算为一个值（从右到左）。|
|[reverse()](https://www.runoob.com/jsref/jsref-reverse.html)|反转数组的元素顺序。|
|[shift()](https://www.runoob.com/jsref/jsref-shift.html)|删除并返回数组的第一个元素。|
|[slice()](https://www.runoob.com/jsref/jsref-slice-array.html)|选取数组的一部分，并返回一个新数组。|
|[some()](https://www.runoob.com/jsref/jsref-some.html)|检测数组元素中是否有元素符合指定条件。|
|[sort()](https://www.runoob.com/jsref/jsref-sort.html)|对数组的元素进行排序。|
|[splice()](https://www.runoob.com/jsref/jsref-splice.html)|从数组中添加或删除元素。|
|[toString()](https://www.runoob.com/jsref/jsref-tostring-array.html)|把数组转换为字符串，并返回结果。|
|[unshift()](https://www.runoob.com/jsref/jsref-unshift.html)|向数组的开头添加一个或更多元素，并返回新的长度。|
|[valueOf()](https://www.runoob.com/jsref/jsref-valueof-array.html)|返回数组对象的原始值。|
|[Array.of()](https://www.runoob.com/jsref/jsref-of-array.html)|将一组值转换为数组。|
|[Array.at()](https://www.runoob.com/jsref/jsref-at-array.html)|用于接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。|
|[Array.flat()](https://www.runoob.com/jsref/jsref-flat-array.html)|创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。|
|[Array.flatMap()](https://www.runoob.com/jsref/jsref-flatmap-array.html)|使用映射函数映射每个元素，然后将结果压缩成一个新数组。|

## array.at 方法

- 用于接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。
- Javascript 的数组所以**不能是负数**，所有找最后一位，要用 at（-1）
-  Javascript 没有 像 python 一样的 arry[-1]， 所以要定位数组最后一个位置，只能用**arr.at(-1)**
```js
const arr = [23, 11, 22];
console.log(arr.at(-1));
```

# forEach  数组每个元素都执行一次回调函数。

- **for of  和 forEach 的区别**

- for of 可以用 break 和 continue 操作，而 forEach 会始终遍历完整个数组
- **for of** 的参数是[i，movement]，第一是索引，第二是迭代数
- **forEach** 的参数是[movement，i]，和 for of **顺序相反** 。 movement 是列表里的值。
- 这两个功能是一样的，下面一个是用 **forEach 实现**
- 
```js
// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
//这两个功能是一样的，下面一个是用 forEach 实现
console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
```

# forEach with Maps and Sets
**- 没听课，不想听了**

```js
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

```


```js
// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
```

# project —— bankist app 银行家

## creating DOM Element

```js
containerMovements.insertAdjacentHTML('afterbegin', html);
	
```

```js
containerMovements.innerHTML = '';
	
```

```js
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const containerMovements = document.querySelector('.movements');

const displayMovements = function (movements, sort = false) {
	  containerMovements.innerHTML = '';
	
	  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; // ？ 代码什么意思
	
	  movs.forEach(function (mov, i) {
	    const type = mov > 0 ? 'deposit' : 'withdrawal';
	
	    const html = `
	      <div class="movements__row">
	        <div class="movements__type movements__type--${type}">${
	      i + 1
	    } ${type}</div>
	        <div class="movements__value">${mov}€</div>
	      </div>
	    `;
	
	    containerMovements.insertAdjacentHTML('afterbegin', html);
	  });
};

```

## coding challenge 1

|[concat()](https://www.runoob.com/jsref/jsref-concat-array.html)|连接两个或更多的数组，并返回结果。|




## Data transformations 列表中数据转换的方法

- 重点介绍使用这三个函数

| [reduce()](https://www.runoob.com/jsref/jsref-reduce.html) | 将数组元素计算为一个值（从左到右）。                 |
| ---------------------------------------------------------- | ---------------------------------------------------- |
| [filter()](https://www.runoob.com/jsref/jsref-filter.html) | 检测数值元素，并返回符合条件所有元素的数组。         |
| [map()](https://www.runoob.com/jsref/jsref-map.html)       | 通过指定函数处理数组的每个元素，并返回处理后的数组。 |

- reduce() 就像滚雪球一样，用设定好的计算，一直完成数组的全部数值
![[Pasted image 20240422150512.png]]


## - **reduce()**  模版  —— 可以 zou 许多操作，其实就是遍历每一个元素

- 第一个是 初始值
- 第二个是 当前的元素。 
- 第三个，当前元素索引
- 第四个，当前元素，的数组对象
**reduce 的 参数描述**

|**参数**|描述|  
|---|---|  
|_total_|必需。_初始值_, 或者计算结束后的返回值。|  
|_currentValue_|必需。当前元素|  
| _currentIndex_ | 可选。当前元素的索引           |
| -------------- | ------------------------------ |
| _arr_          | 可选。当前元素所属的数组对象。 |
| _initialValue_                           | 可选。传递给函数的初始值                                                                                                                                                                                                                                                        |

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
```

## filter() 函数


- 将 数列中大于 8 的都筛选出来
```js
humanAges = [5, 2, 4, 1, 15, 8, 3];
const adults = humanAges.filter(age => age >= 8);
console.log(humanAges);
console.log(adults);

adults;
```

## map() 函数

map() 方法**返回一个新数组**，数组中的元素为原始数组元素调用函数处理后的值。
map() 方法按照原始数组元素顺序**依次处理元素**。
- **map() 参数说明**

| **参数说明**   |                              |
| -------------- | ---------------------------- |
| _currentValue_ | 必须。当前元素的值           |
| _index_        | 可选。当前元素的索引值       |
| _arr_          | 可选。当前元素属于的数组对象 |
|_thisValue_|可选。对象作为该执行回调时使用，传递给函数，用作 "this" 的值。  <br>如果省略了 thisValue，或者传入 null、undefined，那么回调函数的 this 为全局对象。|               |                              |

```js
array.map(function(currentValue,index,arr), thisValue)

```

**箭头函数 的 if**，我不懂，要认真学习
- 将大于2的元素全部换算成人类年龄
```js
  ages = [5, 2, 4, 1, 15, 8, 3];
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  console.log(humanAges);
```


## coding challenge 2
先将狗的年纪大于二的转化为人类的年纪，然后再求平均数。

```js
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
```



## coding challenge 3
**没看视频，不想写代码**
```js
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// adults.length

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
```

## find method

| [find()](https://www.runoob.com/jsref/jsref-find.html) | 返回符合传入测试（函数）条件的数组元素。 |


find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
find() 方法为数组中的每个元素都调用一次函数执行：
- 当数组中的元素在测试条件时返回 _true_ 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
- 如果没有符合条件的元素返回 undefined

在数组中 查找到**符合条件的第一个值**
- mov 就是第一个参数，代表当前元素
```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
```

```js
array.find(function(currentValue, index, arr),thisValue)

```

| 参数           | 描述                         |
| -------------- | ---------------------------- |
| _currentValue_ | 必需。当前元素               |
| _index_        | 可选。当前元素的索引值       |
| _arr_          | 可选。当前元素所属的数组对象 |

## some  and  includes 方法


## login 功能， 登录功能的实现

登录后
左边名字要改
右边的密码登要清空，不闪烁
隐藏的 containerApp **opacity**变为可见的 100
**Prevent form from submitting 是什么意思** 因为点击 submit 按钮时，显示器会默认进行刷新，从而覆盖掉我们的输入，为了防止发生，所以用 **preventDefault** 函数

- 使用了问号 `?` 是 JavaScript 中的可选链操作符（Optional Chaining Operator）。—— 如果该属性不存在（或者是 null 或 undefined），不会导致程序报错，而是会返回 undefined。
```js

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount); // 这里是用 account 的 name 去匹配，但是返回的是 account的值。

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // 将 pin 中的光标取消闪烁，消失

    // Update UI
    updateUI(currentAccount); // ？？
  }
});
```


## transfer  转账功能
**不想看了** 没看视频
【【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=149&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef


## findIndex  为了删除对应的账号
没看 
【【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=150&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

## some and every 
**没看**
【【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=151&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

## flat and flatMap  方法
【【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=152&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

## sorting array 
【【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=153&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

## creat and fill array 以编程的方式，创建和填充数组



## 总结——选择用合适的方法处理数组
【【Udemy排名第一的JavaScript课程】2023最新完整JavaScript课程 从入门到精通 -- 通过项目、挑战和理论掌握JS（中英文字幕）上】 https://www.bilibili.com/video/BV1vA4y197C7/?p=155&share_source=copy_web&vd_source=b0a10e3153185c2a2774cf202cc913ef

![[Pasted image 20240422215914.png]]


## coding challenge 4
没看没看
