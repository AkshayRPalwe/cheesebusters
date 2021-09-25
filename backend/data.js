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

      name: "Maharaja Veg Cheese Burst Pizza [Medium]",
      category: "Pizza",
      image: "/images/c13.jpg" /* JSON object literals */,
      price: 700,
      countInStock: 10,
      brand: "CheeseBusters",
      rating: 4.5,
      numReviews: 10,
      description:
        "Indulgent and oh-so-cheesy! Our special tribute for the king - adorned with Spiced paneer tikka, jalapenos, bell peppers, marinated olives and onion - hand-tossed 11-inch crust",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Caramelized Onion Cheese Burst Pizza",
      category: "Pizza",
      image: "/images/c12.jpg" /* JSON object literals */,
      price: 450,
      countInStock: 10,
      brand: "CheeseBusters",
      rating: 4.2,
      numReviews: 15,
      description:
        "Loaded with crispy, subtly sweet, golden caramelized onions smothered in barbeque sauce, bursting with molten cheesy lava! Relish this cheesy goodness on a soft and herby 11-inch crust.",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Chicken Tikka Cheese Burst Pizza",
      category: "Pizza",
      image: "/images/c11.jpg" /* JSON object literals */,
      price: 500,
      countInStock: 10,
      brand: "CheeseBusters",
      rating: 4.6,
      numReviews: 20,
      description:
        "Tender, flavourful chunks of delicious tandoori chicken, on a bed of creamy cheese waiting to explode in your mouth! Grab this cheesy wonder on a soft and herby 11-inch crust.",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Corn and Cheese Cheese Burst Pizza",
      category: "Pizza",
      image: "/images/c10.jpg",
      price: 400,
      countInStock: 0,
      brand: "CheeseBusters",
      rating: 4.9,
      numReviews: 40,
      description:
        "Juicy kernels of American corn with a burst of creamy, molten cheese in every bite. Enjoy this creamy indulgence on a soft and herby 11-inch crust",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Double Cheese Margherita Cheese Burst Pizza",
      category: "Pizza",
      image: "/images/c9.jpg",
      price: 450,
      countInStock: 15,
      brand: "CheeseBusters",
      rating: 4.3,
      numReviews: 50,
      description:
        "Cheese the day with our double cheese Margherita pizza, coupled with melt-in-the-mouth creamy cheese inside! Nothing cant get cheesier than this wonder on a herby and soft 11-inch crust.",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Mutton Overload Cheese Burst Pizza [Medium]",
      category: "Pizza",
      image: "/images/c8.jpg",
      price: 750,
      countInStock: 0,
      brand: "CheeseBusters",
      rating: 4.7,
      numReviews: 5,
      description:
        "A burst of cheese in every mouthful! Its a true delight for all meat lovers with Succulent Lamb Chunks and spicy, delicious Chicken Keema with Mozzarella Cheese on a soft 11-inch crust.",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Non-Veg Paradise Cheese Burst Pizza [Medium]",
      category: "Pizza",
      image: "/images/c1.jpg",
      price: 700,
      countInStock: 2,
      brand: "CheeseBusters",
      rating: 4.6,
      numReviews: 25,
      description:
        "Caution: Melts-in-the-mouth! Enjoy this delicious chicken fiesta, loaded with Chicken Tikka, Sliced Chicken Meatballs, Chicken Sausages, Onion & Mozzarella Cheese on a soft 11-inch crust.",
    },
    {
      /* we are going to define products array using square bracket, inside that create product object */

      name: "Famous Five Cheese Burst Pizza [Medium]",
      category: "Pizza",
      image: "/images/c5.jpg",
      price: 600,
      countInStock: 0,
      brand: "CheeseBusters",
      rating: 3.8,
      numReviews: 145,
      description:
        "Gooey deliciousness for your cheese-tooth! Relish our awesome five-some Tender Paneer Tikka, Jalapenos, Black Olives, American Corn & Onion with Mozzarella Cheese on a soft 11-inch crust.",
    },
  ],
};
export default data;
