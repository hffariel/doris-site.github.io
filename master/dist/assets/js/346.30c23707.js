(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{632:function(t,a,_){"use strict";_.r(a);var v=_(28),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"date-format"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#date-format"}},[t._v("#")]),t._v(" date_format")]),t._v(" "),_("h2",{attrs:{id:"description"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),_("h3",{attrs:{id:"syntax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),_("p",[_("code",[t._v("VARCHAR DATE_FORMAT(DATETIME date, VARCHAR format)")])]),t._v(" "),_("p",[t._v("将日期类型按照format的类型转化为字符串，\n当前支持最大128字节的字符串，如果返回值长度超过128，则返回NULL")]),t._v(" "),_("p",[t._v("date 参数是合法的日期。format 规定日期/时间的输出格式。")]),t._v(" "),_("p",[t._v("可以使用的格式有：")]),t._v(" "),_("p",[t._v("%a | 缩写星期名")]),t._v(" "),_("p",[t._v("%b | 缩写月名")]),t._v(" "),_("p",[t._v("%c | 月，数值")]),t._v(" "),_("p",[t._v("%D | 带有英文前缀的月中的天")]),t._v(" "),_("p",[t._v("%d | 月的天，数值(00-31)")]),t._v(" "),_("p",[t._v("%e | 月的天，数值(0-31)")]),t._v(" "),_("p",[t._v("%f | 微秒")]),t._v(" "),_("p",[t._v("%H | 小时 (00-23)")]),t._v(" "),_("p",[t._v("%h | 小时 (01-12)")]),t._v(" "),_("p",[t._v("%I | 小时 (01-12)")]),t._v(" "),_("p",[t._v("%i | 分钟，数值(00-59)")]),t._v(" "),_("p",[t._v("%j | 年的天 (001-366)")]),t._v(" "),_("p",[t._v("%k | 小时 (0-23)")]),t._v(" "),_("p",[t._v("%l | 小时 (1-12)")]),t._v(" "),_("p",[t._v("%M | 月名")]),t._v(" "),_("p",[t._v("%m | 月，数值(00-12)")]),t._v(" "),_("p",[t._v("%p | AM 或 PM")]),t._v(" "),_("p",[t._v("%r | 时间，12-小时（hh:mm:ss AM 或 PM）")]),t._v(" "),_("p",[t._v("%S | 秒(00-59)")]),t._v(" "),_("p",[t._v("%s | 秒(00-59)")]),t._v(" "),_("p",[t._v("%T | 时间, 24-小时 (hh:mm:ss)")]),t._v(" "),_("p",[t._v("%U | 周 (00-53) 星期日是一周的第一天")]),t._v(" "),_("p",[t._v("%u | 周 (00-53) 星期一是一周的第一天")]),t._v(" "),_("p",[t._v("%V | 周 (01-53) 星期日是一周的第一天，与 %X 使用")]),t._v(" "),_("p",[t._v("%v | 周 (01-53) 星期一是一周的第一天，与 %x 使用")]),t._v(" "),_("p",[t._v("%W | 星期名")]),t._v(" "),_("p",[t._v("%w | 周的天 （0=星期日, 6=星期六）")]),t._v(" "),_("p",[t._v("%X | 年，其中的星期日是周的第一天，4 位，与 %V 使用")]),t._v(" "),_("p",[t._v("%x | 年，其中的星期一是周的第一天，4 位，与 %v 使用")]),t._v(" "),_("p",[t._v("%Y | 年，4 位")]),t._v(" "),_("p",[t._v("%y | 年，2 位")]),t._v(" "),_("p",[t._v("%% | 用于表示 %")]),t._v(" "),_("h2",{attrs:{id:"example"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")])])]),_("h2",{attrs:{id:"keyword"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("DATE_FORMAT,DATE,FORMAT\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);