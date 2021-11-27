function changeImage(jpg){

    var selectImage = document.getElementById("image")
    selectImage.src = jpg;
    selectImage.style.width = '400px';
    selectImage.style.height='auto';
}

function generate(form){

    // background color style
    var selectColor = form.elements["color"];
    var outputColor = document.getElementById("cardPreview");

    for(let nodeColor of selectColor){
        if(nodeColor.checked)
        outputColor.style.backgroundColor = nodeColor.value;
    }

    // font family style
    var selectFont = form.elements["font"];
    var outFont = document.getElementById("cardFont");

    for (let nodeFont of selectFont){
        if(nodeFont.checked)
        outFont.style.fontFamily = nodeFont.value;
    }

    // image style 
    var styles = form.elements["style"];
    var outstyle = document.getElementById("image");
    
    let style_select = "";
    for (let nodeStyle of styles){
        if(nodeStyle.checked){
            style_select += nodeStyle.value +";";
        }
    }
    outstyle.style = style_select;
    outstyle.style.width = '400px';
    outstyle.style.height='auto';


    // greeting message
    var enterGreeting = form.elements["greeting"].value;
    var outputGreeting = document.getElementById("previewGreeting");
    outputGreeting.innerText = enterGreeting;

    // Image tag
    var entertag = form.elements["tag"];
    var outputtag = document.getElementById("imageContent");
    var isFound = false;

    let tag_select = "";
     for (let i=0; i<entertag.length; i++){
         if(isFound && entertag[i].checked){
             tag_select += "," + entertag[i].value ;
        }
        else if(entertag[i].checked){
            isFound = true;
            tag_select += entertag[i].value ;
        }
    } 
    outputtag.innerText = "Image tags:" + tag_select;
    
    // Card message
    var enterMessage = form.elements["cardMessage"].value;
    var outputMessage = document.getElementById("previewMessage");
    outputMessage.innerText = enterMessage;

    // email 
    var enteremail = form.elements["userEmail"].value;
    var outemail = document.getElementById("enterFrom");
    outemail.innerText = enteremail;

    // Date
    var enterDate = form.elements["todaysdate"].value;
    var outDate = document.getElementById("enterDate");
    outDate.innerText = enterDate;
}
