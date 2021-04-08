/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    const [post, setPost] = useState({ qt: 1 })

    const sendOrder = (typestring, payload) => {
        console.log(payload);
    }

    return (
        <>
            <Button color={className} onClick={toggle} className="m-1">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} className={buttonLabel === "BUY" ? "bg-success" : "bg-danger"} >{buttonLabel + " " + symbol.toUpperCase()}</ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputLTP">LTP ($)</label>
                            <input type="number" className="form-control" id="exampleInputLTP" placeholder={ltp} readOnly />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputQt">Quantity</label>
                            <input type="number" className="form-control" id="exampleInputQt"
                                value={post.qt}
                                onChange={e => setPost({ ...post, qt: e.target.value })}
                            />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputMargin">Estimated Margin ($)</label>
                            <input type="number" class="form-control" id="exampleInputMargin" placeholder={ltp}
                                placeholder={post.qt * ltp}
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
                        onClick={() => sendOrder("BUY", {
                            qt: post.qt,
                            name,
                            symbol,
                            margin: post.qt * ltp
                        })}>{buttonLabel}
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default BuyModal;
