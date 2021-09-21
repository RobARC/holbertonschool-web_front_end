function changedMode(size, weight, transform, background, color) {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;

};

function main() {
    
    function spooky(){
        const spooky = changedMode(9, "bold", "uppercase", "pink", "green");
    }
    function darkMode () {
        const darkMode = changedMode(12, "bold", "capitalize", "black", "white");
    }
    function screamMode () {
        const screamMode = changedMode(12, "normal", "lowercase", "white", "black");
    }
    

    const paragraph = document.createElement('p');
    paragraph.innerHTML = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    spooky_button = document.createElement('button');
    spooky_button.innerHTML = "Spooky";
    spooky_button.onclick = function(){
        spooky();
    };
    document.body.appendChild(spooky_button);

    dark_button = document.createElement('button');
    dark_button.innerHTML = "Dark mode";
    dark_button.onclick = function (){
        darkMode();
    };
    document.body.appendChild(dark_button);

    scream_button = document.createElement('button');
    scream_button.innerHTML = "Scream mode";
    scream_button.onclick = function(){
        screamMode();
    };
    document.body.appendChild(scream_button);

    };

main();
