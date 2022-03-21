(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Java.perform(function () {
    var interval = setInterval(function () {
        try {
            var ExamInfoParser_1 = Java.use("com.ciwong.epaper.modules.epaper.a.b$4");
            var WorkContents = Java.use("com.ciwong.epaper.modules.me.bean.WorkContents");
            clearInterval(interval);
            ExamInfoParser_1.success.implementation = function (info) {
                function process(o) {
                    var object = JSON.parse(JSON.stringify(o));
                    if (object.children.length === 0) {
                        var answers_1 = "\n\n\n";
                        object.options.forEach(function (option) {
                            if (option.isAnswer === 1) {
                                option.value.forEach(function (value) {
                                    answers_1 += value.body;
                                    answers_1 += "\n";
                                });
                            }
                            answers_1 += "\n";
                        });
                        object.trunk.body += answers_1;
                        return object;
                    }
                    else {
                        return Object.assign(object, {
                            children: object.children.map(function (child) {
                                return process(child);
                            }),
                        });
                    }
                }
                function ciwong(str) {
                    var object = JSON.parse(str);
                    return Object.assign(object, {
                        items: object.items.map(function (item) {
                            return Object.assign(item, {
                                questions: item.questions.map(function (question) {
                                    return process(question);
                                }),
                            });
                        }),
                    });
                }
                return ExamInfoParser_1.success.call(this, JSON.stringify(ciwong(info)));
            };
            WorkContents.getExamMode.implementation = function () {
                return 0;
            };
        }
        catch (e) {
            console.error(e);
        }
    }, 200);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNULElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN6QixJQUFJO1lBQ0EsSUFBTSxnQkFBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQzNCLHdDQUF3QyxDQUMzQyxDQUFDO1lBQ0YsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FDekIsZ0RBQWdELENBQ25ELENBQUM7WUFDRixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFeEIsZ0JBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxHQUFHLFVBQVUsSUFBWTtnQkFDMUQsU0FBUyxPQUFPLENBQUMsQ0FBTTtvQkFDbkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzdDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUM5QixJQUFJLFNBQU8sR0FBRyxRQUFRLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBVzs0QkFDL0IsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQ0FDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFVO29DQUM1QixTQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQztvQ0FDdEIsU0FBTyxJQUFJLElBQUksQ0FBQztnQ0FDcEIsQ0FBQyxDQUFDLENBQUM7NkJBQ047NEJBQ0QsU0FBTyxJQUFJLElBQUksQ0FBQzt3QkFDcEIsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksU0FBTyxDQUFDO3dCQUM3QixPQUFPLE1BQU0sQ0FBQztxQkFDakI7eUJBQU07d0JBQ0gsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTs0QkFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBVTtnQ0FDckMsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDOzRCQUFkLENBQWMsQ0FDakI7eUJBQ0osQ0FBQyxDQUFDO3FCQUNOO2dCQUNMLENBQUM7Z0JBRUQsU0FBUyxNQUFNLENBQUMsR0FBVztvQkFDdkIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDL0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTt3QkFDekIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBUzs0QkFDOUIsT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQ0FDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQUMsUUFBYTtvQ0FDeEMsT0FBQSxPQUFPLENBQUMsUUFBUSxDQUFDO2dDQUFqQixDQUFpQixDQUNwQjs2QkFDSixDQUFDO3dCQUpGLENBSUUsQ0FDTDtxQkFDSixDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCxPQUFPLGdCQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDOUIsSUFBSSxFQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQy9CLENBQUM7WUFDTixDQUFDLENBQUM7WUFFRixZQUFZLENBQUMsV0FBVyxDQUFDLGNBQWMsR0FBRztnQkFDdEMsT0FBTyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7U0FDTDtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtJQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNaLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIifQ==
