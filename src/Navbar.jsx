import React from 'react';
import logo from './image/Logo.png'; 
import group1 from './image/group1.png'; 
import group2 from './image/group2.png'; 
import group3 from './image/group3.png'; 
import emojione1 from './image/emojione1.png'; 
import emojione2 from './image/emojione2.png'; 
import emojione3 from './image/emojione3.png'; 


function Navbar() {
  return (
    <div className="mainpage">
        <div className="navbar">
            <div className="navlogo">
            <img src={logo} className="App-logo" height={30} alt="logo" />
            <div className='navheading'>Good Morning, Gavano!</div>
            </div>
            <i className="fa-regular fa-bell"></i>
        </div>
        <div className='mainbox'>
            <div className='sidebar'>
                <ul>
                    <li className='lifirst'><i class="fa-solid fa-boxes"></i><div className='sidebartext'>Dashboard</div></li>
                    <li><i class="fa-solid fa-computer"></i><div className='sidebartext'>Campaign</div></li>
                    <li><i class="fa-solid fa-credit-card"></i><div className='sidebartext'>Audience</div></li>
                    <li><i class="fa-solid fa-chart-simple"></i><div className='sidebartext'>Performance</div></li>
                    <li><i class="fa-solid fa-thumbs-up"></i><div className='sidebartext'>Promote</div></li>
                    <li><i class="fa-solid fa-user"></i><div className='sidebartext'>Profile</div></li>
                    <li><i class="fa-solid fa-gear"></i><div className='sidebartext'>Setting</div></li>
                </ul>
            </div>
         <div className='avaliable'>
            <div className='boxes'>
                <div className='box1 box'>
                    <div className='title'>
                        <div className='time time1'>Available to witdraw</div>
                        <div className='persantage'>10.0%</div>
                    </div>
                    <div className='number'>$1,567.99</div>
                    <div className='day'>Wed, Jul 20</div>
                </div>
                <div className='box2 box'>
                    <div className='title'>
                    <div className='time'>Today Revenue</div>
                    <div className='persantage persantage1' >3.0%</div>
                    </div>
                    <div className='number'>$2,868.99</div>
                    <div className='day'>143 Orders</div>
                </div>
                <div className='box3 box'>
                <div className='title'>
                    <div className='time'>Today Sessions</div>
                    <div className='persantage'>3.2%</div>
                    </div>
                    <div className='number'>156k</div>
                    <div className='day'>32k Visitors</div>
                </div>
                <div className='box4 box'>
                   
                    <div className='title'>
                    <div className='time'>Subscribers</div>
                    <div className='persantage persantage3'>8.3%</div>
                    </div>
                    <div className='number'>3,422</div>
                    <div className='day'>$34.28 Average Order</div>
                </div>
 
            </div>
            <div className='campaign'>
                <div className='performance'>
                    <div className='pernavbar'>
                        <div className='perheading'>Campaign Performance</div>
                        <button>See All</button>
                    </div>
                    <div className='pernavbar2'>
                       <ul>
                            <li>Campaign</li>
                            <li>Impressions</li>
                            <li>Clicks</li>
                            <li>CPC</li>
                            <li>Spend</li>
                        </ul>
                    </div>
                    <div className='pernavbar3'>
                       <ul>
                            <li className='firstimg'> <img src={group3}  height={33}  /></li>
                            <li>Google Ads</li>
                            <li>189k</li>
                            <li>9k</li>
                            <li>$8.12</li>
                            <li>$56,123.12</li>
                        </ul>
                        <ul>
                        <li>  <img src={group2}  height={33}  /></li>
                            <li>Tik Tok</li>
                            <li>287k</li>
                            <li>15k</li>
                            <li>$12.12</li>
                            <li>$40,123.12</li>
                        </ul>
                        <ul>
                        <li>  <img src={group1}  height={33}  /></li>
                            <li>Instagram</li>
                            <li>156k</li>
                            <li>12k</li>
                            <li>$5.12</li>
                            <li>$39,123.12</li>
                        </ul>
                        
                    </div>
                </div>
                <div className='device '>
                    <div className='devheading'>Device Category</div>
                    <ul>
                            <li><i class="fa-solid fa-mobile-screen-button"></i></li>
                            <li>Mobile</li>
                            <li>96.42%</li>
                  </ul>
                  <ul>
                            <li><i class="fa-solid fa-desktop"></i></li>
                            <li>Desktop</li>
                            <li>2.76%</li>
                  </ul>
                  <ul>
                            <li><i class="fa-solid fa-tablet"></i></li>
                            <li>Tablet</li>
                            <li>0.82%</li>
                  </ul>
                </div>
               
            </div>
            <div><div className='Countries '>
                    <div className='Countriesheading'>Top Countries</div>
                    <ul>
                    <li className='firstimg'> <img src={emojione1}  height={30}  /></li>
                            <li>United State</li>
                            <li>48%</li>
                  </ul>
                  <ul>
                  <li className='firstimg'> <img src={emojione2}  height={30}  /></li>
                            <li>United King...</li>
                            <li>12%</li>
                  </ul>
                  <ul>
                  <li className='firstimg'> <img src={emojione3}  height={30}  /></li>
                            <li>Switzerland</li>
                            <li>9%</li>
                  </ul>
                </div></div>
         </div>  
        </div>
      
    </div>
  );
}

export default Navbar;
