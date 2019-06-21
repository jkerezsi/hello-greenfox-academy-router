import React from 'react';
import Button from './button';
import Display from './display';


class SimpleACorn extends React.Component {
    constructor() {
      super();
      this.state = { count: 0 };
      this.upvote = this.upvote.bind(this);
      this.downvote = this.downvote.bind(this);
    }
  
    componentDidMount(){
      document.addEventListener('keyup', (event) => {
        if (event.keyCode === 38) {
          this.upvote()
        } else if (event.keyCode === 40) {
          this.downvote()
        }
      });
    };

    upvote() {
      this.setState(prevState => ({ count: prevState.count + 1 }))
    }
  
    downvote() {
      if (this.state.count > 0) {
        this.setState(prevState => ({ count: prevState.count - 1 }))
      }
    }
  
    render() {
        console.log("ok")
      const { count } = this.state;
      return(
        <div>
          <h2 className="title">Golden Acorn application with States!🌰</h2>
          <Button text="Buy one" onClick={this.upvote} />
          <Display>{count}</Display>
          <Button text="Eat one" onClick={this.downvote} />
        </div>
      );
    }
  }
  
export default SimpleACorn;