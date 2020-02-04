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
        return null;
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
let list2 = new StackAndQueue();

//load some images online in the list
list.add({
    url: "https://cdn.vox-cdn.com/thumbor/bBgejXeLy1mm1Nk1u4zallbrFYk=/0x0:1920x1080/1200x675/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/65642302/jbareham_191158_ply0958_decade_anime.0.jpg",
    title: "One Punch Man",
    disc: "The best new anime of the 2010s decade"
});
list.add({
    url: "https://assets3.thrillist.com/v1/image/2855064/size/gn-gift_guide_variable_c.jpg",
    title: "Demon Slayer",
    disc: "Best Anime of 2019: Top New Anime Series to Watch Right Now"
});
list.add({
    url: "https://www.monstersandcritics.com/wp-content/uploads/2019/09/Dr.-STONE-Season-2-release-date-Episode-24-ending-with-Stone-Wars-Dr.-STONE-manga-compared-to-the-anime-Spoilers.jpg",
    title: "Dr. Stone",
    disc: "Dr. STONE Season 2 release date: Anime sequel confirmed"
});
list.add({
    url: "https://vignette.wikia.nocookie.net/bf9e36bc-c8b7-4ccb-8f3e-e4f958cb86a0/scale-to-width-down/800",
    title: "My Hero Academi",
    disc: ""
});
//show the pre loaded images
show("image");


//load some songs those are exist online
list2.add({
    url: "https://opengameart.org/sites/default/files/wintervillage.ogg",
    title: "Winter Village",
    album: "RPG town theme"
});
list2.add({
    url: "https://opengameart.org/sites/default/files/jamuary2020_day27.ogg",
    title: "Bitter sweet-27",
    album: ""
});
list2.add({
    url: "https://opengameart.org/sites/default/files/Background%20Music%202.ogg",
    title: "The Ice Caves",
    album: "Background Music 2"
});
list2.add({
    url: "https://opengameart.org/sites/default/files/fromtheruins.ogg",
    title: "",
    album: ""
});

function add(type) {
    if (type === "image") {
        list.add({
            url: document.getElementById("url-input").value,
            title: document.getElementById("title-input").value,
            disc: document.getElementById("disc-input").value
        });
        show(type);
    } else if (type === "audio") {
        list2.add({
            url: document.getElementById("url-audio").value,
            title: document.getElementById("title-audio").value,
            album: document.getElementById("album-audio").value
        });
    }
}


function show(type) {
    if (type === "image") {
        if (list.show()) {
            document.getElementById("img").src = list.show().url || "NOImageAvailable.jpg";
            document.getElementById("title").innerHTML = list.show().title || "";
            document.getElementById("disc").innerHTML = list.show().disc || "";
        } else {
            document.getElementById("img").src = "NOImageAvailable.jpg";
            document.getElementById("title").innerHTML = "";
            document.getElementById("disc").innerHTML = "";
        }
    }
    if (type === "audio") {
        if (list2.show()) {
            document.getElementById("audio").src = list2.show().url || "";
            document.getElementById("audio-info").innerHTML = (list2.show().title || "No title") + " - " + (list2.show().album || "No album");
            document.getElementById("audio").play();
        } else {
            document.getElementById("audio").src = "";
            document.getElementById("audio-info").innerHTML = "No title - No album";
        }
    }
}

show("audio");
document.getElementById("audio").pause();

function next(type) {
    type === "image" ? list.next() : list2.next();
    show(type);
}

function previous(type) {
    type === "image" ? list.previous() : list2.previous();
    show(type);
}

function pop(type) {
    type === "image" ? list.pop() : list2.pop();
    show(type);
}

function dequeue(type) {
    type === "image" ? list.dequeue() : list2.dequeue();
    show(type);
}