---
layout: document
title: 函數
highlights:
- js
---

##函數 (Function)

* 定義函數的行為稱為宣告。
* 使用函數的行為稱為呼叫。
* 宣告的時候並不會執行函數，呼叫的時候才會。
* 宣告的時候定義被傳入的變數叫參數 (parameter)。
* 呼叫的時候傳入的實際值叫參數 (argument)。 XD

~~~js
function squareSum(x, y) {
	return x * x + y * y;
}
var z = squareSum(x, y);

// 函數內再呼叫別的函數
function square(x) {
	return x * x;
}
function squareSum(x, y) {
	return square(x) + square(y);
}
var z = squareSum(x, y);
~~~

###函數宣告

* 函數的宣告方式有兩種。

~~~js
// 第一種：標準的函數宣告句型，注意結尾沒有分號
function render(x, y) {
	// ...
}

// 第二種：這其實是一個 assignment，把右邊的函數表達式賦值給左邊的變數
var render = function (x, y) {
	// ...
};

// 函數表達式也會被用在賦值以外的地方，例如被當作參數傳入別的函數
function execute(f) {
	f();
}
execute(function () {
	console.log("Executed me!");
});

// 或者 IIFE
(function (x) {
	// ...
})(x);
~~~

###參數 (Parameter)

* 函數宣告的時候可以定義零到任意多個參數。
* 多傳入的參數沒有差別，少傳入的參數視為 `undefined`。
* 參數可以是任何類別，包括函數本身。
* 使用 `arguments` 可以找到所有傳入的參數值，適用於不定數量參數的情況。

~~~js
function render(x, y) {
	console.log(y);
}
render(1, 2); // 印出 2
render(1, 2, 3); // 還是印出 2
render(1); // 印出 undefined

// 參數也可以是函數
function callThreeTimes(data, f) {
	f(data);
	f(data);
	f(data);
}
function f1(x) {
	alert(x);
}
callThreeTimes("Hello!", f1);
// 或者直接傳入一個函數表達式
callThreeTimes("Hello!", function (x) {
	alert(x);
});
// alert 也是一個函數
callThreeTimes("Hello!", alert);

// TODO: arguments
~~~

###回傳值

* `return` 後面的表達式結果會回傳給函數的呼叫者。
* `return` 後面如果沒有東西，或者到最後一行都沒有 `return`，視同回傳 `undefined`。
* `return` 之後的 statement 都不會執行。

~~~js
function f(x, y) {
	return x * y;
}
var z = f(7, 8);
var w = f(7, 8) + f(3, 4);
console.log(f(2, 3));

function g(x, y) {
	if (x < 0 || y < 0)
		return 0;
	return x * x + y * y;
}
~~~

###Scope

* 函數的參數與函數內宣告的變數，外面是看不到的。
* 如果內外使用了名字相同的變數，以內層優先。
* 在 JS 裡只有 function 會形成 scope，其他 block (如 `if`、`for` 等) 都不會。
* 為了區隔並保護變數，也可以利用 IIFE 刻意製造 scope。

~~~js
var x = 0,
	y = 1,
	z = 2;
function render(x) {
	var y = 6;
	console.log([x, y, z]); // 5, 6, 2
}
render(5);



// scope 常常會出現很多層
function f() {
	
	function g() {
		
		setTimeout(function () {
			
		});
		
	}
	
}
~~~

###邪惡的 Eval

~~~js
// TODO
~~~

###遞迴 (Recursion)

* 在函數中直接或間接呼叫自己的行為稱為遞迴 (Recursion)。
* "To iterate is human, to recurse, divine" 
	* 「遞迴只應天上有，凡人該當用迴圈。」

~~~js
// TODO
~~~



##參考資料

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
