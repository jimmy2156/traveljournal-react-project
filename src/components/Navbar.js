
import Logo from "../images/earth.png";


function Navbar() {
    return(
        <div className="navbar">
      <img src={Logo} className="logo" alt="logo" />
      <p className="heading">my travel journal</p>
        </div>

    )
}
export default Navbar