import React from 'react';
import { Link,Route } from 'react-router-dom';
import QRCode from 'react-qr-code';
class QRgenerate extends React.Component{

    constructor(props){

        super(props);
        this.state={

            name:'',
            age:'',
            address:'',
            phone:'',
            
           
        }
        
    }

    handleName=(e)=>{
        this.setState({name:e.target.value})
    }
    handleAge=(e)=>{
        this.setState({age:e.target.value})
    }
    handleAddress=(e)=>{
        this.setState({address:e.target.value})
    }
    handlePhone=(e)=>{
        this.setState({phone:e.target.value})
    }
    
    render(){
        // console.log(this.state.name,this.state.age,this.state.address,this.state.phone)
        return(
            

            <div align="center" style={{marginTop:"30px"}}>
                <form>
                    <input type="text" placeholder="Your Name"  onChange={(e)=>this.handleName(e)}/><br></br><br></br>
                    <input type="number" placeholder="Your Age"   onChange={(e)=>this.handleAge(e)}/><br></br><br></br>
                    <input type="text" placeholder="Your Address"  onChange={(e)=>this.handleAddress(e)}/><br></br><br></br>
                    <input type="text" placeholder="Your Phone" onChange={(e)=>this.handlePhone(e)}/><br></br><br></br>
                    <Link to ={{pathname:"/qrprint",name:this.state.name,age:this.state.age,address:this.state.address,phone:this.state.phone}}>
                        <button className="btn btn-success" >Generate QR Code</button>
                    </Link>
                </form>
            </div>
            
        )
    }
}
export default QRgenerate;