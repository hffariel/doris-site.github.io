(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{601:function(t,e,a){"use strict";a.r(e);var i=a(28),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"show-partitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-partitions"}},[t._v("#")]),t._v(" SHOW PARTITIONS")]),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("This statement is used to display partition information\nGrammar:\nSHOW PARTITIONS FROM [db_name.]table_name [WHERE] [ORDER BY] [LIMIT];\nExplain:\nSupport filter with following columns: PartitionId,PartitionName,State,Buckets,ReplicationNum,\nLastConsistencyCheckTime")]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Display partition information for the specified table below the specified DB\nSHOW PARTITIONS FROM example_db.table_name;")])]),t._v(" "),a("li",[a("p",[t._v('Display information about the specified partition of the specified table below the specified DB\nSHOW PARTITIONS FROM example_db.table_name WHERE PartitionName = "p1";')])]),t._v(" "),a("li",[a("p",[t._v("Display information about the newest partition of the specified table below the specified DB\nSHOW PARTITIONS FROM example_db.table_name ORDER BY PartitionId DESC LIMIT 1;")])])]),t._v(" "),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),a("p",[t._v("SHOW,PARTITIONS")])])}),[],!1,null,null,null);e.default=n.exports}}]);