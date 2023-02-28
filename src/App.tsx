import { useState } from 'react';
import { Outlet } from "react-router-dom"
import { GlobalStyles } from "./styles/GlobalStyles";

import { NavBar } from './components/NavBar';

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
