import React, { Component } from 'react';

class QuoteMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded : false,
      error : null,
      text : '...',
      author: 'loading quote'
    };
    this.newQuote = this.newQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }
  newQuote(){
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            text: result.quote,
            author: result.author
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  tweetQuote(){
    let quote = this.state.text + ' - ' + this.state.author;
    let url = 'https://twitter.com/intent/tweet?text=' + quote;
    window.open(url, '_blank');
  }
  componentDidMount() {
    this.newQuote();
  }
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1> Sorry, there was an error </h1>
          <div>{this.state.error}</div>
        </div>
      )
    }
    return (
      <div id="quote-container">
      <h2 id="text">{this.state.text}</h2>
      <h3 id="author">{this.state.author}</h3>
      <button id="new-quote" className="button" onClick={this.newQuote}>New Quote</button>
      <button id="tweet-quote" className="button" onClick={this.tweetQuote}>Tweet Quote</button>
      </div>
    );
  }
}

export default QuoteMachine;
