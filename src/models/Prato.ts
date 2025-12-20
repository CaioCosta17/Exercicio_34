class Prato {
  nome: string
  descricao: string
  foto: string
  id: number
  preco: number

  constructor(
    nome: string,
    descricao: string,
    foto: string,
    id: number,
    preco: number
  ) {
    this.nome = nome
    this.descricao = descricao
    this.foto = foto
    this.id = id
    this.preco = preco
  }
}

export default Prato
