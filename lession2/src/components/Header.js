import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <a className="navbar-brand">
                <h3>Bài 2: Component</h3>
            </a>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item"><a className="nav-link">Trang chủ</a></li>
                <li className="nav-item"><a className="nav-link active">Danh mục sản phẩm</a></li>
            </ul>
        </nav>
    )
}
export default Header;
