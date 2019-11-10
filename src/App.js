import React, {Component} from 'react';
import './App.css';
import axios from "axios"


class App extends Component {

state={
  response: {}
}

getData= async () =>{
  const res = await axios.get("https://api.chucknorris.io/jokes/random")
  
  await this.setState({response: res.data})
console.log(this.state.response);
}

  render () {
  return (
    <div className="App">
      <button onClick={()=>this.getData()}>Clique aqui para exibir o lero lero </button>
    <p>{this.state.response.value}</p>
    </div>
  )
  }
}
export default App;
