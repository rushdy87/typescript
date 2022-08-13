import React from "react";
import { createRoot } from 'react-dom/client';

interface AppProps {
  today: string;
}

const App = (props: AppProps): JSX.Element => {
  return (
    <div>
      <h1>Hi, From React, Redux, Typescript!</h1>
      <div>
        <p>Functional Component</p>
        <p>Today is {props.today}</p>
      </div>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App today={new Date().toLocaleDateString()} />);



// import React, { Component } from "react";
// import { createRoot } from 'react-dom/client';

// interface AppProps {
//   color: string;
// }


// class App extends Component<AppProps> {

//   state = {
//     counter: 0
//   };

//   onIncrement= () =>{
//     this.setState({counter: this.state.counter + 1});
//   };
  
//   onDecrement= () =>{
//     this.setState({counter: this.state.counter - 1});
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hi, From React, Redux, Typescript!</h1>
//         <div style={{color: this.props.color}}>
//           <p>{this.state.counter}</p>
//           <button onClick={this.onIncrement}>Increment</button>
//           <button onClick={this.onDecrement}>Decrement</button>
//         </div>
//       </div>
//     );
//   }
// }

// const container = document.getElementById('root');
// const root = createRoot(container!);
// root.render(<App color='red' />);