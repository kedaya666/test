import { FilterOutlined, FileProtectOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Button, Input, Select, Tag } from "antd";
import classNames from "classnames";
import React, { useState } from "react";

import "./style.less";

const { Search } = Input;
const { Option } = Select;

const filterOptions = [
  { label: "Egg", value: ["Egg"] },
  { label: "Metamon", value: ["Metamon", "R-Metamon", "SR-Metamon", "SSR-Metamon"] },
];

const MarkFilter = () => {
  const [currentValue, setCurrentValue] = useState<string | undefined>(undefined);

  const handleFilter = (e: any, value: string) => {
    e.stopPropagation();
    setCurrentValue(value);
  };

  const cancelFilter = (e: any) => {
    e.stopPropagation();
    setCurrentValue(undefined);
  };

  const menu = (
    <div className="filterBox">
      <ul>
        {filterOptions.map((option, index) => (
          <li key={index} className="tilterItem">
            <span className="itemLabel">{option.label}:</span>
            <span className="itemValue">
              {option.value.map((val) => (
                <span
                  key={val}
                  className={classNames("valueBox", val === currentValue ? "active" : "")}
                  onClick={(e) => {
                    handleFilter(e, val);
                  }}
                >
                  {val}
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
      <div className="okBtnBox">
        <Button type="primary" className="okBtn">
          OK
        </Button>
      </div>
    </div>
  );
  return (
    <div>
      <div className="markFilter">
        <div>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button className="filterButton" icon={<FilterOutlined />}>
              Filter
            </Button>
          </Dropdown>
          <FileProtectOutlined className="filterIcon" />
        </div>
        <div>
          <Search placeholder="Search Token ID" className="searchInput" />
          <Select defaultValue="lucy" style={{ width: 200 }}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled">Disabled</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </div>
      </div>
      {currentValue && (
        <Tag color="warning" closable onClose={(e) => cancelFilter(e)}>
          {currentValue}
        </Tag>
      )}
    </div>
  );
};

export default MarkFilter;
