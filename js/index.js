function openLightBox(img_id) {
    document.getElementById("shownImg").style.display = "block";
    document.getElementById("img-lightbox-id").src = "images/" + img_id + ".jpg"

}

// Close the Modal
function closeLightBox() {
    document.getElementById("shownImg").style.display = "none";
}
