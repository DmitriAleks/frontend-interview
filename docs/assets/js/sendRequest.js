import {showResult} from './show';
import {request} from './ajax';
import {disableOnOff} from './disableOnOff';

export function sendRequest(e,form){
    e.preventDefault();
    disableOnOff(true, form.getElementsByTagName('button')[0]);
    if(input.value !== ''){
        request('https://reqres.in/').then(()=>{
            showResult('Ваш заказ принят',form);
        })
        .catch(()=>{
            showResult('Ошибка соединения',form);
            form.getElementsByTagName('p')[1].innerHTML = 'Ошибка соединения';
        })
        .finally(()=>{
            disableOnOff(false, form.getElementsByTagName('button')[0]);
        })
    } else showResult('Введите символ',form);
 }