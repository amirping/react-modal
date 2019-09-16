import React, { Component } from 'react';
import { render } from 'react-dom';
import { Modal } from './Modal';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
  modal:boolean;
}

class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      modal:false,
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  callbackFunction = (childData) => {
    console.log(childData)
       this.setState(childData)
  }

  render() {
    return (
      <div>
        <Modal visible={this.state.modal} parentCallback = {this.callbackFunction}>
          hello denia
        </Modal>
        <p>
          Start editing to see some magic happen :)<hr/>
          <button onClick= {()=>this.toggle()}>modal</button>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
