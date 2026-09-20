import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div>
            <Link className="footer-name" to="/">PRAJWAL N THINGALAYA</Link>
            <p>B.Tech CSE Student <span>•</span> Developer <span>•</span> AI Enthusiast</p>
          </div>
          <div className="footer-links">
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Prajwal N Thingalaya</span>
          <span>Built with curiosity.</span>
        </div>
      </div>
    </footer>
  );
}
