document.getElementById("closebutton").addEventListener("click", overlayclose);
function overlayclose(){
	chrome.runtime.sendMessage({action: 'closeWindow'}); 
}