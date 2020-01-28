import React, { useState, useEffect } from 'react';

import './styles/global.css';
import './styles/App.css';
import './styles/Main.css';
import CardItem from './components/CardItem';
import HeaderTools from './components/HeaderTools';

const App = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const response = {
        name: 'matheus',
        link: 'http://loca.com',
        description: 'dasda',
        tags: ['node'],
      };

      setTools([...tools, response]);
    }

    loadTools();
  }, []);

  return (
    <div>
      <main>
        <HeaderTools />
        <CardItem />
        <CardItem />
      </main>
    </div>
  );
};

export default App;
