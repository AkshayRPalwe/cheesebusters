import bcrypt from "bcryptjs";
const data = {
  /* Variables defined with 'const' behave like 'let' variables, except they cannot be reassigned. Here data is an object */
  users: [
    {
      name: "Akshay",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    /* 'data' is an object */
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 12 mini",
      category: "Mobiles",
      image: "/images/1.jpeg" /* JSON object literals */,
      price: 60000,
      countInStock: 10,
      brand: "Apple",
      rating: 4.5,
      numReviews: 10,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 12",
      category: "Mobiles",
      image: "/images/p2.jpeg" /* JSON object literals */,
      price: 70000,
      countInStock: 10,
      brand: "Apple",
      rating: 4.2,
      numReviews: 15,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 12 Pro",
      category: "Mobiles",
      image: "/images/p3.jpeg" /* JSON object literals */,
      price: 90000,
      countInStock: 10,
      brand: "Apple",
      rating: 4.6,
      numReviews: 20,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 12 Pro Max",
      category: "Mobiles",
      image: "/images/p4.jpeg",
      price: 1200000,
      countInStock: 0,
      brand: "Apple",
      rating: 4.9,
      numReviews: 40,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 11",
      category: "Mobiles",
      image: "/images/p5.jpeg",
      price: 45000,
      countInStock: 15,
      brand: "Apple",
      rating: 4.3,
      numReviews: 50,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 11 Pro",
      category: "Mobiles",
      image: "/images/p6.jpeg",
      price: 70000,
      countInStock: 0,
      brand: "Apple",
      rating: 4.7,
      numReviews: 5,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone 11 Pro Max",
      category: "Mobiles",
      image: "/images/p7.jpeg",
      price: 95000,
      countInStock: 2,
      brand: "Apple",
      rating: 4.6,
      numReviews: 25,
      description: "High quality product",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "iphone SE",
      category: "Mobiles",
      image: "/images/p8.jpeg",
      price: 35000,
      countInStock: 0,
      brand: "Apple",
      rating: 3.8,
      numReviews: 145,
      description: "High quality product",
    },
  ],
};
export default data;
