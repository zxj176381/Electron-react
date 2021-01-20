import React, { Component } from 'react';
import { getRouteQuery } from '@/storage';
import logo from '../../../logo.svg';
import './index.scss';

// function navigateBack() {
//   window.history.back(-1);
// }

// const options = getRouteQuery();
// console.log('options', options);

// export function User(props) {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(2);
//   useEffect(() => {
//     // Update the document title using the browser API
//     // document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/User.js</code> and save to reload.
//         </p>
//         <p>You clicked {count} times</p>
//         <p>You clicked {count1} times</p>
//         {/* <p>age: {options.age}</p> */}
//         {/* <p>name: {options.name}</p> */}
//         <button onClick={() => setCount1(count1 + 1)}> Click me </button>
//         <button onClick={() => setCount(count + 1)}> Click me </button>
//         <button onClick={() => navigateBack()}> 返回上一页 </button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class User extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/User.js</code> and save to reload.
          </p>
          <p>You clicked {count} times</p>
          <p>You clicked {count1} times</p>
          {/* <p>age: {options.age}</p> */}
          {/* <p>name: {options.name}</p> */}
          <button onClick={() => setCount1(count1 + 1)}> Click me </button>
          <button onClick={() => setCount(count + 1)}> Click me </button>
          <button onClick={() => navigateBack()}> 返回上一页 </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
