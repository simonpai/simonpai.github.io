---
layout: document
title: 運算子
highlights:
- js
---

##運算子 (Operator)

* 程式語言中的加減乘除符號。
* 一樣要按照文法分解成語法樹來解讀。
* 運算子組成的文法單位都是表達式，沒有句型。
* 依運算元的運量分成單元 (unary)、雙元 (binary)、與三元 (ternary) 運算子。
* JS 幾乎都是雙元運算子，只有少數的單元與唯一的三元。

###加減乘除

~~~js
x + y
x - y
x * y // 乘
x / y // 除

x % y // Modulus (取餘數) 俗稱 mod
-x    // 負號 (單元)
~~~

###加加減減 (單元)

* `x++` 是後加加；`++x` 是先加加。

~~~js
x++ // 相當於 x = x + 1; 並回傳 x
++x // 相當於 x = x + 1; 並回傳 x + 1

x-- // 相當於 x = x - 1; 並回傳 x
--x // 相當於 x = x - 1; 並回傳 x - 1
~~~

###Comparison

* 這些運算子都回傳布林值。

~~~js
x == y
x != y
x === y
x !== y

x < y
x <= y
x > y
x >= y
~~~

###Conditional

* 唯一的三元運算子。
* 五個單位一起構成整個表達式。
* 因為可以省很多話而深受喜愛。
* 第一個運算元會被自動當成布林值來判定。
* 會被判定成 `false` 的有 `false`、`undefined`、`null`、`0`、`NaN`、以及空字串。
* 其他都算是 `true`。
* 未被回傳的那一側不會被執行！

~~~js
x ? y : z // 如果 x 判定為 true 則回傳 y，否則回傳 z

var w = x ? y : z;
// 相當於
var w;
if (x) {
	w = y;
} else {
	w = z;
}
~~~

###邏輯運算 (布林運算)

* 第一個運算元會被自動當成布林值來判定。
* JS 的 `||` 及 `&&` 其實不是真的布林運算，定義方式非常聰明。
* 回傳左邊的情況下，右邊的表達式不執行！不執行！不執行！ (short-circuit evaluation)

~~~js
x || y // OR
x && y // AND
!x     // NOT: 若 x 被判定為 true 則回傳 false，否則 true。

x || y // 如果左邊被當做 true 就回傳左邊 (右邊不執行!)，否則回傳右邊，相當於
x ? x : y

// 常被用來 fallback 成 default 值，例如
function greeting(name) {
	return "Hi, " + (name || "user") + ".";
}
// greeting("Neo") => "Hi, Neo."
// greeting() => "Hi, user."

x && y // 如果左邊被當做 false 就回傳左邊 (右邊不執行!)，否則回傳右邊，相當於
!x ? x : y

// 常被用來做 null-safe navigation，例如
var y = x.name; // 如果 x 是 null，就會發生 Reference Error，俗稱 NPE (Null Pointer Exception)
// 換成這樣寫...
var y = x && x.name;
// 如果 x 不是 null，y 就會取到 x.name 的值
// 如果 x 是 null，y 也是 null，因為右邊不執行，不會發生 NPE
~~~

###二進位 (Bitwise)

~~~js
x & y
x | y
x ^ y
~x
x << y
x >> y
x >>> y
~~~

###賦值 (Assignment)

* `=` 構成的也是表達式，不是句型。
* 各種懶人縮寫 (shorthand)。

~~~js
x = y // 將 y 的值賦予 x，並回傳之
x = y = z // 相當於 x = (y = z)

// 有些省話哥會在表達式中間賦值，注意運算順序
var z = (y = x) + 5;

// shorthand
x += y   // x = x + y
x -= y   // x = x - y
x *= y   // x = x * y
x /= y   // x = x / y
x %= y   // x = x % y
x <<= y  // x = x << y
x >>= y  // x = x >> y
x >>>= y // x = x >>> y
x &= y   // x = x & y
x ^= y   // x = x ^ y
x |= y   // x = x | y
~~~

###字串

* `+` 用在字串上是串接的意思。
* `+` 左右任一側是字串的話，另一側會被轉型成字串來運算。

~~~js
"abc" + "def" // => "abcdef"

"muhaha" + 99 // => "muhaha99"
99 + "muhaha" // => "99muhaha"
"muhaha" + true // => "muhahatrue"
"muhaha" + null // => "muhahanull"

"" + 99 // => "99"
~~~

###其他

* `delete`
* `,`
* `in`、`instanceof`、`new`、`typeof`、`this`
* `void`

###優先權

* 先乘除後加減
* [優先順序表](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Operator_precedence)



##參考資料

* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
