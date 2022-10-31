import './navBar.css';
import { Link } from 'react-router-dom';
import img from '../assets/repo-dark-removebg.png';

export default function NavBar() {
  return (
    <div className="nav">
      <div title="Go to React Query" className="tooltip">
        <a
          href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={img} alt="react-query-asset" />
        </a>
      </div>
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
        <li>
          <Link to="infinite-scroll">Infinite Scroll Example</Link>
        </li>
      </ul>
    </div>
  );
}
