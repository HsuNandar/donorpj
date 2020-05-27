import React from 'react';
import {Link, Route, Router, Switch} from 'react-router-dom';
import Donordetail from './Donordetail';


class Donate extends React.Component{

    constructor(props){
        super(props);
        this.state={
             arr:[{id:1,hospitalname:"University of Dental Medicine",contactperson:"U Mg Mg",requireditem:"PPE",qty:3,city:"Mandalay",phone:"09234873129"},
                  {id:2,hospitalname:"Mandalay Hospital",contactperson:"Daw Aye Aye",requireditem:"PPE",qty:4,city:"Mandalay",phone:"09923458124"},
                  {id:3,hospitalname:"Yangon Hospital",contactperson:"U Aung Aung",requireditem:"PPE",qty:7,city:"Yangon",phone:"097720283478"},
                  {id:4,hospitalname:"University of Medicine Mandalay",contactperson:"U Kyaw",requireditem:"PPE",qty:10,city:"Mandalay",phone:"0977299183637"},
                  {id:5,hospitalname:"University of Dental Medicine",contactperson:"U Mg Mg",requireditem:"PPE",qty:4,city:"Yangon",phone:"0928378279"},
                  {id:6,hospitalname:"Magway Hospital",contactperson:"Daw Khin",requireditem:"PPE",qty:9,city:"Magway",phone:"096986382675"}
                    
                ] 
        }
    }
    
    render(){

        return(

            <div>
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{display:"none",position: "absolute",left: "0px",top: "0px",zIndex: "2"}} id="mySidebar">
  <button onClick={this.w3_close} className="w3-bar-item w3-large">Close &times;</button> 
  <a href="SignIn.html" className="w3-bar-item  w3-green" style={{height: "80px",textDecoration: "none",color: "black"}}><i class="fa fa-user-circle icon"></i><br/><span><b>Sign In</b></span></a>
  <a href="ItemsPage.html" className="w3-bar-item " style={{textDecoration: "none",color: "black"}}>Items</a>
  <a href="PPEPage.html" className="w3-bar-item " style={{textDecoration: "none",color: "black"}}>PPE</a>
  <a href="CCTVDonorPage.html" className="w3-bar-item " style={{textDecoration: "none",color: "black"}}>CCTV</a>
  <a href="SiSeThuPage.html" className="w3-bar-item" style={{textDecoration: "none",color: "black"}}>စီစဉ်သူ</a>
  <a href="SharePage.html" className="w3-bar-item" style={{textDecoration: "none",color: "black"}}>Share app</a>
  </div>
    <nav className="navbar navbar-expand-sm w3-green fixed-top">
        <div className="w3-bar w3-green">
           <button className="w3-bar-item  w3-green w3-xlarge w3-left" id="btn1" onClick={this.w3_open}>☰</button> 
           <input type="text" className="w3-bar-item" style={{borderRadius: "20px",width: "50%", marginTop: "7px", marginLeft: "10%",display:"none"}} id="searchBtn1" />
           <button className="w3-bar-item" style={{display: "none",marginTop: "12px",backgroundColor: "#08a50883"}} id="searchBtn2" onClick={this.closeSearch}><i className="fa fa-times"></i></button>
           <Link to="/createform">
           <button className="w3-bar-item w3-green w3-xlarge w3-right" id="searchBtn4" style={{display: "block"}}><i className="fa fa-plus" ></i></button>    
           </Link>
           <button className="w3-bar-item w3-green w3-xlarge w3-right" id="searchBtn3" onClick={this.openSearch} style={{display: "block"}}><i className="fa fa-search"></i></button> 
            <div className="w3-container" >
                <h1>အလှူခံ</h1>
            </div>
        </div>
    </nav>

<table className="w3-table w3-bordered" id="changeTable1" style={{position: "absolute",left: "0px",top: "120px",width:"100%"}}>
      <tbody>
          {
              this.state.arr.map((items)=>{

                return(
                    <tr>
                        <td>
                            <Link to={{pathname:`/donordetail/${items.id}` ,state:{name:this.state.arr}}}><p className="w3-left" style={{color:"black"}}>{items.hospitalname}</p></Link>
                       
                        </td>
                    </tr>
                )
              })
          }
      </tbody>      
</table>

<div className="footer" style={{position: "fixed", left: "0",bottom: "0",width: "100%",backgroundColor:"white",color: "white",paddingTop: "20px",textAlign: "center",borderTop: "1px solid gray"}}>
    <table id="changeTable2" style={{width: "100%",textAlign: "center"}}>
        <tr>
            <td><a href="HomePage.html" style={{textDecoration: "none"}}><i className="fas fa-donate" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}}>အလှူရှင်</p></a></td>
            <td><Route path="/donor"><i class="fa fa-medkit" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}}>အလှူခံ</p></Route></td>
            <td><a href="SaYinMyarPage.html" style={{textDecoration: "none"}}><i className="fas fa-newspaper" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}} >စာရင်းများ</p></a></td>
            <td><a href="#" style={{textDecoration: "none"}}><i class="fas fa-comment" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}}>Chat</p></a></td>
        </tr>
    </table>
  </div> 
</div>
)
}
 }

export default Donate;