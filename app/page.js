import "../styles/globals.css"
import Header from "../components/Header"
import logo from "../img/logo.png"

export default function Home () {
    return(
        <div>
            <Header image={logo} title="La Douceur de Paris" text1="Home" text2="Destaques" text3="Categorias" text4="Contato" icon1="🔎" icon2="💗" icon3="🛒" icon4="👤" />
        </div>
    );
}