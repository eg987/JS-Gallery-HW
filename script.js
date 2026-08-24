function upDate(previewPic){
	x=document.getElementById("image");
	x.style.backgroundImage = "url('"+previewPic.src+"')";
	x.innerHTML = previewPic.alt;
}  
function unDo(){
	x = document.getElementById("image");
	x.style.backgroundImage = "url('')";
    x.innerHTML = '<b>Hover over an image below to display here.</b>';}
