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

### 函数默认参数

```js
function Student(props) {
    this.name = props.name || 'Unnamed';
}
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

## js对象

### this

- 对象内部访问对象使用this

```js
var xiaoming = {
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth; // 用that而不是this
    }
};
xiaoming.age();//一定要obj.function() 才能找到xiaoming这个对象
```

- 闭包请用一个变量存储this

```js
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var self = this; // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - self.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};
```

- 函数apply / call，类似于函数指针

```js
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 25
getAge.apply(xiaoming, []);  // 25, this指向xiaoming, 参数为空

Math.max.apply(null, [3, 5, 4]); // 5 apply()把参数打包成Array再传入；
Math.max.call(null, 3, 5, 4); // 5 call()把参数按顺序传入。
```

- 使用lambda(箭头函数) 自动绑定this到外层

```js
var obj = {
    birth: 1991,
    getAge: function (year) {
        var b = this.birth; // 1990
        var fn = (y) => y - this.birth; // this.birth仍是1990
        return fn.call({birth:1000}, year); // 尝试重新绑定this，由于箭头函数，直接被忽略
    }
};
console.log(obj.getAge(2015));// 25
```

### 函数装饰器用法

现在假定我们想统计一下代码一共调用了多少次parseInt()

```js
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 原封不动，调用原函数
};
```

## 高阶编程

### map / reduce

```js
// Map
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // 每个元素应用pow函数
console.log(results); // [1, 4, 9, 16, 25, 36, 49, 64, 81]

// Reduce
[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4);

var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) { // 连续两个合1 两个合1
    return x + y;
}); // 25
```

### filter 筛选

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var r = arr.filter(function (x) {
    return x < 5; // true 的保留，类似于查询的where
});
r; // [1, 2, 3, 4]
```

### generator （结构类似于c#async/await）

除了return语句，还可以用yield返回多次。就像闭包一样提供了一种可以记住状态的函数。

```js
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

// 传入100，作为参数创建一个generator 对象
var o = foo(100);

// Object {value: 101, done: false} ，第一次调用next() 返回 yield x + 1;的结果 101，以及次generator未执行完毕
console.log(o.next());

// Object {value: 102, done: false}，第二次调用next() 返回 yield x + 2;的结果 102，以及次generator未执行完毕
console.log(o.next());

// Object {value: 103, done: true}，第三次调用next() 返回 yield x + 3;的结果 103，以及次generator已执行return完毕
console.log(o.next());

// Object {value: undefined, done: true}，第四次及以后调用next，将无更多结果返回，返回以上内容作为默认值
console.log(o.next());

// 自动循环输出知道done = true
for (var x of foo(100)) {
    console.log(x); // 依次输出101, 102, 103 
}
```

### js 异步编程

- 最简单的异步编程，timeout

```js
//js 使用异步的方式执行
setTimeout(function(){
    console.log("call");
}, 1000);
```

- 最简单的ajax异步编程

```js
//（伪代码）传统js通过返回状态码判断ajax 的成功与否
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        if (request.status === 200) {
            return success(request.responseText);
        } else {
            return fail(request.status);
        }
    }
}
```

- 链式写法的ajax

```js
// （伪代码）简化后的链式写法
var ajax = ajaxGet('http://...');
ajax.ifSuccess(success).ifFail(fail);
```

- 链式写法的异步编程

```js
// 类似异步操作都可以通过Promise对象封装成链式操作
new Promise(test).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});
```

- 用Promise实现异步链式编程

```js
// 测试函数：要求输入两个函数，一个callback代表成功，一个callback代表失败
function test(Success, Fail) {
    let isSucc = Math.random() > 0.5;
    console.log('will call ' + isSucc?"Success":"Fail");
    setTimeout(function () {
        if (isSucc) {
            console.log('call Success()...');
            Success('200 OK');
        }
        else {
            console.log('call Fail()...');
            Fail('500 Fail');
        }
    }, 1000);
}

// 旧js写法
test(
    function(msg){console.log("success:"+msg);},
    function(msg){console.log("fail:"+msg);}
);

// Promise写法
new Promise(test)
.then(function (result) {console.log('成功：'+result);})
.catch(function (reason) {console.log('失败：'+reason);});
```

- Promise 处理成功后继续执行

```js
//(伪代码)传统写法，疯狂嵌套
ajaxGet('http://.1..',function(){
    // success 1
    ajaxGet('http://.2..',function(){
        // success 2
    },function(){
        // fail 2
    });
},function(){
    // fail 1
});
```

```js
// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        // 调用resolve函数表示成功，promise链会继续执行下一步
        setTimeout(resolve, 500, input + input);
        // 调用reject函数整个promise将会抛出异常promise链catch得到相应，并结束整个流程
        //setTimeout(reject, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    console.log('start new Promise...');
    resolve(123);
});

// 原理上和success函数中调用另一个异步操作，再从success调用另一个，如此类推类似
// 现在按照格式封装函数，从而满足全链路链式操作
p.then(multiply)
 .then(add)
 .then(multiply)
 .then(add)
 .then(function (result) {
    console.log('Got value: ' + result);
 })
 .catch(function(result){
     console.error("err:"+result);
 });
 ```

![GitHub Logo](./svg/help.svg "help.jpg") Generator尤其在js异步处理里面比用对象管理状态来得更简洁。  

![GitHub Logo](./svg/help.svg "help.jpg") 没看懂 generator 怎么写才能简化 ajax [https://www.liaoxuefeng.com/wiki/1022910821149312/1023024381818112?t=1558885620327](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024381818112?t=1558885620327)

```js
// 黑暗 ajax 调用过程
ajax('http://url-1', data1, function (err, result) {
    if (err) {
        return handle(err);
    }
    ajax('http://url-2', data2, function (err, result) {
        if (err) {
            return handle(err);
        }
        ajax('http://url-3', data3, function (err, result) {
            if (err) {
                return handle(err);
            }
            return success(result);
        });
    });
});

// 通过generator简化的ajax
try {
    r1 = yield ajax('http://url-1', data1);
    r2 = yield ajax('http://url-2', data2);
    r3 = yield ajax('http://url-3', data3);
    success(r3);
}
catch (err) {
    handle(err);
}

// generator 封装 ajax
// https://www.cnblogs.com/dojo-lzz/p/5496661.html
var i = 0;
i++;
function ajax(url){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(url);
            resolve({url: url + i++});
        }, 200);
    });
}

function *gen(url){
    var data = yield ajax(url);
    data = yield ajax(data.url);
    data = yield ajax(data.url);
    console.log(data.url);
}

function co(gen){
    var iterator = gen("http://www.baidu.com");
    var v = iterator.next();

    function step(v){
        if (!v.done){
            v.value.then(function(data){
                step(iterator.next(data));
            })
        }
    }

    step(v);
}

co(gen);
```

## Js 的类

### Prototype 原型链模式 - 组合继承

```js
'use strict'
console.log("-父类-----------------");
function Animal(species) {
    this.species = species || "动物";
    this.run = function(){
        console.log(this.species+" is running");
    }
}
var animal = new Animal();
console.log(animal.species);

console.log("-子类 黑猫警长-----------------");
// 1. Prototype 原型链模式 - 组合继承 （写少两行）begin
if (false) {
    function Cat(name, color, species) {
        Animal.call(this, species);
        this.name = name || 'Tom';
        this.color = color || "Red";
    }
    Cat.prototype = new Animal();
    Cat.prototype.constructor = Cat;
}
// 1. Prototype 原型链模式 - 组合继承 end

// 2. Prototype 原型链模式 - 寄生组合继承 （性能更好）begin
if (true) {
    function Cat(name, color) {
        Animal.call(this);
        this.name = name || 'Tom';
        this.color = color || "Red";
    }
    (function () {
        // 创建一个没有实例方法的类
        var Super = function () { };
        Super.prototype = Animal.prototype;
        //将实例作为子类的原型
        Cat.prototype = new Super();
        Cat.prototype.constructor = Cat; // 需要修复下构造函数
    })();
}
// 2. Prototype 原型链模式 - 寄生组合继承 end


var black_cat = new Cat("Chief","Black","Cartoon");

black_cat.run();
console.log("name : " + black_cat.name);
console.log("color : " + black_cat.color);
console.log("species : " + black_cat.species);
console.log("of Cat : " + (black_cat instanceof Cat));
console.log("specof Animal : " + (black_cat instanceof Animal));
console.log("------------------");
// -父类-----------------
// 动物
// -子类 黑猫警长-----------------
// Cartoon is running
// name : Chief
// color : Black
// species : Cartoon
// of Cat : true
// specof Animal : true
```

### ES6 以后支持class写法，更简单

```js
console.log("-父类-----------------");
class Animal{
    constructor(species){
        this.species = species || "动物";
    }
    run(){
        console.log(this.species + " is running");
    }
}

var animal = new Animal();
console.log(animal.species);
console.log("-子类 黑猫警长-----------------");
//2.Prototype 原型链模式 - 组合继承
class Cat extends Animal{
    constructor(name, color,species){
        super(species);
        this.name = name || 'Tom';
        this.color = color || "Red";
    }
}

var black_cat = new Cat("Chief", "Black", "Cartoon");

black_cat.run();
console.log("name : " + black_cat.name);
console.log("color : " + black_cat.color);
console.log("species : " + black_cat.species);
console.log("of Cat : " + (black_cat instanceof Cat));
console.log("specof Animal : " + (black_cat instanceof Animal));
console.log("------------------");
// -父类-----------------
// 动物
// -子类 黑猫警长-----------------
// Cartoon is running
// name : Chief
// color : Black
// species : Cartoon
// of Cat : true
// specof Animal : true
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