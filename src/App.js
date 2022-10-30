import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUser from './AddUser';
import './App.css';
import Home from './Home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/users/add",
      element: <AddUser></AddUser>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
