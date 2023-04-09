let addBtn = document.querySelector('#add-btn');
let itemName = document.querySelector('#item-name');
let item = document.querySelector('#item');

item.addEventListener('click', (e) => {
    let target = e.target;
    let tag = target.tagName.toLowerCase();

    // 因為結構上 input 與 div 上一層都是 li
    if (tag == 'input' || tag == 'div') {
        target = target.parentNode;
        tag = target.tagName.toLowerCase();
    }

    // 當為 li 時表示處理該項目，過濾點到 UL
    if (tag == 'li') {
        let index = target.dataset.index;
        let isDone = target.classList.contains('delete');
        if (isDone) {
            // 變成未完成
            target.classList.remove('delete');
            target.querySelector('input').checked = false;
            setStatus(index, 'pending');
        } else {
            // 變成完成
            target.classList.add('delete');
            target.querySelector('input').checked = true;
            setStatus(index, 'done');
        }
    }
})

const setStatus = (index, status) => {
    let todo = database.get();
    if (todo[index]) {
        todo[index].status = status;
        database.set(todo);
    }
}

const appendItem = (name) => {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let div = document.createElement('div');

    div.innerHTML = name;
    input.type = 'checkbox';

    li.appendChild(input);
    li.appendChild(div);

    item.appendChild(li); // 效能比較好
}

const appendItemES6 = (name) => {
    let li = `<li>
        <input type="checkbox">
        <div>${name}</div>
    </li>`;
    item.innerHTML += li; // 效能比較差
}

addBtn.addEventListener('click', () => {

    if (!valid()) {
        reset();
        return;
    }

    let name = itemName.value;
    console.log(name);
    // appendItem(name);
    appendItemES6(name);
    reset();
    save(name)

    // 寫法二
    // if (valid()) {
    //     let name = itemName.value;
    //     appendItemES6(name);
    // }
})

// const valid = () => {
//     return itemName && itemName.value;
// }

// const reset = () => {
//     itemName.value = '';
//     itemName.focus();
// }


// let todoData = [];
// todoData.push({
//     status: 'done',
//     value: '測試'
// });

// let todoDataToString = JSON.stringify(todoData);
// localStorage.setItem('todo', todoDataToString);
// console.table(todoData);

const database = {
    get() {
        try {
            let todo = localStorage.getItem('todo');
            if (!todo) {
                todo = [];
            } else {
                todo = JSON.parse(todo);
            }
            return todo;
        } catch (e) {
            return [];
        }
    },
    set(data) {
        data = JSON.stringify(data);
        localStorage.setItem('todo', data);
    }
}

const makeUI = () => {
    let todoDataRestore = JSON.parse(localStorage.getItem('todo'));
    console.log('%c 還原', 'color: red; font-size: 30px;');
    console.table(todoDataRestore);

    let li = '';

    todoDataRestore.foeEach(item => {
        let checked = item.status == 'done' ? 'chacked' : '';
        let liClass = checked ? 'delete' : '';
        li += `<li class="${liClass}">
            <input type="checkbox" ${checked}>
            <div>${item.value}</div>
        </li>`
    })
    item.innerHTML = li;
}

makeUI();