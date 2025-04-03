import "../styles/home.css"
import Header from "../components/Header"
import logo from "../img/logo.png"
import Cards from "../components/Cards";
import doce1 from "../img/card1.jpg";
import Categoria from "../components/Categoria";
import doce1 from "../img/doce01.jpg";
import doce2 from "../img/doce02.jpg";
import doce3 from "../img/card3.jpg";
import doce4 from "../img/card4.jpg";
import doce5 from "../img/card5.jpg";

const card = [
  {
    img: doce1,
    title: "Macaron",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    description: "Macaron de morango com chocolate branco",
    texticon: "❤  🛒"
  },
  {
    img: doce2,
    title: "Bolo",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    description: "Bolo de chocolate com recheio de brigadeiro",
    texticon: "❤  🛒"
  },
  {
    img: doce3,
    title: "Macaron",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    description: "Macaron de morango com chocolate branco",
    texticon: "❤  🛒"
  },
  {
    img: doce5,
    title: "Bolo",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    description: "Bolo de chocolate com recheio de brigadeiro",
    texticon: "❤  🛒"
  }
];

export default function Home() {
  return (
    <div className="container">
      <Header image={logo} title="La Douceur de Paris" text1="Home" text2="Destaques" text3="Categorias" text4="Contato" icon1="🔎" icon2="💗" icon3="🛒" icon4="👤" />
      
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

    </div>
  );
}