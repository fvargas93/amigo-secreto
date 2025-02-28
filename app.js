// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    document.getElementById('resultado').innerHTML = '';
    if(nombre === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
        console.log(amigos);
        limpiarCaja();
        actualizaListaAmigos();
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function actualizaListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += '<li>' + amigos[i] + '</li>';
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Por favor, inserte al menos un amigo.');
    }
    else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        amigos = [];
        actualizaListaAmigos();
        document.getElementById('resultado').innerHTML = `El amigo secreto sorteado es ${amigoSorteado}`;
    }
}