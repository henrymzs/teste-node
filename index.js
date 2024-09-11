const { select } = require('@inquirer/prompts')

// Passo 1: Definir variáveis para o nome e a quantidade de experiência
let nome = "Capitão"; 
let experiencia = 9001; 
// Passo 2: Definir uma variável para armazenar o nível
let nivel;
// Passo 3: Usar uma estrutura de decisão para determinar o nível com base na experiência
if (experiencia < 1000) {
    nivel = "Ferro";
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = "Bronze";
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = "Prata";
} else if (experiencia >= 5001 && experiencia <= 7000) {
    nivel = "Ouro";
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = "Platina";
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = "Ascendente";
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = "Imortal";
} else if (experiencia >= 10001) {
    nivel = "Radiante";
}
// Passo 4: Exibir a mensagem com o nome do herói e o nível
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
