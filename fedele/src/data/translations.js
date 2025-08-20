const translations = {
  en: {
    navbar: { about: "About", products: "Products", basket: "Basket", contact: "Contact" },
    about: { title: "About Us", text: "Welcome to Fedele 🍊 — high-quality products at the best prices." },
    contact: { title: "Contact Us", address: "Yerevan, Armenia", phone: "+374 00 000000", email: "info@fedele.com" },
    basket: { title: "Your Basket", empty: "Your basket is empty.", total: "Total", remove: "Remove" },
    labels: {
      product: "Product",
      weight: "Weight",
      price: "Price",
      quantity: "Qty",
      subtotal: "Subtotal",
      action: "Action",
      addToBasket: "Add to Basket",
      stock: "In stock",
      unit: "KG"
    },
    products: [
      { id: 1, name: "Fresh Oranges", description: "Juicy and sweet oranges." },
      { id: 2, name: "Premium Apples", description: "Crisp red apples." },
      { id: 3, name: "Golden Bananas", description: "Sweet bananas." }
    ]
  },
  am: {
    navbar: { about: "Մեր մասին", products: "Ապրանքներ", basket: "Զամբյուղ", contact: "Կապ" },
    about: { title: "Մեր մասին", text: "Բարի գալուստ Fedele 🍊 — բարձրորակ ապրանքներ լավագույն գներով:" },
    contact: { title: "Կապ մեզ հետ", address: "Երևան, Հայաստան", phone: "+374 00 000000", email: "info@fedele.com" },
    basket: { title: "Ձեր զամբյուղը", empty: "Զամբյուղը դատարկ է:", total: "Ընդամենը", remove: "Հեռացնել" },
    labels: {
      product: "Ապրանք",
      weight: "Քաշը",
      price: "Գինը",
      quantity: "Քանակ",
      subtotal: "Ընդհանուր",
      action: "Գործողություն",
      addToBasket: "Ավելացնել զամբյուղում",
      stock: "Պահեստում",
      unit: "ԿԳ"
    },
    products: [
      { id: 1, name: "Թարմ Նարինջներ", description: "Քաղցր նարինջներ:" },
      { id: 2, name: "Պրեմիում Խնձորներ", description: "Թարմ խնձորներ:" },
      { id: 3, name: "Ոսկե Банաններ", description: "Քաղցր бананներ:" }
    ]
  },
  ru: {
    navbar: { about: "О нас", products: "Продукты", basket: "Корзина", contact: "Контакты" },
    about: { title: "О нас", text: "Добро пожаловать в Fedele 🍊 — качественные продукты по лучшим ценам." },
    contact: { title: "Свяжитесь с нами", address: "Ереван, Армения", phone: "+374 00 000000", email: "info@fedele.com" },
    basket: { title: "Ваша корзина", empty: "Ваша корзина пуста.", total: "Итого", remove: "Удалить" },
    labels: {
      product: "Продукт",
      weight: "Вес",
      price: "Цена",
      quantity: "Кол-во",
      subtotal: "Итого",
      action: "Действие",
      addToBasket: "Добавить в корзину",
      stock: "В наличии",
      unit: "КГ"
    },
    products: [
      { id: 1, name: "Свежие Апельсины", description: "Сочные апельсины." },
      { id: 2, name: "Премиум Яблоки", description: "Хрустящие яблоки." },
      { id: 3, name: "Золотые Бананы", description: "Сладкие бананы." }
    ]
  }
};

export default translations;
