const idade = parseFloat(prompt("Qual a sua idade?"));
const statusIdade = (idade >= 18) ? "Maior de idade" : "Menor de idade";

const statusRegistro = parseFloat(prompt("Você está registrado em nosso sistema? (Digite '1' para 'Sim' ou '0' para 'Não')"));

switch (statusRegistro) {
    case 1:
        console.log("Desejamos Boas-Vindas!");
        break;
    
    case 0:
        console.log("Por favor, complete seu registro conosco.");
        break;
    
    default:
        console.log("Status Desconhecido.");
        break;
};

if ((statusIdade === "Maior de idade") && (statusRegistro === 1)) {
    console.log("Acesso Poermitido e Completo.");
} else if ((statusIdade === "Maior de idade") || (statusRegistro === 1)) {
    console.log("Acesso Permitido, porém Limitado.");
} else {
    console.log("Acesso Negado.");
};