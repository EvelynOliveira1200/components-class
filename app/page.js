import "../styles/home.css"
import Header from "../components/Header"
import logo from "../img/logo.png"
import Cards from "../components/Cards";
import Categoria from "../components/Categoria";
import Banner from "../components/Banner";
import doce1 from "../img/cards01.jpg";
import doce2 from "../img/card02.jpg";
import doce3 from "../img/card03.jpg";
import doce4 from "../img/card04.jpg";
import novidade1 from "../img/novidade01.jpg";
import novidade2 from "../img/novidade2.jpg";
import novidade3 from "../img/novidade3.jpg";
import novidade4 from "../img/novidade4.jpg";


const card = [
  {
    img: doce1,
    title: " Macaron de Morango",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    description: " Macarons crocantes com recheio cremoso de morango.",
    texticon: "❤  🛒"
  },
  {
    img: doce2,
    title: " Cake Pop Rosé",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    description: "Mini bolos no palito, banhados em chocolate e enfeitados com flores.",
    texticon: "❤  🛒"
  },
  {
    img: doce3,
    title: "Oreo Royale",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    description: "Biscoitos recheados cobertos com chocolate e decorados com rosas.",
    texticon: "❤  🛒"
  },
  {
    img: doce4,
    title: "Donuts de Luxo",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    description: "Donuts macios com cobertura e confeitos sofisticados.",
    texticon: "❤  🛒"
  }
];
const novidades = [
  {
    img: novidade1,
    title: "Cone Encantado",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    description: "Bolo no cone com chocolate branco ou rosa.",
    texticon: "❤  🛒"
  },
  {
    img: novidade2,
    title: "Coração de Avelã",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    description: "Brownie com mousse de avelã e chocolate.",
    texticon: "❤  🛒"
  },
  {
    img: novidade3,
    title: "Mini Churros de Tentação",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    description: "Churros com açúcar, canela e creme doce.",
    texticon: "❤  🛒"
  },
  {
    img: novidade4,
    title: "Red Velvet dos Sonhos",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    description: "Bolo Red Velvet com cheesecake e frutas vermelhas.",
    texticon: "❤  🛒"
  }
];

export default function Home() {
  return (
    <div className="container">
      <Header image={logo} title="La Douceur de Paris" text1="Home" text2="Destaques" text3="Categorias" text4="Contato" icon1="🔎" icon2="💗" icon3="🛒" icon4="👤" />

      <h1 className="destaques">Destaques da Semana</h1>      
      <div className="cardsLine">
        {card.map((card) => (
          <Cards
            img={card.img}
            title={card.title}
            text={card.text}
            icon={card.icon}
            valor={card.valor}
            description={card.description}
            texticon={card.texticon}
          />
        ))}
      </div>

      <section className="sectionCategoria">
        <Categoria icon="🎂" type="Bolos"/>
        <Categoria icon="🧁" type="Cupcakes"/>
        <Categoria icon="🍧" type="Sorvetes"/>
        <Categoria icon="🧋" type="Milk Shake"/>
        <Categoria icon="🍪" type="Cookies"/> 
        <Categoria icon="🍰" type="Tortas"/>
        <Categoria icon="🥤" type="Bebidas"/>
      </section>


      <h1 className="novidades">Novidades</h1>
      <div className="cardsLine">
        {novidades.map((card) => (
          <Cards
            img={card.img}
            title={card.title}
            text={card.text}
            icon={card.icon}
            valor={card.valor}
            description={card.description}
            texticon={card.texticon}
          />
        ))}
      </div>

      <div className="divBanner">
        <Banner title="Fique por dentro das nossas novidades!" text="Seja o primeiro a receber ofertas exclusivas, novidades deliciosas e promoções especiais em nosso cardápio."/>
      </div>

    </div>
  );
}