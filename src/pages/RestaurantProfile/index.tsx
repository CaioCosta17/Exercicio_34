import React, { useState, useEffect } from 'react'

import { colors } from '../../styles'
import Logo from '../../assets/images/logo.png'
import Pizza from '../../assets/images/cardapio_pizza.png'
import Redes from '../../assets/images/redes_sociais.png'
import Banner from '../../assets/images/banner.png'
import Fundo from '../../assets/images/fundo.png'

export interface Dish {
  id: number
  name: string
  description: string
  price: number
  image: string
  porcao?: string
}

const banner = Banner
const pizza = Pizza
const logo = Logo

const headerBgPattern = Fundo
const redesSociais = Redes

const mockDishes: Dish[] = [
  {
    id: 101,
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    price: 60.9,
    image: pizza,
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 102,
    name: 'Pizza Pepperoni',
    description:
      'Uma explosão de sabor com o nosso pepperoni artesanal, queijo derretido e temperos frescos.',
    price: 75.5,
    image: pizza,
    porcao: 'de 2 a 3 pessoas'
  },
  {
    id: 103,
    name: 'Spaghetti à Carbonara',
    description:
      'O autêntico carbonara italiano com guanciale crocante, ovo, queijo pecorino e pimenta-do-reino.',
    price: 65.0,
    image: pizza,
    porcao: '1 pessoa'
  },
  {
    id: 104,
    name: 'Lasanha Bolonhesa',
    description:
      'Camadas de massa fresca, molho à bolonhesa rico e bechamel cremoso, gratinado com queijo parmesão.',
    price: 55.9,
    image: pizza,
    porcao: '1 pessoa'
  },
  {
    id: 105,
    name: 'Salada Caprese',
    description:
      'Tomates frescos, mussarela de búfala e manjericão, regados com azeite de oliva extra-virgem.',
    price: 40.0,
    image: pizza,
    porcao: '1 pessoa'
  },
  {
    id: 106,
    name: 'Tiramisu Clássico',
    description:
      'Sobremesa clássica com biscoitos savoiardi, café, mascarpone e um toque de cacau.',
    price: 35.0,
    image: pizza,
    porcao: '1 pessoa'
  }
]

const restaurantData = {
  category: 'Italiana',
  name: 'La Dolce Vita Trattoria',
  bannerImage: banner
}

const Footer = () => (
  <footer
    style={{
      backgroundColor: colors.lightBg,
      color: colors.primaryRed,
      textAlign: 'center',
      padding: '40px 0',
      fontSize: '10px'
    }}
  >
    <div
      className="container"
      style={{ margin: '0 auto', maxWidth: '1024px', padding: '0 16px' }}
    >
      <img src={logo} alt="eFood" style={{ marginBottom: '32px' }} />

      <div
        style={{
          margin: '24px 0',
          display: 'flex',
          justifyContent: 'center',
          gap: '8px'
        }}
      >
        <img
          src={redesSociais}
          alt="Instagram"
          style={{ width: '95px', height: '24px', cursor: 'pointer' }}
        />
      </div>

      <p style={{ fontSize: '10px', lineHeight: '14px' }}>
        A e-food é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </footer>
)

const Header: React.FC<{ isHome: boolean; cartCount: number }> = ({
  cartCount
}) => (
  <header
    style={{
      backgroundImage: `url(${headerBgPattern})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat',
      color: colors.primaryRed,
      padding: '24px 0',
      height: '180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '1024px',
        padding: '0 16px',
        width: '100%'
      }}
    >
      <a
        href="#"
        style={{
          textDecoration: 'none',
          color: colors.primaryRed,
          fontWeight: 'bold',
          fontSize: '18px'
        }}
      >
        Restaurantes
      </a>

      <img
        src={logo}
        alt="eFood"
        style={{
          height: '58px',
          width: '125px',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
      />

      <div style={{ fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
        {cartCount} produto(s) no carrinho
      </div>
    </div>
  </header>
)

const DishCard: React.FC<{
  dish: Dish
  onSelectDish: (dish: Dish) => void
}> = ({ dish, onSelectDish }) => (
  <div
    style={{
      backgroundColor: colors.primaryRed,
      color: colors.white,
      padding: '8px',
      maxWidth: '320px',
      width: '100%',
      borderRadius: '4px'
    }}
  >
    <img
      src={dish.image}
      alt={dish.name}
      style={{
        width: '100%',
        height: '180px',
        objectFit: 'cover',
        marginBottom: '8px',
        borderRadius: '4px'
      }}
    />
    <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '8px' }}>
      {dish.name}
    </h3>
    <p style={{ fontSize: '14px', lineHeight: '22px', marginBottom: '16px' }}>
      {dish.description.length > 90
        ? dish.description.substring(0, 87) + '...'
        : dish.description}
    </p>
    <button
      onClick={() => onSelectDish(dish)}
      style={{
        backgroundColor: colors.lightBg,
        color: colors.primaryRed,
        padding: '4px 6px',
        border: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '14px',
        width: '100%',
        borderRadius: '4px'
      }}
    >
      Mais detalhes
    </button>
  </div>
)

const CloseSVG = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9189 3.08112C11.9079 2.06734 10.6033 1.34241 9.17702 1.00282C7.75078 0.663229 6.26259 0.722512 4.88725 1.17646C3.51192 1.63041 2.3023 2.46328 1.4398 3.56588C0.577291 4.66849 0.098418 6.00938 0.0631671 7.40428C0.0279161 8.79917 0.438499 10.1601 1.23821 11.3195C2.03792 12.4789 3.19794 13.3857 4.5458 13.9392C5.89366 14.4927 7.37799 14.6672 8.84157 14.4449C10.3051 14.2227 11.6967 13.6125 12.8361 12.6713M12.9189 3.08112C13.9317 4.09459 14.6593 5.39956 14.9996 6.82586C15.34 8.25217 15.2806 9.74039 14.8267 11.1157C14.3727 12.491 13.54 13.7006 12.4374 14.5631C11.3348 15.4256 9.9939 15.9045 8.5990 15.9397C7.20411 15.975 5.84323 15.5644 4.68383 14.7647C3.52443 13.965 2.61763 12.805 2.06413 11.4571C1.51063 10.1092 1.33611 8.62489 1.55835 7.16131C1.78059 5.69774 2.39077 4.30611 3.332 3.16666"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.48535 5.48528L10.5146 10.5147"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.48535 10.5147L10.5146 5.48528"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

interface ModalProps {
  isOpen: boolean
  dish: Dish | null
  onClose: () => void
  onAddToCart: (dish: Dish) => void
}

const PurchaseModal: React.FC<ModalProps> = ({
  isOpen,
  dish,
  onClose,
  onAddToCart
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isOpen || !dish) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleAddToCart = () => {
    onAddToCart(dish)
    onClose()
  }

  const overlayStyle = {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '16px',
    boxSizing: 'border-box' as const
  }

  const modalContainerStyle = {
    maxWidth: '1024px',
    width: isMobile ? '95%' : '90%',
    position: 'relative' as const,
    backgroundColor: colors.primaryRed,
    padding: isMobile ? '16px' : '32px',
    borderRadius: '8px'
  }
  const modalContentStyle = {
    display: 'flex',
    color: colors.white,
    gap: isMobile ? '16px' : '24px',
    flexDirection: isMobile ? ('column' as const) : ('row' as const)
  }

  const imageStyle = {
    width: isMobile ? '100%' : '280px',
    height: isMobile ? '200px' : '280px',
    objectFit: 'cover' as const,
    borderRadius: '4px'
  }

  const textContentStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1
  }
  const titleStyle = { fontSize: '32px', fontWeight: 900, marginBottom: '16px' }
  const paragraphStyle = {
    fontSize: '14px',
    lineHeight: '22px',
    marginBottom: '16px'
  }
  const closeButtonStyle = {
    position: 'absolute' as const,
    top: '8px',
    right: '8px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    width: '16px',
    height: '16px',
    opacity: 0.8
  }
  const buttonAddToCartStyle = {
    backgroundColor: colors.lightBg,
    color: colors.primaryRed,
    padding: '8px 16px',
    border: 'none',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    maxWidth: isMobile ? '100%' : 'fit-content',
    alignSelf: 'flex-start' as const,
    borderRadius: '4px'
  }

  return (
    <div style={overlayStyle} onClick={handleOverlayClick}>
      <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} type="button" style={closeButtonStyle}>
          <CloseSVG />
        </button>
        <div style={modalContentStyle}>
          <img
            src={dish.image}
            alt={dish.name}
            style={imageStyle}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = pizza
            }}
          />
          <div style={textContentStyle}>
            <h4 style={titleStyle}>{dish.name}</h4>
            <p style={paragraphStyle}>
              A {dish.name} é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p style={paragraphStyle}>
              Serve:{' '}
              <strong>{dish.porcao ? dish.porcao : 'de 2 a 3 pessoas'}</strong>
            </p>
            <button style={buttonAddToCartStyle} onClick={handleAddToCart}>
              Adicionar ao carrinho - {formatPrice(dish.price)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const RestaurantProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [cartItems, setCartItems] = useState<Dish[]>([])

  const openModal = (dish: Dish) => {
    setSelectedDish(dish)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedDish(null)
  }

  const addToCart = (dish: Dish) => {
    setCartItems((prevItems) => [...prevItems, dish])
  }

  const appContainerStyle = {
    backgroundColor: colors.lightBg,
    color: colors.darkText,
    minHeight: '100vh',
    fontFamily: 'sans-serif'
  }

  const bannerWrapperStyle = {
    backgroundImage: `url(${restaurantData.bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '280px',
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1
  }

  const bannerOverlayStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2
  }

  const bannerContentStyle = {
    position: 'relative' as const,
    zIndex: 3,
    color: colors.white,
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'flex-start',
    padding: '24px 0',
    width: '100%',
    maxWidth: '1024px',
    margin: '0 auto',
    boxSizing: 'border-box' as const
  }

  const dishContainerWrapper = {
    padding: '80px 16px',
    maxWidth: '1024px',
    margin: '0 auto'
  }

  return (
    <div style={appContainerStyle}>
      <Header isHome={false} cartCount={cartItems.length} />

      <main>
        <div style={bannerWrapperStyle}>
          <div style={bannerOverlayStyle} />
          <div style={bannerContentStyle}></div>
        </div>

        <div style={dishContainerWrapper}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
              justifyItems: 'center' as const
            }}
          >
            {mockDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} onSelectDish={openModal} />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <PurchaseModal
        isOpen={isModalOpen}
        dish={selectedDish}
        onClose={closeModal}
        onAddToCart={addToCart}
      />
    </div>
  )
}

export default RestaurantProfile
