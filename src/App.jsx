import './App.css';
import { useRoutes } from 'react-router-dom';

/* PAGES */
import Home from './pages/Home';
import Stays from './pages/Stays';
import Contacts from './pages/Contacts';
import Activities from './pages/Activities';
import Backoffice from './pages/backoffice/Backoffice';

/* COMPONENTS */
import NavBar from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import useAuth from './components/hooks/useAuth';
import ProtectedRoute from './components/ProtectedRoute';


/* PROTECTED ROUTE */


function App() {
  const { signedIn } = useAuth();

  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Stays", element: <Stays /> },
    { path: "/Contacts", element: <Contacts /> },
    { path: "/Activities", element: <Activities /> },
    { path: "/Login", element: <Login /> },
    { path: "/Backoffice", element: <Backoffice /> },
    {
      path: "/backoffice",
      element: (
        <ProtectedRoute isAllowed={true}>
          <Backoffice />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      
      <div>{routes}</div>
      
      {/* Footer will always render */}
      <Footer />
    </>
  );
}

export default App;
