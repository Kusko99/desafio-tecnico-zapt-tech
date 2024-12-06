import React from "react";

const ShopCard = ({ shop }) => {
    return (
        <div className="col-12 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div
                            className="rounded-circle bg-secondary me-3"
                            style={{
                                width: "50px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "white",
                            }}
                        >
                            <img
                                src={shop.media || "https://via.placeholder.com/50"}
                                alt={shop.title || "Loja"}
                                className="img-fluid rounded-circle"
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                        <h5 className="card-title m-0">{shop.title || `Loja ${shop.id}`}</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default ShopCard;
