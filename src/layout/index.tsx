import { Layout as AntdLayout, Menu } from "antd";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import "./style.less";

const { Header, Content, Footer } = AntdLayout;

interface LayoutProps {
  children: ReactElement<any, any>;
}

const menus = [
  { label: "Drops", key: "drops" },
  { label: "MarketPlace", key: "marketPlace" },
  { label: "My Artworks", key: "artworks" },
];
const Layout = (props: LayoutProps) => {
  return (
    <AntdLayout className="layout">
      <Header className="headerBar">
        <div className="logo" />
        <Menu className="menuBar" theme="light" mode="horizontal" defaultSelectedKeys={["marketPlace"]}>
          {menus.map((menu) => (
            <Menu.Item key={menu.key}>
              <Link to={`/${menu.key}`}>{menu.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntdLayout>
  );
};

export default Layout;
