import './navBar.css';
import { Link } from 'react-router-dom';
import img from '../assets/repo-dark-removebg.png';

export default function NavBar() {
  return (
    <div className="nav">
      <a href="https://tanstack.com/" target="_blank" rel="noreferrer">
        <img src={img} alt="react-query-asset" />
      </a>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="use-effect">Use Effect Example</Link>
        </li>
        <li>
          <Link to="react-query">React Query Example</Link>
        </li>
      </ul>
    </div>
  );
}
