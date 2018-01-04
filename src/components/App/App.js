import React from 'react';
import './App.css';
import Header from '../../containers/Header/Header';
import CardContainer from '../../containers/CardContainer/CardContainer';

const App = () => {

  return (
    <div className='App'>
      <Header />
      <CardContainer />
    </div>
  );
}

export default App;