export class SayHello {
    helloMessage = null;
    constructor(){
        this.helloMessage = "Hello Everyone";
    }


    
}

var helloObj = new SayHello();

document.write(helloObj.helloMessage);
