(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38e93a07"],{"0bac":function(t,e,o){},"1dde":function(t,e,o){var n=o("d039"),r=o("b622"),i=o("2d00"),c=r("species");t.exports=function(t){return i>=51||!n((function(){var e=[],o=e.constructor={};return o[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"317a":function(t,e,o){"use strict";o("7eb2")},"31da":function(t,e,o){"use strict";o("6b0f")},"4de4":function(t,e,o){"use strict";var n=o("23e7"),r=o("b727").filter,i=o("1dde"),c=i("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,o){var n=o("1d80"),r=o("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),a=function(t){return function(e){var o=String(n(e));return 1&t&&(o=o.replace(c,"")),2&t&&(o=o.replace(s,"")),o}};t.exports={start:a(1),end:a(2),trim:a(3)}},"65f0":function(t,e,o){var n=o("861d"),r=o("e8b5"),i=o("b622"),c=i("species");t.exports=function(t,e){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?n(o)&&(o=o[c],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},"6b0f":function(t,e,o){},7156:function(t,e,o){var n=o("861d"),r=o("d2bb");t.exports=function(t,e,o){var i,c;return r&&"function"==typeof(i=e.constructor)&&i!==o&&n(c=i.prototype)&&c!==o.prototype&&r(t,c),t}},"74ae":function(t,e,o){"use strict";o("b4ad")},"7eb2":function(t,e,o){},8418:function(t,e,o){"use strict";var n=o("c04e"),r=o("9bf2"),i=o("5c6c");t.exports=function(t,e,o){var c=n(e);c in t?r.f(t,c,i(0,o)):t[c]=o}},a9e3:function(t,e,o){"use strict";var n=o("83ab"),r=o("da84"),i=o("94ca"),c=o("6eeb"),s=o("5135"),a=o("c6b6"),u=o("7156"),l=o("c04e"),d=o("d039"),f=o("7c73"),p=o("241c").f,v=o("06cf").f,m=o("9bf2").f,h=o("58a8").trim,b="Number",_=r[b],g=_.prototype,A=a(f(g))==b,y=function(t){var e,o,n,r,i,c,s,a,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=h(u),e=u.charCodeAt(0),43===e||45===e){if(o=u.charCodeAt(2),88===o||120===o)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(i=u.slice(2),c=i.length,s=0;s<c;s++)if(a=i.charCodeAt(s),a<48||a>r)return NaN;return parseInt(i,n)}return+u};if(i(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var N,x=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof x&&(A?d((function(){g.valueOf.call(o)})):a(o)!=b)?u(new _(y(e)),o,x):y(e)},T=n?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;T.length>I;I++)s(_,N=T[I])&&!s(x,N)&&m(x,N,v(_,N));x.prototype=g,g.constructor=x,c(r,b,x)}},b4ad:function(t,e,o){},b614:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Todo list")]),o("router-link",{attrs:{to:"/"}},[t._v("Home")]),o("AddTodo",{on:{newTodo:t.newTodo}}),o("div",{staticClass:"filter"},[o("p",[t._v("Filter:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filter=e.target.multiple?o:o[0]}}},[o("option",{attrs:{value:"All"}},[t._v("All")]),o("option",{attrs:{value:"Completed"}},[t._v("Completed")]),o("option",{attrs:{value:"Not completed"}},[t._v("Not completed")])])]),o("hr"),t.loading?o("Loader"):t.todos.length?o("TodoList",{attrs:{todos:t.filteredTodos},on:{removeTodo:t.removeTodo}}):o("p",[t._v("No todos")])],1)},r=[],i=(o("d3b7"),o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",t._l(t.todos,(function(e,n){return o("TodoItem",{attrs:{index:n,todo:e},on:{"remove-todo":t.removeTodo}})})),1)])}),c=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",[o("span",{class:{done:t.todo.done}},[o("input",{attrs:{type:"checkbox"},on:{change:function(e){t.todo.done=!t.todo.done}}}),o("strong",[t._v(t._s(t.index+1))]),t._v(" "+t._s(t._f("uppercase")(t.todo.title))+" ")]),o("button",{staticClass:"rm",on:{click:function(e){return t.$emit("remove-todo",t.todo.id)}}},[t._v("×")])])},a=[],u=(o("a9e3"),o("fb6a"),{props:{todo:{type:Object,required:!0},index:Number},filters:{uppercase:function(t){var e=t[0].toUpperCase()+t.slice(1);return e}}}),l=u,d=(o("ecca"),o("2877")),f=Object(d["a"])(l,s,a,!1,null,"0acb3d77",null),p=f.exports,v={props:["todos"],components:{TodoItem:p},methods:{removeTodo:function(t){this.$emit("removeTodo",t)}}},m=v,h=(o("dc12"),Object(d["a"])(m,i,c,!1,null,"08f282a2",null)),b=h.exports,_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrap"},[o("p",[t._v("Add item")]),o("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("button",{attrs:{type:"submit"}},[t._v("Add")])])])},g=[],A={data:function(){return{title:""}},methods:{onSubmit:function(){if(this.title){var t={id:Date.now(),title:this.title,done:!1};this.$emit("newTodo",t),this.title=""}}}},y=A,N=(o("31da"),Object(d["a"])(y,_,g,!1,null,"06bb2e67",null)),x=N.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"lds-hourglass"})},I=[],w=(o("74ae"),{}),E=Object(d["a"])(w,T,I,!1,null,null,null),C=E.exports,O={name:"App",data:function(){return{todos:[],loading:!0,filter:"All"}},mounted:function(){var t=this;fetch("https://jsonplaceholder.typicode.com/todos?_limit=3").then((function(t){return t.json()})).then((function(e){t.todos=e,t.loading=!1}))},computed:{filteredTodos:function(){return"All"===this.filter?this.todos:"Completed"===this.filter?this.todos.filter((function(t){return t.done})):"Not completed"===this.filter?this.todos.filter((function(t){return!t.done})):void 0}},components:{Loader:C,TodoList:b,AddTodo:x},methods:{removeTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},newTodo:function(t){this.todos.push(t)}}},S=O,$=(o("317a"),Object(d["a"])(S,n,r,!1,null,"6c802927",null));e["default"]=$.exports},b727:function(t,e,o){var n=o("0366"),r=o("44ad"),i=o("7b0b"),c=o("50c4"),s=o("65f0"),a=[].push,u=function(t){var e=1==t,o=2==t,u=3==t,l=4==t,d=6==t,f=7==t,p=5==t||d;return function(v,m,h,b){for(var _,g,A=i(v),y=r(A),N=n(m,h,3),x=c(y.length),T=0,I=b||s,w=e?I(v,x):o||f?I(v,0):void 0;x>T;T++)if((p||T in y)&&(_=y[T],g=N(_,T,A),t))if(e)w[T]=g;else if(g)switch(t){case 3:return!0;case 5:return _;case 6:return T;case 2:a.call(w,_)}else switch(t){case 4:return!1;case 7:a.call(w,_)}return d?-1:u||l?l:w}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},dc12:function(t,e,o){"use strict";o("e8f8")},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e8f8:function(t,e,o){},ecca:function(t,e,o){"use strict";o("0bac")},fb6a:function(t,e,o){"use strict";var n=o("23e7"),r=o("861d"),i=o("e8b5"),c=o("23cb"),s=o("50c4"),a=o("fc6a"),u=o("8418"),l=o("b622"),d=o("1dde"),f=d("slice"),p=l("species"),v=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!f},{slice:function(t,e){var o,n,l,d=a(this),f=s(d.length),h=c(t,f),b=c(void 0===e?f:e,f);if(i(d)&&(o=d.constructor,"function"!=typeof o||o!==Array&&!i(o.prototype)?r(o)&&(o=o[p],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return v.call(d,h,b);for(n=new(void 0===o?Array:o)(m(b-h,0)),l=0;h<b;h++,l++)h in d&&u(n,l,d[h]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-38e93a07.efa4d429.js.map