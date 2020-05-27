import React from 'react';
import QRCode from 'react-qr-code';
import ReactToPrint from 'react-to-print';


class QRRead extends React.Component{
    
        state={
            name:this.props.name,
            age:this.props.age,
            address:this.props.address,
            phone:this.props.phone
        }

    render(){
            
            
        return(

            <div>
                <div className="card" style={{width:"350px" ,marginTop:"40px"}}>
                                    <div className="card-body" >  
                                        <h5 className="card-title"><b>User Details</b></h5> 
                                        <QRCode value={this.state.phone} size={100}/> 
                                        <p>Name:{this.state.name}</p>
                                        <p>Age:{this.state.age}</p>
                                        <p>Address:{this.state.address}</p>
                                        <p>Phone:{this.state.phone}</p>
                                    </div>
                </div>
            </div>   
        ) 

                
            
        }
}

class PrintComponent extends React.Component{

    render(){
            let name=this.props.location.name;
            let age=this.props.location.age;
            let address=this.props.location.address;
            let phone=this.props.location.phone;
            console.log("name,age,address,phone")
        return(
            <div>
                <ReactToPrint
                      trigger={()=><a href="#">Print this out!</a>}
                     content={()=>this.componentRef}
                      />
                      <QRRead ref={el=>(this.componentRef=el)} name={name} age={age} address={address} phone={phone}/>
    
            </div>
        )
    }
}
export default PrintComponent;