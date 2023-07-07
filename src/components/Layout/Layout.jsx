import { Outlet } from "react-router-dom";
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <Nav />
            <main className="app-wrapper-content">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export {
    Layout
};
