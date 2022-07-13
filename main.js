const addTodo = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');



const filterForm = (term) => {
    Array.from(todos.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtred'));
    Array.from(todos.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtred'));
};

search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterForm(term);
});

todos.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


// add todo function
const addTemplate = todo => {
    const html = `
    <li class="list-group-item flex w-[300px] border-[1px] border-stone-600 items-center justify-between px-4 py-4">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todos.innerHTML += html;  
}




addTodo.addEventListener('submit', e =>{
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    if (todo.length) {
        addTemplate(todo);
        addTodo.reset();
    }
});