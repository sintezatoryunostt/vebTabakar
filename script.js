const sortedDishes = [...DISHES].sort((a, b) => a.name.localeCompare(b.name, "ru"));

const template = document.querySelector('#template');
const templateContent = template.content;

const handleClickBtn = function(event) {
    const btn = event.target;
    const keyword = btn.dataset.dish;
    const parentKey = btn.closest('.card_out').dataset.dish;  
    const dish = DISHES.find((el) => el.keyword === keyword);

    if (!dish) return;

    const cost = document.querySelector('#cost');
    let currentCost = Number(cost.textContent) || 0;

    if (result[parentKey]) {
        const oldDish = DISHES.find((el) => el.keyword === result[parentKey]);
        if (oldDish) currentCost -= oldDish.price;
    }
    result[parentKey] = keyword;
    document.querySelector(`#${parentKey}`).textContent = `${dish.name} ${dish.price} ₽`;
    cost.textContent = currentCost + dish.price;
    
    document.querySelectorAll(`[data-dish="${parentKey}"] .card_out`)
        .forEach((card) => card.classList.remove('selected'));
        
    btn.closest('.card_out').classList.add('selected');
    updateEmptyStates();
 
    document.querySelector('#hidden-soup').value    = result.soup;
    document.querySelector('#hidden-main').value    = result.mainDish;
    document.querySelector('#hidden-salads').value = result.salads;
    document.querySelector('#hidden-drink').value   = result.drink;
    document.querySelector('#hidden-desserts').value = result.desserts;
    document.querySelector('#hidden-total').value   = cost.textContent;
};

function updateEmptyStates() {
    const orderEmpty = document.querySelector('#order-empty');
    const orderContent = document.querySelector('#order-content');

    const hasAny = result.soup || result.mainDish || result.salads || result.drink || result.desserts;

    if (!hasAny) {
        orderEmpty.hidden = false;
        orderContent.hidden = true;
        return;
    }

    orderEmpty.hidden = true;
    orderContent.hidden = false;

    ['soup', 'mainDish', 'salads', 'drink', 'desserts'].forEach((cat) => {
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
    const {image, price, name, count, keyword, category} = sortedDishes[i];
    
    const foodCard = templateContent.cloneNode(true); 

    foodCard.querySelector('img').src = image;
    foodCard.querySelector('.dish__price').textContent = price + '₽';
    foodCard.querySelector('.dish__name').textContent = name;
    foodCard.querySelector('.dish__weight').textContent = count;
    
    foodCard.querySelector('.card_out').dataset.kind = sortedDishes[i].kind;
    
    const btn = foodCard.querySelector('.dish__btn');
    btn.dataset.dish = keyword;
    btn.addEventListener('click', handleClickBtn);
    foodCard.querySelector('.card_out').dataset.dish = category;
    document.querySelector(`[data-dish="${category}"]`).appendChild(foodCard);
}

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const parentFilters = this.closest('.filters');
        const wasActive = this.classList.contains('active');
        parentFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        const dishesContainer = parentFilters.nextElementSibling;
        const cards = dishesContainer.querySelectorAll('.card_out');

        if (wasActive) {
            cards.forEach(card => card.classList.remove('hidden-filter'));
        } else {
            this.classList.add('active');
            const filterKind = this.dataset.kind;
            
            cards.forEach(card => {
                if (card.dataset.kind === filterKind) {
                    card.classList.remove('hidden-filter');
                } else {
                    card.classList.add('hidden-filter');
                }
            });
        }
    });
});

const orderForm = document.querySelector('.order-form');

orderForm.addEventListener('submit', function(event) {
    const { soup, mainDish, salads, drink, desserts } = result;
    let errorMessage = '';

    if (!soup && !mainDish && !salads && !drink && !desserts) {
        errorMessage = "Ничего не выбрано. Выберите блюда для заказа";
    }
    else if (soup && mainDish && salads && !drink) {
        errorMessage = "Выберите напиток";
    }
    else if (soup && !mainDish && !salads) {
        errorMessage = "Выберите главное блюдо/салат/стартер";
    }
    else if (salads && !soup && !mainDish) {
        errorMessage = "Выберите суп или главное блюдо";
    }
    else if ((drink || desserts) && !soup && !mainDish && !salads) {
        errorMessage = "Выберите главное блюдо";
    }
    else if (mainDish && !soup && !salads && !drink) {
         errorMessage = "Выберите салат или напиток";
    }
    if (errorMessage) {
        event.preventDefault(); 
        showNotification(errorMessage);
    }
});
function showNotification(text) {
    const container = document.getElementById('notification-container');
    
    container.innerHTML = `
        <div class="notification-overlay" id="notif-overlay">
            <div class="notification-box">
                <p>${text}</p>
                <button type="button" id="notif-close">Окей</button>
            </div>
        </div>
    `;
    document.getElementById('notif-close').addEventListener('click', function() {
        container.innerHTML = ''; 
    });
}