import React from 'react';
import data from './components/back/Data/Data'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/front/Header/Header'
import Myroutes from './components/front/Routes/Routes'


function App() {
  const { Fruitslist } = data;
  const [favourites, setfavourites] = useState([]);

  const handleAddFruit = (Fruit) => {
    const FruitExist = favourites.find((FruitItem) => FruitItem.id === Fruit.id);

    if (FruitExist) {
      setfavourites(
        favourites.map((FruitItem) =>
          FruitItem.id === Fruit.id
            ? { ...FruitExist, quantity: FruitExist.quantity + 1 } : FruitItem)
      );
    }
    else {
      setfavourites([...favourites, { ...Fruit, quantity: 1 }]);
    }
  }

  const handleRemoveFruit = (Fruit) => {
    const FruitExist = favourites.find((FruitItem) => FruitItem.id === Fruit.id);

    if (FruitExist.quantity === 1) {
      setfavourites(favourites.filter((FruitItem) => FruitItem.id !== Fruit.id));
    }
    else {
      setfavourites(
      favourites.map((FruitItem) =>
        FruitItem.id === Fruit.id
          ? { ...FruitExist, quantity: FruitExist.quantity - 1 } : FruitItem)
      );
    }
  }

  const handleClearance = ()=> {
    setfavourites([]);
  }

  return (
    <div className="App">
     
       <Header/>
       <Myroutes Fruitslist={Fruitslist} favourites={favourites}
          handleAddFruit={handleAddFruit}
          handleRemoveFruit={handleRemoveFruit}
          handleClearance={handleClearance}
        />
   
    </div>
  );
}

export default App;
