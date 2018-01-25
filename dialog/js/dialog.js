/*function Dialog() {
    this.name = ""
}
Dialog.prototype.init = function () {

}*/


//es5
// function Dialog () {
//     this.name = "name";
//     this.init();
// }
// Dialog.prototype.init = function () {
//     console.log(666);
// }

//es6
class Dialog{
    //构造函数
    constructor () {
       //实例属性
       this.name = 123;
       this.init();
    }
    //实例方法
    init () {
       console.log(666);
       console.log(this.name);
       //静态属性只能在类内部使用
       console.log(this.title);
    }
    //静态方法
    static hello () {
        console.log("hello world");
    }
}
//静态属性
Dialog.prototype.title = "this is dialog";
//静态方法只能被本身调用
Dialog.hello();
//Dialog是类
//dialog是实例对象
//new Dialog()是实例化(过程)
let dialog = new Dialog();
//dialog.init();
//实例对象下面的属性，叫做实例属性
console.log(dialog.name);