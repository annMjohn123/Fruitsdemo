import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom';

// import Games from'../Games/Games';
import SignIn from '../Signin/Signin';
//import Animes from '../Animes/Animes';
import Favourite from '../Favourites/Favourite';
import Fruits from '../Fruits/Fruits';

const Myroutes = ({ Fruitslist, favourites, handleAddFruit, handleRemoveFruit, handleClearance }) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={
                    <Fruits Fruitslist={Fruitslist}
                        handleAddFruit={handleAddFruit} />}>
                </Route>

                <Route path='/signin' exact element={<SignIn />}>
                </Route>

                <Route path='/cart' exact element={
                    <Favourite favourites={favourites}
                        handleAddFruit={handleAddFruit} 
                        handleRemoveFruit= {handleRemoveFruit}
                        handleClearance={handleClearance}
                        /> }>
                </Route>

            </Routes>
        </div>
    );
}

export default Myroutes;