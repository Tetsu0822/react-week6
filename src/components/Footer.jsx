import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-center">
            <Link className="navbar-brand" to="/">
            <img src="/Handmade_Bow.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top me-2" />
            @2026 愛哆啦也愛手作</Link>
        </div>
    </nav>
    </>)
}

export default Footer;