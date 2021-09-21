function welcomMessage(fullname){
    function clouserMassage(){
        alert('Welcome ' + fullname);
    }
    return clouserMassage;
    
}
let guillaume = welcomMessage('Guilleaume');
let alex = welcomMessage('Alex');
let fred = welcomMessage('Fred');
guillaume();
alex();
fred();