document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const info = document.getElementById("info");
    const mainText = document.getElementById("main-text");
    const buttonA = document.getElementById("virginia-button");
    const buttonB = document.getElementById("hanif-button");
    const hanifSpans = mainText.querySelectorAll(".hanif");
    const virginiaSpans = mainText.querySelectorAll(".virginia");
    const body = document.body;


    mainText.style.display = "none";



    buttonA.addEventListener("click", () => {
        mainText.style.display = "block"; 
        mainText.style.color = "lightblue";
        intro.style.color = "lightblue";

        info.textContent = "Suicide Note (1941), Virgnia Woolf";
        info.style.color = "lightblue";

        body.style.backgroundColor = "darkslategrey";

        buttonA.style.background = "lightblue";
        buttonA.style.color = "darkslategrey";
        buttonA.style.border = "1px solid lightblue";

        buttonB.style.background = "darkslategrey";
        buttonB.style.color = "lightblue";
        buttonB.style.border = "1px solid lightblue";


        hanifSpans.forEach(span => span.style.color = "darkslategrey");
        virginiaSpans.forEach(span => span.style.color = "lightblue");
        
    });


    buttonB.addEventListener("click", () => {
        info.textContent = "The Author Writes His First Draft of Wedding Vows (2016), Hanif Abdurraqib";
        info.style.color = "lightpink";

        mainText.style.display = "block"; 
        mainText.style.color = "lightpink";
        intro.style.color = "lightpink";

        body.style.backgroundColor = "firebrick";

        buttonA.style.background = "firebrick";
        buttonA.style.color = "lightpink";
        buttonA.style.border = "1px solid lightpink";

        buttonB.style.background = "lightpink";
        buttonB.style.color = "firebrick";
        buttonB.style.border = "1px solid lightpink";


        hanifSpans.forEach(span => span.style.color = "lightpink");
        virginiaSpans.forEach(span => span.style.color = "firebrick");

    });
});