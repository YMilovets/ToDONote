(this.webpackJsonpnotes_to_do=this.webpackJsonpnotes_to_do||[]).push([[0],{21:function(t,e,s){},23:function(t,e,s){"use strict";s.r(e);var c=s(0),n=s.n(c),a=s(6),i=s.n(a),o=s(3),r=s(4);s(21);var l=s(1);function d(t){var e=Object(c.useState)(!1),s=Object(o.a)(e,2),n=s[0],a=s[1],i=t.isEdit?" form-notes--active":"",r=n?" form-notes__text--alert":"",d=Object(c.useRef)();return Object(l.jsx)("div",{className:"form-notes ".concat(i),children:Object(l.jsxs)("form",{className:"form-notes-wrap",children:[n?Object(l.jsx)("p",{className:"msg-alert",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u0432\u0432\u043e\u0434\u0430 \u043d\u043e\u0432\u043e\u0439 \u0437\u0430\u0434\u0430\u0447\u0438"}):"",Object(l.jsx)("textarea",{onChange:function(){a(!1)},ref:d,className:"form-notes__text ".concat(r),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(l.jsxs)("div",{className:"form-notes-manage",children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),t.setIsEdit(!1),a(!1),d.current.value=""},className:"form-notes__btn form-notes__btn--close",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(l.jsx)("button",{onClick:function(e){var s=d.current.value.trim(),c=t.idPos;e.preventDefault(),s.length>0?(a(!1),t.dispatch(function(t,e,s){return{type:"SET_NOTE",payload:{result:t,id:e,checked:s}}}(s,c,!1)),t.dispatch({type:"SET_NEW_ID"}),t.setIsEdit(!1),d.current.value=""):a(!0)},className:"form-notes__btn form-notes__btn--add",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})})}function j(t){var e=Object(c.useRef)();return Object(l.jsx)("ul",{className:"list-to-do",children:t.list.map((function(s,c){return Object(l.jsx)("li",{onClick:function(e){!function(e,s){if(e.target.classList.contains("list-to-do__check")){var c=s.id,n=!s.checked;t.dispatch(function(t,e){return{type:"CHECK_TODO_NOTE",payload:{id:t,checked:e}}}(c,n))}}(e,s)},className:"list-to-do__elem",children:Object(l.jsxs)("label",{className:"list-to-do__label",children:[Object(l.jsx)("input",{ref:e,className:"list-to-do__check",type:"checkbox",defaultChecked:s.checked}),Object(l.jsxs)("div",{className:"list-to-do__text-wrap",children:[Object(l.jsx)("div",{className:"list-to-do__checkbox"}),Object(l.jsx)("span",{className:"list-to-do__text",children:s.result})]})]})},c)}))})}var u=s(2);function b(t){var e=Object(c.useState)(!1),s=Object(o.a)(e,2),n=s[0],a=s[1],i=t.isUpdate?" form-notes--active":"",r=n?" form-notes__text--alert":"",d=Object(c.useRef)();d.current&&(d.current.value=t.item);return Object(l.jsx)("div",{className:"form-notes ".concat(i),children:Object(l.jsxs)("form",{className:"form-notes-wrap",children:[n?Object(l.jsx)("p",{className:"msg-alert",children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430 \u0437\u0430\u0434\u0430\u0447\u0438"}):"",Object(l.jsx)("textarea",{onChange:function(){a(!1)},type:"text",ref:d,className:"form-notes__text ".concat(r),defaultValue:t.item}),Object(l.jsxs)("div",{className:"form-notes-manage",children:[Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),a(!1),t.setIsUpdate(!1)},className:"form-notes__btn form-notes__btn--close",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),Object(l.jsx)("button",{onClick:function(e){var s=d.current.value.trim(),c=t.id,n=t.itemNote.checked;e.preventDefault(),s.length>0?(a(!1),t.dispatch(function(t,e,s){return{type:"UPDATE_NOTE",payload:{result:t,id:e,checked:s}}}(s,c,n)),t.setIsUpdate(!1)):a(!0)},className:"form-notes__btn form-notes__btn--add",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})}function O(t){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{className:"list-to-do",children:t.list.map((function(e,s){return Object(l.jsx)("li",{className:"list-to-do__elem",children:Object(l.jsxs)("label",{className:"list-to-do__label",children:[Object(l.jsx)("input",{className:"list-to-do__check",type:"checkbox",defaultChecked:e.checked,disabled:!0}),Object(l.jsxs)("div",{className:"list-to-do__text-wrap",children:[Object(l.jsx)("div",{onClick:function(){return s=e.id,t.dispatch(function(t){return{type:"DELETE_NOTE",payload:t}}(s)),void(t.list.length-1||t.setEditMode(!1));var s},className:"list-to-do__remove"}),Object(l.jsx)("span",{onClick:function(){return s=e.id,t.setIsUpdate(!0),t.setID(s),void t.setItemNote(t.list.find((function(t){return t.id===s})));var s},className:"list-to-do__text",children:e.result})]})]})},s)}))}),Object(l.jsx)(b,Object(u.a)(Object(u.a)({},t),{},{item:t.itemNote.result}))]})}function m(t){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{className:"header__title",children:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"}),t.list.length>0&&Object(l.jsx)("button",{onClick:t.onEditMode,className:"edit-notes",children:t.stateEditBtn})]})}var f=function(){var t=Object(r.b)(),e=Object(r.c)((function(t){return t.addNoteReducer.listNotes})),s=Object(r.c)((function(t){return t.addNoteReducer.id})),n=Object(c.useState)(!1),a=Object(o.a)(n,2),i=a[0],u=a[1],b=Object(c.useState)(!1),f=Object(o.a)(b,2),h=f[0],_=f[1],p=Object(c.useState)(!1),N=Object(o.a)(p,2),x=N[0],v=N[1],E=Object(c.useState)(0),k=Object(o.a)(E,2),g=k[0],y=k[1],C=Object(c.useState)({}),T=Object(o.a)(C,2),D=T[0],I=T[1],S=x?"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c":"\u041f\u0440\u0430\u0432\u0438\u0442\u044c";return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(m,{list:e,onEditMode:function(){v(!x)},stateEditBtn:S}),e.length?x?Object(l.jsx)(O,{isUpdate:h,id:g,list:e,dispatch:t,itemNote:D,setItemNote:I,setEditMode:v,setIsUpdate:_,setID:y}):Object(l.jsx)(j,{list:e,dispatch:t}):Object(l.jsx)("p",{className:"msg-alert",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447 \u043f\u0443\u0441\u0442"}),x?"":Object(l.jsx)("button",{onClick:function(){u(!0)},className:"add-note"}),Object(l.jsx)(d,{isEdit:i,dispatch:t,list:e,setIsEdit:u,idPos:s})]})},h=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(e){var s=e.getCLS,c=e.getFID,n=e.getFCP,a=e.getLCP,i=e.getTTFB;s(t),c(t),n(t),a(t),i(t)}))},_=s(8),p=s(12),N={listNotes:[],id:0};var x=Object(_.a)({addNoteReducer:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"SET_NEW_ID":return Object(u.a)(Object(u.a)({},e),{},{id:e.id+1});case"SET_NOTE":return Object(u.a)(Object(u.a)({},e),{},{listNotes:[].concat(Object(p.a)(e.listNotes),[Object(u.a)({},s.payload)])});case"DELETE_NOTE":return t=e.listNotes.filter((function(t){return t.id!==s.payload})),Object(u.a)(Object(u.a)({},e),{},{listNotes:t});case"CHECK_TODO_NOTE":return t=e.listNotes.map((function(t){return t.id===s.payload.id&&(t.checked=s.payload.checked),t})),Object(u.a)(Object(u.a)({},e),{},{listNotes:t});case"UPDATE_NOTE":return t=e.listNotes.map((function(t){return t.id===s.payload.id&&(t.result=s.payload.result),t})),Object(u.a)(Object(u.a)({},e),{},{listNotes:t});default:return e}}}),v=x,E=Object(_.b)(v);i.a.render(Object(l.jsx)(r.a,{store:E,children:Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})})}),document.getElementById("root")),h()}},[[23,1,2]]]);
//# sourceMappingURL=main.3723b864.chunk.js.map