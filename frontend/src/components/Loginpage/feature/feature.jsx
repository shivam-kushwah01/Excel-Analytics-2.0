import './feature.css';

let Feature = () => {
    return (
        <section class="features">
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">📊</div>
        <h3>Smart Analytics</h3>
        <p>AI-powered insights that automatically detect patterns and trends in your Excel data.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">✨</div>
        <h3>Beautiful Charts</h3>
        <p>Create stunning visualizations with one click. Export to PowerPoint or share online.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Lightning Fast</h3>
        <p>Process thousands of rows instantly. No more waiting for Excel to calculate.</p>
      </div>
    </div>
  </section>
    );
}

export default Feature;