import UpperFooter from "../export/upfooter.js";

var heading  = new UpperFooter('Are you excited');
var subheading = new UpperFooter('for BlueReceipt?');
var para = new UpperFooter('Start Sending Texts in Under 3 Minutes');

document.querySelector('.upfooter').innerHTML+=`
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="my_content white">
					<h1><strong>${heading.content}<strong></h1>
					<h1></strong>${subheading.content}</strong></h1>
					<p>${para.content }</p>
					<ul class="navbar-nav nav">
                        <li>
							<a href="#" class="get_startedbtn">
								<div class="btn_text">
									GetStarted
								</div>
							</a>
						</li>
                      </ul>
			    </div>
			</div><!--//col-md-4-->
			<div class="col-md-8">
				<div class="my_contentimg text-center">
					<img src="images/mobile.png" class="">
			    </div>
			</div><!--//col-md-4-->
			<div class="base_shadow"></div>
		</div>
	</div>
`;