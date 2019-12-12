(this["webpackJsonparray-pipe-test-app"]=this["webpackJsonparray-pipe-test-app"]||[]).push([[0],{19:function(e,_,t){"use strict";t.r(_);var a=t(0),r=t.n(a),n=t(5),l=t.n(n),s=t(3);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"tile is-ancestor"},r.a.createElement("div",{className:"tile is-parent is-vertical"},r.a.createElement("div",{className:"tile is-child box"},r.a.createElement("p",null,"This application was created to quickly compare ",r.a.createElement("a",{href:"https://github.com/gossie/array-pipe"},"array-pipe")," implementations with conventional implementations. Check out the documentation to find out more about ",r.a.createElement("a",{href:"https://github.com/gossie/array-pipe"},"array-pipe"),"."),r.a.createElement("p",null,"When you click \"Run\" an array with \"Number of elements\" many entries will be created. The variable name will just be array. The array consists of string encoded numbers in ascending order, beginning with 1 (something like this: ['1', '2', '3', ..., '1000000']). That array can then be used in your code in the codebox.")),r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("div",{className:"tile is-child box"},r.a.createElement(s.a,{defaultCode:"array\n    .map(s => parseInt(s))\n    .some(n => n%2 === 0);"})),r.a.createElement("div",{className:"tile is-child box"},r.a.createElement(s.a,{defaultCode:"array.pipe(\n    map(s => parseInt(s)),\n    some(n => n%2 === 0)\n);"})))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Test}));var _home_travis_build_gossie_array_pipe_test_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_gossie_array_pipe__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_gossie_array_pipe__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_gossie_array_pipe__WEBPACK_IMPORTED_MODULE_2__),_Result__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),filter=__webpack_require__(13).default,map=__webpack_require__(14).default,distinct=__webpack_require__(15).default,first=__webpack_require__(16).default,some=__webpack_require__(17).default,every=__webpack_require__(18).default;function Test(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(1e6),_useState2=Object(_home_travis_build_gossie_array_pipe_test_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),numberOfElements=_useState2[0],setNumberOfElements=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.defaultCode),_useState4=Object(_home_travis_build_gossie_array_pipe_test_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),code=_useState4[0],setCode=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0),_useState6=Object(_home_travis_build_gossie_array_pipe_test_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),executionResult=_useState6[0],setExecutionResult=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1),_useState8=Object(_home_travis_build_gossie_array_pipe_test_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState7,2),time=_useState8[0],setTime=_useState8[1],callback=function callback(){console.debug("start building array");for(var array=[],i=1;i<=numberOfElements;i++)array.push("".concat(i));console.debug("array created with the numbers from 1 to ".concat(numberOfElements," as strings")),console.debug("start evaluating your code");var date1=new Date,result=eval(code);setExecutionResult(result);var date2=new Date,duration=date2.getTime()-date1.getTime();setTime(duration),console.debug("finished evaluating. result: ".concat(result,", time: ").concat(duration))};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,"Number of elements:"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{value:numberOfElements,onChange:function(e){return setNumberOfElements(e.target.value)}}))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,"Code:"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea",{cols:"50",rows:"10",value:code,onChange:function(e){return setCode(e.target.value)}}))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:callback},"Run"),executionResult&&react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_3__.a,{executionResult:executionResult,timeSpent:time}))}},6:function(e,_,t){"use strict";t.d(_,"a",(function(){return n}));var a=t(0),r=t.n(a);function n(e){return r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Execution result:"),r.a.createElement("td",null,"".concat(e.executionResult))),r.a.createElement("tr",null,r.a.createElement("td",null,"Time spent:"),r.a.createElement("td",null,e.timeSpent," ms (This is just the time that was needed to execute the above code. The rest of the time you've waited was used to create the array.)"))))}},7:function(e,_,t){e.exports=t(19)}},[[7,1,2]]]);
//# sourceMappingURL=main.c6a374e6.chunk.js.map