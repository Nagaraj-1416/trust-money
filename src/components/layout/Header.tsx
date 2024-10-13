import location_icon from '../../assets/location-icon.svg'; 
import email_icon from '../../assets/email-icon.svg'; 
import trust_logo from '../../assets/trust-logo.jpg'; 
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <>
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex-wrap flex-center">
                <ul className="top-nav flex-wrap">
                  <li>
                    <Link to="/research">Research</Link>
                  </li>
                  <li>
                    <Link to="/downloads">Downloads</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
                <ul className="top-nav flex-wrap ml-auto text-right">
                  <li className="border-r">
                    <img src={location_icon} alt="Location" />
                    <span>Mumbai (Corporate Office)</span>
                  </li>
                  <li>
                    <img src={email_icon} alt="Email" />
                    <span>
                      <a href="mailto:info@trustgroup.in">info@trustgroup.in</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Header Section */}
      <section className="main-header">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="flex-wrap flex-center">
          <div className="brand">
            <a href="">
              <img
                alt="Trust Securities"
                className="img-fluid"
                height="63"
                src={trust_logo}
                width="117"
              />
            </a>
          </div>
          <div className="toggleMenu hidden-xs ml-auto">
            <span />
            <span />
            <span />
          </div>
          <ul className="ml-auto main-nav flex-wrap flex-center">
            <li>
              <a href="">Explore all bonds</a>
            </li>
            <li>
              <Link to="/primary-bonds">Primary Bonds</Link>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">Our Offerings</a>
              <ul className="dropdown-menu">
                <li><Link to="/primary-offerings">Primary Offerings</Link><p>private company to public scale</p> </li>
                <li><Link to="/secondary-offerings">Secondary Offerings</Link><p>General public on the secondary market</p></li>
              </ul>
            </li>
            <li className="btn-dist">
              <Link className="btn btn-border border-gradient" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary" to="/register">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Header;
