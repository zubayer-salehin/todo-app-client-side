import Home from './pages/Home/Home';
import Header from './Shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
