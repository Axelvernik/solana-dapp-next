
import { FC } from "react";
import { SignMessage } from '../../components/SignMessage';
import { SendTransaction } from '../../components/SendTransaction';
import React from "react";

// reactstrap components
import {Container, Row, Col} from 'react-bootstrap';

export const BasicsView: FC = ({ }) => {

  return (
    <div className="hero mx-auto p-4 min-h-16 py-4">
      <div className="hero-content flex flex-col">
      <h1 className="text-3xl font-bold f">
        BugBearz Treasury
      </h1>
        {}
 <Row>
          <Col>
            <span><img src="gold.gif" /></span>
          </Col>
          <Col xs="6">
            <span><img src="gold.gif" /></span>
          </Col>
          <Col>
            <span><img src="gold.gif" /></span>
          </Col>
        </Row>
        <div className="p-2 text-center">
         <a className="btn btnn btn-sm rounded-btn">Create Staking Pool</a>
          <SignMessage/>
          <SendTransaction />
          {<p>&lt; your content &gt;</p>}
        </div>
      </div>
    </div>
  );
};
