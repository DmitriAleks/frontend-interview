import './../css/style.css';
import './../css/styles.scss';
import {sendRequest} from './sendRequest';
import {chekValue} from './checkValue';

const form = document.getElementById('taskForm');
const onDomLoaded = () => {
    form.getElementsByTagName('button')[0].addEventListener('click',(e)=>sendRequest(e,form));
    form.addEventListener('keyup', ()=> chekValue(form));
}  

document.addEventListener('DOMContentLoaded', onDomLoaded)
