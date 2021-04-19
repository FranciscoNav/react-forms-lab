import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      tweet : ''
    };
  }

  handleTweet = (event) =>{
    this.setState({
      tweet: event.target.value
    })
    console.log(event.target.value)
  }

  charLength = () =>{
    const maxChars = this.props.maxChars
    let tweetLength = this.state.tweet.length
    return maxChars - tweetLength
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleTweet(event)}
          value={this.state.tweet}/>
        <br></br>
        <p>{this.charLength()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
