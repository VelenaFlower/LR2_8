var a = document.getElementById('bb1');
    a.onmouseover = function () {
    a.style.color = "red";
    };

function font() {
    var b = document.getElementById('bb2');
    b.style.fontSize = "30px";
}

function retim() {
    document.getElementById('im1').src='images/img2.jpg';
}

function rettx() {
    var c = document.getElementById('pp');
    c.innerHTML = "<img src='images/img3.jpg'/>";
}

var d = document.getElementById('im2');
    d.onmouseover = function () {
    d.style.width = "300px";
    };
    d.onmouseout = function () {
    d.style.width = "250px";
};

var r = document.getElementById("ppp");
    r.ondblclick = function () {
    r.style.border = "2px solid blue";
};
