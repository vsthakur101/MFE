import faker, { fake } from 'faker';

const mountProduct = (el)=>{

    let products = "";

    for(let i =0; i<3; i++){
        const name = faker.commerce.productName();
        products +=`<div>${name}</div>`;
    };
    el.innerHTML = products;
}

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#root');
    if(el){
    mountProduct(el);
    }
}

export { mountProduct };