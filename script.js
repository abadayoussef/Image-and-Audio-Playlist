class StackAndQueue {
    constructor() {
        this.pointer = this.holder = this.peak = null;
    }
    add(data) {
        if (!this.peak) {
            this.pointer = this.holder = this.peak = new Element(data);
            return;
        }
        let temp = this.holder;
        this.holder = this.holder.next = new Element(data);
        this.holder.previous = temp;
    }
    dequeue() {
        if (this.pointer && this.pointer === this.peak) {
            this.pointer = this.peak.next;
        }
        if (this.peak && this.peak.next) {
            this.peak = this.peak.next;
            this.peak.previous = null;
        } else {
            this.pointer = this.holder = this.peak = null;
        }
    }
    pop() {
        if (this.holder && this.holder === this.pointer) {
            this.pointer = this.holder.previous;
        }
        if (this.holder && this.holder.previous) {
            this.holder = this.holder.previous;
            this.holder.next = null;
        } else {
            this.peak = this.pointer = null;
        }
    }
    next() {
        if (this.pointer && this.pointer.next) {
            this.pointer = this.pointer.next;
        }
    }
    previous() {
        if (this.pointer && this.pointer.previous) {
            this.pointer = this.pointer.previous;
        }
    }
    show() {
        if (this.pointer) {
            return this.pointer.data;
        }
        return {
            url: "NOImageAvailable.jpg",
            title: "No image in the list",
            disc: "please inser an image here to be added in the lest"
        };
    }
}
class Element {
    constructor(data, next, previous) {
        this.data = data;
        this.next = next || null;
        this.previous = previous || null;
    }
}
let list = new StackAndQueue();

function add() {
    let img = {
        url: document.getElementById("url-input").value,
        title: document.getElementById("title-input").value,
        disc: document.getElementById("disc-input").value
    }
    list.add(img);
    show();
    document.getElementById("url-input").value = "",
    document.getElementById("title-input").value = "",
    document.getElementById("disc-input").value = "";

}

function show() {
    document.getElementById("img").src = list.show().url || "NOImageAvailable.jpg";
    document.getElementById("title").innerHTML = list.show().title || "No title specified";
    document.getElementById("disc").innerHTML = list.show().disc ||"No discription specified";
}

function next() {
    list.next();
    show();
}

function previous() {
    list.previous();
    show();
}
function pop(){
    list.pop();
    show();
}
function dequeue(){
    list.dequeue();
    show();
}