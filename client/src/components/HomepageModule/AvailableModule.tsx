import './AvailableModule.css';

export default function AvailableModule() {
  return (
    <section className="available-module-section" id="available-module-section">
      <h1 className="available-module-header"><span>Available</span> Module</h1>
      <div className="available-module-container">
          <div className="avail-module-box">
              <div className="avail-module-image">
                  <img src="/images/available-module/library.png" alt="Library"/>
                  <div className="avail-module-text">
                      <a href="/library" className="cart-btn">Library</a>
                  </div>
              </div>
          </div>

          <div className="avail-module-box">
              <div className="avail-module-image">
                  <img src="/images/available-module/communication.png" alt="Communication"/>
                  <div className="avail-module-text">
                      <a href="/communication" className="cart-btn">Communication</a>
                  </div>
              </div>
          </div>

          <div className="avail-module-box">
              <div className="avail-module-image">
                  <img src="/images/available-module/education.png" alt="Education"/>
                  <div className="avail-module-text">
                      <a href="/education" className="cart-btn">Education</a>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}
