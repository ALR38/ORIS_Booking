import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function MainLayout({ children }) {
    return (
        <div>
            <header><Header /></header>
            <main>{children}</main>
            <footer><Footer /></footer>
        </div>
    );
}

export default MainLayout;
