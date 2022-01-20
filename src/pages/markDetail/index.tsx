import ImageSrc from "@/static/images/MetamonEgg.jpeg";
import { toThousand } from "@/tool";
import { RedditOutlined, BlockOutlined, AppstoreOutlined } from "@ant-design/icons";
import { Card, Collapse } from "antd";
import React, { useState } from "react";

import { BuyModal, PropertiesCard } from "./components";
import "./style.less";

const { Panel } = Collapse;

const cardConfig = [
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
  { name: "naga" },
];
const detailConfig = [
  { label: "contract Address", value: "Binance Smart Chain" },
  { label: "contract Address", value: "Binance Smart Chain" },
  { label: "contract Address", value: "Binance Smart Chain" },
  { label: "contract Address", value: "Binance Smart Chain" },
  { label: "contract Address", value: "Binance Smart Chain" },
];

const MarkDetail = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const buyGoods = () => {
    setVisible(true);
  };
  return (
    <div className="markDetail">
      <div className="markDetailTop">
        <div className="topLeft">
          <img src={ImageSrc} />
        </div>
        <div className="topRight">
          <h1>Metamon #478530</h1>
          <div className="iconBox">
            <RedditOutlined className="icon" />
            <span className="radioText">Radio Caca</span>
          </div>
          <div className="overview">
            <div className="overviewLeft">
              <div className="priceTitle">Fixed price</div>
              <div className="priceNumber">
                <RedditOutlined className="icon" />
                <span>{toThousand(315000)}</span>
              </div>
              <ul className="priceUl">
                <li className="priceLi">
                  <span className="label">Total Price: </span>
                  <span className="value">315,000.00 RACA</span>
                </li>
                <li className="priceLi">
                  <span className="label">USD Price: </span>
                  <span className="value">$735.21</span>
                </li>
              </ul>
            </div>
            <div className="overviewLeft overviewRight">
              <div className="priceTitle">Count</div>
              <div className="priceNumber">
                <span>{toThousand(315000)}</span>
              </div>
            </div>
            <div className="priceButton" onClick={buyGoods}>
              Buy Now
            </div>
          </div>
          <Card title="Description">
            <p>Normal Metamon NFT in Metamon Game on BSC.</p>
          </Card>
        </div>
      </div>
      <Collapse className="collapseBox" defaultActiveKey={["1"]}>
        <Panel
          header={
            <div className="panelTitle">
              <BlockOutlined className="icon" />
              <span>Properties</span>
            </div>
          }
          key="1"
        >
          <div className="panelOne">
            {cardConfig.map((config, index) => (
              <PropertiesCard key={index} {...config} />
            ))}
          </div>
        </Panel>
        <Panel
          header={
            <div className="panelTitle">
              <AppstoreOutlined className="icon" />
              <span>Details</span>
            </div>
          }
          key="2"
        >
          <ul>
            {detailConfig.map((config, index) => (
              <li key={index} className="panelTwo">
                <span className="label">{config.label}</span>
                <span className="value">{config.value}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </Collapse>
      {visible && <BuyModal visible={visible} handleCancel={() => setVisible(false)} handleOk={() => {}} />}
    </div>
  );
};

export default MarkDetail;
