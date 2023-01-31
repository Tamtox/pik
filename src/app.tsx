// Dependencies
import React,{ Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';
// Styles
import './app.scss'
// Components
const Title = React.lazy(()=> import('./pages/title'));
const Loading = React.lazy(()=> import('./pages/loading'));


function App() {
  return (
    <main className="app">
      <div className='wrapper'>
        <Suspense fallback={<Loading height='100vh'/>}>
            <Routes>
              <Route path='/' element={<Title/>} />
              {/* <Route path='/auth' element={isLoggedIn ? (verificationStatus === "Complete" ? <Home/> : <Profile/>) : <Auth/>} /> */}
              <Route path='*' element={<Title/>} />
            </Routes>
        </Suspense>
      </div>
    </main>
  )
}

export default App
