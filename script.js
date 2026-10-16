const DISHES = [
    {
        keyword: 'gazpacho',
        name: "Гаспачо",
        price: 195,
        category: 'soup',
        count: '350 г',
        image: 'vebTabakar/sup1.jpg'
    },
    {
        keyword: 'mushroomsoup',
        name: "Грибной суп-пюре",
        price: 185,
        category: 'soup',
        count: '330 г',
        image: 'vebTabakar/sup2.jpg'
    },       
    {
        keyword: 'northsoup',
        name: "Норвежский суп",
        price: 270,
        category: 'soup',
        count: '330 г',
        image: 'vebTabakar/sup3.jpg'
    },
    {
        keyword: 'potatowithmushrooms',
        name: "Жареная картошка с грибами",
        price: 150,
        category: 'mainDish',
        count: '250 г',
        image: 'vebTabakar/dish1.jpg'
    },
    {
        keyword: 'lazania',
        name: "Лазанья",
        price: 395,
        category: 'mainDish',
        count: '310 г',
        image: 'vebTabakar/dish2.jpg'
    },
    {
        keyword: 'meatballswithpotato',
        name: "Котлеты из курицы с картофельным пюре",
        price: 225,
        category: 'mainDish',
        count: '280 г',
        image: 'vebTabakar/dish3.jpg'
    },
    {
        keyword: 'orangejuice',
        name: "Апельсиновый сок",
        price: 120,
        category: 'drink',
        count: '300 мл',
        image: 'vebTabakar/sok1.jpg'
    },
    {
        keyword: 'applejuice',
        name: "Яблочный сок",
        price: 90,
        category: 'drink',
        count: '300 мл',
        image: 'vebTabakar/sok2.jpg'
    },
    {
        keyword: 'carrotjuice',
        name: "Морковный сок",
        price: 110,
        category: 'drink',
        count: '300 мл',
        image: 'vebTabakar/sok3.jpg'
    }
]

const result = {
    soup: '',
    mainDish: '',
    drink: ''
}  

const sortedDishes = [...DISHES].sort((a, b) =>
  a.name.localeCompare(b.name, "ru")
);

const template = document.querySelector('#template');
const templateContent = template.content;

const handleClickBtn = function(event) {
    const btn = event.target;
    const keyword = btn.dataset.dish;
    const parentKey = btn.closest('.card_out').dataset.dish;  
    const dish = DISHES.find((el) => el.keyword === keyword);

    if (!dish) return;
    const costBlock = document.querySelector('#costBlock');
    const cost = costBlock.querySelector('#cost');
    let currentCost = Number(cost.textContent) || 0;

    if (result[parentKey]) {
        const oldDish = DISHES.find((el) => el.keyword === result[parentKey]);
        if (oldDish) currentCost -= oldDish.price;
    }
    result[parentKey] = keyword;
    document.querySelector(`#${parentKey}`).textContent = `${dish.name} ${dish.price}₽`;
    cost.textContent = currentCost + dish.price;
    document
        .querySelectorAll(`[data-dish="${parentKey}"] .card_out`)
        .forEach((card) => card.classList.remove('selected'));
        btn.closest('.card_out').classList.add('selected');
    updateEmptyStates();
    document.querySelector('#hidden-soup').value  = result.soup;
    document.querySelector('#hidden-main').value  = result.mainDish;
    document.querySelector('#hidden-drink').value = result.drink;
    document.querySelector('#hidden-total').value = cost.textContent;
}

    function updateEmptyStates() {
    const orderEmpty = document.querySelector('#order-empty');
    const orderContent = document.querySelector('#order-content');
    const costBlock = document.querySelector('#costBlock');

    const hasAny = result.soup || result.mainDish || result.drink;

    if (!hasAny) {
        orderEmpty.hidden = false;
        orderContent.hidden = true;
        return;
    }

    orderEmpty.hidden = true;
    orderContent.hidden = false;

    ['soup', 'mainDish', 'drink'].forEach((cat) => {
        const el = document.querySelector(`#${cat}`);
        if (result[cat]) {
            el.classList.remove('empty');
            el.classList.add('filled');
        } else {
            el.textContent = el.dataset.empty;
            el.classList.remove('filled');
            el.classList.add('empty');
        }
    });
}

for (let i = 0; i < sortedDishes.length; i++) {
    if (sortedDishes[i].category !== 'soup') continue;  

    const {image, price, name, count, keyword} = sortedDishes[i];
    const foodCard = templateContent.cloneNode(true); 

    foodCard.querySelector('img').src = image;
    foodCard.querySelector('.dish__price').textContent = price;
    foodCard.querySelector('.dish__name').textContent = name;
    foodCard.querySelector('.dish__weight').textContent = count;
    const btn = foodCard.querySelector('.dish__btn');
    btn.dataset.dish = keyword;
    btn.addEventListener('click', handleClickBtn);
    foodCard.querySelector('.card_out').dataset.dish = 'soup';
    document.querySelector('[data-dish="soup"]').appendChild(foodCard);
}

for (let i = 0; i < sortedDishes.length; i++) {
    if (sortedDishes[i].category !== 'mainDish') continue;

    const {image, price, name, count, keyword} = sortedDishes[i];
    const foodCard = templateContent.cloneNode(true); 

    foodCard.querySelector('img').src = image;
    foodCard.querySelector('.dish__price').textContent = price;
    foodCard.querySelector('.dish__name').textContent = name;
    foodCard.querySelector('.dish__weight').textContent = count;
    const btn = foodCard.querySelector('.dish__btn');
    btn.dataset.dish = keyword;
    btn.addEventListener('click', handleClickBtn);
    foodCard.querySelector('.card_out').dataset.dish = 'mainDish';
    document.querySelector('[data-dish="mainDish"]').appendChild(foodCard);
}

for (let i = 0; i < sortedDishes.length; i++) {
    if (sortedDishes[i].category !== 'drink') continue;  

    const {image, price, name, count, keyword} = sortedDishes[i];
    const foodCard = templateContent.cloneNode(true); 

    foodCard.querySelector('img').src = image;
    foodCard.querySelector('.dish__price').textContent = price;
    foodCard.querySelector('.dish__name').textContent = name;
    foodCard.querySelector('.dish__weight').textContent = count;
    const btn = foodCard.querySelector('.dish__btn');
    btn.dataset.dish = keyword;
    btn.addEventListener('click', handleClickBtn);
    foodCard.querySelector('.card_out').dataset.dish = 'drink';
    document.querySelector('[data-dish="drink"]').appendChild(foodCard);
}