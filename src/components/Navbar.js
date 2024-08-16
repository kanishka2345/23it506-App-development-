
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        {/* Other Links */}
        <li className="dropdown">
          <span>Shop</span>
          <ul className="dropdown-content">
            <li><Link to="/dresses">Dresses</Link></li>
            <li><Link to="/accessories">Accessories</Link></li>
            <li><Link to="/dailywear">Daily Wear</Link></li> {/* New Daily Wear Option */}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
