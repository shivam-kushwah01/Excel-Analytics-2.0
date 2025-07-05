import './hero.css';
import { Link } from "react-router-dom";

let Hero = () => {
    return (
        <section class="hero">
    <h1>Transform Your Excel Data Into Powerful Insights</h1>
    <p>Upload your spreadsheets and get instant analytics, beautiful visualizations, and actionable business intelligence in seconds.</p>
    
    <div class="cta-buttons">
      <Link to="/">
      <button class="btn btn-primary">Get Started</button>
      </Link>
    </div>
  </section>
    );
}

export default Hero;