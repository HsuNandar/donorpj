import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Donate from './Donate';
import QRCode from 'react-qr-code';

// const donor=[{id:1,hospitalname:"University of Dental Medicine",contactperson:"U Mg Mg",requireditem:"PPE",qty:3,city:"Mandalay",phone:"09234873129"},
// {id:2,hospitalname:"Mandalay Hospital",contactperson:"Daw Aye Aye",requireditem:"PPE",qty:4,city:"Mandalay",phone:"09923458124"},
// {id:3,hospitalname:"Yangon Hospital",contactperson:"U Aung Aung",requireditem:"PPE",qty:7,city:"Yangon",phone:"097720283478"},
// {id:4,hospitalname:"University of Medicine Mandalay",contactperson:"U Kyaw",requireditem:"PPE",qty:10,city:"Mandalay",phone:"0977299183637"},
// {id:5,hospitalname:"University of Dental Medicine",contactperson:"U Mg Mg",requireditem:"PPE",qty:4,city:"Yangon",phone:"0928378279"},
// {id:6,hospitalname:"Magway Hospital",contactperson:"Daw Khin",requireditem:"PPE",qty:9,city:"Magway",phone:"096986382675"}

// ] 
// const print=()=>{
//     window.print();
// }

class Donordetail extends React.Component {


    render(){
        // const name =props.location.name
        // const {id}=useParams();
        const name = this.props.location.state.name
        console.log({name});  
        return(
            

            <div>
                
                <nav className="navbar navbar-expand-sm w3-green fixed-top" style={{width: "100%",height: "35px"}}>
                    <div>
                        <Link to="/"><i class='fas fa-arrow-left' style={{size: "20px",fontSize: "20px",paddingLeft:"20px"}}></i></Link>
                        <h4 style={{display: "inline-block",paddingLeft: "5px"}}>အလှူရှင်</h4>

                    </div>       
                </nav>
                
                <div  style={{paddingTop:"50px",paddingLeft:"10px"}}>
                        
                    
                    
                     <h3>အလှူရှင် တည်နေရာ</h3>
                    <p>
                       
                    {name.hospital}                 
                    </p>
                    <p></p>
                    <p></p>
                    <small>Qty Donate</small>
                    <p></p>
                    <small>City/Township</small>
                    <p></p>
                    <QRCode value="sksk" size={100}/> 
                    
                   
                </div>
                <div className="footer" style={{position: "fixed", left: "0",bottom: "0",width: "100%",backgroundColor:"white",color: "white",paddingTop: "20px",textAlign: "center",borderTop: "1px solid gray"}}>
                    <table id="changeTable2" style={{width: "100%",textAlign: "center"}}>
                        <tr>
                            <td><a href="HomePage.html" style={{textDecoration: "none"}}><i className="fas fa-donate" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}}>အလှူရှင်</p></a></td>
                            <td><i class="fa fa-medkit" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}}>အလှူခံ</p></td>
                            <td><a href="SaYinMyarPage.html" style={{textDecoration: "none"}}><i class="fas fa-newspaper" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}} >စာရင်းများ</p></a></td>
                            <td><a href="#" style={{textDecoration: "none"}}><i class="fas fa-comment" style={{color: "gray",fontSize: "20px"}}></i><br/><p style={{color:"black"}}>Chat</p></a></td>
                        </tr>
                    </table>
                </div>

            </div>
        )
    }

}    
       
   
       
       

//   const  Donordetail=()=>{
        
          
        //   const {id}=params
        //   const detail=props.data
        //   var arr;
        //   if(detail)
        //   arr=(
        //       <div>
        //           <h3>{detail.hospitalname}</h3>
        //           <h3>{detail.contactperson}</h3>
        //           <h3>{detail.requireitem}</h3>
        //           <h3>{detail.qty}</h3>
        //           <h3>{detail.city}</h3>
        //           <h3>{detail.phone}</h3>
        //       </div>
        //   )
        //   else arr=<h2>Sorry</h2>
            //   const {id}  = useParams()
            //  const {hospitalname}=useParams()
            //  const detail = donor[parseInt(id-1)];
            //  console.log(id)
        //   if(!detail)return<div>Image not found</div>

        
    
export default Donordetail;