class Dialog {
    //构造函数
    constructor(title, content) {
        this.title = title || "标题";
        this.content = content || "今天是个好日子!";
        this.init();
    }
    //实例方法
    init() {
        this.createWrap();
    }
    hide () {
        let oDiv = document.querySelector(".dialog");
        let oMark = document.querySelector(".mark");
        oDiv.style.display = "none";
        oMark.style.display = "none";
    }
    addEvent() {
        let oSpan = document.querySelector(".spans");
        let oBtn1 = document.querySelector(".btn1");
        let oBtn2 = document.querySelector(".btn2");
        let that = this;
        /*oSpan.onclick = function () {
            that.hide();
        }*/
        oSpan.addEventListener("click", (event) => {
            this.hide();
        })
        oBtn1.addEventListener("click", (event) => {
            this.hide();
        })
        oBtn2.addEventListener("click", (event) => {
            this.hide();
        })
        /*oSpan.addEventListener("click", function () {
            that.hide();
        })*/
    }
    createButton(txt) {
        let btn = document.createElement("button");
        btn.innerHTML = txt;
        btn.className = "btn1";
        return btn;
    }
    createButton2(txt2) {
        let btn2 = document.createElement("button");
        btn2.innerHTML = txt2;
        btn2.className = "btn2";
        return btn2;
    }
    createTitle() {
        let ol = document.createElement("ol");
        let spans = document.createElement("span");
        ol.className = "dialog-title";
        spans.className = "spans";
        spans.innerHTML = "×";
        ol.innerHTML = this.title;
        ol.append(spans);
        return ol;
    }
    createContent() {
        let ul = document.createElement("ul");
        let btnSuccess = this.createButton("确定");
        let btn2 = this.createButton2("取消");
        ul.className = "dialog-content";
        ul.innerHTML = this.content;
        ul.append(btnSuccess);
        ul.append(btn2);
        return ul;
    }
    createWrap() {
        let oMark = document.createElement("div");
        let oDiv = document.createElement("div");
        let oTit = this.createTitle();
        let oCon = this.createContent();
        oMark.className = "mark";
        oDiv.className = "dialog";
        oDiv.append(oTit);
        oDiv.append(oCon);
        oMark.append(oDiv);
        document.body.append(oMark);
        //this.hide();
        this.addEvent();
    }
}
let dialog = new Dialog();