import React, {useState, useEffect} from 'react'
import Test from './test/Test';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import UserApi from "./api/UserApi"

const Dashboard = (props) => {
    const [userdata, setUserdata] = useState(null);
    const [metrics, setMetrics] = useState(null);

    useEffect(() => {
        UserApi.getUserDetails()
            .then((res) => {
                console.log(res.data);
                setUserdata(res.data)
                
                let inv = 0;  
                let cur = 0;                 
                let pl = 0;  

                res.data.stocksBucket.forEach((stock) => {
                    
                    inv += stock.investedVal;
                    cur += stock.ltp * stock.qty;                    
                    console.log(stock);
                })

                pl = cur - inv;                

                setMetrics({
                    inv,
                    cur,
                    pl
                });                                
            })
            .catch((err) => console.log(err));
    }, [])

    if(userdata != null && metrics != null){
        return (
        <>
            {console.log(userdata)}
            <Row>
                <Col sm="4">
                </Col>
                <Col sm="4">
                    <Card body inverse style={{ backgroundColor: '#0c2d1c', borderColor: '#333' }} className="m-1">
                        <CardTitle tag="h5">Hi, {userdata.name} !</CardTitle>
                        <CardText>Welcome to virtual stonks!</CardText>
                    </Card>
                </Col>
                <Col sm="4">
                </Col>
            </Row>

            <Row>
                <Col sm="4">
                </Col>
                <Col sm="4">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="m-1">
                        <CardTitle tag="h5">$ {userdata.wallet.toFixed(3)}</CardTitle>
                        <Button style={{ backgroundColor: '#0c2d1c' }}>Wallet</Button>
                    </Card>
                </Col>
                <Col sm="4">
                </Col>
            </Row>

            <Row>
                <Col sm="4">
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardTitle tag="h5">$ {metrics && metrics.inv.toFixed(3)}</CardTitle>
                        <Button style={{ backgroundColor: '#0c2d1c' }}>Invested Val</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body inverse style={{ backgroundColor: 'green', borderColor: '#333' }}>
                        <CardTitle tag="h5">$ {metrics && metrics.cur.toFixed(3)}</CardTitle>
                        <Button style={{ backgroundColor: '#0c2d1c' }}>Current Val</Button>
                    </Card>
                </Col>
                <Col sm="4">
                    <Card body inverse style={{ backgroundColor:`${metrics.pl < 0 ? "red": "green"}`}}>
                        <CardTitle tag="h5">$ {metrics && metrics.pl.toFixed(3)}</CardTitle>
                        <Button style={{ backgroundColor: '#0c2d1c' }}>Profit & Loss</Button>
                    </Card>
                </Col>
            </Row>
        </>
        )
    }
     else
            return <> Please wait my friends! </>
}

export default Dashboard;
