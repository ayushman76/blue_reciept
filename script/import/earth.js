//IMPORT EARTH FROM EXPORT JS
import Earth from "../export/earth.js";

//CREATE OBJECTSA

var img01 = new Earth('images/earth_img01.png','img01');
var img02 = new Earth('images/earth_img02.png','img02');
var img03 = new Earth('images/earth_img03.png','img03');
var img04 = new Earth('images/earth_img04.png','img04');
var img05 = new Earth('images/earth_img05.png','img05');
var img06 = new Earth('images/earth_img06.png','img06');
var img07 = new Earth('images/insta.png','insta');
var img08 = new Earth('images/massenger.png','msg');
var img09 = new Earth('images/bubbble_chat.png','bubble');
var img10 = new Earth('images/massges.png','chat');

//CREATE ARREY FOR EARTH OBJECTS
var img_arr = [img01,img02,img03,img04,img05,img06,img07,img08,img09,img10];

document.querySelector('.earth_main').innerHTML+=`
    <div class="container">
	     <div class="row">
				<div class="col-md-12">
					<div class="earth">
					 <div class="land cursor">
						<span><img src="images/earth.png" class="hah"></span>
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="hah"></span>
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="landimage"></span>
						<span><img src="images/earth.png" class="hah"></span>
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="hah"></span>
						<span><img src="images/earth.png" class="hah"></span> 
						<span><img src="images/earth.png" class="hah"></span>
					</div>
			    </div><!--//earth-->
				<div class="earthImageItems">
				     
				</div>
			</div><!--//col-md-12-->
		 </div>
	</div>
`;
for(var i in img_arr){
	document.querySelector('.earthImageItems').innerHTML+=`
	    <div class="item">
		    <img src="${img_arr[i].img}" alt="" class="${img_arr[i].cls} wow bounceInUp  animated">
		</div>
	`;
}



