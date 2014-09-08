---
layout: document
title: 變數與型別
highlights:
- js
---

##Variable (變數)

* 讓 VM 君暫時記住物件與資料，以便接下來取用。
* 以 `var` 句型做變數宣告 (declaration)。
* 以 `=` 運算子賦值 (assignment)。

~~~js
var x = 42;
console.log(x); // 42
console.log(x + 2); // 44
x = 56;
console.log(x); // 56
~~~

###`var` 句型
~~~js
var y; // 在宣告時不需要馬上賦值
console.log(y); // undefined
console.log(z); // 但沒有宣告過就算 ReferenceError

// 也可以連續宣告
var a = 0, b = 1, c = "hi";

// 一般鼓勵換行寫，人類比較好懂
var d = 7, 
	e = 8,
	f = 9;

// 也可以混搭
var p, 
	q = 6, 
	r;

// 不使用 var 會成為全域變數 (global variable)
h = 99;
~~~



##Type (型別)

* 變數裡的資料值一定是以下型態中的一種：
	* 數字 (number)
		* 整數
		* 浮點數
		* `NaN`
	* 字串 (string)
	* 布林值 (boolean)
	* `null`
	* `undefined`
	* 物件 (object)
		* 陣列 (array)
		* 函數 (function)
* 除了物件以外的五種稱為 primitive types。

###各型別 Literal

* 整數 (integer)：`0`, `99`
* 浮點數 (floating-point)：`1.1`, `3.0`
* 字串 (string)：`"hello"`
* 布林值 (boolean)：`true`, `false`
* 物件 (object)：`{ a: 1, b: "hi" }`, `{}`
* 陣列 (array)：`[1, 2, 3]`, `[]`, `["abc", "def", 5566]`
* `null`
* `undefined`



##參考資料
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)
