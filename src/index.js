import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyButton, { MyList, MyList2 } from "./MyButton";
import * as serviceWorker from "./serviceWorker";

const items = [
    { id: 0, name: "Uno" },
    { id: 2, name: "Dos" },
    { id: 3, name: "Tres" }
]

ReactDOM.render(
    <div>
        <App />
        <MyList2 items={items} />
        <MyList />
        <MyButton />
    </div>,
document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
