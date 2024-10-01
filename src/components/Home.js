import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  

const Home = () => {
 
  return (
    <div className="home-container"> {}
      <nav className="nav-links"> {}
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/articles">Статьи</Link>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Home;
