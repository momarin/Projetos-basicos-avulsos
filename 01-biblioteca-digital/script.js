class Acervo {
  // Atributo
  #livros;
  constructor() {
    this.#livros = [];
  }
  adicionar(livro) {
    if (!this.#livros.includes(livro)) {
      this.#livros.push(livro);
      alert(`📚 "${livro}" adicionado com sucesso!`);
    } else {
      alert(`❌ "${livro}" já está no acervo`);
    }
  }
  emprestar(livro) {
    if (this.#livros.includes(livro)) {
      //verifica se existe no acervo
      this.#livros = this.#livros.filter((elemento) => elemento !== livro);
      alert(`📤 "${livro}" emprestado com sucesso!`);
    } else {
      alert(`❌ "${livro}" está indisponível`);
    }
  }
  devolver(livro) {
    if (!this.#livros.includes(livro)) {
      this.#livros.push(livro);
      alert(`📥 "${livro}" devolvido com sucesso!`);
    } else {
      alert(`❌ "${livro}" já está no acervo`);
    }
  }

  get totalLivros() {
    return this.#livros.length;
  }
}

class Biblioteca {
  constructor(acervo) {
    this.acervo = acervo;
  }

  adicionar() {
    const nomeLivro = document.getElementById("nomeLivro").value;
    this.acervo.adicionar(nomeLivro);
    this.atualizarInterface();
  }
  emprestar() {
    const nomeLivro = document.getElementById("livroEmprestar").value;
    this.acervo.emprestar(nomeLivro);
    this.atualizarInterface();
  }

  devolver() {
    const nomeLivro = document.getElementById("livroDevolver").value;
    this.acervo.devolver(nomeLivro);
    this.atualizarInterface();
  }

  atualizarInterface() {
    document.getElementById("livrosDisponiveis").textContent =
      this.acervo.totalLivros;

    document.getElementById("nomeLivro").value = "";
    document.getElementById("livroEmprestar").value = "";
    document.getElementById("livroDevolver").value = "";
  }
}
const acervo = new Acervo();
const biblioteca = new Biblioteca(acervo);
/*
Biblioteca digital


*/
