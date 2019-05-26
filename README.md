# Learning Javascript 特别的知识点

[TOC]

## 额外附加辅助编程

### 'use strict'

为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。

## 语法

### 循环 for...in / for...of

- ***for...in*** 它可以把一个对象的所有属性依次循环出来：

```js
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    console.log(key); // 'name', 'age', 'city'
}
```

要过滤掉对象继承的属性，用```hasOwnProperty()```来实现：

```js
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}
```

由于```Array```也是对象，而它的每个元素的索引被视为对象的属性，因此，```for ... in```循环可以直接循环出```Array```的索引：

```js
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
```

当我们手动给```Array```对象添加了额外的属性后，```for ... in```循环将带来意想不到的意外效果：

```js
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

- ***for...of*** 遍历Array可以采用下标循环。

遍历Map和Set就无法使用下标。为了统一集合类型，ES6标准引入了新的iterable类型，Array、Map和Set都属于iterable类型。具有iterable类型的集合可以通过新的for ... of循环来遍历。
for ... of循环是ES6引入的新的语法。

然而，更好的方式是直接使用iterable内置的forEach方法，它接收一个函数，每次迭代就自动回调该函数

```js
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});
```

### 函数参数arguments

利用arguments，你可以获得调用者传入的所有参数。也就是说，即使函数不定义任何参数，还是可以拿到参数的值

```js
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
```

### rest参数

rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数

```js
function foo(a, b, ...rest) {
    console.log('a = ' + a);    //a = 1
    console.log('b = ' + b);    //b = 2
    console.log(rest);          //rest = [3,4]
}
foo(1,2,3,4);
```

### 变量 var let const

```js
{
  let a = 10;
  var b = 1;
  const PI = 3.14;
  PI = 2.7777; //TypeError: Assignment to constant variable.
}

a // ReferenceError: a is not defined.
b // 1
```

### 解构赋值（数组赋值）

```js
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
```

### 从对象中抽取属性

```js
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
let {name, passport:id} = person; // 将pssport 映射到
新对象的id
var {name, single=true} = person; // 提供默认值

var x, y;
({x, y} = { name: '小明', x: 100, y: 200}); // 已被外部使用的对象用作提取时，需要加“()”

```

- 应用场景

```js
var x=1, y=2;
[x, y] = [y, x]; // 快速调换对象

var {hostname:domain, pathname:path} = location; // 快速获取当前页面的域名和路径
```

## Warning

### 自动加";"的BUG

```js
function foo() {
    return  // 每行自动添加 ";"
        { // 由于"{"表示未结束语句，编译器不自动加";"
            name: 'foo' 
            };
}
```

结果

```js
function foo() {
    return;
    { name: 'foo' };
}
```