//CREATE CLASS FOR HEADER AND NAV
class Header {
    //CREATE CONSTRUCTER 
    constructor(logo_icon,logo_text) {
        this.logo_icon = logo_icon;
        this.logo_text = logo_text;
        //CRAETE METHOD FOR NAVIGATION
        this.Nav_list = function(tabname, tablink) {
            this.tabname = tabname;
            this.tablink = tablink;
        }
		
    }
}

//EXPORT CLASS FOR IMPORT SCRIPT
export default Header;