import React, { Component } from "react";
import { createRoot } from 'react-dom/client';

interface AppProps {
  color: string
}

class App extends Component<AppProps> {
  render() {
    return (
      <div
        style={{color: this.props.color}}>Hi, From React, Redux, Typescript!
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App color='red' />);