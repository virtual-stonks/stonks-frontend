import React, { useState, useEffect } from "react";
import { Card, Button, CardTitle, Badge, Table } from 'reactstrap';
import { useHistory } from "react-router-dom";

import ExternalApi from "./api/ExternalApi"
import Waiting from "./utils/Waiting";

const Trending = (props) => {
  const [trending, setTrending] = useState([]);
  let history = useHistory();
  
  useEffect(() => {
    ExternalApi.getTrendingList()
      .then((res) => {
        console.log(res.data);
        // setTransactions(res.data.transactionsBucket);
        setTrending(res.data.coins);
      })
      .catch((err) => console.log(err));
  }, [])

  if(trending.length > 0)
    return (
    <div>        
      <Table borderless dark>
          {console.log(trending)}
        <thead>
          <tr>            
            <th>Coin</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap Rank</th>            
            <th>Transact</th>
          </tr>
        </thead>


        {trending.map((trans, idx) => {
          return (              
            <tbody>
              {/* <th scope="row"><i class="fas fa-dot-circle"></i></th> */}
              <th scope="row"><img src={trans.item.thumb} alt="crypto" className="img-responsive crypto-img" /></th>
              <td>{trans.item.name}</td>
              <td>{trans.item.symbol}</td>
              <td>{trans.item.market_cap_rank}</td> 
              <td>
                    <button
                        type="button"
                        className="btn btn-outline-light"
                        onClick={() => {
                            const name = trans.item.name;
                            const symbol = trans.item.symbol;
                            const image = trans.item.thumb;
                            history.push(                            
                            {
                                pathname: `/live/crypto`,
                                state: { detail: { name, symbol, image } }
                            }
                            )
                        }
                    }
                    >
                        <i class="fas fa-money-check-alt" style={{ color: "#00ff00" }} ></i>
                    </button>
                </td>              
            </tbody>
          )
        }) 
        }
      </Table>
    </div>
  );
  else
        return <Waiting />
}

export default Trending;
