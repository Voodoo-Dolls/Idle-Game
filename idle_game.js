

let points = document.getElementById("points");
let cookie = document.getElementById("cookie");
let price = document.getElementById("cost");
let upgrade = document.getElementsByClassName("upgrade");

let clickPower = 1;
let score = 0;
let cost = 1;


cookie.addEventListener("click", ()=>{
    score = clickPower + score;
    points.innerHTML=score;

});

upgrade[0].addEventListener("click", ()=>{
        if( cost <= score){
            score = score - cost;
            cost = cost + Math.floor(cost*1.1);
            clickPower ++;
            points.innerHTML=score;
            price.innerHTML=cost;
        }
});


