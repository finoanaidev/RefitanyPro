// import Navbar from './Components/Navbar';
// import {Routes,Route} from 'react-router-dom'
// import Login from './Components/Login'
// import Validation from './Components/Validation';
// import Teste from './Components/Teste';
// import Home from './Components/Pages/Home'
// import Connexion from './Autre/Connexion'
// import Header from './Notification/Header';
// function App() {
//   return (
//     <div className="App">
//      <Header />
//      <Routes>
//         <Route path="/login" element={< Login/>} />
//         <Route path="/validation" element={< Validation/>} />
//         <Route path="/teste" element={< Teste/>} />
//         <Route path="/home" element={< Home/>} />
//         <Route path="/connexion" element={< Connexion/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicRouter from './pages/Public/PublicRouter'
import AdminRouter from './pages/Admin/AdminRouter'// AdminRouter est un enfant
import AuthRouter from './pages/Auth/AuthRouter'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<PublicRouter />} />
        
        <Route path="/admin/*" element={

            <AdminRouter />
        } />
        <Route path='/auth/*' element={<AuthRouter />} />
      </Routes>
    </div>
  )
}

export default App
