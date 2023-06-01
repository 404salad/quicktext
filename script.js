const text_area = $("#text-area")
let current_text = text_area.text()
// not using an input box cause then we can use vim keybinds
// MAKING A SIMPLE TEXT EDITOR
// FIXED BACKSPACE
// try adding a vim mode
// save adds an extra s 
// some key combination to increase font size

// INSERT MODE
document.onkeydown = function(e)  { 
  switch(e.key){
    case("Tab"): break;
    case("Shift"): break;
    case("Alt"): break;
    case("CapsLock"): break;
    case("Control"): break;
    case("Escape"): break;
    case(" "): text_area.append("&nbsp;"); break;// a non breaking space
    case("Enter"): text_area.append("<br>"); break;
    /*
    case("Control" && "Backspace") : 
        current_text = text_area.text()
        //current_text = current_text.substring(0,current_text.lastindexof(" ")-1)
        text_area.text(current_text)
        break;
    */
    case("Backspace"):
        current_text = text_area.html()
        // to handle the nbsp; case
        if (current_text.substring(current_text.length-5) === "nbsp;"){
            current_text = current_text.substring(0,current_text.length-6)
        }
        else{
            current_text = current_text.substring(0,current_text.length-1)
        }
        text_area.html(current_text)
        break;
        
    default:
        text_area.append(e.key)

    }
}