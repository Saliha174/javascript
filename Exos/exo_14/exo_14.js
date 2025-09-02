let img =["img/bcg-0.jpg", "img/bcg-1.jpg", "img/bcg-2.jpg","img/bcg-3.jpg"]
// console.log(img[2]);
let i =0

function next(x){
     i = i+x;
     if (i<0){
        i= img.length - 1;

     }
     if( i>img.length -1){
        i=0;

     }


    
    document.querySelector('.images').style.background = `url(${img[i]}) center/cover no-repeat`;
   
}
console.log(img[1]);

// let test =document.getElementsByClassName('images').style.background = "url('img\bcg-1.jpg')";
// console.log(test);