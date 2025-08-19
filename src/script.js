/*Name this external file gallery.js*/

function upDate(previewPic){
 /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    *needs to be applicable to all 3 images*/
  x=document.getElementById("image");
  x.style.backgroundImage = "url("+previewPic.src+")";

  x.innerHTML = previewPic.alt;
}
  
    
    // 2) Change the text (use innerHTML) of the div with the id = "image" 
    // to the alt text of the preview image 
    // */
  

	function unDo(){
        x = document.getElementById("image");
     x.style.backgroundImage = "url('')";
    x.innerHTML = '<b>Hover over an image below to display here.</b>';}
