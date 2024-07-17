import React from 'react';

// Interfaz para definir las propiedades de la tarjeta
interface CardProps {
    title: string;
    imageUrl: string;
    description: string;
}

// Componente funcional de tarjeta
const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
}

export default Card;
