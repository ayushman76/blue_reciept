window.addEventListener('mousemove',CursorMove);

function CursorMove(i){
	var mouse = document.querySelector('.cursor');
	//console.log("OK");
     //console.log(mouse);

		mouse.style.left = i.pageX + 'px';
		mouse.style.right = i.pageX + 'px';
}


 

window.onscroll = fixedNav;
var slide = document.querySelector('.logo_text');
var nav = document.querySelector('header');
var fixed = nav.offsetTop;
function fixedNav(){
   if(window.pageYOffset > fixed){
        nav.classList.add("fixed");
		document.querySelector('.logo_text').style.transform = "translateX(-50px)";
		document.querySelector('.logo_text').style.opacity = '0';
	
        document.querySelector('.logo_text').style.transition  =  'all 0.7s ease';   
     

    }else{
        nav.classList.remove("fixed");
		document.querySelector('.logo_text').style.transform =  'translateX(0px)';
		document.querySelector('.logo_text').style.transition  =  'all 0.7s ease';
     
		document.querySelector('.logo_text').style.opacity = '1';
  
    }
}


function Mytab(evt,tabname){
	 var i ,tabcontent,tablinks
	 tabcontent = document.getElementsByClassName('Tab_img');
	 for(i =0 ; i < tabcontent.length;i++){
	     tabcontent[i].style.display = "none";
	 }
	 tablinks = document.getElementsByClassName('.tablinks');
	 for(i =0;i < tablinks.length ; i++){
	
	 }
	 document.getElementById(tabname).style.display = "block";
	 evt.currentTarget.className +=" active";
}











