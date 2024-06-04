function expand_top_nav() {
    var x = document.getElementById("nav_bar");
    if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
    }
}