// Dependencies
import React,{ Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';
// Styles
import './app.scss'
// Components
const Title = React.lazy(()=> import('./pages/title'));
const FlatList = React.lazy(()=> import('./pages/flat_list'));
const Loading = React.lazy(()=> import('./pages/loading'));


function App() {
  return (
    <main className="app">
      <div className='wrapper'>
        <Suspense fallback={<Loading height='100vh'/>}>
            <Routes>
              <Route path='/' element={<Title/>} />
              <Route path='/flat-list' element={<FlatList/>} />
              <Route path='*' element={<Title/>} />
            </Routes>
        </Suspense>
      </div>
    </main>
  )
}

export default App
