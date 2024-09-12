// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque básico';
      }
      console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Guts', 35, 'guerreiro');
  heroi1.atacar();
  
  const heroi2 = new Heroi('Harry Poter', 1000, 'mago');
  heroi2.atacar();

  const heroi3 = new Heroi('Naruto', 1000, 'ninja');
  heroi3.atacar();
