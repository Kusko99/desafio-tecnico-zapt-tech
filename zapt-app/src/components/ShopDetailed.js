import React from "react";
import { useLocation } from "react-router-dom";

const ShopDetailed = () => {
    const location = useLocation();
    const { shop, shopsList } = location.state || {};

    const closestShops = (shop, shopsList) => {
        const shopCoords = shop.coords;
        const shopX = shopCoords[0];
        const shopY = shopCoords[1];
        const shopFloor = shopCoords[2];

        let closestShop1 = {};
        let closestShop2 = {};
        let minDistance1 = Infinity;
        let minDistance2 = Infinity;

        for (const shopId in shopsList) {
            const currentShop = shopsList[shopId];
            const currentShopCoords = currentShop.coords;
            const currentShopFloor = currentShop.floorId;

            if (currentShop.id !== shop.id) {
                if (currentShopFloor === shopFloor) {
                    const currentShopX = currentShopCoords[0];
                    const currentShopY = currentShopCoords[1];

                    const distance = Math.sqrt(Math.pow(shopX - currentShopX, 2) + Math.pow(shopY - currentShopY, 2));

                    if (distance < minDistance1) {
                        minDistance2 = minDistance1;
                        closestShop2 = closestShop1;
                        minDistance1 = distance;
                        closestShop1 = { distance, shop: currentShop };
                    } else if (distance < minDistance2) {
                        minDistance2 = distance;
                        closestShop2 = { distance, shop: currentShop };
                    }
                }
            }
        }

        closestShop1.distance = pixelsToMeters(closestShop1.distance);
        closestShop2.distance = pixelsToMeters(closestShop2.distance);

        return [closestShop1, closestShop2];
    };

    const pixelsToMeters = (pixels) => {
        let escala = 25;
        return pixels / escala;
    };

    if (!shop || !shopsList) {
        return <p>Dados não encontrados.</p>;
    }

    const closest = closestShops(shop, shopsList);

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <div className="text-center mb-4">
                        <img
                            src={shop.media}
                            alt={shop.title}
                            className="img-fluid mb-3"
                            style={{ maxHeight: "200px", objectFit: "cover" }}
                        />
                        <h5 className="card-title">{shop.title}</h5>
                    </div>
                    <h6 className="text-muted mb-3">Nas proximidades</h6>
                    <div className="row">
                        {closest.map((shopDetail, index) => (
                            <div className="col-6" key={index}>
                                <div className="border bg-light text-center py-3">
                                    <img
                                        src={shopDetail.shop.media}
                                        alt={shopDetail.shop.title}
                                        className="img-fluid mb-2"
                                        style={{ maxHeight: "100px", objectFit: "cover" }}
                                    />
                                    <p>{shopDetail.distance.toFixed(1)}m</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetailed;
