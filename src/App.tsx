import React from 'react';
import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className='App'>
    <Header></Header>
    <div className='routes'>
      <Routes>
        <Route path='/' element={<Navigate replace to="/welcome" />}></Route>
        <Route path='/welcome' element={<Welcome></Welcome>}></Route>
        <Route path='/projects/' element={<Projects></Projects>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/projects/:id' element={<ProjectDetail></ProjectDetail>}></Route>
        
        <Route
          path="*"
          element={
            <div style={{ padding: "1rem" }}>
              <p>Page is Not Found</p>
            </div>
          }
        />
      </Routes>
    </div>
    <Footer></Footer>
    </div>
  );
}

export default App;
