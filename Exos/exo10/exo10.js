let x= Number(prompt("Heure:"));
let y= Number(prompt("minute:"));
let z= Number(prompt("seconde:"));
if( z<59 && x>=0 && x<=23 ){

    alert(`${x}h${y}min${z+1}sec`)
}else if(z=59){

    alert(`${x}h${y+1}min${0}sec`)
}