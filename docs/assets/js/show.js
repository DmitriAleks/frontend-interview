export function showResult (value, form) {
    const answer = document.createElement('p');
    answer.textContent = value;  
    if(value){
        if(form.childNodes.length === 3) {
       form.appendChild( answer);
    }
    } else {
        if(form.childNodes.length === 4) {
            form.removeChild(form.lastChild);
         }
   }
 }