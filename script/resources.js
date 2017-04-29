function changePage(page, pageID) {
    if(page != 0) document.getElementById("f-cover-page").style.display = "none";
    document.getElementById(pageID).style.zIndex = "0";
}