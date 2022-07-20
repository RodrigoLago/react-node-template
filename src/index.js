import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navbar } from './Components/Navbar/Navbar.js';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <Navbar />
  </div>
);


