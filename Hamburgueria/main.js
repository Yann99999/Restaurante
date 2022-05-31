
function exibeHamburguer(){
    porcao.style.display = 'none';
    bebida.style.display = 'none';
    sobremesa.style.display = 'none';
    hamburguer.style.display = 'grid';
}
function exibePorcao(){
    hamburguer.style.display = 'none';
    bebida.style.display = 'none';
    sobremesa.style.display = 'none';
    porcao.style.display = 'grid';
}
function exibeBebida(){
    hamburguer.style.display = 'none';
    porcao.style.display = 'none';
    sobremesa.style.display = 'none';
    bebida.style.display = 'grid';
}
function exibeSobremesas(){
    hamburguer.style.display = 'none';
    porcao.style.display = 'none';
    bebida.style.display = 'none';
    sobremesa.style.display = 'grid';
}


let $burguer = document.querySelector('#burguer');
let hamburguer = document.querySelector('.hamburguer');
$burguer.addEventListener('click', exibeHamburguer);

let $porcao = document.querySelector('#porcao');
let porcao = document.querySelector('.porcao');
$porcao.addEventListener('click', exibePorcao);


let $bebida = document.querySelector('#bebida');
let bebida = document.querySelector('.bebidas');
$bebida.addEventListener('click', exibeBebida);


let $sobremesa = document.querySelector('#sobremesa');
let sobremesa = document.querySelector('.sobremesa');
$sobremesa.addEventListener('click', exibeSobremesas);



window.sr = ScrollReveal({ reset: true });

sr.reveal('.hidden', { duration: 1100 });
sr.reveal('.container-promocoes', { duration: 1500 });


