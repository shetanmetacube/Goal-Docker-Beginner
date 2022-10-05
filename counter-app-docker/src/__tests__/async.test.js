var w;
function startWorker() {
    if (typeof(Worker) !== "undefined") {
    if (typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
    }
    w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
    };
    } else {
    document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}
function stopWorker() {
    w.terminate();
    w = undefined;
}

const OtherComponent = React.lazy(() => import('./OtherComponent'))
const OtherComponent = React.lazy(() => import('./OtherComponent'))


(function(){
    alert(`${shaitan}`);
})();

import {useEffect, useState} from 'react'

const [username, setUsername]= useState(false);
const [pwd, setPwd]= useState(false);
const [arr, setArr] = useState({username:"", pwd: ""});
addition = (event) => {
    arr[event.target.name] = event.target.value;
    let field = event.target.name;
    if(field.trim() == ""){
       alert(`Please enter the field name ${field}`);
    }else{
        setUsername(...arr);
    }
}

