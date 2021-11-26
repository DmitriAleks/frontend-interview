export function disableOnOff(disable, btn){
if(disable){
btn.setAttribute("disabled", "disabled");
btn.style.backgroundColor = '#978f8f';
} else {
    btn.removeAttribute("disabled", "disabled");
    btn.style.backgroundColor = 'red';
}
}