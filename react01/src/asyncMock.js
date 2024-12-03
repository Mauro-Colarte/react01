// const products = [
//     {
//         id: "Pizza",
//         name: "Pizza Napolitana",
//         price: 15,
//         image: "https://www.mcdonalds.com.mx/sites/default/files/styles/product_image_standard/public/menu/pizza-margherita-1_0.jpg?itok=h7pYqD8M",
//         description: "Pizza de masa básica, tomates crudos, queso mozzarella fresco, albahaca fresca y aceite de oliva",
//     },
//     {
//         id: "Pizza",
//         name: "Mozzarella",
//         price: 10,
//         image: "https://www.mcdonalds.com.mx/sites/default/files/styles/product_image_standard/public/menu/hamburger-simple-1_0.jpg?itok=h_9jD-E2",
//         description: "Masa basica, con Queso Mozzarella abundante",
//     },
//     {
//         id: "Pizza",
//         name: "Pizza Fugazzetta",
//         price: 15,
//         image: "https://www.mcdonalds.com.mx/sites/default/files/styles/product_image_standard/public/menu/hamburger-simple-1_0.jpg?itok=h_9jD-E2",
//         description: "Masa basica, Queso Mozzarella y Cebolla",
//     }
// ]

const products = [
  {
    id: "N°1",
    name: "Pizza Mozzarella",
    price: 11000,
    category: "Pizza",
    img: "/public/img/pizza-1.jpg",
    stock: 1000,
    description: "Descripcion de Iphone 12",
  },
  {
    id: "N°2",
    name: "Pizza Napolitana",
    price: 13000,
    category: "Pizza",
    img: "/public/img/pizza-2.jpg",
    stock: 1000,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "N°3",
    name: "Pizza Fugazzetta",
    price: 13000,
    category: "Pizza",
    img: "/public/img/pizza-3.jpg",
    stock: 50,
    description: "Descripcion de Ipad",
  },
  {
    id: "N°4",
    name: "Empanadas JyQ",
    price: 1200,
    category: "Empanadas",
    img: "/public/img/empanadas-jyq.jpg",
    stock: 80,
    description: "Descripcion de Ipad",
  },
  {
    id: "N°5",
    name: "Pizza Jamon y Morron ",
    price: 14000,
    category: "Pizza",
    img: "/public/img/pizza-4.jpg",
    stock: 1000,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "N°6",
    name: "Pizza de Rucula",
    price: 800,
    category: "Pizza",
    img: "/public/img/pizza-5.jpg",
    stock: 400,
    description: "Descripcion de Samsung s21",
  },
  {
    id: "N°7",
    name: "Empanadas de Carne",
    price: 1200,
    category: "Empanada",
    img: "/public/img/Empanadas-carne.jpg",
    stock: 1000,
    description: "Descripcion de Ipad",
  },
  {
    id: "N°8",
    name: "Empanada de Pollo ",
    price: 1200,
    category: "Empanada",
    img: "/public/img/empanadas-pollo.jpg",
    stock: 10,
    description: "Descripcion de computer",
  },
];

//? obtener todos los productos
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

//? obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

//? obtener un solo producto por id
export const getProductByID = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};
