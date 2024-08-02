import React from 'react';
import Header from './Signup/Header';
 import Footer from './Signup/Footer';
import SignInForm from './Signup/SignInForm';
import Regis from './Regis';
import ProfileEdit from './ProfileEdit';
 import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProfileEdit from './ProfileEdit';
function App() {
  return (
    <div className="App">
       <Header/>
      <Footer/>
      <SignInForm/>
      <Regis/>
      <ProfileEdit/> 
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInForm/>}/>
      </Routes>
      </BrowserRouter> */}
    
    </div>
  );
}

export default App;
// import React from 'react';
// import ProfilePage from './Profile/ProfilePage';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ProfilePage />
//     </div>
//   );
// }

// export default App;
