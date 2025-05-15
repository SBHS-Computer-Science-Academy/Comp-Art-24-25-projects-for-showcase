var names = [
    "Alex",
    ["Angelo and Xavi", "https://space-invader-game-12369487.codehs.me/index.html"],
    "Ceci",
    "Damien",
    "Hassan, Steven, and Thomas",
    "Hector",
    "Henry, Jayden, and Nico",
    ["Henry, Ian, and Tristan", "https://final-project-12320783.codehs.me/index.html"],
    ["Josh and Mia", "https://monkey-game-12372862.codehs.me/index.html"],
    "Itzel",
    "Jocelyn",
    "Karl",
    "Kate",
    "Kathy",
    "Kaya",
    "Lily",
    "Maddie",
    "Marvin",
    "Mason",
    "Nash",
    "Nick",
    "Noah",
    "Shae"
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '" target="_blank" rel="noopener noreferrer"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var fileUrl = "";
    if (name.constructor === Array) {
    	name = names[idx][0];
    	fileUrl = names[idx][1];
    }
    var file = name.replaceAll(" ","").replaceAll(",","").replace("and","");
    var imageName = file + ".png"
    
    if (fileUrl != "") file = fileUrl;
    var card = generateCard(name, imageName, name, file);
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
