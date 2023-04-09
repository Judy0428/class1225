let uid = document.querySelector('#uid');

let students = document.querySelector('.student');

console.log('------ uid ------')
console.log(uid);
console.log('------ students ------')
console.log(students);


let m_uid = document.querySelectorAll('#uid');

let m_students = document.querySelectorAll('.student');

console.log('------ m_uid ------')
console.log(m_uid);
console.log('------ m_students ------')
console.log(m_students);

m_uid.forEach(u => {
    console.log(u);
})

m_students.forEach(s => {
    console.log(s);
})

if (uid) {
    uid.innerHTML = 'New UID';
}

const login = function () {
    let acc = document.querySelector('#acc');
    let pwd = document.querySelector('#pwd');

    console.log(acc.value, pwd.value);

    acc.value = 'ffff';
}