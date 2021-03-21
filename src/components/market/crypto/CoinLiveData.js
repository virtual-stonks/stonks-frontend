import React from 'react'
import { unixFormat } from '../../utils/UnixConverter';
import { useHistory } from "react-router-dom";
import moment from "moment"
import TradingChart from './TradingChart';
const CoinLiveData = (props) => {
    let history = useHistory();
    const {
        e: eventType,
        E: unixTime,
        p: priceChange,
        P: priceChangePercent,
        w: wtAvgPrice,
        c: lastPrice,
        Q: lastQt,
        b: bestBidPrice,
        B: bestBidQt,
        o: openPrice,
        h: highPrice,
        l: lowPrice,
        v: totalTradedAssetVolume,
        n: totalTrades
    } = props.data;
    const { name, symbol } = props.symbol;
    const image = props.image;

    return (
        <div className="black-bg text-white" >
            <div className="row black-bg" >
                <div className="col-sm-12 col-md-6 p-3">
                    <div class="card black-bg mb-3">
                        <div class="card-body">
                            <h5 class="card-title">
                                <img src={image} alt="crypto" className="img-responsive crypto-img m-1" />
                                {name?.toUpperCase()} ({symbol?.toUpperCase()})
                                <span className="push-right">
                                    <i
                                        type="button"
                                        className="far fa-arrow-alt-circle-left"
                                        onClick={() => history.push(
                                            {
                                                pathname: `/`,
                                            }
                                        )}
                                    >
                                    </i>
                                </span>
                            </h5>

                            <h6 className="card-subtitle mb-2 robinhood-yellow" >{eventType}</h6>
                            <h6 className="card-subtitle mb-2 robinhood-yellow">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
                        </div>
                        <div className="card-header">
                            Last Traded Price: <span className="robinhood-yellow"> $ {Number(lastPrice).toFixed(3).toLocaleString()} </span>
                        </div>
                        <div class="card-header">
                            Last Traded Qt: {Number(lastQt).toFixed(3).toLocaleString()}
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item black-bg">Open Price: $ {Number(openPrice).toFixed(3).toLocaleString()}</li>
                            <li className="list-group-item black-bg">High Price: $ {Number(highPrice).toFixed(3).toLocaleString()}</li>
                            <li className="list-group-item black-bg">Low Price: $ {Number(lowPrice).toFixed(3).toLocaleString()}</li>
                            <li className="list-group-item black-bg">Price Change:  <span className="black-bg" style={{ color: `${Number(priceChangePercent) < 0 ? "red" : "#00ff00"}` }}>$ {Number(priceChange).toFixed(3).toLocaleString()} </span></li>
                            <li className="list-group-item black-bg">Price Change%: <span className="black-bg" style={{ color: `${Number(priceChangePercent) < 0 ? "red" : "#00ff00"}` }}>$ {Number(priceChangePercent).toFixed(3).toLocaleString()} </span></li>
                            <li className="list-group-item black-bg">Weighted Price: $ {Number(wtAvgPrice).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item black-bg">Total Trades: {Number(totalTrades).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item black-bg">Total Traded Volume: {Number(totalTradedAssetVolume).toFixed(3).toLocaleString()}</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-success m-1">BUY</button>
                            <button type="button" class="btn btn-danger m-1">SELL</button>
                        </div>
                    </div>
                </div>

                <TradingChart symbol={symbol} />
                {/* <div className="col-sm-12 col-md-6"></div> */}
            </div >
        </div >
    )
}

export default CoinLiveData
