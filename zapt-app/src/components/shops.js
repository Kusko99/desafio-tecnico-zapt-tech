import React, { useState, useEffect } from "react";
import env from "react-dotenv";
import ShopCard from "./ShopCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Shops() {
    const [shops, setShops] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchShops = async () => {
            const accessToken = env.ACCESS_TOKEN;
            const placeId = env.PLACE_ID;
            const url = `https://api.zapt.tech/v2/interests?placeId=${placeId}`;

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-access-token": accessToken,
                        accept: "application/json",
                    },
                });
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }

                const data = await response.json();
                setShops(data);
            } catch (error) {
                console.error("Erro ao buscar interesses:", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchShops();
    }, []);

    const handleCardClick = (shop) => {
        navigate("/details", { state: { shop: shop, shopsList: shops } });
    };

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (error) {
        return <p>{`Erro: ${error}`}</p>;
    }

    const sortedShops = Object.entries(shops).sort((a, b) => {
        const nameA = a[1].title?.toUpperCase() || "";
        const nameB = b[1].title?.toUpperCase() || "";
        return nameA.localeCompare(nameB);
    });

    return (
        <div className="container">
            <h1 className="my-4">Lojas</h1>
            <div className="row">
                {sortedShops.map(([key, shop]) => (
                    <div key={shop.id} onClick={() => handleCardClick(shop)}>
                        <ShopCard shop={shop} />
                    </div>
                ))}

            </div>
        </div>
    );
}
