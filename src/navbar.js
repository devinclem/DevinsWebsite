const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Devin Clemons</h1>
            <div>
            <a href="/">Home</a>
                <a href="/create" style={{
                    color: "Black",
                    backgroundColor: "#0ff7bc",
                    borderRadius: "15px"
                }}>Contact Me</a>

            </div>
        </nav>
     );
}
 
export default Navbar;