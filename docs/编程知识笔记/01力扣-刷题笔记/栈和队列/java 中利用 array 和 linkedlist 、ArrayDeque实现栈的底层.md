
  
直接使用 `new` 关键字创建栈的示例：

# - 使用数组实现栈：
```java
int capacity = 10; // 栈的容量为10
int[] arrayStack = new int[capacity];
int top = -1; // 栈顶指针初始化为-1

// 入栈
arrayStack[++top] = 1; // 入栈元素1

// 出栈
int item = arrayStack[top--]; // 出栈元素，同时栈顶指针减1

// 查看栈顶元素
int peekItem = arrayStack[top]; // 查看栈顶元素，但不出栈

```

# - 使用链表实现栈：
```java
LinkedList<Integer> listStack = new LinkedList<>();

// 入栈
listStack.addLast(1); // 入栈元素1

// 出栈
int item = listStack.removeLast(); // 出栈元素

// 查看栈顶元素
int peekItem = listStack.getLast(); // 查看栈顶元素，但不出栈

```


# 使用ArrayDeque的方式实现，java6 的推荐
```java
import java.util.ArrayDeque;

public class StackExample {
    public static void main(String[] args) {
        ArrayDeque<Integer> stack = new ArrayDeque<>();

        // 入栈
        stack.push(1); // 入栈元素1
        stack.push(2); // 入栈元素2

        // 出栈
        int item1 = stack.pop(); // 出栈元素2
        int item2 = stack.pop(); // 出栈元素1

        // 查看栈顶元素
        stack.push(3); // 入栈元素3
        int peekItem = stack.peek(); // 查看栈顶元素，但不出栈
    }
}

```