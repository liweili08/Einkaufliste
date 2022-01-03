import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [shoppingList, setShoppingList]=useState([]);
    const [newShoppingItem, setNewShoppingItem]=useState("");
function addShoppingItem(){
    console.log(newShoppingItem)
    setShoppingList([...shoppingList,newShoppingItem])
}

    return (
    <div className="App">
      <header className="App-header">
        <p>
          <code><h1>Einkaufliste</h1></code>
        </p>

        <ul>{shoppingList.map(shoppingItem =>
            <li>{shoppingItem}</li>
        ) }</ul>
        <input type="text" onChange={event => setNewShoppingItem(event.target.value)}/>
        <button onClick={addShoppingItem}> Add </button>
      </header>



    </div>
  );
}

export default App;
