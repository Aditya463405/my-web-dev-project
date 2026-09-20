import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchData } from "slice1";

import "./coin.css";

export default function CoinCreate() {

    const { Data, loading, error } =
        useSelector((state) => state.slice1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchData(20));
    }, [dispatch]);


    if (loading) {
        return (
            <div className="loading-container">
                <div className="loader"></div>
                <h2>Loading Crypto Data...</h2>
                <p>Please wait</p>
            </div>
        );
    }


    if (error) {
        return (
            <div className="error-container">
                <h2>Something went wrong 😕</h2>
                <p>{error}</p>

                <button onClick={() => dispatch(FetchData(20))}>
                    Try Again
                </button>
            </div>
        );
    }


    return (
        <div className="crypto-app">

            {/* Header */}
            <header className="header">

                <div>
                    <h1>CryptoTracker</h1>
                    <p>Top 20 Cryptocurrencies</p>
                </div>

                <div className="market-status">
                    <span className="status-dot"></span>
                    Live Market
                </div>

            </header>


            {/* Main Content */}
            <main className="container">

                <div className="title-section">
                    <h2>Cryptocurrency Market</h2>

                    <p>
                        Prices ranked by market capitalization
                    </p>
                </div>


                {/* Crypto Cards */}
                <div className="crypto-grid">

                    {Data.map((value) => (

                        <div className="crypto-card" key={value.id}>

                            <div className="coin-top">

                                <div className="coin-info">

                                    <img
                                        src={value.image}
                                        alt={value.name}
                                        className="coin-image"
                                    />

                                    <div>
                                        <h3>{value.name}</h3>

                                        <span>
                                            {value.symbol.toUpperCase()}
                                        </span>
                                    </div>

                                </div>

                                <span className="rank">
                                    #{value.market_cap_rank}
                                </span>

                            </div>


                            <div className="price">
                                ${value.current_price.toLocaleString()}
                            </div>


                            <div className="coin-details">

                                <div>
                                    <span>24h Change</span>

                                    <strong
                                        className={
                                            value.price_change_percentage_24h >= 0
                                                ? "positive"
                                                : "negative"
                                        }
                                    >
                                        {value.price_change_percentage_24h?.toFixed(2)}%
                                    </strong>
                                </div>


                                <div>
                                    <span>Market Cap</span>

                                    <strong>
                                        ${(value.market_cap / 1e9).toFixed(2)}B
                                    </strong>
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </main>

        </div>
    );
}
