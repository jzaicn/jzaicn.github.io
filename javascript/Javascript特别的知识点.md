<a id="markdown-1-javascript-特别的知识点" name="1-javascript-特别的知识点"></a>
# 1. Javascript 特别的知识点

- [1. Javascript 特别的知识点](#1-javascript-%E7%89%B9%E5%88%AB%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9)
  - [1.1. 额外附加辅助编程](#11-%E9%A2%9D%E5%A4%96%E9%99%84%E5%8A%A0%E8%BE%85%E5%8A%A9%E7%BC%96%E7%A8%8B)
    - [1.1.1. 'use strict'](#111-use-strict)
  - [1.2. 语法](#12-%E8%AF%AD%E6%B3%95)
    - [1.2.1. 循环 for...in / for...of](#121-%E5%BE%AA%E7%8E%AF-forin--forof)
    - [1.2.2. 函数参数arguments](#122-%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0arguments)
    - [1.2.3. rest参数](#123-rest%E5%8F%82%E6%95%B0)
    - [1.2.4. 函数默认参数](#124-%E5%87%BD%E6%95%B0%E9%BB%98%E8%AE%A4%E5%8F%82%E6%95%B0)
    - [1.2.5. 变量 var let const](#125-%E5%8F%98%E9%87%8F-var-let-const)
    - [1.2.6. 解构赋值（数组赋值）](#126-%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC%E6%95%B0%E7%BB%84%E8%B5%8B%E5%80%BC)
    - [1.2.7. 从对象中抽取属性](#127-%E4%BB%8E%E5%AF%B9%E8%B1%A1%E4%B8%AD%E6%8A%BD%E5%8F%96%E5%B1%9E%E6%80%A7)
  - [1.3. js对象](#13-js%E5%AF%B9%E8%B1%A1)
    - [1.3.1. this](#131-this)
    - [1.3.2. 函数装饰器用法](#132-%E5%87%BD%E6%95%B0%E8%A3%85%E9%A5%B0%E5%99%A8%E7%94%A8%E6%B3%95)
  - [1.4. 高阶编程](#14-%E9%AB%98%E9%98%B6%E7%BC%96%E7%A8%8B)
    - [1.4.1. map / reduce](#141-map--reduce)
    - [1.4.2. filter 筛选](#142-filter-%E7%AD%9B%E9%80%89)
    - [1.4.3. generator （结构类似于c#async/await）](#143-generator-%E7%BB%93%E6%9E%84%E7%B1%BB%E4%BC%BC%E4%BA%8Ecasyncawait)
    - [1.4.4. js 异步编程](#144-js-%E5%BC%82%E6%AD%A5%E7%BC%96%E7%A8%8B)
  - [1.5. Js 的类](#15-js-%E7%9A%84%E7%B1%BB)
    - [1.5.1. Prototype 原型链模式 - 组合继承](#151-prototype-%E5%8E%9F%E5%9E%8B%E9%93%BE%E6%A8%A1%E5%BC%8F---%E7%BB%84%E5%90%88%E7%BB%A7%E6%89%BF)
    - [1.5.2. ES6 以后支持class写法，更简单](#152-es6-%E4%BB%A5%E5%90%8E%E6%94%AF%E6%8C%81class%E5%86%99%E6%B3%95%E6%9B%B4%E7%AE%80%E5%8D%95)
  - [1.6. 网页编程](#16-%E7%BD%91%E9%A1%B5%E7%BC%96%E7%A8%8B)
    - [1.6.1. 跨域问题](#161-%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98)
  - [1.7. Nodejs](#17-nodejs)
    - [1.7.1. 模块编程](#171-%E6%A8%A1%E5%9D%97%E7%BC%96%E7%A8%8B)
  - [1.8. Warning](#18-warning)
    - [1.8.1. 自动加";"的BUG](#181-%E8%87%AA%E5%8A%A8%E5%8A%A0%22%22%E7%9A%84bug)
    - [1.8.2. 推荐优秀库](#182-%E6%8E%A8%E8%8D%90%E4%BC%98%E7%A7%80%E5%BA%93)
    - [1.8.3. 平台版本测试](#183-%E5%B9%B3%E5%8F%B0%E7%89%88%E6%9C%AC%E6%B5%8B%E8%AF%95)
    - [1.8.4. 网页编程要注意问题](#184-%E7%BD%91%E9%A1%B5%E7%BC%96%E7%A8%8B%E8%A6%81%E6%B3%A8%E6%84%8F%E9%97%AE%E9%A2%98)

<a id="markdown-11-额外附加辅助编程" name="11-额外附加辅助编程"></a>
## 1.1. 额外附加辅助编程

<a id="markdown-111-use-strict" name="111-use-strict"></a>
### 1.1.1. 'use strict'

为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript。

<a id="markdown-12-语法" name="12-语法"></a>
## 1.2. 语法

<a id="markdown-121-循环-forin--forof" name="121-循环-forin--forof"></a>
### 1.2.1. 循环 for...in / for...of

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

<a id="markdown-122-函数参数arguments" name="122-函数参数arguments"></a>
### 1.2.2. 函数参数arguments

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

<a id="markdown-123-rest参数" name="123-rest参数"></a>
### 1.2.3. rest参数

rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数

```js
function foo(a, b, ...rest) {
    console.log('a = ' + a);    //a = 1
    console.log('b = ' + b);    //b = 2
    console.log(rest);          //rest = [3,4]
}
foo(1,2,3,4);
```

<a id="markdown-124-函数默认参数" name="124-函数默认参数"></a>
### 1.2.4. 函数默认参数

```js
function Student(props) {
    this.name = props.name || 'Unnamed';
}
```

<a id="markdown-125-变量-var-let-const" name="125-变量-var-let-const"></a>
### 1.2.5. 变量 var let const

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

<a id="markdown-126-解构赋值数组赋值" name="126-解构赋值数组赋值"></a>
### 1.2.6. 解构赋值（数组赋值）

```js
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
```

<a id="markdown-127-从对象中抽取属性" name="127-从对象中抽取属性"></a>
### 1.2.7. 从对象中抽取属性

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

<a id="markdown-13-js对象" name="13-js对象"></a>
## 1.3. js对象

<a id="markdown-131-this" name="131-this"></a>
### 1.3.1. this

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

<a id="markdown-132-函数装饰器用法" name="132-函数装饰器用法"></a>
### 1.3.2. 函数装饰器用法

现在假定我们想统计一下代码一共调用了多少次parseInt()

```js
var count = 0;
var oldParseInt = parseInt; // 保存原函数

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // 原封不动，调用原函数
};
```

<a id="markdown-14-高阶编程" name="14-高阶编程"></a>
## 1.4. 高阶编程

<a id="markdown-141-map--reduce" name="141-map--reduce"></a>
### 1.4.1. map / reduce

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

<a id="markdown-142-filter-筛选" name="142-filter-筛选"></a>
### 1.4.2. filter 筛选

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var r = arr.filter(function (x) {
    return x < 5; // true 的保留，类似于查询的where
});
r; // [1, 2, 3, 4]
```

<a id="markdown-143-generator-结构类似于casyncawait" name="143-generator-结构类似于casyncawait"></a>
### 1.4.3. generator （结构类似于c#async/await）

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

<a id="markdown-144-js-异步编程" name="144-js-异步编程"></a>
### 1.4.4. js 异步编程

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

- Promise 并行执行

```js
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
```

- Promise 竞争执行（哪个先完成要哪个）

```js
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
Promise.race([p1, p2]).then(function (result) {
    console.log(result); // 'P1'
});
```

![GitHub Logo](./Javascript特别的知识点/help.svg "help.jpg") Generator尤其在js异步处理里面比用对象管理状态来得更简洁。  

![GitHub Logo](./Javascript特别的知识点/help.svg "help.jpg") 没看懂 generator 怎么写才能简化 ajax [https://www.liaoxuefeng.com/wiki/1022910821149312/1023024381818112?t=1558885620327](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024381818112?t=1558885620327)

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

- Promise vs Async/Await

```js
// Promise 创建一个User
User.create({
    id:1,
    name:"Create by Promise",
    age:100
}).then(function(p){
    console.log("created promise : "+JSON.stringify(p));
}).catch(function(err){
    console.log("fail : "+err);
});

// Async 创建一个User（更加接近高级语言语义）
(async()=>{
    try{
        let p = await User.create({
            id:2,
            name:"Create by async",
            age:200
        });
        console.log("created async : "+JSON.stringify(p));
    }
    catch(e)
    {
        console.log("fail async : "+e);
    }
})();
```

<a id="markdown-15-js-的类" name="15-js-的类"></a>
## 1.5. Js 的类

<a id="markdown-151-prototype-原型链模式---组合继承" name="151-prototype-原型链模式---组合继承"></a>
### 1.5.1. Prototype 原型链模式 - 组合继承

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

<a id="markdown-152-es6-以后支持class写法更简单" name="152-es6-以后支持class写法更简单"></a>
### 1.5.2. ES6 以后支持class写法，更简单

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

<a id="markdown-16-网页编程" name="16-网页编程"></a>
## 1.6. 网页编程

<a id="markdown-161-跨域问题" name="161-跨域问题"></a>
### 1.6.1. 跨域问题

- Flash发送Http请求（作废）。
- 后端服务器转发（前后端分离，同站）。
- JSONP （仅前端即可，只有Get方法）。利用可跨域请求js的原理，返回一个带结果的js文件。
- CORS全称Cross-Origin Resource Sharing（H5跨域规范）。服务器配置支持请求的域名，假设本域是[my.com]("")，外域是[sina.com]("")，只要响应头Access-Control-Allow-Origin为[http://my.com]("")，或者是*，本次请求就可以成功。
![cros示例图](./Javascript特别的知识点/cros.png "cros示例图")

*注意*
上面这种跨域请求，称之为“简单请求”。简单请求包括```GET```、```HEAD```和```POST```（```POST```的```Content-Type```类型 仅限```application/x-www-form-urlencoded```、```multipart/form-data```和```text/plain```），并且不能出现任何自定义头（例如，```X-Custom: 12345```），通常能满足90%的需求。

无论你是否需要用JavaScript通过CORS跨域请求资源，你都要了解CORS的原理。最新的浏览器全面支持HTML5。在引用外域资源时，除了JavaScript和CSS外，都要验证CORS。例如，当你引用了某个第三方CDN上的字体文件时：

```css
/* CSS */
@font-face {
  font-family: 'FontAwesome';
  src: url('http://cdn.com/fonts/fontawesome.ttf') format('truetype');
}
```

如果该CDN服务商未正确设置```Access-Control-Allow-Origin```，那么浏览器无法加载字体资源。

对于```PUT```、```DELETE```以及其他类型如```application/json```的```POST```请求，在发送```AJAX```请求之前，浏览器会先发送一个```OPTIONS```请求（称为```preflighted```请求）到这个URL上，询问目标服务器是否接受：

```text
OPTIONS /path/to/resource HTTP/1.1
Host: bar.com
Origin: http://my.com
Access-Control-Request-Method: POST
```

服务器必须响应并明确指出允许的Method：

```text
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://my.com
Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS
Access-Control-Max-Age: 86400
```

浏览器确认服务器响应的```Access-Control-Allow-Methods```头确实包含将要发送的```AJAX```请求的```Method```，才会继续发送```AJAX```，否则，抛出一个错误。

由于以```POST```、```PUT```方式传送```JSON```格式的数据在```REST```中很常见，所以要跨域正确处理```POST```和```PUT```请求，服务器端必须正确响应```OPTIONS```请求。

<a id="markdown-17-nodejs" name="17-nodejs"></a>
## 1.7. Nodejs

<a id="markdown-171-模块编程" name="171-模块编程"></a>
### 1.7.1. 模块编程

```js
// 模块 bbb.js
var s = 'Hello';    // 模块变量，不影响外部
function greet(name) {
    console.log(s + ', ' + name + '!');
}
module.exports = greet; // 本模块对外暴露的是一个函数
```

```js
// 调用者 aaa.js
var greet = require('./bbb');   // 引入bbb模块的暴露对象(js名称)
var s = 'Michael';

greet(s); // Hello, Michael! // bbb模块暴露的对象是函数，直接使用
```

*注意*：nodejs中模块

```js
var module = {
    id: 'hello',
    exports: {} //Node默认给你准备了一个空对象{}
};
var load = function (exports, module) {
    // 读取的hello.js代码:
    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    // 建议对外赋值方式
    module.exports = greet;

    //两种方法一样
    module.exports.foo = function () { return 'foo'; };
    module.exports.bar = function () { return 'bar'; };
    //两种方法一样
    exports.foo = function () { return 'foo'; };
    exports.bar = function () { return 'bar'; };

    // hello.js代码结束
    return module.exports;
};
var exported = load(module);
// 保存module:
save(module, exported);
```

<a id="markdown-18-warning" name="18-warning"></a>
## 1.8. Warning

<a id="markdown-181-自动加的bug" name="181-自动加的bug"></a>
### 1.8.1. 自动加";"的BUG

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

<a id="markdown-182-推荐优秀库" name="182-推荐优秀库"></a>
### 1.8.2. 推荐优秀库

1. underscore 集合操作库
2. babel ES6编译成低版本js
3. var http = require('http'); nodejs web 服务器
4. var url = require('url'); nodejs 将 url 解析成对象

<a id="markdown-183-平台版本测试" name="183-平台版本测试"></a>
### 1.8.3. 平台版本测试

```js
console.log('ES6');
```

<a id="markdown-184-网页编程要注意问题" name="184-网页编程要注意问题"></a>
### 1.8.4. 网页编程要注意问题

1. ajax 跨域问题
2. gzip
