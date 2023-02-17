import React from 'react';
import './Favourite.css'

const Favourite = ({ favourites, handleAddFruit, handleRemoveFruit, handleClearance }) => {

   
    return (
        <div className='fav-items'>
            <h2 className='fav-items-header'>
                Cart Items
            </h2>
            <div className='clear-cart'>
                {favourites.length>=1 && (
                    <button className='clear-cart-button' onClick={handleClearance}>Clear Items</button>
                ) }
            </div>

            {favourites.length === 0 && (
                <div className='fav-items-empty'>
                    Empty
                </div>
            )}

            <div>   
                {favourites.map((item) => (
                    <div key={item.id} className="fav-items-list">
                        <img className='fav-items-image'
                            src={item.image}
                            alt={item.name} />

                        <div className='fav-items-name'>
                            {item.name}
                        </div>
                        <div className='fav-items-function'>
                            <button className='fav-items-add' onClick={()=>handleAddFruit(item)}>+</button>
                            <button className='fav-items-remove' onClick={()=>handleRemoveFruit(item)}>-</button>
                        </div>
                        
                        <div className='fav-items-price'>
                             {item.quantity}
                        </div> 
                    </div>
                ))}
            </div>
           
            <div>
            
            
            
            </div>
        </div>
    );
};

export default Favourite;