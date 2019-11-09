import React from 'react';
import QuoteBox from './QuoteBox';
import './App.css';
import axios from 'axios';

const apiUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
class App extends React.Component { 

  state = { // This gets rid of constructor
      quotes: [],
      currentQuote: {
        quote: '',
        author: ''
      }
    }

  componentDidMount() {
    this.fetchQuotes().then(quotes => {
      this.setState({
        quotes,
        currentQuote: quotes[0]
      });
    });
  }

  fetchQuotes = () => {
    return axios.get(apiUrl)
      .then(resp => resp.data.quotes)
      .catch(console.error());
  }

  getRandomQuote = () => {
    const index = Math.floor(Math.random() * this.state.quotes.length);
    return this.state.quotes[index];
  }

  newQuoteClick = () => {
    const newQuote = this.getRandomQuote();
    this.setState({
      currentQuote: newQuote
    })
    console.log('Next quote')

  }

  render() {
    return (
      <div>
        <QuoteBox
          currentQuote={this.state.currentQuote}
          newQuoteClick={this.newQuoteClick} />
      </div>
    )
  }
}

export default App;
