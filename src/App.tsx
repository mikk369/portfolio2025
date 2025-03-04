import { useEffect, useState } from 'react'


function App() {
  const [showDetails, setShowDetails] = useState<number | null>(null);

  useEffect(() => {

    function typeWriter() {
      const texts = [
        'I am Mikk Ereline',
        'Welcome to my portfolio.',
        'Below you can find some [work] I have done.',
      ];
      const speed = 50;
      const element = document.getElementById('nav-name');
  
      if (!element) return;
      
      element.innerHTML = "";

      let lineIndex = 0;

      function typeNextLine() {
        if (lineIndex < texts.length) {
          if(!element) return;
          const line = document.createElement("div");
          line.classList.add("typing-line", "active-line");
          element.appendChild(line);

          let charIndex = 0;

          function typeCharacter() {
            if (charIndex < texts[lineIndex].length) {
              line.innerHTML += texts[lineIndex][charIndex];
              charIndex++;
              setTimeout(typeCharacter, speed);
            } else {
              
              if (lineIndex < texts.length - 1) {
                line.classList.remove("active-line");
              }
              lineIndex++;
              setTimeout(typeNextLine, 500); // Move to the next line
            }
          }

          typeCharacter();
        }
      }

      typeNextLine();
    }
  
    typeWriter();
  }, []);

const toggleDetails = (i: any) => {
  const buttons = document.querySelectorAll('.details');
  const index = Array.from(buttons).indexOf(i.target);
  setShowDetails(showDetails === index ? null : index);
}

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.webp" alt="" />
        </div>
        <ul className="nav-list">
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/mikk-ereline/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
          <li className="nav-item">
            <a href="https://github.com/mikk369/" target='_blank'>
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="nav-item"><a href="#work">[work]</a></li>
        </ul>
      </div>
      <div className="welcome-text">
          <h3 id='nav-name'></h3>
      </div>
        <div className="section">
          <div className="animation-section">
            [ANIMATION SECTION IN THE MAKING]
          </div>
        </div>
        <div className="section" id='work'>
          <div className="project-grid">
            <div className="project-card">
              <img src="project-1.webp" alt="project image" />
              {showDetails === 0 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="wordpress.svg" alt="used technology" />
                    <img src="elementorLogo.svg" alt="used technology" />
                  </div>
                  <p className="tech-description">Created with Wordpress & Elementor.</p>
                </div>
              ) : (
                <p className="project-intro">Paide kindergarten</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://www.pailasteaed.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="video-container">
                <video className='video' autoPlay loop muted>
                 <source src='calendar.mp4' type='video/mp4' />
                </video>
              </div>
              {showDetails === 1 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="react-logo.svg" alt="used technology" />
                    <img src="vite-logo.svg" alt="used technology" />
                    <img src="php-logo.svg" alt="used technology" />
                    <img src="mysql-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                    <img src="instagram-logo.webp" alt="used technology" />
                  </div>
                  <p className="tech-description">Including admin page for managin bookings & creating club events, 
                    Instagram post API integration on news page & on latest news.</p>
                </div>
              ) : (
                <p className="project-intro">Estonian Agility competition calendar</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://agilityliit.ee/voistluskalender/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="lohvik.webp" alt="project image" />
              {showDetails === 2 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="wordpress.svg" alt="used technology" />
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="react-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                    <img src="facebook-logo.webp" alt="used technology" />
                  </div>
                  <p className="tech-description">
                    Including menu image change from wordpress admin page and facebook post API integration.
                  </p>
                </div>
              ) : (
                <p className="project-intro">Experimental learning cafe</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://lohvik.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="webcodes.webp" alt="project image" />
              {showDetails === 3 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="php-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                  </div>
                  <p className="tech-description">Navbar created with Javascript & contact form with PHP.</p>
                </div>
              ) : (
                <p className="project-intro">Webcodes OÜ company webpage</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://www.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="project-2.webp" alt="project image" />
              {showDetails === 4 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="vuejs.svg" alt="used technology" />
                    <img src="vite-logo.svg" alt="used technology" />
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                    <img src="nodejs.svg" alt="used technology" />
                    <img src="express-js.webp" alt="used technology" />
                    <img src="mysql-logo.svg" alt="used technology" />
                  </div>
                  <p className="tech-description">CRUD operations with recipes & creating/login account.</p>
                </div>
              ) : (
                <p className="project-intro"> FullStack project</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://recipe.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="foodtemp.webp" alt="project image" />
              {showDetails === 5 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                  </div>
                  <p className="tech-description">Template for food page.</p>
                </div>
              ) : (
                <p className="project-intro">Frontend project</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://foodgo.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="movap.webp" alt="project image" />
              {showDetails === 6 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                  </div>
                  <p className="tech-description">Movie info & search from from API.</p>
                </div>
              ) : (
                <p className="project-intro">Latest movies search</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://moviesearch.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="warehouse.webp" alt="project image" />
              {showDetails === 7 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="react-logo.svg" alt="used technology" />
                    <img src="php-logo.svg" alt="used technology" />
                  </div>
                  <p className="tech-description">Had to create project with React and PHP</p>
                </div>
              ) : (
                <p className="project-intro">Practical assignment for internship</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://warehouse.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
            <div className="project-card">
              <img src="onlineshop.webp" alt="project image" />
              {showDetails === 8 ? (
                <div className="project-details">
                  <div className="project-tech">
                    <img src="js-logo.svg" alt="used technology" />
                    <img src="html-5.svg" alt="used technology" />
                    <img src="css-3.svg" alt="used technology" />
                    <img src="stripe-logo.webp" alt="used technology" />
                  </div>
                  <p className="tech-description">Main purpouse was to integrating Stripe with page</p>
                </div>
              ) : (
                <p className="project-intro">Simple e-shop with Stripe integration</p>
              )}
              <div className="footer">
                <button className="details" onClick={toggleDetails}>Details</button>
                <a href="https://onlineshop.webcodes.ee/" target="_blank" rel="noopener noreferrer">
                  Live!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="page-footer">
          <ul className='footer-list'>
            <li className='footer-item'><i className="fa-solid fa-phone"></i> +372 555 28 329</li>
            <li className='footer-item'><i className="fa-solid fa-envelope"></i> mikk.ereline@gmail.com</li>
          </ul>
        </div>
    </>
  )
}

export default App
