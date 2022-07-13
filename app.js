const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// function to generate template for each todo
const generateTemplate = todo =>{
    const html = `
    <li class="list-group-item flex w-[300px] border-[1px] border-stone-600 items-center justify-between px-4 py-4">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;
}

// function to delete todos using event delegation for trache icons
 list.addEventListener('click',e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
 });

// function to search todos
const filterTodos = (term) => {
    //add filtred class to li that does not containt the serached letter
    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add('filtred'));

    //delete filtred class to li that does not containt the serached letter
     Array.from(list.children)
        .filter(todo => todo.textContent.includes(term))
        .forEach(todo => todo.classList.remove('filtred'));
    };

//search todos keyup event
search.addEventListener('keyup',() => {
    const term = search.value.trim();
    filterTodos(term);
})


// get data from user input
addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
    }
});