import { Outlet, Link } from "react-router";

const FrontendLayout = () => {
    return (
        <div>
            <header>
                <ul className="nav">
                    <li className="nav-item"><Link className="nav-link" to="/">首頁</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/product">產品頁面</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/cart">購物車頁面</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/checkout">結帳頁面</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/login">登入頁面</Link></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>@2026 React 練習專案</footer>
        </div>
    );
}

export default FrontendLayout;