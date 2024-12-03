import React from "react";
import env from "react-dotenv";
import ShopCard from "./ShopCard";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shops: [],
            isLoading: true,
            error: null,
        };
    }

    async componentDidMount() {
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
            this.setState({ shops: data, isLoading: false });
        } catch (error) {
            console.error("Erro ao buscar interesses:", error);
            this.setState({ error: error.message, isLoading: false });
        }
    }


    render() {
        const { shops, isLoading, error } = this.state;
    
        if (isLoading) {
            return <p>Loading...</p>;
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
                        <ShopCard key={key} shop={shop} />
                    ))}
                </div>
            </div>
        );
    }
}
