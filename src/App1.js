import './App.css';
import Button from '@mui/material/Button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Web3 from 'web3'
import './index.css';
import App from './App';

class App1 extends Component {
        constructor() {
                super()
                this.state = { account : [] }                
        }
        componentDidMount() {
                this.loadBlockchainData()
        }
        async loadBlockchainData() {
                const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
                const acc = await web3.eth.getAccounts()
                this.setState({ account: acc })
                // const balance = await web3.eth.getBalance(acc[0])
                // this.setState({ bal: balance })
        }

        getaddress() {
                return (
                  <>
                  A0 : {this.state.account[0]} <br/>
                  A1 : {this.state.account[1]} <br/>
                  A2 : {this.state.account[2]} <br/>
                  A3 : {this.state.account[3]} <br/>
                  A4 : {this.state.account[4]} <br/> 
                  A5 : {this.state.account[5]} <br/> 
                  A6 : {this.state.account[6]} <br/> 
                  A7 : {this.state.account[7]} <br/> 
                  A8 : {this.state.account[8]} <br/> 
                  A9 : {this.state.account[9]} <br/> 
                  </>    
                )
        }

        goback() {              
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <React.StrictMode>      <App />         </React.StrictMode>
              );
        }

        render() {
                return (
                <div className="App">
                <div className="center">
                        <div className="h1">  <h1>Addresses From Ganache</h1>  </div>
                        <div className="button">
                                <h4>{this.getaddress()} </h4>

                                <Button  onClick= {this.goback} variant="contained">Go back</Button>
                        </div>
                </div>
                </div>
                ); 
        }
}

export default App1;