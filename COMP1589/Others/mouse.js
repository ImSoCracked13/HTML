var image;
var dog = document.getElementById("dogPic");
var cat = document.getElementById("catPic");

dog.addEventListener("mousedown", initialClick, false);
cat.addEventListener("mousedown", initialClick, false);




function initialClick(e) {
    var initialX = e.clientX;
    var initialY = e.clientY;
    image = document.getElementById(this.id);

    document.addEventListener("mousemove", function(e){

        var newX = e.clientX - initialX;
        var newY = e.clientY - initialY;  


        image.style.left = newX;
        image.style.top = newY;
    }, false);

}