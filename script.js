const text_area = $("#text-area")
let current_text = text_area.text()
// not using an input box cause then we can use vim keybinds
// MAKING A SIMPLE TEXT EDITOR
// FIX the BACKSPACE newline issu
// try adding a vim mode
// some key combination to increase font size
// probably switch to using arrays
/// fix newline issue
// INSERT MODE
document.onkeydown = function(e) { 
if(e.ctrlKey && e.key === "Backspace"){// ctrl + backspace
        current_text = current_text.substring(0,current_text.lastIndexOf("&nbsp;"))
        text_area.html(current_text)
}
else if(e.ctrlKey && e.key === "s"){    
    // to fix the extra s on save issue
}
else{
  switch(e.key){
    case("Tab"): break;
    case("Shift"): break;
    case("Alt"): break;
    case("CapsLock"): break;
    case("Control"): break;
    case("Escape"): break;
    case(" "): text_area.append("&nbsp;"); break;// a non breaking space
    case("Enter"): text_area.append("<br>"); break;

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

    } }
current_text = text_area.html()
text_area.html(current_text)
}