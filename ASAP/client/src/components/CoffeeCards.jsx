import React from "react";

const CoffeeCard = ({name, origin, description}) =>{
    return (
        <div className="border p-4 rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">Origin: {origin}</p>
            <p>{description}</p>
        </div>
    );
};

export default CoffeeCard;