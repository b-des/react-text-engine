import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextContainer from './components/TextContainer';
import ReactSlider from 'react-slider';

class App extends React.Component{
  wrapperStyle = { width: 400, margin: 50 };

  constructor(props: any){ 
    super(props);
    this.state = {
      value: 30,
      params: { 
        radius: 30
      }
    };
  }

  handle(val: any) {
    this.setState({ 
      value: val.target.value,
      params:{
        radius: val.target.value
      },
    })
    
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="number" onChange={this.handle.bind(this)} min="0" max="100" value={this.state.value}/>
          <TextContainer text={"Edit src/App.tsx and save to reload."} color={"purple"} fontSize={22} effect={"echo"} effectParams={this.state.params}/>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
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

export default App;
