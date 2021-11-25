import './../css/style.css';
import './../css/styles.scss';

const form = document.getElementById('taskForm');
const submit = document.getElementById('btn');
const onDomLoaded = () => {
     form.addEventListener('click', chekValue);
    form.addEventListener('keyup', chekValue);
    submit.addEventListener('click',sedValue);
}   
function chekValue(){
        if(input.value === ''){
            document.getElementById('content').classList.add('red');
           addedV('Введите символ');
        } else{
            document.getElementById('content').classList.remove('red');
        }  
    
 }
 function sedValue(e){
    e.preventDefault();
    submit.setAttribute("disabled", "disabled");
    submit.style.backgroundColor = '#978f8f'
    test()
    submit.removeAttribute("disabled", "disabled");
    submit.style.backgroundColor = 'red'
 }
 function addedV (value) {
    const answer = document.createElement('p');
    answer.textContent = value;  
    if(value){
        if(form.childNodes.length === 3) {
       form.appendChild( answer)
    }
    } else {
        if(form.childNodes.length === 4) {
            form.removeChild(form.lastChild)
         }
   }
 }

 function test() {
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://reqres.in/', true);
    ajax.send();
    ajax.addEventListener('readystatechange', function(){
        if(ajax.status == 200){
            addedV('Ваш заказ принят')
         
        } else {
            addedV('Ошибка интернет соединения')
        } 
        
    });
 }
document.addEventListener('DOMContentLoaded', onDomLoaded)
