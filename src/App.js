import 'devextreme/dist/css/dx.light.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import TimetablePage from './components/TimetablePage';
import Courses from './components/Courses';

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
    },
    { path: '/courses',
    element: <Courses/>
    }
  ]);

  return (
    <div >
      {/* <LoginForm/> */}
      {/* <Dashboard/> */}
      <RouterProvider router={router}>
      </RouterProvider>  
      {/* <VideoCapture/> */}
    </div>
  );
}

export default App;
