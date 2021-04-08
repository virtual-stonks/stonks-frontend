/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StockApi from "../../api/StockApi";

const BuyModal = (props) => {
    const {
        buttonLabel,
        className,
        buy_sell_payload,
        ltp
    } = props;

    const {
        name, symbol
    } = buy_sell_payload;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [post, setPost] = useState({ qty: 1 })

    const notify = (toast_type, text, stylesheet) => {
        if (toast_type === "success")
            toast.success(text, stylesheet);
        else if (toast_type === "error")
            toast.error(text, stylesheet);
        else if (toast_type === "warning")
            toast.warn(text, stylesheet)
    }

    const sendOrder = (typestring, payload) => {
        let { qty, price, stockName } = payload;

        if (typestring === "BUY") {
            // prepare data
            stockName = stockName.toUpperCase();
            qty = Number(qty)
            price = Number(price)

            // api call
            StockApi.postStockBuy(qty, price, stockName)
                .then((res) => {
                    console.log(res);
                    notify("success", "BUY success!", {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                })
                .catch((error) => {
                    console.log('failed', error);

                    let msg = "BUY failed!!";
                    if (error.response) {
                        console.log(error.response.data.msg); // => the response payload 
                        msg = error.response.data.msg;
                    }
                    notify("warning", msg, {
                        position: "top-right",
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        } else if (typestring === "SELL") {
            notify("error", "SELL success!", {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }

    return (
        <>
            <Button color={className} onClick={toggle} className="m-1">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} className={buttonLabel === "BUY" ? "bg-success" : "bg-danger"} >{buttonLabel + " " + symbol.toUpperCase()}</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputLTP">LTP ($)</label>
                            <input type="number" className="form-control" id="exampleInputLTP" placeholder={ltp} readOnly />
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputQt">Quantity</label>
                            <input type="number" className="form-control" id="exampleInputQt"
                                value={post.qty}
                                onChange={e => setPost({ ...post, qty: e.target.value })}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="exampleInputMargin">Estimated Margin ($)</label>
                            <input type="number" class="form-control" id="exampleInputMargin" placeholder={ltp}
                                placeholder={post.qty * ltp}
                                readOnly
                            />
                        </div>
                        {/* <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                        {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}
                        onClick={() => sendOrder(buttonLabel, {
                            qty: post.qty,
                            stockFullName: name,
                            stockName: symbol,
                            price: ltp
                        })}>{buttonLabel}
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                <ToastContainer />
            </Modal>
        </>
    );
}

export default BuyModal;
