import Nav from "./Nav";
import "../assets/styles/layout.scss"


export default function Layout({ children }) {
    return (
        <>
        <Nav />

        <main>
            {children}
        </main>
        </>
    )
}