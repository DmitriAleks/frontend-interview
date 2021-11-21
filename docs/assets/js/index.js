import './../css/style.css';
import './../css/styles.scss';

const form = document.getElementById('taskForm');
const onDomLoaded = () => {
    const submit = document.getElementById('btn');
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
            addedV('');
        }  
    
 }
 function sedValue(e){
    e.preventDefault();
   const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://reqres.in/', true);
    ajax.send();
    ajax.addEventListener('readystatechange', function(){
        if(ajax.status == 200){
            addedV('Ваш заказ принят')
        }
    });
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
document.addEventListener('DOMContentLoaded', onDomLoaded)
