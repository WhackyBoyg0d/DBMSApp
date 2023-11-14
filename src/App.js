import 'devextreme/dist/css/dx.light.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import TimetablePage from './components/TimetablePage';

function App() {
  const router = createBrowserRouter([
    { path: '/', 
    element: <LoginForm/>
    },
    { path: '/dashboard', 
    element: <Dashboard/>
    },
    { path: '/timetable', 
    element: <TimetablePage/>
    }
  ]);

  return (
    <div >
      {/* <LoginForm/> */}
      {/* <Dashboard/> */}
      <RouterProvider router={router}>
      </RouterProvider>  
    </div>
  );
}

export default App;
