import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Analysis = ({analysisdata}) => {    
    const { total_inv, cur_val, pl} = analysisdata;
    return (
        <Row>
            <Col sm="4">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle tag="h5">{total_inv.toFixed(2)}</CardTitle>                                                        
                    <Button>Total Investment</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle tag="h5" id={"holdings_currval_total"}>{cur_val.toFixed(2)}</CardTitle>                    
                    <Button>Current Value</Button>
                </Card>
            </Col>
            <Col sm="4">
                <Card body inverse color={Number(pl) > 0 ? "success": "danger" }>
                    <CardTitle tag="h5" id={"holdings_pl_total"}>{Number(pl) > 0 ? pl.toFixed(2): -pl.toFixed(2)}</CardTitle>                    
                    <Button>Profit/Loss</Button>
                </Card>
            </Col>
        </Row>

    )
}

export default Analysis
