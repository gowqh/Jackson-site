# project 1 —— guess my num

主要是做 Javascript 的逻辑。 有两个可点击的按钮——click，again。针对这两个按钮做逻辑设计。

## - 赋值初始化

```js
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
```

## - click 的逻辑

- 主要逻辑——
- 1。没有数值输入
  - 显示”没有数字
- 2.数字大于结果
  - 减一分
  - “数字大了”
- 3.数字小于结果
  - 减一分
  - “数字小了”
- 4.数字等于结果
  - body 屏幕变绿
  - “你赢了”
- 5.分数大于 1——才可继续游戏
- 6.分数小于 1——body 变红，click 不能点击

```js
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#ac1818';
     }
  }
```

## - again 的逻辑

- 将所有的数据重置
- 唯独保留 high score

```js
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
```

## 总结

**新知识**——

- 用 Javascript 改变 **body 的样式**—— 前面不用加 ” . “ 。并且和 css 的表述不一样—— backgroundColor，是一个使用驼峰命名的函数，而不是 css 的 background-color 。
- document.querySelector('.number') 这里的”. number“，**只适用于 selector**，其他的函数都是不用” . “的。

```js
document.querySelector("body").style.backgroundColor = "#222";
document.querySelector(".number").style.width = "15rem";
```

- **监听 click** 事件的函数，当做了 click 后，做函数内的操作。 Javascript 实现互动的核心。
- **listener** 里面的 function 不需要有名字，只是一个单纯会执行的函数而已。

```js
document.querySelector('.again').addEventListener('click', function () {
}
```

- 用 Javascript 操作 对应某个 class 的显示数据。text，p 等
- 让 score 标签的内容被赋值为 变量的数值

```js
document.querySelector(".score").textContent = score;
```

- 代码重构，减少代码的重复，提升维护性。
- 将重复的部分用函数代替。

```js
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
```

## coding challenge

- 隐藏结果数字，不能在成功之前被显示出来，所以用” ？“代替
- 最好分要保存，所以要设一个变量储存最高分

# project 2 —— Modal Window 模态窗口。 学习 UI 设计，设计的第一个 UI 组件

为了学习如何操作 **class**

- 点击任何一个按钮都可以打开这个模态窗口。
- 点击 X 图标，或者窗口外的部分都可以关闭这个窗口。
- 覆盖整个页面，让窗口之外的部分虚化，让用户关注窗口的内容

## 用 Javascript 的 listener 对 class 做修改（remove，add）操作，从而改变样式。

- 关键是操作类。—— 用 **classlist 函数**，将 class 中的某个属性删除或者添加。实现的思路是用 JavaScript 操作。本来隐藏的类改变为显示的类。
- **overlay** 是层叠层的虚化功能的实现——学习 class 层叠层的操作方法。

- 先对几个关键的 参数做初始化

```js
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
```

```js
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
```

- **看不懂这句是什么意思？？**

```js
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);
```

## keyboard event 键盘的事件响应 ——是 global event 全局响应

- 按键的事件类型有三种——
  - key press 持续的按键，一直按压
  - key down 普通的单次按下
  - key up 按下去后的
-

```js
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
```

- function (e)，中的 e，会储存按下按键的信息。e.key 就可以直接调用储按键的值。
- if (e.key === 'Escape' && —— 这是双条件的 if，用”&&“添加另一个条件。
- closeModal(); 为什么这里要用 closeModal()，而不是 closeModal; **我不明白**

# pig game —— 综合实践项目，自己写一遍代码。

开始于 83 集
我想自己。写一个简单的小游戏。
