export const Navbar = props => {
    return (
        <div>
            <nav className="navbar">
                <h3>{props.text}</h3>
                <ul>
                    <li>
                        <a href="#about" className="navbar_links">
                            About
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#login" className="navbar_links">
                            Log in
                        </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#signup" className="navbar_links">
                            Sign up
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
