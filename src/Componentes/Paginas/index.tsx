import React from "react";
import Card from "../card";

const Inicio: React.FC = () =>{
    return (
        <div className="container mt-4">
            <div className="row"> 
                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-white">
                        <Card
                            title="Hoddie & Pants"
                            imageUrl="https://essentialsclothinguk.com/wp-content/uploads/2023/05/Essential-Spring-Tracksuit-Hooded-Sweatshirt-black-430x430.jpg"
                            description=""
                        />
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-white">
                        <Card
                            title="Hoodie"
                            imageUrl="https://essentialsclothinguk.com/wp-content/uploads/2023/05/ESSENTIALS-Oversized-Hoodie-430x430.jpg"
                            description=""
                        />
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-white">
                        <Card
                            title="Hoddie Sylvester grey"
                            imageUrl="https://essentialsclothinguk.com/wp-content/uploads/2023/05/Fear-of-God-Essentials-Oversized-Hoodie-Gray-430x430.jpg"
                            description=""
                        />
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-dark">
                        <Card
                            title="Long Sleeve T Shirt"
                            imageUrl="https://images.stockx.com/images/FEAR-OF-GOD-ESSENTIALS-Long-Sleeve-T-shirt-Cream-Buttercream.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1620861739&q=60"
                            description=""
                        />
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-white">
                        <Card
                            title="Logo T shirt"
                            imageUrl="https://images.stockx.com/images/FEAR-OF-GOD-ESSENTIALS-T-shirt-Taupe.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1620861746?height=78&width=78"
                            description=""
                        />
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card bg-success text-white">
                        <Card
                            title="Black Jogger"
                            imageUrl="https://www.crepslocker.com/cdn/shop/products/Fear-Of-God-Essentials-Kids-Black-Sweatpants-Crepslocker-Front.jpg?v=1662972919"
                            description=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Inicio