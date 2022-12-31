import './App.css';
import Button from '@mui/material/Button';
import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Web3 from 'web3'
import App from './App';
import {CON3_ADDRESS, CON3_ABI} from './con3ABI'

class App3 extends Component {
        constructor() {
                super()
                this.state = { account: [] , contract_obj:'' , description : '' , amount : '' , value:[] }                
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
                const val =  await obj.methods.getAllRequests().call()
                this.setState({ value : val })
        }
        printlist(){
                return (
                <>
                        <ul>
                        {this.state.value.map(
                                        (v, index) => (
                                        <li key={index}> ID : {v[0]} , Req_Name : {v[1]} , Req_Money : {v[2]} , Mon_Rec : {v[3]} ,<br /> Cre_Add : {v[4]} <br /><br /></li>
                                        )
                                ) 
                        }
                        </ul> 
                </> 
                )   
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
                <div className="center1">
                        <div className="h1">  <h1>All Requests here</h1>  </div>

                        <h4>{this.printlist()}</h4>
                        <Button  onClick= {this.goback} variant="contained">Go back</Button> 
                </div>
                </div>
                ); 
        }

}
export default App3;