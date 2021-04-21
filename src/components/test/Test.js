import React, { useEffect, useRef } from 'react'

const Test = (props) => {

    let trackedStreams = [];

    const streams_ethusdt = useRef(null);
    const streams_bnbusdt = useRef(null);

    function handleMessage(msg) {
        const stream = msg.s;
        if (trackedStreams.indexOf(stream) === -1) {
            // document.getElementById('streams').innerHTML += '<br/>' + stream + ': <span id="stream_' + stream + '"></span>';
            trackedStreams.push(stream);
            // document.getElementById('totalstreams').innerText = trackedStreams.length;
        }

        console.log(streams_ethusdt);
        // streams_ethusdt.innerHTML = msg.c;
        document.getElementById('streams_ethusdt').innerText = msg.c;
    }

    useEffect(() => {

        let streams = [
            "ethusdt@miniTicker","bnbusdt@miniTicker",
        ];
        let ws = null;// websocket variable
        let miniTickerString = null;// binance miniticker string
        ws = new WebSocket("wss://stream.binance.com:9443/ws/" + streams.join('/'));

        ws.onopen = () => {
            console.log(`Socket connected! to ${miniTickerString}`);
            // setLoading(false);
        };

        ws.onmessage = (evt) => {
            try {
                let msgs = JSON.parse(evt.data);
                console.log(msgs);
                if (Array.isArray(msgs)) {
                    for (let msg of msgs) {
                        handleMessage(msg);                        
                    }
                } else {
                    handleMessage(msgs)
                }
            } catch (e) {
                console.log('Unknown message: ' + evt.data, e);
            }
        }



        return () => {
            console.log(`Socket disonnected! from ${miniTickerString}`);
            ws.close();
        };

    }, []);



    return (
        <div>
            <div className="container">
                <h2>Hi, Bigas Bull</h2>
            </div>
            <span id="totalstreams"></span> streams tracked<br />
                Total traded base asset volume:<br />
            <div ref={streams_bnbusdt}></div>
            <div id="streams_ethusdt"></div>
        </div>
    )
}

export default Test;
