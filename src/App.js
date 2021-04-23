import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] }); // to know the current state of the pizza that is its base and toppings

  const addBase = (base) => {
    setPizza({ ...pizza, base }); //setting up the base
  };

  //adding topppings if the toppings are not present than we add it
  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping]; //we take the values of toppings in new toppings and have spreaded pizza which is the current state of our pizza
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  //we call this functions in the routing which is below and we pass the pizza which has base added and toppings added and befor that this functions are called

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>{" "}
        <Route path="/order">
          <Order pizza={pizza} />{" "}
        </Route>{" "}
        <Route path="/">
          <Home />
        </Route>{" "}
      </Switch>{" "}
    </>
  );
}

export default App;
