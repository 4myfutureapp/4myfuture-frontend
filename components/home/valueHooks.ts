import { useState } from "react";
import messages from './messages.json'

export function textReturns (lang, valu){
    const [langu, setLang] = useState('en');
    const [value,setValue] = useState();

    var results = [];
    if(lang == 'en'){
    results.push(messages.en[0][valu]);
    }else {  
    results.push(messages.es[0][valu]);
    }
   // setLang(lang);
    //setValue(valu);

    return {value, langu, results}    
 
}
