System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SayHello, helloObj;
    return {
        setters:[],
        execute: function() {
            SayHello = (function () {
                function SayHello() {
                    this.helloMessage = "Hello Everyone";
                }
                return SayHello;
            }());
            exports_1("SayHello", SayHello);
            helloObj = new SayHello();
            document.write(helloObj.helloMessage);
        }
    }
});
//# sourceMappingURL=main.js.map