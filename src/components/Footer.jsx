import { Link } from "react-router-dom";

const Footer = () => {
    return (<>
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-center">
            <Link className="navbar-brand" to="/">@2026 愛哆啦也愛手作</Link>
        </div>
    </nav>
    </>)
}

export default Footer;