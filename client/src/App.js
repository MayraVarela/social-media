import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from './scenes/homePage/Index'
import LoginPage from './scenes/loginPage/index'
import ProfilePage from './scenes/profilePage/Index';


function App() {

  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
