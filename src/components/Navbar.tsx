import "../style/navbar.css"
import SearchVektor from "../assets/SearchVector.png"

const Navbar = () => {
  return (
    <nav>
      <span className="navbar-logo">DevBlog</span>
      <img src={SearchVektor} className="search-vektor" />
      <input type="text" className="search-input" placeholder="Search..." />
    </nav>
  )
}

export default Navbar