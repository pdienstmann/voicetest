function verificaSeOChutePossuiUmValorValido(chute){

    if(chute.toLowerCase() == "sim"){
        document.body.innerHTML=`<h2>Uhuuuuuul 🥳</h2>
                                <h3></h3>
                                <img src="./frame.png">`;
    } else if(chute.toLowerCase() == "não") {
        elementoChute.innerHTML += ` <div>:(</div>
        <button id="jogar-novamente" class="btn-jogar">Tentar novamente</button>`;
    
    } else {
        elementoChute.innerHTML += ` <div>Meus IFs não têm essa resposta, tenta sim ou não 😂 kkkkkkkkk</div>
        <button id="jogar-novamente" class="btn-jogar">Tentar novamente</button>`;
    }

}


document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
