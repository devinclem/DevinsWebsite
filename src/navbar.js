const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Devin Clemons</h1>
            <div>
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "White",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Contact Me</a>

            </div>
        </nav>
     );
}
 
export default Navbar;