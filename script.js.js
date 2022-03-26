function add() {
    let input = document.getElementById('input').value;

    if (input == '') return
    else {
        let container = document.getElementById('unOrdered');
        let li = document.createElement('li');
        li.innerHTML = input;
        container.appendChild(li);
        document.getElementById('input').value = '';
        // button code for removing list items
    
        let button = document.createElement('button'); 
        button.innerText = 'remove';
        button.className = 'remove';
        li.appendChild(button);
         
    }  
     
    
}
let btn = document.querySelector('ul');
btn.addEventListener('click', function(e) {
    let container = document.getElementById('unOrdered');
    let li = e.target.parentNode;
    container.removeChild(li);
})

 

             
 

     