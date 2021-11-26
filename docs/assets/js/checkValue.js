import {showResult} from './show';
import {disableOnOff} from './disableOnOff';

export function chekValue(form){
    if(input.value === ''){
        document.getElementById('content').classList.add('red');
        showResult('Введите символ',form);
        form.getElementsByTagName('p')[1].innerHTML = 'Введите символ';
        disableOnOff(true, form.getElementsByTagName('button')[0]);
    } else{
        document.getElementById('content').classList.remove('red');
        disableOnOff(false, form.getElementsByTagName('button')[0]);
        showResult('',form);
    }  
}