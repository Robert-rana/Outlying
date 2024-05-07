

let startcount = 100;

let count1 = setInterval(() =>{
    document.querySelector("#h2").innerHTML = ++startcount;
    if (startcount === 1730){
        clearInterval(count1);
    }
});

let startcount2 = 100;

let count2 = setInterval(() =>{
    document.querySelector("#h3").innerHTML = ++startcount2;
    if (startcount2 === 780){
        clearInterval(count2);
    }
});

let startcount3 = 100;

let count3 = setInterval(() =>{
    document.querySelector("#h4").innerHTML = ++startcount3;
    if (startcount3 === 512){
        clearInterval(count3);
    }
});

let startcount4 = 100;

let count4 = setInterval(() =>{
    document.querySelector("#h5").innerHTML = ++startcount4;
    if (startcount4 === 612){
        clearInterval(count4);
    }
});

// --about page--


let startcount6 = 100;

let count6 = setInterval(() =>{
    document.querySelector("#h6").innerHTML = ++startcount6;
    if (startcount6 === 1730){
        clearInterval(count6);
    }
});

let startcount7 = 100;

let count7 = setInterval(() =>{
    document.querySelector("#h7").innerHTML = ++startcount7;
    if (startcount7 === 730){
        clearInterval(count7);
    }
});

let startcount8 = 10;

let count8 = setInterval(() =>{
    document.querySelector("#h8").innerHTML = ++startcount8;
    if (startcount8 === 30){
        clearInterval(count8);
    }
});





$('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: false,
    dots: true,
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});