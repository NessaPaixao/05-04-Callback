function ALERTAVERMELHO(nome){
    alert(`${nome}, VOCÊ ESTÁ SENDO PROCURADO PELA POLICIA!!!`)
}

function nomePessoa(callback){
    let nome = prompt("Digite seu nome:")
    callback(nome);
}

nomePessoa(ALERTAVERMELHO);