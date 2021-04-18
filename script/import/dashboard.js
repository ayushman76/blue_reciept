//IMPORT DASHBOARD FROM EXPORT.JS
import Dashboard from "../export/dashboard.js";

//CREATE OBJECTS FOR DASHBOARD CLASS

var header = new Dashboard('images/header_img.png','images/dashboard.png');


document.querySelector('.dashboard').innerHTML+=`
    <div class="container">
	    <div class="row">
		     <div class="col-md-12">
			     <div class="dasboard_data text-center">
			         <img src="${header.header}" >
					 <img src="${header.board}" class="wow animated slideInUp">
			     </div>
				 <div class="base">
				     
				 </div>
			 </div>
		</div>
	</div>
`;