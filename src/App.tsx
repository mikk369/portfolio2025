import { useEffect } from 'react'
import './App.css'
import './general.css'

function App() {

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
          <li className="nav-item">[work]</li>
        </ul>
      </div>
      <div className="welcome-text">
          <h3 id='nav-name'></h3>
      </div>
        <div className="section">
          <div className="animation-section">
          </div>
        </div>
        <div className="section">
          <div className="project-grid">
            <div className="project-card">
              <img src="project-img.jpg" alt="project image" />
              <p className="project-intro">Project description</p>
              <div className="footer">
                <button className="details">Details</button>
                <button className="live">Live</button>
              </div>
            </div>
            <div className="project-card">
              <img src="project-img.jpg" alt="project image" />
              <p className="project-intro">Project description</p>
              <div className="footer">
                <button className="details">Details</button>
                <button className="live">Live</button>
              </div>
            </div>
            <div className="project-card">
              <img src="project-img.jpg" alt="project image" />
              <div className="project-intro">Project description</div>
              <div className="project-details">
                <div className="project-tech">
                  <img src="javascript.svg" alt="used technology" />
                  <img src="html-5.svg" alt="used technology" />
                  <img src="css-3.svg" alt="used technology" />
                </div>
              </div>
              <div className="footer">
                <button className="details">Details</button>
                <button className="live">Live</button>
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
