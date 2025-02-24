function openFullScreen(element) {
    let imgSrc = element.querySelector("img").src;
    let fullScreenDiv = document.createElement("div");
    fullScreenDiv.id = "full-screen";
    fullScreenDiv.innerHTML = `<img src="${imgSrc}" onclick="closeFullScreen()">`;
    document.body.appendChild(fullScreenDiv);
}

function closeFullScreen() {
    document.getElementById("full-screen").remove();
}
