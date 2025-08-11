
// practicing jQuary

// 1. hide action

// slector       action
$("#hideButton").click(function(){
    // code
    //console.log("hide button clicked")
    $("p").hide();
});


// Activity: create events to trigger 
// the click action for each button

$("#showButton").click(function(){
    //console.log("show Button clicked")
    $("p").show();
})

$("#toggleButton").click(function(){
    console.log("toggle button clicked")
})

$("#changeTextButton").click(function(){
    console.log("change text button clicked")
})

$("#addHTMLButton").click(function(){
    console.log("add HTML Button clicked")
})

$("#addCSSButton").click(function(){
    console.log("add CSS Button clicked")
})

$("#addCSSClassButton").click(function(){
    console.log("add CSS Button Clicked")
})

$("#triggerEventButton").click(function(){
    console.log("trigger Event button Clicked")
})
