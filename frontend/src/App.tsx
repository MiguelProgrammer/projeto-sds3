/*
import React from 'react'; -> Não necessário por padrão
import logo from './logo.svg';
import './App.css';
*/

import Footer from "components/Footer";
import NavBar from "components/NavBar";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className='text-primary'>Olá mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
