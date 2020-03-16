(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{634:function(t,a,e){"use strict";e.r(a);var s=e(28),i=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"bitmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bitmap"}},[t._v("#")]),t._v(" BITMAP")]),t._v(" "),e("h2",{attrs:{id:"create-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[t._v("#")]),t._v(" Create table")]),t._v(" "),e("p",[t._v("The aggregation model needs to be used when creating the table. The data type is bitmap and the aggregation function is bitmap_union.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('CREATE TABLE `pv_bitmap` (\n  `dt` int (11) NULL COMMENT" ",\n  `page` varchar (10) NULL COMMENT" ",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT" "\n) ENGINE = OLAP\nAGGREGATE KEY (`dt`,` page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH (`dt`) BUCKETS 2;\n')])])]),e("p",[t._v("Note: When the amount of data is large, it is best to create a corresponding rollup table for high-frequency bitmap_union queries")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n")])])]),e("h2",{attrs:{id:"data-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[t._v("#")]),t._v(" Data Load")]),t._v(" "),e("p",[e("code",[t._v("TO_BITMAP (expr)")]),t._v(": Convert 0 ~ 18446744073709551615 unsigned bigint to bitmap")]),t._v(" "),e("p",[e("code",[t._v("BITMAP_EMPTY ()")]),t._v(": Generate empty bitmap columns, used for insert or import to fill the default value")]),t._v(" "),e("p",[e("code",[t._v("BITMAP_HASH (expr)")]),t._v(": Convert any type of column to a bitmap by hashing")]),t._v(" "),e("h3",{attrs:{id:"stream-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[t._v("#")]),t._v(" Stream Load")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = to_bitmap (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_hash (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n')])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_empty ()" http: // host: 8410 / api / test / testDb / _stream_load\n')])])]),e("h3",{attrs:{id:"insert-into"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert-into"}},[t._v("#")]),t._v(" Insert Into")]),t._v(" "),e("p",[t._v("id2's column type is bitmap")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("insert into bitmap_table1 select id, id2 from bitmap_table2;\n")])])]),e("p",[t._v("id2's column type is bitmap")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap (1000)), (1001, to_bitmap (2000));\n")])])]),e("p",[t._v("id2's column type is bitmap")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("insert into bitmap_table1 select id, bitmap_union (id2) from bitmap_table2 group by id;\n")])])]),e("p",[t._v("id2's column type is int")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("insert into bitmap_table1 select id, to_bitmap (id2) from table;\n")])])]),e("p",[t._v("id2's column type is String")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("insert into bitmap_table1 select id, bitmap_hash (id_string) from table;\n")])])]),e("h2",{attrs:{id:"data-query"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-query"}},[t._v("#")]),t._v(" Data Query")]),t._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("BITMAP_UNION (expr)")]),t._v(": Calculate the union of two Bitmaps. The return value is the new Bitmap value.")]),t._v(" "),e("p",[e("code",[t._v("BITMAP_UNION_COUNT (expr)")]),t._v(": Calculate the cardinality of the union of two Bitmaps, equivalent to BITMAP_COUNT (BITMAP_UNION (expr)). It is recommended to use the BITMAP_UNION_COUNT function first, its performance is better than BITMAP_COUNT (BITMAP_UNION (expr)).")]),t._v(" "),e("p",[e("code",[t._v("BITMAP_UNION_INT (expr)")]),t._v(": Count the number of different values ​​in columns of type TINYINT, SMALLINT and INT, return the sum of COUNT (DISTINCT expr) same")]),t._v(" "),e("p",[e("code",[t._v("INTERSECT_COUNT (bitmap_column_to_count, filter_column, filter_values ​​...)")]),t._v(": The calculation satisfies\nfilter_column The cardinality of the intersection of multiple bitmaps of the filter.\nbitmap_column_to_count is a column of type bitmap, filter_column is a column of varying dimensions, and filter_values ​​is a list of dimension values.")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("The following SQL uses the pv_bitmap table above as an example:")]),t._v(" "),e("p",[t._v("Calculate the deduplication value for user_id:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select bitmap_union_count (user_id) from pv_bitmap;\n\nselect bitmap_count (bitmap_union (user_id)) from pv_bitmap;\n")])])]),e("p",[t._v("Calculate the deduplication value of id:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select bitmap_union_int (id) from pv_bitmap;\n")])])]),e("p",[t._v("Calculate the retention of user_id:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("select intersect_count (user_id, page, 'meituan') as meituan_uv,\nintersect_count (user_id, page, 'waimai') as waimai_uv,\nintersect_count (user_id, page, 'meituan', 'waimai') as retention // Number of users appearing on both 'meituan' and 'waimai' pages\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n")])])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),e("p",[t._v("BITMAP, BITMAP_COUNT, BITMAP_EMPTY, BITMAP_UNION, BITMAP_UNION_INT, TO_BITMAP, BITMAP_UNION_COUNT, INTERSECT_COUNT")])])}),[],!1,null,null,null);a.default=i.exports}}]);