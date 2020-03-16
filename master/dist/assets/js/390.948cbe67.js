(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{500:function(t,a,e){"use strict";e.r(a);var n=e(28),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"group-concat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#group-concat"}},[t._v("#")]),t._v(" group_concat")]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("VARCHAR group_concat(VARCHAR str[, VARCHAR sep])")])]),t._v(" "),e("p",[t._v("该函数是类似于 sum() 的聚合函数，group_concat 将结果集中的多行结果连接成一个字符串。第二个参数 sep 为字符串之间的连接符号，该参数可以省略。该函数通常需要和 group by 语句一起使用。")]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n+-------+\n\nmysql> select group_concat(value) from test;\n+-----------------------+\n| group_concat(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select group_concat(value, \" \") from test;\n+----------------------------+\n| group_concat(`value`, ' ') |\n+----------------------------+\n| a b c                      |\n+----------------------------+\n")])])]),e("p",[t._v("##keyword\nGROUP_CONCAT,GROUP,CONCAT")])])}),[],!1,null,null,null);a.default=s.exports}}]);