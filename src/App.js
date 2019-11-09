import React from 'react';
import './App.css';

class App extends React.Component {

  state = { // This gets rid of constructor
      quotes: [],
      currentQuote: {
        quote: '',
        author: ''
      }
    }
}

export default App;
