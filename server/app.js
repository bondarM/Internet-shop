const bodyParser = require("body-parser");
const express = require("express");

const cors = require("cors");

// создаем объект приложения
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("static"));

let auth = false;

let cart = [
  { product_id: 1, quantity: 1, id: 1 },
  { product_id: 2, quantity: 1, id: 2 },
];

const users = [
  { id: 1, login: "user1", password: "pass1" },
  { id: 2, login: "user2", password: "pass2" },
];

const items = [
  {
    name: "Top",
    price: 92,
    id: 1,
    size: ["S", "M", "L", "XL"],
    art: "02342342343",
    url: ["2.jpg", "3.jpg"],
    sizeSide: ["S"],
    urlProduct: ["2.jpg"],
    color: ["green"],
    comments: [
      { id: 1, body: "thank you very cool look" },
      { id: 2, body: "I always use this online store" },
    ],
  },
  {
    name: "Belted culottes",
    price: 112,
    id: 3,
    size: ["S", "M"],
    url: ["4.jpg", "5.jpg", "6.jpg"],
    urlProduct: ["4.jpg"],
    art: "0856681005",
    color: ["orange"],

    sizeSide: ["M"],
    comments: [
      { id: 1, body: "when is the new collection?" },
      { id: 2, body: "good store!" },
    ],
  },

  {
    name: "New jeans",
    price: 215,
    id: 2,
    size: ["M", "L"],
    sizeSide: ["L"],
    url: ["8.jpg", "9.jpg", "7.jpg"],
    urlProduct: ["9.jpg"],
    color: ["grey"],

    art: "1248681005",
    comments: [
      { id: 1, body: "thank you very cool look" },
      { id: 2, body: "good store!" },
    ],
  },
  {
    name: "Mom jeans",
    price: 199,
    id: 4,
    size: ["M", "L"],
    sizeSide: ["XL"],
    url: ["17.jpg", "16.jpg", "15.jpg"],
    urlProduct: ["17.jpg"],
    color: ["blue"],

    art: "1248681005",
    comments: [
      { id: 1, body: "thank you very cool look" },
      { id: 2, body: "good store!" },
    ],
  },
];

// определяем обработчик для маршрута "/"
app.get("/", (req, res) => {
  res.json({ data: "home" });
});

app.post("/registration", (req, res) => {
  if (req.body.user) {
    if (req.body.user.name && req.body.user.password && req.body.user.age) {
      users.push(req.body.user);
      auth = true;
      res.json({ message: "success" });
    }
  } else {
    res.status(422).json({ error: "нет поля user" });
  }
});

app.get("/auth", (req, res) => {
  res.json({ auth: auth });
});

app.post("/logout", (req, res) => {
  auth = false;
  res.json({ message: "success logout" });
});

app.post("/login", (req, res) => {
  if (req.body.user) {
    const check = users.filter((el) => {
      return req.body.user.name == el.login;
    });

    if (check[0]) {
      if (check[0].password == req.body.user.password) {
        auth = true;
        res.json({ message: "success" });
      } else {
        res.status(401).json({ error: "неправильный пароль" });
      }
    } else {
      res.status(404).json({ error: "пользователя не существует" });
    }
  } else {
    res.status(422).json({ error: "нет поля user" });
  }
});

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/cart", (req, res) => {
  const fullCart = cart.map((cartEl) => {
    items.forEach((itemEl) => {
      if (cartEl.product_id == itemEl.id) {
        cartEl.item = itemEl;
      }
    });
    return cartEl;
  });
  res.json({ cart: fullCart });
});

app.delete("/cart", (req, res) => {
  console.log(req.body);

  if (req.body.id) {
    const newCart = cart.filter((el) => {
      return Number.parseInt(req.body.id) !== el.id;
    });
    cart = newCart;
    return res.json({ cart });
  }
  return res.status(422).json({ error: "нет поля id" });
});

app.post("/cart", (req, res) => {
  if (req.body.cart) {
    const newCart = {
      product_id: req.body.cart.product_id,
      quantity: req.body.cart.quantity,
      id: "_" + Math.random().toString(36).substr(2, 9),
    };
    cart.push(newCart);
    return res.json({ newCart, cart });
  }
  return res.status(422).json({ error: "нет поля cart" });
});

app.get("/items/:id", (req, res) => {
  const id = req.params.id;

  let user1 = items.filter((el) => {
    if (el.id == id) {
      return el;
    }
  });

  if (user1.length > 0) {
    return res.json({ data: user1[0] });
  } else {
    return res.json({ data: { error: "user does not exist" } });
  }
});

// начинаем прослушивать подключения на 3000 порту
app.listen(4000);
