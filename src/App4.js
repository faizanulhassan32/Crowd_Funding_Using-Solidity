import './App.css';
import Button from '@mui/material/Button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import Web3 from 'web3'
import './index.css';
import App from './App';
import {CON3_ADDRESS, CON3_ABI} from './con3ABI'

class App4 extends Component {
        constructor() {
                super()
                this.state = { account: [] , contract_obj:'' , amount : '' , recv_id:'' , send_id:'' }                
        }
        componentDidMount() {
                this.loadBlockchainData()
        }

        async loadBlockchainData() {
                const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
                const acc = await web3.eth.getAccounts()
                this.setState({ account: acc })               
                const obj = new web3.eth.Contract(CON3_ABI, CON3_ADDRESS);
                this.setState({ contract_obj: obj })
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
                        <div className="button">
                        <div className="h1">  <h1>Give Donations</h1>  </div>

                        <form onSubmit={
                                        (event) => {
                                                event.preventDefault()
                                                const s = new FormData(event.target).get("sid");
                                                const a = new FormData(event.target).get("am");
                                                const r = new FormData(event.target).get("rid");
                                                
                                                this.setState({ send_id: parseInt(s) })
                                                this.setState({ amount: parseInt(a) })
                                                this.setState({ recv_id: parseInt(r) })
                                                this.state.contract_obj.methods.giveDonation( r ).send({ from:this.state.account[s],value:Web3.utils.toWei(a,'ether'),gas: '1000000' })
                                                this.loadBlockchainData()
                                        }
                                }> 
                                <input name ="sid" type="text" placeholder="Enter Sender ID" required /> <br/><br/>
                                <input name ="am" type="text" placeholder="Enter amount" required /> <br/><br/>  
                                <input name ="rid" type="text" placeholder="Enter Receiver ID" required /> <br/><br/>  
                                <Button > <input type="submit" hidden="" /> </Button>
                                <h4>{this.printvalues()} </h4>
                        </form>                                
                                <Button  onClick= {this.goback} variant="contained">Go back</Button>
                        </div>
                </div>
                </div>
                ); 
        }
        printvalues(){
                return (
                        <>
                        Sender ID : {this.state.send_id} <br/>
                        Amount : {this.state.amount} <br/>
                        Receiver ID : {this.state.recv_id} <br/>
                        </>  
                )
        }
}

export default App4;