
let usuario=document.getElementById('usurio');
let comentario=document.getElementById('comentario');
let errorA=document.getElementById('errorA');
let errorB=document.getElementById('errorB');
let subir=document.getElementById('comentar');

subir.addEventListener('click',(evento)=>{
    if(usuario.value==""){
        errorA.innerHTML+=`campo hobligatorio`;
        errorA.style.color="red";
        errorA.style.fontFamily="sans-serif";
        evento.preventDefault();   
    };
    if(comentario.value==""){
        errorA.innerHTML+=`campo hobligatorio`;
        errorA.style.color="red";
        errorA.style.fontFamily="sans-serif";
        evento.preventDefault();   
    };
});