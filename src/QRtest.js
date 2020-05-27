import React,{useRef} from 'react';
import QRCode from "react-qr-code";
import ReactToPrint from 'react-to-print';
import PrintComponents from 'react-print-components';
import QrScan from 'react-qr-scanner';
import { Link } from 'react-router-dom';

const print=()=>{
         window.print();
    }
class QRtest extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            age:'',
            address:'',
            phone:'',
            arr:[]

        }
    }

    handleName=e=>{
        this.setState({name:e.target.value})
    }
    handleAge=e=>{
        this.setState({age:e.target.value})
    }
    handleAddress=e=>{
        this.setState({address:e.target.value})
    }
    handlePhone=e=>{
        this.setState({phone:e.target.value})
    }
    handleSubmit=e=>{
        e.preventDefault();
        let userArr={name:this.state.name,age:this.state.age,address:this.state.address,phone:this.state.phone}
        this.state.arr.push(userArr);
        this.setState({name:""})
        this.setState({age:""})
        this.setState({address:""})
        this.setState({phone:""})

        console.log(this.state.arr)
        
    }
                
    render(){
            let newArr=[...this.state.arr];
            let filterArr =newArr;
        return(
            <div align="center">
                <div style={{marginTop:"30px"}}>
                    <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <input type="text" placeholder="Your Name" value={this.state.name} onChange={(e)=>this.handleName(e)}></input> <br></br><br></br>
                        <input type="number" placeholder="Your Age" value={this.state.age} onChange={(e)=>this.handleAge(e)}></input> <br></br><br></br>
                        <input type="text" placeholder="Your Address" value={this.state.address} onChange={(e)=>this.handleAddress(e)}></input> <br></br><br></br>
                        <input type="text" placeholder="Your Phone" value={this.state.phone} onChange={(e)=>this.handlePhone(e)}></input> <br></br><br></br>
                         {/* <Link to={{pathname:"/qrprint" , name:this.state.arr.name,age:this.state.arr.age,address:this.state.arr.address,phone:this.state.arr.phone}}> */}
                         <button type="submit" className="btn btn-success" style={{marginLeft:"30px"}}>Generate QR Code</button>

                         {/* </Link> */}
                        

                        

                    </form>   
                </div>
                
                
                {filterArr.map((value,key)=>{
                    return(
                            <div>
                                <div className="card" style={{width:"350px" ,marginTop:"40px"}}>
                                    <div className="card-body" >  
                                        <h5 className="card-title"><b>User Details</b></h5> 
                                        <QRCode value={value.phone} size={100}/> 
                                        <p key={value.name}>Name:{value.name}</p>
                                        <p onClick={print}>Age:{value.age}</p>
                                        <p>Address:{value.address}</p>
                                        <p>Phone:{value.phone}</p>
                                    </div>
                                </div>
                            </div>
                            
    
                        )
                            
                    })
                } 
                        
            </div>
            )
        }
    }

    // Calling from Class Component

    //  class ExamplePrintReact extends React.Component{

        

         
    
    //      render(){
    //          const QR =()=>{
    //              let name=this.props.location.name;
    //              let age=this.props.location.age;
    //              let address=this.props.location.address;
    //              let phone=this.props.location.phone;
    //          }
             
    //          return(
    
    //              <div>
    //                  <ReactToPrint
    //                  trigger={()=><a href="#">Print this out!</a>}
    //                  content={()=>this.componentRef}
    //                  />
    //                  <QR ref={el=>(this.componentRef=el)} />
    
    //              </div>
    //          )
    //      }
    // }

    // Calling from Functional Component

    // const ExamplePrintReact =()=>{

    //     const componentRef = useRef();
    //     return(

    //         <div>
                
    //             <ReactToPrint
    //                 trigger={()=><button>Print this out!</button>}
    //                 content={()=>componentRef.current}
    //             />
    //             <QRtest ref={componentRef}/>
            
    //         </div>
    //     )
    // }

    class PrintComponent extends React.Component{

        render(){
            return(
                <div>
                    <PrintComponents
        trigger={<button>Print this out</button>}>

            <h1></h1>
        </PrintComponents>

                </div>
            )
        }
    }

export default QRtest;