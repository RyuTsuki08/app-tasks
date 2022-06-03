import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import App from './App.js'; //🙂 

root.render(<App tab="home" />);