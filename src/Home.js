import React from "react";

const Home = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a className="nav scrolltoview" href="#foryou">
                <span className="icon">💖</span>For you
              </a>
            </li>
            <li className="subhead">LIBRARY</li>
            <li>
              <a className="nav scrolltoview" href="#fiction">
                <span className="icon">👽</span>Fiction
              </a>
            </li>
            <li>
              <a className="nav scrolltoview" href="#poetry">
                <span className="icon">🌈</span>Poetry
              </a>
            </li>
            <li>
              <a className="nav scrolltoview" href="#fantasy">
                <span className="icon">🌺</span>Fantasy
              </a>
            </li>
            <li>
              <a className="nav scrolltoview" href="#romance">
                <span className="icon">💕</span>Romance
              </a>
            </li>
            
          </ul>
        </nav>
        </div>
    );
    
  };
  
  export default Home