//CREATE CLASS FOR SLIDER 
class Slider {
    constructor(content){
         this.content = content;
        //CREATING METHOD FOR TRUSTED MARK
         this.trusted = function(img){
             this.img = img;     
         }
   
    }
  Video(v){
            return v;
        }  
}

//EXPORT SLIDER CLASS FOR IMPORT SCRIPT
export default Slider;