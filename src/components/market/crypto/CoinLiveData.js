import React from 'react'
import { unixFormat } from '../../utils/UnixConverter';
import moment from "moment"
const CoinLiveData = (props) => {
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
        < div className="container" >
            < div className="row" >
                <div className="col-sm-12 col-md-6">
                    <div class="card mb-3">
                        <div class="card-body">
                            {console.log(props.data)}
                            <h5 class="card-title">
                                <img src={image} alt="crypto" className="img-responsive crypto-img m-1" />
                                {name?.toUpperCase()} ({symbol?.toUpperCase()})
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{eventType}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">{moment().format('MMMM Do YYYY, h:mm:ss a')}</h6>
                        </div>
                        <div class="card-header">
                            Last Traded Price: $ {Number(lastPrice).toFixed(3).toLocaleString()}
                        </div>
                        <div class="card-header">
                            Last Traded Qt: {Number(lastQt).toFixed(3).toLocaleString()}
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Open Price: $ {Number(openPrice).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item">High Price: $ {Number(highPrice).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item">Low Price: $ {Number(lowPrice).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item">Price Change: $ {Number(priceChange).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item">Price Change%: $ {Number(priceChangePercent).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item">Weighted Price: $ {Number(wtAvgPrice).toFixed(3).toLocaleString()}</li>
                        </ul>
                        <div class="card-header">
                            Volumes
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Total Trades: {Number(totalTrades).toFixed(3).toLocaleString()}</li>
                            <li class="list-group-item">Total Traded Volume: {Number(totalTradedAssetVolume).toFixed(3).toLocaleString()}</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-success">BUY</button>
                            <button type="button" class="btn btn-danger">SELL</button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6"></div>
            </div >

        </div >
    )
}

export default CoinLiveData
