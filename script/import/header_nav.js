//import Header Nav from export script
import Header from "../export/header_nav.js";

//CREATE OBJECTS FOR INSERT VALUE HEADER
var logo = new Header('images/logo_icon.png', 'images/logo_text.png');


//CREATE OBJECTS FOR NAV
var nav01 = new Header();
nav01.tabname = "About";
nav01.tablink = "about.html";
var nav02 = new Header();
nav02.tabname = "Blog";
nav02.tablink = "blog.html";
var nav03 = new Header();
nav03.tabname = "Careere";
nav03.tablink = "careere.html";
var nav04 = new Header();
nav04.tabname = "Pricing";
nav04.tablink = "pricing.html";
var nav05 = new Header();
nav05.tabname = "Shopify";
nav05.tablink = "shopify.html";

//CREATE ARREY FOR NAV OBJECTS

var arr_nav = [nav01, nav02, nav03, nav04, nav05];
console.log(arr_nav);

//ACCESS HEADER FROM INDEX
document.querySelector('header').innerHTML += `
	<div class="container">
                <div class="row">
                    <!--//LOGO-ITEMS-->
                    <div class="col-md-3">
                        <div class="logo">
                            <span><img src="${logo.logo_icon}" alt="" class="logo_img"></span>
                            <span><img src="${logo.logo_text}" alt=""  class="logo_text"></span>
                        </div>
                    </div>
                    <!--//NAVIGATION START-->
                    <!---//COL-MD-3-->
                    <div class="col-md-6">
                        <div class="nav_item">
                            <nav>
                                <ul class="navbar-nav nav"></ul>
                            </nav>
                        </div>
                    </div>
                    <!--//col-md-6-->
                    <div class="col-md-3">
                        <div class="nav_btn">
                            <ul class="navbar-nav nav">
                                <li>
                                    <a href="#" class="login_btn">
                                        <div class="login_text">
                                            Login
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="get_startedbtn">
                                        <div class="btn_text">
                                            GetStarted
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--//col-md-3-->
                </div>
				<div class="menu_bar">
					<div data-w-id="38549a1c-7872-6244-f43a-daa389aeab6d" class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0" aria-controls="w-nav-overlay-0" aria-haspopup="menu" aria-expanded="false"><div class="html-embed-12 w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M4 6L20 6M8 12L20 12M4 18H20" stroke="#0083FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
							</svg></div><div class="html-embed-68 w-embed"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							
							</svg>
						</div>
					</div>
				</div>
            </div>
`;

//CREATE ARREY FOR IN LOOP
for (var i in arr_nav) {
    document.querySelector('nav>ul').innerHTML += `
      <li><a href="${arr_nav[i].tablink}">${arr_nav[i].tabname}</a></li>
`;
    //console.log(arr_nav[i].tabname);
}


var nav = document.querySelector('nav>ul');
var btn = document.querySelector('.menu_bar');
btn.addEventListener("click", function(){
	if(nav.style.display === "none"){
	nav.style.display = "block";
	}
	else{
		nav.style.display = "none";
	}
});