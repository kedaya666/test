import ImageSrc from "@/static/images/MetamonEgg.jpeg";
import { toThousand } from "@/tool";
import { RedditOutlined, TrophyFilled, RedditCircleFilled } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router";

import "./style.less";

interface InfoCardProps {
  imgSrc?: string;
  name?: string;
  code?: string;
  number?: string | number;
  fixedPrice?: string | number;
  totalPrice?: string | number;
}

const InfoCard = (props: InfoCardProps) => {
  const history = useHistory();
  const { imgSrc, name = "Metamon Egg", code = "281868", number = "10", fixedPrice = 2499, totalPrice = 7497 } = props;

  const handleCard = () => {
    history.push(`/marketPlace/${code}`);
  };
  return (
    <div className="infoCard" onClick={handleCard}>
      <div className="imgBox">
        <img src={ImageSrc} />
      </div>
      <div className="introduce">
        <span>{name}</span>
        {code && <span>#{code}</span>}
        <span className="number">×{number}</span>
      </div>
      <div className="priceContent">
        <div className="priceBox">
          <span className="label">Fixed price</span>
          <span className="value">
            <RedditOutlined className="icon" />
            <span>{toThousand(fixedPrice)}</span>
          </span>
        </div>
        <div className="priceBox">
          <span className="label">Total price</span>
          <span className="value">
            <RedditOutlined className="icon" />
            <span>{toThousand(totalPrice)}</span>
          </span>
        </div>
      </div>
      <div className="markBox">
        <span className="markBoxItem">
          <TrophyFilled className="icon" />
          <span>16</span>
        </span>
        <span className="markBoxItem">
          <RedditCircleFilled className="icon" />
          <span>316</span>
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
