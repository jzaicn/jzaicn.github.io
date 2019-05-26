# Learning Javascript �ر��֪ʶ��

[TOC]

## ���⸽�Ӹ������

### 'use strict'

Ϊ���޲�JavaScript��һ�������ȱ�ݣ�ECMA�ں����淶���Ƴ���strictģʽ����strictģʽ�����е�JavaScript���룬ǿ��ͨ��var����������δʹ��var����������ʹ�õģ����������д�������һ���ַ�������֧��strictģʽ����������������һ���ַ������ִ�У�֧��strictģʽ�������������strictģʽ����JavaScript��

## �﷨

### ѭ�� for...in / for...of

- ***for...in*** �����԰�һ�������������������ѭ��������

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

Ҫ���˵�����̳е����ԣ���```hasOwnProperty()```��ʵ�֣�

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

����```Array```Ҳ�Ƕ��󣬶�����ÿ��Ԫ�ص���������Ϊ��������ԣ���ˣ�```for ... in```ѭ������ֱ��ѭ����```Array```��������

```js
var a = ['A', 'B', 'C'];
for (var i in a) {
    console.log(i); // '0', '1', '2'
    console.log(a[i]); // 'A', 'B', 'C'
}
```

�������ֶ���```Array```��������˶�������Ժ�```for ... in```ѭ�����������벻��������Ч����

```js
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    console.log(x); // '0', '1', '2', 'name'
}
```

- ***for...of*** ����Array���Բ����±�ѭ����

����Map��Set���޷�ʹ���±ꡣΪ��ͳһ�������ͣ�ES6��׼�������µ�iterable���ͣ�Array��Map��Set������iterable���͡�����iterable���͵ļ��Ͽ���ͨ���µ�for ... ofѭ����������
for ... ofѭ����ES6������µ��﷨��

Ȼ�������õķ�ʽ��ֱ��ʹ��iterable���õ�forEach������������һ��������ÿ�ε������Զ��ص��ú���

```js
a.forEach(function (element, index, array) {
    // element: ָ��ǰԪ�ص�ֵ
    // index: ָ��ǰ����
    // array: ָ��Array������
    console.log(element + ', index = ' + index);
});
```

### ��������arguments

����arguments������Ի�õ����ߴ�������в�����Ҳ����˵����ʹ�����������κβ��������ǿ����õ�������ֵ

```js
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
```

### rest����

rest����ֻ��д�����ǰ����...��ʶ�������н����֪������Ĳ����Ȱ�a��b������Ĳ�����������ʽ��������rest�����ԣ�������Ҫarguments���Ǿͻ�ȡ��ȫ������

```js
function foo(a, b, ...rest) {
    console.log('a = ' + a);    //a = 1
    console.log('b = ' + b);    //b = 2
    console.log(rest);          //rest = [3,4]
}
foo(1,2,3,4);
```

### ���� var let const

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

### �⹹��ֵ�����鸳ֵ��

```js
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
```

### �Ӷ����г�ȡ����

```js
var person = {
    name: 'С��',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;
let {name, passport:id} = person; // ��pssport ӳ�䵽
�¶����id
var {name, single=true} = person; // �ṩĬ��ֵ

var x, y;
({x, y} = { name: 'С��', x: 100, y: 200}); // �ѱ��ⲿʹ�õĶ���������ȡʱ����Ҫ�ӡ�()��

```

- Ӧ�ó���

```js
var x=1, y=2;
[x, y] = [y, x]; // ���ٵ�������

var {hostname:domain, pathname:path} = location; // ���ٻ�ȡ��ǰҳ���������·��
```

## Warning

### �Զ���";"��BUG

```js
function foo() {
    return  // ÿ���Զ���� ";"
        { // ����"{"��ʾδ������䣬���������Զ���";"
            name: 'foo' 
            };
}
```

���

```js
function foo() {
    return;
    { name: 'foo' };
}
```