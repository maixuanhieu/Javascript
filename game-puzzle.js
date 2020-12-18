let a = [-1, -2, -3];



let pic = ["image/picture1 (800x600).png","image/picture2 (800x600).png","image/picture3 (800x600).png"];
function change() {
    var random = Math.floor(Math.random() * pic.length) +1;
    document.getElementById("pic1").src = "image/picture" + random + " (800x600).png";
}


let manh1 = ["image/picture1a.png", "image/picture2a.png", "image/picture3a.png"];
function change1(){
    var random1 = Math.floor(Math.random() * manh1.length) +1;
    document.getElementById("manh1").src = "image/picture" + random1 + "a.png"; 
    a[0] = random1;
    check();
}

let manh2 = ["image/picture1b.png", "image/picture2b.png", "image/picture3b.png"];
function change2(){
    var random2 = Math.floor(Math.random() * manh2.length) +1;
    document.getElementById("manh2").src = "image/picture" + random2 + "b.png"; 
    a[1] = random2;
    check();
}

let manh3 = ["image/picture1c.png", "image/picture2c.png", "image/picture3c.png"];
function change3(){
    var random3 = Math.floor(Math.random() * manh3.length) +1;
    document.getElementById("manh3").src = "image/picture" + random3 + "c.png"; 
    a[2] = random3;
    check();
}


function check(){
    if ((a[0] == a[1]) && (a[0] == a[2]))
        alert("Bạn đã ghép hình đúng!!!");
}

