import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import LandingPage from './pages/Common/LandingPage';
import AboutUS from './pages/Common/AboutUs';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Research from './pages/Common/Research';
import Downloads from './pages/Common/Downloads';
import Faq from './pages/Common/Faq';
import ContactUs from './pages/Common/ContactUs';
import PrimaryBonds from './pages/User/PrimaryBonds';
import PrimaryBondList from './pages/User/PrimaryBondList';
import PrimaryOfferings from './pages/User/PrimaryOfferings';
import SecondaryOfferings from './pages/User/SecondaryOfferings';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './pages/User/Dashboard';
import Unauthorized from './components/layout/Unauthorized';
import Profile from './pages/User/Profile';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import PendingOrders from './pages/User/PendingOrders';
import DiscoverBonds from './pages/User/DiscoverBonds';

const USER_ROLES = {
  USER: 'user',
  GUEST: 'guest',
};

const routesConfig = [
  { path: '/', element: <LandingPage />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/about', element: <AboutUS />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/login', element: <Login />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/register', element: <Register />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/research', element: <Research />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/downloads', element: <Downloads />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/faq', element: <Faq />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/contact-us', element: <ContactUs />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/primary-bonds', element: <PrimaryBonds />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/primary-bonds-list', element: <PrimaryBondList />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/primary-offerings', element: <PrimaryOfferings />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/secondary-offerings', element: <SecondaryOfferings />, roles: [USER_ROLES.USER, USER_ROLES.GUEST] },
  { path: '/dashboard', element: <Dashboard />, roles: [USER_ROLES.USER]},
  { path: '/pending-orders', element: <PendingOrders />, roles: [USER_ROLES.USER]},
  { path: '/discover-bonds', element: <DiscoverBonds />, roles: [USER_ROLES.USER]},
  { path: '/profile', element: <Profile />, roles: [USER_ROLES.USER] },
  { path: '/unauthorized', element: <Unauthorized />, roles: [USER_ROLES.GUEST, USER_ROLES.USER] },
];

function App() {
  const location = useLocation();
  const currentUserRole = Cookies.get('userRole') || USER_ROLES.GUEST;

  const isAccessibleRoute = (route: any) => {
    return route.roles.includes(currentUserRole);
  };

  const isUserOnlyRoute = (route: any) => {
    return route.roles.length === 1 && route.roles[0] === USER_ROLES.USER;
  };

  const shouldShowHeaderFooter = () => {
    return !isUserOnlyRoute(routesConfig.find(route => route.path === location.pathname)) && !['/login', '/register'].includes(location.pathname);
  };

  const shouldShowNavbarAndMenubar = () => {
    return isUserOnlyRoute(routesConfig.find(route => route.path === location.pathname));
  };

  return (
    <>
      {shouldShowHeaderFooter() && <Header />}
      {shouldShowNavbarAndMenubar() && (
        <>
        <Navbar />
        <Sidebar/>
        </>
      )}
      <Routes>
        {routesConfig.map((route) => {
          if (isAccessibleRoute(route)) {
            return (
              <Route key={route.path} path={route.path} element={route.element} />
            );
          } else {
            return (
              <Route key={route.path} path={route.path} element={<Unauthorized />} />
            );
          }
        })}
      </Routes>
      {shouldShowHeaderFooter() && <Footer />}
    </>
  );
}

export default function Main() {
  return (
    <Router>
      <App/>
    </Router>
  );
}
