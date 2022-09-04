function Navbar1(props){
    return(
    <div>
        <nav className="navbar">
                <h3>{props.text}</h3>
            <ul>
                <li><a href="#about" class="navbar_links" >About</a></li>
                <li> <a href="#login" class="navbar_links">Log in</a></li>
                <li> <a href="#signup" class="navbar_links">Sign up</a></li>
            </ul>
        </nav>
    </div>
    );
}
export default Navbar1;