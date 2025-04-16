const studname=document.getElementById('nameInput');
const addbtn=document.getElementById('addBtn');
const studentlist=document.getElementById('studentList');
const totalstud=document.getElementById('totalstud');
const searchinput=document.getElementById('searchInput');
const clearallbtn=document.getElementById('clearAllBtn');
const updateCount=()=>{
    const count=studentlist.querySelectorAll('li').length;
    totalstud.textContent=`Total Students: ${count}`;
};
const createListItem=name=>{
    return `<li>
        <span class="student-name">${name}</span>
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div> </li>`;
};
const addStudent=()=>{
    const name=studname.value.trim();
    if(!name){
        alert('Student name cannot be empty!');
        return;
    }
    studentlist.insertAdjacentHTML('beforeend',createListItem(name));
    studname.value='';
    updateCount();
};
addbtn.addEventListener('click',()=>addStudent());
studname.addEventListener('keydown',e=>{
    if(e.key==='Enter') addStudent();
});
studentlist.addEventListener('click',e=>{
    const li=e.target.closest('li');
    if(!li) return;
    if(e.target.classList.contains('delete')){
        e.target.closest('li').remove();
        updateCount();
    }
    if(e.target.classList.contains('edit')){
        const name=li.querySelectorAll('.student-name');
        const currname=name.textContent;
        const newname=prompt('Edit student name:',currname);
        if(newname && newname.trim()){
            name.textContent=newname.trim();
        }
    }
});
searchinput.addEventListener('input',()=>{
    const key=searchinput.value.toLowerCase();
    [...studentlist.querySelectorAll('li')].forEach(li=>{
    const name=li.querySelector('.student-name').textContent.toLowerCase();
    li.style.display=name.includes(key)?'block':'none';
    });
});
clearallbtn.addEventListener('click',()=>{
    if(confirm('Are you sure you want to clear all students?')){
        studentlist.innerHTML='';
        updateCount();
    }
});
