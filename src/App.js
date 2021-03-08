import React from 'react';
import './App.css';
import Container from './Container';

class App extends React.Component {
  render(){
    return (
      <div className = "App">
        <header className = "Header">
          <h1> ♬ My Playlist ♬  </h1>
        </header>
        <main>
          <Container/>
        </main>
      </div>
  )
}
}
export default App;
