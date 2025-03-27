import "../styles/home.css"
import Header from "../components/Header"
import logo from "../img/logo.png"
import Cards from "../components/Cards";
import doce1 from "../img/doce01.jpg";
import doce2 from "../img/doce02.jpg";

const card = [
  {
    img: doce1,
    title: "Macaron",
    text: "Por: La Doucer de Paris",
    icon: "⭐⭐⭐",
    valor: "R$ 25,00",
    descricao: "Macaron de morango com chocolate branco",
    texticon: "❤  🛒"
  },
  {
    img: doce2,
    title: "Bolo",
    text: "Por: Confeitaria da Maria",
    icon: "⭐⭐⭐⭐",
    valor: "R$ 30,00",
    descricao: "Bolo de chocolate com recheio de brigadeiro",
    texticon: "❤  🛒"
  }
];

export default function Home() {
  return (
    <div>
      <Header image={logo} title="Doces" text="Home" icon="🍭" />

      <div className="cardsLine">
        {card.map((card) => (
          <Cards
            img={card.img}
            title={card.title}
            text={card.text}
            icon={card.icon}
            valor={card.valor}
            descricao={card.descricao}
          />
        ))}
      </div>

    </div>
  );
}