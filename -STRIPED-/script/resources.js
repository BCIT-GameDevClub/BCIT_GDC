var currentPageID = "f-cover-page";
//The original z-index of the current page
var currentPageZIndex = 0;

function changePage(pageID) {
    document.getElementById("f-cover-page").style.display = "none";
    if(currentPageID != "f-cover-page"){
        document.getElementById(currentPageID).style.zIndex = currentPageZIndex;
    }
    
    
    currentPageZIndex = parseInt(getComputedStyle(document.getElementById(pageID)).zIndex);
    
    console.log(currentPageZIndex);
    console.log(pageID);
    document.getElementById(pageID).style.zIndex = "0";
    
    currentPageID = pageID;
}