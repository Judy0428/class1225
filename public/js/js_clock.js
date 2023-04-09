const update = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    hh = hh.toString().padStart(2, '0');
    mm = mm.toString().padStart(2, '0');
    ss = ss.toString().padStart(2, '0');

    let h1 = document.querySelector('#h-1');
    let h2 = document.querySelector('#h-2');
    h1.innerHTML = hh.substr(0, 1);
    h2.innerHTML = hh.substr(1, 1);

    let m1 = document.querySelector('#m-1');
    let m2 = document.querySelector('#m-2');
    m1.innerHTML = mm.substr(0, 1);
    m2.innerHTML = mm.substr(1, 1);

    let s1 = document.querySelector('#s-1');
    let s2 = document.querySelector('#s-2');
    s1.innerHTML = ss.substr(0, 1);
    s2.innerHTML = ss.substr(1, 1);

    console.log(hh, mm, ss);
}

const update2 = () => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();


    hh = hh.toString().padStart(2, '0');
    mm = mm.toString().padStart(2, '0');
    ss = ss.toString().padStart(2, '0');

    let clock = `${hh}:${mm}:${ss}`;
    let clocks = clock.split('');

    let dom = document.querySelector('.clock');

    clocks.forEach((s, i) => {
        let c = dom.querySelector(`div:nth-child(${i + 1})`);
        c.innerHTML = s;
    })
}

update2();

let timer = setInterval(() => {
    update2();
}, 1000)