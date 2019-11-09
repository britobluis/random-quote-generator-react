import React from 'react';
import PropTypes from 'prop-types';

const QuoteBox = (props) => (
    <div id='quote-box'>
        <h1>Random Quote Generator</h1>
        <div className="quote">
            <h2 id='text'>
                "{props.currentQuote.quote}"
            </h2>
            <h2 id='author'>
                - {props.currentQuote.author}
            </h2>
        </div>
        
        <div className="controls">
            <button id="new-quote" className="btn" onClick={props.newQuoteClick}>New quote</button>
            <a href={'https://twitter.com/intent/tweet?text=' + props.currentQuote.quote + ' - ' + props.currentQuote.author} target="_blank" id='tweet-quote'>
                <button id="twitter" className="btn">Tweet Quote</button>
            </a>
        </div>
    </div>
);

QuoteBox.propTypes = {
    currentQuote: PropTypes.object.isRequired,
    newQuoteClick: PropTypes.func.isRequired
};

export default QuoteBox;