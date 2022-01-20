import { toThousand } from "@/tool";
import { RedditOutlined } from "@ant-design/icons";
import React from "react";

import "./style.less";

interface NumberCardProps {
  title: string;
  number: string | number;
}

const NumberCard = (props: NumberCardProps) => {
  const { title = "Total Amount", number = "610472441494" } = props;
  return (
    <div className="numberCard">
      <div className="title">{title}</div>
      <div className="numberBox">
        <RedditOutlined className="icon" />
        <span className="number">{toThousand(number)}</span>
      </div>
    </div>
  );
};

export default NumberCard;
