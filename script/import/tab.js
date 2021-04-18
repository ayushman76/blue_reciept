//IMPORT TAB FROM EXPORT SCIPRT
import Tab from "../export/tab.js";

//CREATE OBJECTS FOR TAB  CLASS

var tab01  = new Tab('images/tab_header01.png','images/tab_dash01.png','tab01');
var tab02 = new Tab('images/tab_header02.png','images/tab_dash02.png','tab02');
var tab03 = new Tab('images/tab_header03.png','images/tab_dash03.png','tab03');
var tab04 = new Tab('images/tab_header04.png','images/tab_dash04.png','tab04');
var tab05 = new Tab('images/tab_header05.png','images/tab_dash05.png','tab05');

//CREATE ARREY FOR TABS
var arr_tab = [tab01,tab02,tab03,tab04,tab05];


//ACCESS TAB FROM INDEX HTML

document.querySelector('.tab').innerHTML+=`
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="myTabs">
					<ul class="navbar-nav nav">
						<li>
							<a class="tablinks login_btn " onclick="Mytab(event,'tab01')">
								<div class="login_text">
									Broadcast
							    </div>
							</a>
						</li>
						<li>
							<a class="tablinks login_btn " onclick="Mytab(event,'tab02')">
								<div class="login_text">
									Conversation
							    </div>
							</a>
						</li>
						<li>
							<a class="tablinks login_btn " onclick="Mytab(event,'tab03')">
								<div class="login_text">
									Dashboard
							    </div>
							</a>
						</li>
						<li>
							<a class="tablinks login_btn " onclick="Mytab(event,'tab04')">
								<div class="login_text">
									Automation
							    </div>
							</a>
						</li>
						<li>
							<a class="tablinks login_btn " onclick="Mytab(event,'tab05')">
								<div class="login_text">
									Popups
							    </div>
							</a>
						</li>
				    </ul>
				</div>
			</div><!--//col-md-12-->
			<div class="col-md-12">
				<div class="myTabContent text-center">
					
				</div>
			</div>
		</div>
	</div>
`;

for(var i in arr_tab){
	document.querySelector('.myTabContent').innerHTML+=`
		<div class="Tab_img" id="${arr_tab[i].id}">
			<img src="${arr_tab[i].imgheader}">
			<img src="${arr_tab[i].imgdash}" class="wow  fadeIn animated">
		</div>
	`;
}


