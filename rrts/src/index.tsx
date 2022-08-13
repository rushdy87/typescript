import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {counter: 0};
  }

  onIncrement= () =>{
    this.setState({counter: this.state.counter + 1});
  };
  
  onDecrement= () =>{
    this.setState({counter: this.state.counter - 1});
  };

  render() {
    return (
      <div>
        <h1>Hi, From React, Redux, Typescript!</h1>
        <div style={{color: this.props.color}}>
          <p>{this.state.counter}</p>
          <button onClick={this.onIncrement}>Increment</button>
          <button onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App color='red' />);