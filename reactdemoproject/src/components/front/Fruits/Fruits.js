import React from 'react';
import './Fruits.css'

const Fruits = ({ Fruitslist, handleAddFruit }) => {
    return (
        <div className="Fruits">
            {Fruitslist.map((Fruits) => (
                <div className='card'>
                    <div>
                        <img className='Fruits-image'
                            src={Fruits.image}
                            alt={Fruits.name} />
                    </div>
                    <div>
                        <h3 className='Fruits-name'>{Fruits.name}</h3>
                    </div>
                    <div>
                        <h3 className='Fruits-price'>Price :{Fruits.Price}</h3>
                    </div>
                    <div>
                        <button className='Fruit-add-button' onClick={() => handleAddFruit(Fruits)}> Add to Favourite</button>
                    </div>
                    <div>
                <a href={Fruits.link} target="_blank">
                     <button className="btnStyle"> Buy Now </button>
                </a>
                </div>
                </div>
            ))}
        </div>
    );
}

export default Fruits;