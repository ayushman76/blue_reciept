//impirt slider classs from export script
import Slider from "../export/slider.js";

//CREATE OBJECTS FOR SLIDER CLASS

var heading = new Slider("Text Marketing");
var subheading = new Slider("Customers Love");
var para = new Slider("Increase your revenue by $1000’s with Text Messaging. Send Broadcasts, Create Automations, Text 1-On-1.");
var para01 =new Slider("Start Sending Texts - No Credit Card Necessary. Join thousands of Shopify Brands who use BlueReceipt to transform their business.");

var img01 = new Slider();
img01.img = "images/icon01.png";
var img02 = new Slider();
img02.img = "images/icon02.png";
var img03 = new Slider();
img03.img = "images/icon03.png";
var img04 = new Slider();
img04.img = "images/icon04.png";
var img05 = new Slider();
img05.img = "images/icon05.png";
var img06 = new Slider();
img06.img = "images/icon06.png";

  
var arr_icon = [img01,img02,img03,img04,img05,img06];

//ACCESS SLIDER FROM INDEX.HTML

document.querySelector('.slider').innerHTML+=`
    <div class="container">
         <div class="row">
             <div class="col-md-6">
                 <div class="slider_content">
				     <img src="images/like.png" class="like wow animates bounceInUp">
                    <h1>${heading.content}</h1>
                    <span>${subheading.content}</span>
                    <!---<div class="line">
                          // <img src="images/line.png">
                    // </div>-->
                    <p>${para.content}</p>
                    <div class="sliderbtn_item">
                        <ul class="navbar-nav nav">
                           <li><a href="#" class="slider_btn">
						        <div class="slide_text">
						             <img src="images/logo_icon.png" class="logo_tag"><span>Start 14-Days Free Trial<span>
                                     <span>><span>
						            </div>
						        </a>
                            </li>
                            <li class="slider_talk">
                                <a href="#" class="login_btn ">
						            <div class="login_text">
						                 Talk to Us
						            </div>
						        </a>
                            </li>
                        </ul>
                    </div> <!--//slider_btn_item-->
                    <div class="tursted_item">
                         <p class="para_light">${para01.content}</p>
						<div class="trust_col">
							 
						</div>
                    </div>
                </div><!--//slider_content-->
                
             </div><!--//col-md-6-->
             <div class="col-md-6">
                    <div class="hero_video">
                         ${img01.Video('<video src="video/video.mp4" width="100%" height="100%" loop="loop" muted="muted" playsinline="" autoplay="autoplay"></video>')}
                    </div>
            </div>
         </div>
     <div>
`;

for(var i in arr_icon){
   document.querySelector('.tursted_item>.trust_col').innerHTML+=`
        <div class="icons">
			<img src="${arr_icon[i].img}" class="icon">
		</div>
`;
}
