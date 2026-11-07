const DISHES = [
    {keyword: 'gazpacho', name: "Гаспачо", price: 195, category: 'soup', kind: 'veg', count: '350 г', image: 'vebTabakar/sup1.jpg'},
    {keyword: 'mushroomsoup', name: "Грибной суп-пюре", price: 185, category: 'soup', kind: 'veg', count: '330 г', image: 'vebTabakar/sup2.jpg'},       
    {keyword: 'northsoup', name: "Норвежский суп", price: 270, category: 'soup', kind: 'fish', count: '330 г', image: 'vebTabakar/sup3.jpg'},
    {keyword: 'ramen', name: "Рамен", price: 375, category: 'soup', kind: 'meat', count: '350 г', image: 'vebTabakar/sup4.jpg'},
    {keyword: 'tomyam', name: "Том-ям с креветками", price: 650, category: 'soup', kind: 'fish', count: '500 г', image: 'vebTabakar/sup5.jpg'},
    {keyword: 'chikensoup', name: "Куриный суп", price: 300, category: 'soup', kind: 'meat', count: '350 г', image: 'vebTabakar/sup6.jpg'},

    {keyword: 'potatowithmushrooms', name: "Жареная картошка с грибами", price: 150, category: 'mainDish', kind: 'veg', count: '250 г', image: 'vebTabakar/dish1.jpg'},
    {keyword: 'lazania', name: "Лазанья", price: 395, category: 'mainDish', kind: 'meat', count: '310 г', image: 'vebTabakar/dish2.jpg'},
    {keyword: 'fishball', name: "Рыбная котлета с рисом и спаржей", price: 350, category: 'mainDish', kind: 'fish', count: '350 г', image: 'vebTabakar/dish4.jpg'},
    {keyword: 'pizza', name: "Пицца Маргарита", price: 450, category: 'mainDish', kind: 'veg', count: '500 г', image: 'vebTabakar/dish5.jpg'},
    {keyword: 'pasta', name: "Паста с креветками", price: 400, category: 'mainDish', kind: 'fish', count: '350 г', image: 'vebTabakar/dish6.jpg'},
    {keyword: 'meatballswithpotato', name: "Котлеты из курицы с картофельным пюре", price: 350, category: 'mainDish', kind: 'meat', count: '280 г', image: 'vebTabakar/dish3.jpg'},

    {keyword: 'cesar', name: "Салат Цезарь с цыпленком", price: 370, category: 'salads', kind: 'meat', count: '220 г', image: 'vebTabakar/salad1.jpg'},
    {keyword: 'caprese', name: "Капрезе с моцареллой", price: 350, category: 'salads', kind: 'veg', count: '225 г', image: 'vebTabakar/salad2.jpg'},
    {keyword: 'saladwithfish', name: "Салат с тунцом", price: 480, category: 'salads', kind: 'fish', count: '250 г', image: 'vebTabakar/salad3.jpg'},
    {keyword: 'potatofreecesar', name: "Картофель фри с соусом Цезарь", price: 280, category: 'salads', kind: 'veg', count: '235 г', image: 'vebTabakar/salad4.jpg'},
    {keyword: 'potatofreecetchup', name: "Картофель фри с кетчупом", price: 260, category: 'salads', kind: 'veg', count: '235 г', image: 'vebTabakar/salad5.jpg'},
    {keyword: 'koreansalad', name: "Корейский салат", price: 260, category: 'salads', kind: 'veg', count: '235 г', image: 'vebTabakar/salad6.jpg'},

    {keyword: 'orangejuice', name: "Апельсиновый сок", price: 120, category: 'drink', kind: 'cold', count: '300 мл', image: 'vebTabakar/sok1.jpg'},
    {keyword: 'applejuice', name: "Яблочный сок", price: 90, category: 'drink', kind: 'cold', count: '300 мл', image: 'vebTabakar/sok2.jpg'},
    {keyword: 'carrotjuice', name: "Морковный сок", price: 110, category: 'drink', kind: 'cold', count: '300 мл', image: 'vebTabakar/sok3.jpg'},
    {keyword: 'capuchino', name: "Капучино", price: 60, category: 'drink', kind: 'hot', count: '250 мл', image: 'vebTabakar/sok4.jpg'},
    {keyword: 'greentea', name: "Зеленый чай", price: 150, category: 'drink', kind: 'hot', count: '200 мл', image: 'vebTabakar/sok5.jpg'},
    {keyword: 'blacktea', name: "Черный чай", price: 120, category: 'drink', kind: 'hot', count: '250 мл', image: 'vebTabakar/sok6.jpg'},

    {keyword: 'icecream', name: "Мороженое", price: 100, category: 'desserts', kind: 'small', count: '100 г', image: 'vebTabakar/dessert1.jpg'},
    {keyword: 'macaron', name: "Макарон", price: 80, category: 'desserts', kind: 'small', count: '50 г', image: 'vebTabakar/dessert2.jpg'},
    {keyword: 'brownie', name: "Брауни", price: 150, category: 'desserts', kind: 'small', count: '80 г', image: 'vebTabakar/dessert3.jpg'},
    {keyword: 'cheesecake', name: "Чизкейк", price: 220, category: 'desserts', kind: 'medium', count: '150 г', image: 'vebTabakar/dessert4.jpg'},
    {keyword: 'strudel', name: "Штрудель", price: 250, category: 'desserts', kind: 'medium', count: '180 г', image: 'vebTabakar/dessert5.jpg'},
    {keyword: 'cake', name: "Торт", price: 400, category: 'desserts', kind: 'large', count: '300 г', image: 'vebTabakar/dessert6.jpg'}
];

const result = {
    soup: '',
    mainDish: '',
    salads: '',
    drink: '',
    desserts: ''
};  
