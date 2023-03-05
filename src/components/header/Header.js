import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://betterstudio.com/wp-content/uploads/2022/11/4-the-new-york-times-logo-SVG-betterstudio.com_.svg"
          alt="New York Times logo"
        />
        <div className="divider"></div>
        <p>Top Stories</p>
        <div className="divider-bottom"></div>
      </Link>
    </div>
  )
}

export default Header
