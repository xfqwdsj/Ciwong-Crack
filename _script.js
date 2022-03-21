(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Java.perform((() => {
  const e = setInterval((() => {
    const n = Java.use("com.ciwong.epaper.modules.epaper.a.b$4"), s = Java.use("com.ciwong.epaper.modules.me.bean.WorkContents");
    clearInterval(e), n.success.implementation = function(e) {
      if ("com.ciwong.epaper.modules.epaper.bean.ListenspeakExam" === this.b.value.getTypeName()) {
        const s = e => {
          const n = JSON.parse(JSON.stringify(e));
          if (0 === n.children.length) {
            let e = "\n\n\n";
            return n.options.forEach((n => {
              1 === n.isAnswer && n.value.forEach((n => {
                e += n.body, e += "\n";
              })), e += "\n";
            })), n.trunk.body += e, n;
          }
          return Object.assign(n, {
            children: n.children.map((e => s(e)))
          });
        }, t = e => {
          const n = JSON.parse(e);
          return Object.assign(n, {
            items: n.items.map((e => Object.assign(e, {
              questions: e.questions.map((e => s(e)))
            })))
          });
        };
        return n.success.call(this, JSON.stringify(t(e)));
      }
      return n.success.call(this, e);
    }, s.getExamMode.implementation = function() {
      return 0;
    };
  }), 200);
}));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEtBQUssU0FBUTtFQUNULE1BQU0sSUFBVyxhQUFZO0lBQ3pCLE1BQU0sSUFBaUIsS0FBSyxJQUN4QiwyQ0FFRSxJQUFlLEtBQUssSUFDdEI7SUFFSixjQUFjLElBRWQsRUFBZSxRQUFRLGlCQUFpQixTQUFVO01BQzlDLElBRUksNERBREEsS0FBSyxFQUFFLE1BQU0sZUFFZjtRQUNFLE1BQU0sSUFBVztVQUNiLE1BQU0sSUFBUyxLQUFLLE1BQU0sS0FBSyxVQUFVO1VBQ3pDLElBQStCLE1BQTNCLEVBQU8sU0FBUyxRQUFjO1lBQzlCLElBQUksSUFBVTtZQVdkLE9BVkEsRUFBTyxRQUFRLFNBQVM7Y0FDSSxNQUFwQixFQUFPLFlBQ1AsRUFBTyxNQUFNLFNBQVM7Z0JBQ2xCLEtBQVcsRUFBTSxNQUNqQixLQUFXO21CQUduQixLQUFXO2lCQUVmLEVBQU8sTUFBTSxRQUFRLEdBQ2Q7O1VBRVAsT0FBTyxPQUFPLE9BQU8sR0FBUTtZQUN6QixVQUFVLEVBQU8sU0FBUyxLQUFLLEtBQzNCLEVBQVE7O1dBTWxCLElBQVU7VUFDWixNQUFNLElBQVMsS0FBSyxNQUFNO1VBQzFCLE9BQU8sT0FBTyxPQUFPLEdBQVE7WUFDekIsT0FBTyxFQUFPLE1BQU0sS0FBSyxLQUNyQixPQUFPLE9BQU8sR0FBTTtjQUNoQixXQUFXLEVBQUssVUFBVSxLQUFLLEtBQzNCLEVBQVE7Ozs7UUFPNUIsT0FBTyxFQUFlLFFBQVEsS0FDMUIsTUFDQSxLQUFLLFVBQVUsRUFBTzs7TUFHOUIsT0FBTyxFQUFlLFFBQVEsS0FBSyxNQUFNO09BRzdDLEVBQWEsWUFBWSxpQkFBaUI7TUFDdEMsT0FBTzs7TUFFWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIn0=
