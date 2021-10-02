const element = document.getElementById("main")

element.remove()

const newHeader = document.createElement("h1")

newHeader.className = "victory"
newHeader.id = "victory"

newHeader.textContent = "NICK is the champion"