import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';

function App() {
  const path = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
        </>
      ),
    },
  ]);
  return (
    <>
      <div className="App">
        <RouterProvider router={path} />{' '}
      </div>
    </>
  );
}

export default App;
