class Prato {
  name: string
  description: string
  image: string
  id: number
  price: number

  constructor(
    name: string,
    description: string,
    image: string,
    id: number,
    price: number
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.id = id
    this.price = price
  }
}

export default Prato
