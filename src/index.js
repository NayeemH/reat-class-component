import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount(){
    this.timerID = setInterval(() => this.Tick(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  Tick(){
    this.setState({
      date: new Date()
    })
  }

  render(){
    return(
      <div>
        <h1>Hello from class</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}



ReactDOM.render(
    <Clock></Clock>,
    document.getElementById("root")
  )



reportWebVitals();
