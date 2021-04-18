//IMPORT ABOUT FROM EXPORT SCRIPT
import About from "../export/about.js";

//CREATE OBJECTS FOR ABOUT CLASS
var heading = new About('BlueReceipt is Your Marketing Hub');
var subheading = new About('for Text Subscribers  🎉');
var para = new About('A single all-in-1 Platform for text marketing and helpdesk. Make thousands on autopilot in minutes! Every brand asset in one!')
var process01 = new About('Capture');
var process02 = new About('Connect');
var process03 = new About('Convert');

//ACCESS ABOUT FROM INDEX.HTML

document.querySelector('.about').innerHTML+=`
    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="main_content text-center">
					<div class="about_content ">
					   <img src="images/tag_icon.png" class="animates wow bounceInUp">
						<h2 class="animates wow bounceInUp"><strong>${heading.content}</strong></h2>
					</div>
				    <div class="process_items text-center display-grid animates wow bounceInUp">
						<div class="process">
							 <h3><strong>${process01.content}</strong>  <span><i class="fa fa-check"></i></span></h3>
						</div>
						
						<div class="process">
							 <h3><strong>${process02.content}</strong> <span><i class="fa fa-long-arrow-right"></i></span></h3>
						</div>
						<div class="process">
							 <h3><strong>${process03.content}</strong></h3>
						</div>
				    </div>
					<div class="subcontent animates wow bounceInUp">
					    <h3><strong>${subheading.content}</strong></h3>
						<p>${para.content}</p>
						<ul class="navbar nav">
						    <li>
								<a href="#" class="login_btn ">
									<div class="login_text">
										 Get Started
									</div>
							     </a>
						    </li>
						</ul>
					</div>
				</div>
			</div><!--//col-md-12-->
		</div>
	</div>
`;