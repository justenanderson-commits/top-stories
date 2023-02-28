import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>New York Times Top Stories</h1>
      </Link>
    </div>
  )
}

export default Header
