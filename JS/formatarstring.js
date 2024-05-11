    //formata um número de telefone para: (DDD) 99999 - 9999
function formatarNumero(numeroContato) {
    const numeroLimpo = numeroContato.value.replace(/\D/g, ''); //limpa os caracter especial. ex: (), -, _
    const numeroFormatado = numeroLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 - $3'); //separa os grupos dos números (DDD = 2 caracter, 9+ primeira metad do número = 5 caracter e segunda parte do número = 4 caracter)
    input.value = numeroFormatado;
}
