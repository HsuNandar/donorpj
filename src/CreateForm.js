import React from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';
import Donate from './Donate';
class CreateForm extends React.Component{

  constructor(props){
    super(props);
    

    this.state={
        hospitalname: '',
        contactperson: '',
        requireditem: '',
        qty: '',
        city: '',
        phone: '',
        arr:[]
    }
    this.handleName = this.handleName.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleItem = this.handleItem.bind(this);
    this.handleQty = this.handleQty.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);

}

handleName=e=>{
  
  this.setState ({hospitalname:e.target.value})
}
handleContact=e=>{
  this.setState({contactperson:e.target.value})
}
handleItem=e=>{
  this.setState({requireditem:e.target.value})
}
handleQty=e=>{
  this.setState({qty:e.target.value})
}
handleCity=e=>{
  this.setState({city:e.target.value})
}
handlePhone=e=>{
  this.setState({phone:e.target.value})
}
handleOnSubmit=e=>{
  e.preventDefault();
  if(this.state.hospitalname!= '' && this.state.contactperson!= '' && this.state.requireditem!= '' &&
      this.state.qty!= '' && this.state.city!= '' && this.state.phone!= ''){
          let tempArr ={hospitalname:this.state.hospitalname,contactperson:this.state.contactperson,
                        requireditem:this.state.requireditem,qty:this.state.qty,city:this.state.city,
                        phone:this.state.phone};
      this.state.arr.push(tempArr);
     
     console.log(this.state.arr)
       this.setState({hospitalname:""});
       this.setState({contactperson:""});
       this.setState({requireditem:""});
       this.setState({qty:""});
       this.setState({city:""});
       this.setState({phone:""});
      //  document.getElementById("hospital").value="";
      //  document.getElementById("contact").value="";
      //  document.getElementById("item").value="";
      //  document.getElementById("qty").value="";
      //  document.getElementById("city").value="";
      //  document.getElementById("phone").value="";

       
    }
  }
    
    render(){
     let newArr= [...this.state.arr]
      let filterArr = newArr
       
        return (
          
            <div className="container">
             

            <div>
              <div className="modal-dialog" style={{height:"700px" }} role="document">
                <div className="modal-content" style={{height: "90%"}}>
                  <div className="modal-header" style={{backgroundColor: "#17a649"}}>
                    <i className="fas fa-check" style={{color: "white"}}></i>
                    <h5 className="modal-title" id="exampleModalLabel" style={{color: "white",paddingLeft: "20px"}}>New Item</h5>
                    <a href="/"><button type="button" style={{color: "white"}} className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button></a>
                  </div>
                  <div className="modal-body">
                      <form onSubmit={(e)=>this.handleOnSubmit(e)}> 
                        <div className="form-group" style={{width: "100%",marginBottom: "10px",boxSizing: "border-box",paddingTop: "20px"}}> 
                        <i className="far fa-hospital" style={{ color:"green" ,display : "block" , position : "absolute",paddingTop: "10px",paddingLeft:"10px"}}></i>                
                        <input className="form-control" type="text" style={{width :"100%" , padding : "22px" , paddingLeft :"30px",border : "none" ,borderBottom: "1.2px solid gray",backgroundColor: "#f0f5f2"}} placeholder="Hospital Name" id="hospital" value={this.state.hospitalname} onChange={(e)=>this.handleName(e)}/> 
                        </div> 
              
                        <div className="form-group" style={{width: "100%",marginBottom: "10px",boxSizing: "border-box",paddingTop: "20px"}}> 
                            <i class="far fa-address-book" style={{color:"green" ,display : "block" , position : "absolute",paddingTop: "10px",paddingLeft:"10px"}}></i> 
                            <input className="form-control" type="text" placeholder="Contact Person" id="contact" value={this.state.contactperson} onChange={(e)=>this.handleContact(e)}
                            style={{width :"100%" , padding : "22px" , paddingLeft :"30px",border : "none" ,borderBottom: "1.2px solid gray",backgroundColor: "#f0f5f2"}} /> 
                        </div> 
                        <div className="form-group" style={{width: "100%",marginBottom: "10px",boxSizing: "border-box",paddingTop: "20px"}}> 
                            <i className="fas fa-bars" style={{color:"green" ,display : "block" , position : "absolute",paddingTop: "10px",paddingLeft:"10px"}}></i>
                            <input className="form-control" type="text"placeholder="Required Items" id="item" value={this.state.requireditem} onChange={(e)=>this.handleItem(e)} style={{width :"100%" , padding : "22px" , paddingLeft :"30px",border : "none" ,borderBottom: "1.2px solid gray",backgroundColor: "#f0f5f2"}}/> 
                        </div> 
                        <div className="form-group" style={{width: "100%",marginBottom: "10px",boxSizing: "border-box",paddingTop: "20px"}}> 
                            <i className="fas fa-list-ol" style={{color:"green" ,display : "block" , position : "absolute",paddingTop: "10px",paddingLeft:"10px"}}></i>
                            <input className="form-control" type="number"placeholder="Qty Needed" id="qty" value={this.state.qty} onChange={(e)=>this.handleQty(e)} style={{width :"100%" , padding : "22px" , paddingLeft :"30px",border : "none" ,borderBottom: "1.2px solid gray",backgroundColor: "#f0f5f2"}}/> 
                        </div> 
                        <div className="form-group" style={{width: "100%",marginBottom: "10px",boxSizing: "border-box",paddingTop: "20px"}}> 
                            <i className="far fa-building" style={{color:"green" ,display : "block" , position : "absolute",paddingTop: "10px",paddingLeft:"10px"}}></i> 
                            <input className="form-control" type="text"placeholder="City/Township" id="city" value={this.state.city} onChange={(e)=>this.handleCity(e)} style={{width :"100%" , padding : "22px" , paddingLeft :"30px",border : "none" ,borderBottom: "1.2px solid gray",backgroundColor: "#f0f5f2"}}/>
                        </div> 
                        <div className="form-group" style={{width: "100%",marginBottom: "10px",boxSizing: "border-box",paddingTop: "20px"}}> 
                            <i className="fas fa-phone " style={{color:"green" ,display : "block" , position : "absolute",paddingTop: "10px",paddingLeft:"10px"}}></i>
                            <input className="form-control" type="number" placeholder="Phone" id="phone" value={this.state.phone} onChange={(e)=>this.handlePhone(e)} style={{width :"100%" , padding : "22px" , paddingLeft :"30px",border : "none" ,borderBottom: "1.2px solid gray",backgroundColor: "#f0f5f2"}} /> 
                        </div> 
                        
                        {/* <Link to="/"> */}
                        <button type="submit"  className="btn btn-success"  style={{marginLeft: "180px",marginTop:"30px"}}>Add</button>

                        {/* </Link> */}

                      </form>
                     

                  </div>
                  
                </div>
              </div>
              <h1>{this.state.hospitalname}</h1>

            </div>
            <Route exact path="/" render={() => <Donate name={this.state.hospitalname}/>}  />             
<table border="1px solid" align="center"> 
              <thead>
                <tr >
                  <th>Hospital</th>
                  <th>Contact Person</th>
                  <th>Required Item</th>
                  <th>Qty</th>
                  <th>City</th>
                  <th>Phone</th>
                </tr>
                
              </thead>
              <tbody>
                {
                  filterArr.map((value,key)=>{
                    return(
                      <tr key={value.hospitalname}>
                          <td>{value.hospitalname}</td>
                          <td>{value.contactperson}</td>
                          <td>{value.requireditem}</td>
                          <td>{value.qty}</td>
                          <td>{value.city}</td>
                          <td>{value.phone}</td>

                      </tr>
                    )
                  }

                  )
                  
                }
              </tbody>
            </table> 
            </div>
            
        )
        
    }
}
export default CreateForm;