const inputbox = document.getElementById('inputbox');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (inputbox.value === '') {
        alert('Please enter a task');
    }
    else {
        const li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        

        inputbox.value = '';
    }