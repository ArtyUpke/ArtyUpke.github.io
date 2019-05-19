"use strict";

let can, holst, xx, yy, size, speed, btn, pause;

window.onload = function() {
    btn = document.getElementById("btn");

    can = document.getElementById("can");
    holst = can.getContext("2d");

    pause = 0;

    btn.onclick = function() {
        if(pause === 0) {
            pause = 1;
        } else {
            pause = 0;
        }
    }

    function clearFon() {
        holst.clearRect(0, 0, 800, 600);
        holst.fillStyle = "#FF0000";
        holst.fillRect(0, 0, 800, 600);
    }

    clearFon();

    size = 50;
    xx = 100;
    yy = 200;

    function drawHero() {
        holst.fillStyle = "#00FF00";
        holst.fillRect(xx, yy, size, size);
    }

    drawHero();

    speed = 7;

    function moveHero() {
        xx = xx + speed;

        if(xx + size > 800) {
            speed = speed * (-1);
        }

        if(xx < 0) {
            speed = speed * (-1);
        }
    }

    setInterval(function() {
        if(pause === 0) {
            clearFon();
            moveHero();
            drawHero();
        }
    }, 50);
}







