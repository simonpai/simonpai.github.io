---
layout: document
title: 流程控制
highlights:
- js
---

##流程控制 (Control Flow)

* JS 中的流程控制都是句型，沒有表達式。

###If / Else

* `if` 括號內是一個表達式。
* 表達式的布林判定為 `true` 則執行後面的內容，否則去下一個 `else if` 判斷，或執行 `else` 後面的內容。
* 會被判定成 `false` 的有 `false`、`undefined`、`null`、`0`、`NaN`、以及空字串。
* 其他都算 `true`。

~~~js
// 基本型態
if (exp) {
	// ...
}

// 可以搭配 else
if (exp) {
	// ...
} else {
	// ...
}

// 可以用 else if 連續判定
if (exp) {
	// ...
} else if (exp2) {
	// ...
} else if (exp3) {
	// ...
} else {
	// ...
}

// 也可以只有 if 與 else if
if (exp) {
	// ...
} else if (exp2) {
	// ...
}

// 單行時可以省略括號
if (exp)
	console.log("abc");
else
	console.log("def");

// 有些人會寫成這樣，但缺點是在 debug 的時候會不容易分辨有沒有執行到
if (exp) console.log("abc");
~~~

###Switch / Case

* 類似連續的 `if` 與 `else if`。
* `switch` 括號後面是個表達式。
* 表達式算出來的值，拿去依序和每個 `case` 比對，相同的話，就執行後面的內容，直到 `break` (或 `return`) 或 `switch` 結束為止。
* 如果都沒有中任何 `case`，執行 `default` 後面的內容 (如果有的話)。

~~~js
switch (exp) {
	case 1: // 如果 exp == 1 => 會印出 1
		console.log("1");
		break;
	case 2: // 如果 exp == 2 => 會印出 2, 3 兩行
		console.log("2");
	case 3: // 如果 exp == 3 => 會印出 3
		console.log("3");
		break;
	default: // 如果都不是 => 會印出 other
		console.log("other");
}
~~~

###While 迴圈

* `while` 的括號內是表達式。
* 表達式判定為 `true` 則執行後面的內容，並且重覆此步驟，直到判定為 `false` 或強制跳脫。
* 使用 `break` 強制跳脫迴圈。
* 使用 `continue` 強制跳入下一個循環。

~~~js
var i = 0;
while (i < 10) { // 從 0 印到 9
	console.log(i);
	i++;
}

var j = 0;
whlie (true) { // 也是從 0 印到 9
	console.log(j);
	j++;
	if (j > 9)
		break;
}

var k = 0;
while (k < 10) { // 跳過了奇數，所以是印出 0, 2, 4, 6, 8
	if (k % 2 != 0)
		continue;
	console.log(k);
	k++;
}
~~~

###For 迴圈

* `while` 的強化版，最常見的迴圈類型。
* `for` 的括號裡放的三個表達式 (*) 依序是：
	* 一開始執行的動作 (`var` 的狀況不算真的表達式)
	* 進入迴圈的判定式
	* 迴圈尾巴的動作
* `break` 與 `continue` 也適用。

~~~js
// 最常見的 for 迴圈類型
for (var i = 0; i < 10; i++) {
	console.log(i);
}
// 相當於
var i = 0;
while (i < 10) {
	console.log(i);
	i++;
}

// 第一段不一定是 var statement
var j;
for (j = 0; j < 10; j++) {
	// ...
}

// 第一段可以宣告多個變數
// 表達式可以利用逗號運算子串接多個表達式
for (var k = 0, len = 10; k < len; k++, len--) {
	// ...
}

// 也可以留白不寫
for (; m < 10;) {
	// ...
}
// 相當於
while (m < 10) {
	// ...
}

// 迴圈內容也可以是 empty statement
for (var n = 0; n < 10; console.log(n++));
~~~

### Do 迴圈

* 很少見。
* 判定在第一次執行後面，比較少有這種需要。
* 並且判定式寫在尾巴，對人類讀起來比較不友善。
* `break` 與 `continue` 也適用。

~~~js
// 這樣是印出 0 到 10
var i = 0;
do {
	console.log(i);
	i++;
} while (i < 10)
~~~

###標籤 (Label)

* 用來標示一個 statement，通常是 `switch` 或迴圈。
* `break` 或 `continue` 搭配 label，可以跳脫或繼續指定的 `switch` 或迴圈。
* 所以通常是用在多層 `switch` 與迴圈的狀況。

~~~js
var chars = ['a', 'a', 'b', 'a', 'b'];

muhaha:
for (var i = 0; i < 5; i++) {
	switch (chars[i]) {
		case "a":
			console.log("a");
			break;
		case "b":
			console.log("b");
			break muhaha;
	}
}
~~~

###Block

* Block 就是用 `{` 與 `}` 包起來，裡面放了很多 statements 的單位。
* 大括號裡面如果放的不是 statements，不算 block。 (例如：物件表達式、switch)
* 文法上來說，整個 Block 可以視為一個 statement。

~~~js
if (x) { // 這個是 block
	console.log("1");
	console.log("2");
	console.log("3");
}

var obj = { // 這個不是
	x: 1,
	y: 2
};

switch (c) { // 這個也不是
	case "A":
		console.log("Hi, A");
		break;
	case "B":
		console.log("Hi, B");
		break;
}
~~~

* 實際上，`if` 的文法定義是

~~~js
if (expression)
	statement
~~~

* 大括號的情況，其實是利用 block 包成一個 statement。
* `else`、`else if`、`for`、`while`、`do` 也是相同的原理。



##參考資料

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)
