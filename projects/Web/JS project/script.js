// Charles Miller
// GIT 417
// Final Project - Javascript Tutorial
// Fall A 2020  


//onclick submitCat and place at innerHTML of cat
function submitCategory () {
    category = document.getElementById("category").value;

    document.getElementById("cat").innerHTML = category;
}

//create array for subCat (subcategories)
var subCat = [];

//onclick use push to add entry to the end of the array and clear text entry
function submitSubCat() {
        subCat.push(document.getElementById("entry").value);
        document.getElementById("entry").value = "";
}

//onclick place in innerHTML of subCat
function displaySubCat() {
    document.getElementById("subCat").innerHTML = subCat.join("<br>");
}