
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomRoutes from './CustomRoutes';

axios.defaults.baseURL=process.env.REACT_APP_API_URL;
function App() {
  return (
    <>
    <Router>
      <CustomRoutes />
    </Router>
    <ToastContainer />
    </>
    
  );
}

export default App;
