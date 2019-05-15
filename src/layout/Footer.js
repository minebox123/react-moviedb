import React, { Component } from "react";
import twitter from "../icons/twitter.svg";
import facebook from "../icons/facebook.svg";
import www from "../icons/www.svg";
class Footer extends Component {
  state = {
    width: window.innerWidth
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  updateWidth = () => {
    this.setState({
      width: window.innerWidth
    });
  };

  componentWillUnmount() {
    window.addEventListener("resize", this.updateWidth);
  }
  render() {
    const { width } = this.state;
    const isLess = width < 600;
    return (
      <React.Fragment>
        {!isLess ? (
          <footer>
            <div className="footer-content">
              <section className="information">
                <div className="inner-links">
                  <h3>MovieDB</h3>
                  <div className="website-pages">
                    <ul>
                      <li>Movies</li>
                      <li>TV Shows</li>
                      <li>People</li>
                    </ul>
                  </div>
                </div>

                <div className="personal-info">
                  <p>
                    Designed by{" "}
                    <strong>
                      <a
                        href="https://github.com/minebox123"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ilya Solodeev
                      </a>
                    </strong>
                  </p>
                  <span>Copyright &copy; 2019</span>
                </div>
              </section>
              <section className="movieDB-links">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"
                  alt="The Movie DB logo"
                  className="movieDB-logo"
                />
                <div className="social-media">
                  <a
                    href="https://twitter.com/themoviedb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter logo" className="twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/themoviedb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebook}
                      alt="facebook logo"
                      className="facebook"
                    />
                  </a>
                  <a
                    href="https://www.themoviedb.org/?fbclid=IwAR0BjP5yFmp24YEASx937zwrFbQHlGOL8PI6Xh05L3ZjUsQv2aS1Gyu6mRw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={www}
                      alt="world wide web logo"
                      className="website"
                    />
                  </a>
                </div>
              </section>
            </div>
          </footer>
        ) : (
          <footer>
            <div className="footer-content-mobile">
              <section className="information">
                <div className="inner-links-mobile">
                  <h3>MovieDB</h3>
                  <div className="website-pages-mobile">
                    <ul>
                      <li>Movies</li>
                      <li>TV Shows</li>
                      <li>People</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="movieDB-links-mobile">
                <img
                  src="https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg"
                  alt="The Movie DB logo"
                  className="movieDB-logo-mobile"
                />
                <div className="social-media">
                  <a
                    href="https://twitter.com/themoviedb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="twitter logo" className="twitter" />
                  </a>
                  <a
                    href="https://www.facebook.com/themoviedb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={facebook}
                      alt="facebook logo"
                      className="facebook"
                    />
                  </a>
                  <a
                    href="https://www.themoviedb.org/?fbclid=IwAR0BjP5yFmp24YEASx937zwrFbQHlGOL8PI6Xh05L3ZjUsQv2aS1Gyu6mRw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={www}
                      alt="world wide web logo"
                      className="website"
                    />
                  </a>
                </div>
              </section>
            </div>
          </footer>
        )}
      </React.Fragment>
    );
  }
}

export default Footer;

// <div className="personal-info">
//               <p>
//                 Designed by{" "}
//                 <strong>
//                   <a
//                     href="https://github.com/minebox123"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Ilya Solodeev
//                   </a>
//                 </strong>
//               </p>
//               <span>Copyright &copy; 2019</span>
//             </div>
