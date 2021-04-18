import Footer from "../export/footer.js";

var heading = new Footer('Grow your');
var subheading = new Footer('Shopify revenue!');
var para = new Footer('Text marketing is the #1 way to increase your revenue and retain your customers LTV. In 5 minutes you can automate 1000’s in revenue!');

document.querySelector('footer').innerHTML+=`
	<div class="container">
		<div class="row">
			<div class="col-md-3">
				<div class="myFooter color_white">
					<h1 class="color_white"><strong>${heading.content}</strong></h1>
					<h1 class="color_blue"><strong>${subheading.content}</strong></h1>
					<p class="para_light">${para.content}</p>
				</div>
			</div>
			<div class="col-md-3">
				<div class="myFooter">
				    <h5>Product</h5>
					<ul class="nav">
						<li>
							<a href="#">Shopify</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col-md-3">
				<div class="myFooter">
				    <h5>Company</h5> 
					<ul class="nav">
						<li>
							<a href="#">About Us</a>
						</li>
						<li>
							<a href="#">Career</a>
						</li>
					
					</ul>
				</div>
			</div>
			<div class="col-md-3">
				<div class="myFooter">
				   <h5>Support</h5>
					<ul class="nav">
						<li>
							<a href="#">Terms</a>
						</li>
						<li>
							<a href="#">Privacy</a>
						</li>
						<li>
							<a href="#">TCPA</a>
						</li>
					
					</ul>
				</div>
			</div>
		</div>
	</div>
`;
 


