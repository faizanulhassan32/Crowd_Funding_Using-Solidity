import './App.css';
import Button from '@mui/material/Button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';

class App extends Component {
    gotoaddress() {              
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
          <React.StrictMode>    <App1 />    </React.StrictMode>
      );
    }

    gotoinput(){
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
          <React.StrictMode>    <App2 />    </React.StrictMode>
      );
    }

    gotorequests(){
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
          <React.StrictMode>    <App3 />    </React.StrictMode>
      );
    }

    gotodonations(){
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(
          <React.StrictMode>    <App4 />    </React.StrictMode>
      );
    }

    render() {
        return (
          <div className="App">
            <div className="center">
                <div className="button">

                  <div className="h1">  <h1>Main Page</h1>  </div>
                  <Button  onClick= {this.gotoaddress} variant="contained">Get addresses</Button> <br /><br />
                  <Button  onClick= {this.gotoinput} variant="contained">Create new request</Button><br /><br />
                  <Button  onClick= {this.gotorequests} variant="contained">Get all requests</Button><br /><br />
                  <Button  onClick= {this.gotodonations} variant="contained">Give Donations</Button>
                </div>
            </div>
          </div>
        ); 
      }
}
export default App;