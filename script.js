let btn_var = document.querySelector('#btn');
let div_var = document.querySelector('#output');

btn_var.addEventListener('click', () => {
    let id_var = Number(document.querySelector('#ip').value); // Ensure it's a number
    console.log(id_var);

    new Promise((resolve) => {
        setTimeout(() => {
            div_var.textContent = `Result : ${id_var}`;
            resolve(id_var);
        }, 2000);
    })
    .then((number) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let mul = number * 2;
                div_var.textContent = `Result : ${mul}`;
                resolve(mul);
            }, 2000);
        });
    })
    .then((mul) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let sub = mul - 3;
                div_var.textContent = `Result : ${sub}`;
                resolve(sub);
            }, 1000);
        });
    })
    .then((sub) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let did = sub / 2;
                div_var.textContent = `Result : ${did}`;
                resolve(did);
            }, 1000);
        });
    })
    .then((did) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let add = did + 10;
                div_var.textContent = `Final Result : ${add}`;
                resolve(add);
            }, 1000);
        });
    });
});
