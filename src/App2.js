import './App.css';
import Button from '@mui/material/Button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Web3 from 'web3'
import App from './App';
import {CON3_ADDRESS, CON3_ABI} from './con3ABI'

class App2 extends Component {
        constructor() {
                super()
                this.state = { account: [] , contract_obj:'' , description : '' , amount : '' , account_id:'' }                
        }
        componentDidMount() {
                this.loadBlockchainData()
        }
        
        async loadBlockchainData() {
                const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
                const acc = await web3.eth.getAccounts()
                this.setState({ account: acc })               
                const simpstorage = new web3.eth.Contract(CON3_ABI, CON3_ADDRESS);
                this.setState({ contract_obj: simpstorage })
        }

        goback() {              
                const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <React.StrictMode>      <App />         </React.StrictMode>
                );
        }
        render()  {
                return (
                <div className="App">
                <div className="center">
                        <div className="button">
                        <div className="h1">  <h1>Input form here</h1>  </div>

                        <form onSubmit={
                                        (event) => {
                                                event.preventDefault()
                                                const d = new FormData(event.target).get("des");
                                                const a = new FormData(event.target).get("am");
                                                const i = new FormData(event.target).get("aid");
                                                this.setState({ description: d })
                                                this.setState({ amount: parseInt(a) })
                                                this.setState({ account_id: parseInt(i) })
                                                this.state.contract_obj.methods.addReq(d , a).send({ from:this.state.account[i],gas: '1000000' })
                                                this.loadBlockchainData()
                                        }
                                }>
                                <input name ="des" type="text" placeholder="Enter description" required />  <br/><br/>  
                                <input name ="am" type="text" placeholder="Enter amount" required /> <br/><br/>  
                                <input name ="aid" type="text" placeholder="Enter Account id" required /> <br/><br/>
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
                        Description : {this.state.description} <br/>
                        Amount : {this.state.amount} <br/>
                        ID : {this.state.account_id}
                        </>  
                )
        }
}
export default App2;