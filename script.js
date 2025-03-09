//your JS code here. If required.
let btn_var = document.querySelector('#btn');
let div_var = document.querySelector('#output');

btn_var.addEventListener('click', () => {
    let id_var = document.querySelector('#ip').value;
    console.log(id_var);

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id_var);
        }, 2000);
    }).then((n) => {
        let number = n
        div_var.textContent = `Result : ${number}`;
        return new Promise((res) => {
            setTimeout(() => {
                res(number);
            }, 2000);
        })

    }).then((number) => {
        let mul = number * 2;
        div_var.textContent = `Result : ${mul}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(mul);
            }, 2000);
        })
    }).then((mul) => {
        let sub = mul - 3;
        div_var.textContent = `Result : ${sub}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(sub);
            }, 1000);
        })
    }).then((sub) => {
        let did = sub / 2;
        div_var.textContent = `Result : ${did}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(did);
            }, 1000);
        });
    }).then((did) => {
        let add = did + 10;
        div_var.textContent = `Final Result : ${add}`;
    })


});
