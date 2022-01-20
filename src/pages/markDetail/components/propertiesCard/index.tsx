import { RedditOutlined } from "@ant-design/icons";
import React from "react";

import "./style.less";

interface PropertiesCardProps {
  name: string;
}

const PropertiesCard = (props: PropertiesCardProps) => {
  const { name } = props;
  return (
    <div className="propertiesCard">
      <RedditOutlined className="icon" />
      <span className="propertiesText">{name}</span>
    </div>
  );
};

export default PropertiesCard;
