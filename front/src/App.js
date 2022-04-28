import { useState, useEffect } from 'react';
import './App.css';
import AvatarUpload from './components/AvatarUpload';
import Intro from './components/Intro';

function App() {
  let [name, setName] = useState(null);
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/name')
      .then((response) => response.json())
      .then((data) => setName(data.data.name));
  }, []);

  return name ? (
    <div className='App'>
      <header className='App-header'>
        <Intro name={name} />
        <AvatarUpload />
      </header>
    </div>
  ) : (
    <div className='App'>
      <header className='App-header'>
        <h3 class='intro'>
          Hi, it looks like the backend server is not running. Please start it
          and refresh the page.
        </h3>
      </header>
    </div>
  );
}

export default App;
