---
layout: document
title: 引言
---

###程式語言

程式語言是寫給電腦看的語言。

* 詞彙量比人類語言少很多。
* 文法比人類語言複雜一點。
* 需要寫得比較精確電腦才會懂。

###JavaScript

主要跑在 browser 上的語言。

* 由各家 browser 裡的 JS engine 負責解讀與執行。
* JS engine 一般也被稱為 JS Virtual Machine (VM 君)。

Browser 君的工作流程 (大致上)：

* 使用者輸入網址。
* → 向 server 要檔案回來 (這裡先針對 HTML 的情況)。
* → 讀一遍 HTML 檔，建立文件樹狀結構 (DOM tree)。
* → 如果中途需要連結到其他資源 (CSS/JS/圖) 就把那些檔案也要來。
* → 如果遇到 JS (不管是連結或內部) 就先停下來叫 VM 君去執行，執行完再繼續。
* → 按照 DOM tree 的內容與 CSS 把網頁畫 (render) 出來。

###推薦工具
* Chrome 或 Firefox
* 一個好的文字編輯器 (例：Sublime Text 2/3)
* https://jstutor.herokuapp.com/ (VM 君工作視覺化)

###推薦課程
* http://www.codecademy.com/en/tracks/javascript
