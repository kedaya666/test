import { Row, Col, Pagination } from "antd";
import React from "react";

import { NumberCard, MarkFilter, InfoCard } from "./components";
import "./style.less";

const numberConfigs = [
  { title: "Total Amount", number: "610472441494" },
  { title: "Total Amount", number: "610472441494" },
  { title: "Total Amount", number: "610472441494" },
  { title: "Total Amount", number: "610472441494" },
];

const infoConfigs = [
  { imgSrc: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "2" },
  { title: "Total Amount", number: "6" },
  { title: "Total Amount", number: "6" },
];

const MarketPlace = () => {
  return (
    <div className="placeContainer">
      <h1 className="marketPlace">MarketPlace</h1>
      <Row gutter={80} className="marketPlaceRow">
        {numberConfigs.map((config, index) => (
          <Col span={6} key={index}>
            <NumberCard {...config} />
          </Col>
        ))}
      </Row>

      <MarkFilter />
      <Row gutter={80} className="infoCardRow">
        {infoConfigs.map((config, index) => (
          <Col xs={6} sm={6} md={6} lg={6} xl={6} xxl={4} key={index}>
            <InfoCard {...config} />
          </Col>
        ))}
      </Row>
      <Pagination className="infoPaging" defaultCurrent={1} total={50} />
    </div>
  );
};

export default MarketPlace;
