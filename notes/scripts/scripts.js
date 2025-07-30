//alert("hello from javaScript!");

// responding to clicks
function trackClick(){
    console.log("click");
}

// changing the html after an action 
function answerYes(){
    document.getElementById("answerField").textContent = "Yes, i am here!";
}

// Mood Change

function happyMood(){
    document.getElementById("mood").textContent = "im feeling HAPPY😁"
}
function sadMood(){
    document.getElementById("mood").textContent = "im feeling SAD☹️"
}
function excitedMood(){
    document.getElementById("mood").textContent = "im feeling EXCITED🤪"
}
