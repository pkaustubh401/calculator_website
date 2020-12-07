var input_label=document.getElementById("input_label");

function push_btn(obj){
    var pushed=obj.innerHTML;
    
    if(pushed=='='){
        input_label.innerHTML = eval(input_label.innerHTML)
    }else if(pushed=='AC'){
        input_label.innerHTML = '0';
    }else{
        if(input_label.innerHTML== '0'){
            input_label.innerHTML= pushed;
        }else{
            input_label.innerHTML= input_label.innerHTML + pushed;
        }
    }
    
}