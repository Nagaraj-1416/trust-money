import React, { useState, useEffect } from 'react';
import '../../assets/sidebar.css';
import logo_icon from '../../assets/logo-icon.svg';
import trust_logo from '../../assets/trust-logo.jpg';
import dashboard_icon from '../../assets/dasbaord.svg';
import discover from '../../assets/discover.svg';
import history from '../../assets/history.svg';
import order_history from '../../assets/order-history.svg';
import holdings from '../../assets/holdings-icon.svg';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/dashboard':
        setActiveItem('dashboard');
        break;
      case '/discover-bonds':
        setActiveItem('discover');
        break;
      case '/pending-orders':
        setActiveItem('pending');
        break;
      case '/order-history':
        setActiveItem('order-history');
        break;
      case '/reports':
        setActiveItem('reports');
        break;
      default:
        setActiveItem(''); // Set to empty string if no match
        break;
    }
  }, [location.pathname]);

  return (
    <div
      className="ds-sidebar"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex-center flex-wrap p-1 ds-mob-hide">
        <div className="ds-brand">
          <Link to="/dashboard">
            {isHovered ? (
              <img
                width="82.68"
                className="logo-full"
                height={45}
                src={trust_logo}
                alt="Trust Securities"
              />
            ) : (
              <img
                width="25.08"
                className="logo-icon ms-1 mt-1"
                height={45}
                src={logo_icon}
                alt="Trust Securities"
              />
            )}
          </Link>
        </div>
      </div>
      <div className="ds-nav" id="dsToggleNav">
        <ul className="ds-nav-items">
          <li>
            <Link
              to="/dashboard"
              className={`nav-item ${activeItem === 'dashboard' ? 'active' : ''}`}
            >
              <img
                className="mr-1 icon"
                width={19}
                height={19}
                src={dashboard_icon}
                alt="Dashboard"
              />
              <span className="nav-text">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/discover-bonds"
              className={`nav-item ${activeItem === 'discover' ? 'active' : ''}`}
            >
              <img
                className="mr-1 icon"
                width={19}
                height={19}
                src={discover}
                alt="Discover Bonds"
              />
              <span className="nav-text">Discover</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pending-orders"
              className={`nav-item ${activeItem === 'pending' ? 'active' : ''}`}
            >
              <img
                className="mr-1 icon"
                width={19}
                height={19}
                src={history}
                alt="Pending Orders"
              />
              <span className="nav-text">Pending</span>
            </Link>
          </li>
          <li>
            <Link
              to="/order-history"
              className={`nav-item ${activeItem === 'order-history' ? 'active' : ''}`}
            >
              <img
                className="mr-1 icon"
                width={19}
                height={19}
                src={order_history}
                alt="Orders History"
              />
              <span className="nav-text">Order History</span>
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className={`nav-item ${activeItem === 'reports' ? 'active' : ''}`}
            >
              <img
                className="mr-1 icon"
                width={19}
                height={19}
                src={holdings}
                alt="Reports"
              />
              <span className="nav-text">Reports</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
