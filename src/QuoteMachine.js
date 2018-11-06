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
  }
  componentDidMount() {
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
      <button id="new-quote" className="button">New Quote</button>
      <button id="tweet-quote" className="button">Tweet Quote</button>
      </div>
    );
  }
}

export default QuoteMachine;
