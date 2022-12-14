import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routes/Router';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
