import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file for Home styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
    <div className="home-page position-relative">
      <div className="background-image"></div>
      <div className="content">
        <div className="buttons">
          <Link to="/login" className="btn btn-primary me-2">Login</Link>
          <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
