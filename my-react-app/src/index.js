
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {

  return (
    <div className="container">
      <h1>WELCOME TO MY CO.</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast pizza delivery co. </h1>
    </header>
  );
}
function Menu() {
   const pizzas = pizzaData;
  //const pizzas=[];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu </h2>
      {numPizza > 0 ? (
        <> 
        <p>authentic italian cuisine. {numPizza} creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzasobject={pizza} key={pizza.className} />
           
          ))}
        </ul>
          </> // this is react fragmenting for react wrap with parent element like div or <React.fragment>
      ) : (
        <p>we are still working on our menu. please come back later</p>
      )}
      {/* <ul className="pizzas">
    {pizzaData.map((pizza)=><Pizza name={pizza.name} photoName={pizza.photoName} ingredients={pizza.ingredients} price={pizza.price}/>)}
  </ul> */}

      {/* <Pizza name={pizzaData[0].name} ingredients={pizzaData[0].ingredients} photo={pizzaData[0].photoName} price={pizzaData[0].price}/>
  <Pizza name= {pizzaData[1].name}  ingredients={pizzaData[1].ingredients} price={pizzaData[1].price}
    photo={pizzaData[1].photoName}/> */}
    </main>
  );
}

function Pizza({pizzasobject}) { // this destructuring using curly brace instead of using props directly
  return (
    <div className={`pizza ${pizzasobject.soldOut?'sold-out':''}`}>
      <img src={pizzasobject.photoName} />
      <div>
        <h3>{pizzasobject.name}</h3>
        <p>{pizzasobject.ingredients}</p>
        <span>{pizzasobject.soldOut?"SOLD-OUT"&& pizzasobject.length-- :pizzasobject.price }</span>
      </div>
    </div>
  );
}

const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  let opened = 7;
  let closedhr = 21;
  const isopen = hour >= opened && hour <= closedhr;
  return (
    <footer>
      {isopen ? (
        <Order closedhr={closedhr} opened={opened} />
      ) : (
        <p>
          we are happy to welcome you between {opened}:00 to {closedhr}:00{" "}
        </p>
      )}
    </footer>
  );
};

function Order({ closedhr, opened }) {
  return (
    <div className="order">
      <p>
        we are currently open from {opened}:00 to {closedhr}:00 , you can order
      </p>
      <button className="btn" onClick={handleOrder}>order now</button>
    </div>
  );
}
function handleOrder(){

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
