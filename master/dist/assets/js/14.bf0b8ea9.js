(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{278:function(e,t,a){"use strict";a.r(t);var r=a(28),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("h2",{attrs:{id:"brpc-max-body-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#brpc-max-body-size"}},[e._v("#")]),e._v(" brpc_max_body_size")]),e._v(" "),a("p",[e._v('This configuration is mainly used to modify the parameter max_body_size of brpc. The default configuration is 64M. It usually occurs in multi distinct + no group by + exceeds 1t data. In particular, if you find that the query is stuck, and be appears the word "body size is too large" in log.')]),e._v(" "),a("p",[e._v("Because this is a brpc configuration, users can also directly modify this parameter on-the-fly by visiting "),a("code",[e._v("http://host:brpc_port/flags")])]),e._v(" "),a("h2",{attrs:{id:"max-running-txn-num-per-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#max-running-txn-num-per-db"}},[e._v("#")]),e._v(" max_running_txn_num_per_db")]),e._v(" "),a("p",[e._v("This configuration is mainly used to control the number of concurrent load job in the same db. The default configuration is 100. When the number of concurrent load job exceeds the configured value, the load which is synchronously executed will fail, such as stream load. The load which is asynchronously will always be in a pending state such as broker load.")]),e._v(" "),a("p",[e._v("It is generally not recommended to change this property. If the current load concurrency exceeds this value, you need to first check if a single load job is too slow, or if there are too many small files, there is no problem of load after merging those small files.")]),e._v(" "),a("p",[e._v("Error information such as: current running txns on db xxx is xx, larger than limit xx. The above info is related by this property.")])])}),[],!1,null,null,null);t.default=o.exports}}]);