import React from "react";
import env from "react-dotenv";

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
                    "accept": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("Dados recebidos:", data);

            this.setState({ shops: data, isLoading: false });  
        } catch (error) {
            console.error("Erro ao buscar interesses:", error);
            this.setState({ error: error.message, isLoading: false });  
        }
    }

    render() {
        const { shops, isLoading, error } = this.state;
        console.log(shops);
        if (isLoading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{`Erro: ${error}`}</p>;
        }

        return (
            <div>
                <h1>Shops</h1>
                <ul>
                    {shops && Object.keys(shops).length > 0 ? (
                        Object.entries(shops).map(([key, shop]) => (
                            <li key={key}>
                                <h2>{shop.title || `Shop ${key}`}</h2>
                                <img
                                    src={shop.media}
                                    alt={shop.title || `Shop ${key}`}
                                    style={{ width: "200px", height: "auto" }}
                                />
                                <ul>
                                    {Object.entries(shop).map(([property, value]) => (
                                        <li key={property}>
                                            <strong>{property}:</strong>{" "}
                                            {Array.isArray(value)
                                                ? value.join(", ") // Renderiza arrays como lista separada por vírgula
                                                : typeof value === "object"
                                                ? JSON.stringify(value) // Renderiza objetos aninhados como string
                                                : String(value)} // Renderiza valores simples
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))
                    ) : (
                        <li>No shops found</li>
                    )}
                </ul>
            </div>
        );
             
    }
}
