import IntrigationSlider from "../export/intrigation_slider.js";

var heading = new IntrigationSlider('Integrations?');
var subheading = new IntrigationSlider('We have you covered');
var para = new IntrigationSlider('Whether you have 5,000 Shopify customers waiting for a discount or 50,000 subscribers anticipating your Black Friday promotions. BlueReceipt is the platform built for a lifetime of success.');

var slide01 = new IntrigationSlider();
slide01.icon = 'images/slide_icon01.svg';
slide01.slidehead = 'Zipify';
slide01.para = 'Send sms to Zipify Customers';

var slide02 = new IntrigationSlider();
slide02.icon = 'images/slide_icon02.svg';
slide02.slidehead = 'Mailchimp';
slide02.para = 'Create new segments and send more targeted Mailchimp emails';

var slide03 = new IntrigationSlider();
slide03.icon = 'images/slide_icon03.svg';
slide03.slidehead = 'Okendo';
slide03.para = 'end SMS to Okendo reviews';

var slide04 = new IntrigationSlider();

slide04.icon = 'images/slide_icon04.svg';
slide04.slidehead = 'Google Analytics';
slide04.para = 'View Analytics data inside BlueReceipts';

var slide05 = new IntrigationSlider();
slide05.icon = 'images/slide_icon05.svg';
slide05.slidehead = 'Klayvio';
slide05.para = 'View Create new segments and send more targeted Klayvio emails';

var slide06 = new IntrigationSlider();
slide06.icon = 'images/slide_icon06.svg';
slide06.slidehead = 'Facebook';
slide06.para = 'View Create new segments and send more targeted Klayvio Connect messenger and create more target facebook ads campaigns';

var slide_arr = [slide01,slide02,slide03,slide04,slide05,slide06]

document.querySelector('.intrigation').innerHTML+=`
    <div class="container">
	    <div class="row">
		    <div class="col-md-4">
			    <div class="heading">
				    <h2>${heading.content}</h2>
					<h3 class="color_blue">${subheading.content}</h3>
				</div>
			</div><!--//col-md-4-->
			<div class="col-md-6">
			    <div class="para">
				    <p>${para.content}</p>
				</div>
			</div><!--//col-md-6-->
			<div class="col-md-2">
			    <div class="btn">
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
			</div><!--//col-md-2-->
			
		</div>
	</div>
	<div class="col-md-12">
		<div class="list_slider">
			<ul></ul>
		</div>
	</div>
	`;
	
	for(var i in slide_arr){
		document.querySelector('.list_slider>ul').innerHTML+=`
		    <li class="animates wow slideInRight">
			    <a>
				    <div class="slider_content_main">
					     <div class="slide_icon">
					        <img src="${slide_arr[i].icon}">
					     </div>
					    <div class="slide_content">
							<h5>${slide_arr[i].slidehead}</h5>
							<p>${slide_arr[i].para}</p>
					     </div>
					</div>
				</a>
			</li>
		`;
	}
	