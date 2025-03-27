import "../styles/globals.css"
import Header from "../components/Header"
import logo from "../img/logo.png"

export default function Home () {
    return(
        <div>
            <Header image={logo} title="Doces" text="Home" icon="🍭" />
        </div>
    );
}