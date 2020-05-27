import React from 'react';

class Donor extends React.Component{

    render(){

        return(
            <div>
                <div className="w3-sidebar w3-bar-block w3-border-right" style={{display:"none"}} id="mySidebar">
                    <button onclick="w3_close()" className="w3-bar-item w3-large">Close &times;</button>
                    <a href="SignIn.html" className="w3-bar-item  w3-green" style={{height: "80px",textDecoration: "none",color: "black"}}><i class="fa fa-user-circle icon"></i><br/><span><b>Sign In</b></span></a>
                    <a href="ItemsPage.html" className="w3-bar-item " style={{textDecoration: "none",color: "black"}}>Items</a>
                    <a href="PPEPage.html" className="w3-bar-item " style={{textDecortion: "none",color: "black"}}>PPE</a>
                    <a href="CCTVDonorPage.html" className="w3-bar-item " style={{textDecoration: "none",color: "black"}}>CCTV</a>
                    <a href="SiSeThuPage.html" className="w3-bar-item" style={{textDecoration: "none",color: "black"}}>စီစဉ်သူ</a>
                    <a href="SharePage.html" className="w3-bar-item" style={{textDecoration: "none",color: "black"}}>Share app</a>
                </div>

                <nav class="navbar navbar-expand-sm w3-green fixed-top">
                    <div class="w3-bar w3-green">
                        <button class="w3-bar-item  w3-green w3-xlarge w3-left" id="btn1" onclick="w3_open()">☰</button>
                        <input type="text" class="w3-bar-item" style="border-radius: 20px;width: 50%; margin-top: 7px; margin-left: 10%;display:none" id="searchBtn1"/>
                        <button class="w3-bar-item" style="display: none;margin-top: 12px;background-color: #08a50883;" id="searchBtn2" onclick="closeSearch()"><i class="fa fa-times"></i></button>
                        <a href="RegistrationForm.html"><button class="w3-bar-item w3-green w3-xlarge w3-right" id="searchBtn4" style="display: block;"><i class="fa fa-plus" ></i></button></a>
                        <button class="w3-bar-item w3-green w3-xlarge w3-right" id="searchBtn3" onclick="openSearch()" style="display: block;"><i class="fa fa-search"></i></button>
                            <div class="w3-container" >
                                <h1>အလှူခံ</h1>
                            </div>
                    </div>
                </nav>
                <div class="w3-container">
                    <table class="w3-table w3-bordered" id="changeTable1">
                        <tbody>
                            <tr>
                                <td>
                                    <a href="DonorLocation.html">
                                    <p class="w3-left">University of Dental Mdicine Mandalay.</p> <i class='fas fa-angle-right w3-right'></i>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="DonorLocation.html">
                                    <p class="w3-left">University of Dental Mdicine Mandalay.</p> <i class='fas fa-angle-right w3-right'></i>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="DonorLocation.html">
                                    <p class="w3-left">University of Dental Mdicine Mandalay.</p> <i class='fas fa-angle-right w3-right'></i>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="DonorLocation.html">
                                    <p class="w3-left">University of Dental Mdicine Mandalay.</p> <i class='fas fa-angle-right w3-right'></i>
                                </a>
                                </td>
                            </tr>
                                
                            <tr>
                                <td>
                                    <a href="DonorLocation.html">
                                    <p class="w3-left">University of Dental Mdicine Mandalay.</p> <i class='fas fa-angle-right w3-right'></i>
                                </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href="DonorLocation.html">
                                    <p class="w3-left">University of Dental Mdicine Mandalay.</p> <i class='fas fa-angle-right w3-right'></i>
                                </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="footer">
                    <table id="changeTable2">
                        <tr>
                            <td><a href="HomePage.html" style="text-decoration: none;"><i class="fas fa-donate" style="color: gray;font-size: 20px;"></i><br/><p>အလှူရှင်</p></a></td>
                            <td><a href="AHluKhanPage.html" style="text-decoration: none;"><i class="fa fa-medkit" style="color: gray;font-size: 20px;"></i><br/><p>အလှူခံ</p></a></td>
                            <td><a href="SaYinMyarPage.html" style="text-decoration: none;"><i class="fas fa-newspaper" style="color: gray;font-size: 20px;"></i><br/><p>စာရင်းများ</p></a></td>
                            <td><a href="#" style="text-decoration: none;"><i class="fas fa-comment" style="color: gray;font-size: 20px;"></i><br/><p>Chat</p></a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
export default Donor;