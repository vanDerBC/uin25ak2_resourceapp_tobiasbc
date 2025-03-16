/** Importerer inn Nav-komponenten for å kunne sette den inn i Layout-komponenten */
import Nav from "./Nav";
import "../assets/styles/layout.scss"


export default function Layout({ children }) {
    return (
        <>
        {/* Henter Nav-komponente */}
        <Nav />

        <main>
            {children}
        </main>
        </>
    )
}