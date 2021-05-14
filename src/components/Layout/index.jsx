import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, Route, Switch, Redirect } from "dva/router";
import {
  Chat,
  Table,
  Tabs,
  Input,
  Form,
  List,
  Modal,
  Select,
  Tag,
  Progress,
  Card,
  Route as Router,
  ReactForm,
} from "./config/routes";
import menu from "./config/menu";

const { Header, Content, Footer, Sider } = Layout;
let menuSource;
const rootSubmenuKeys = [];
const { SubMenu } = Menu;

const LayoutWpper = (props) => {
  const {
    location: { pathname = "" },
  } = props;
  const [openKeys, setOpenKeys] = React.useState([pathname]);
  // SubMenu 展开/关闭的回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  // 动态菜单
  const returnMenu = (data) => {
    return data.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.path} icon={item.icon}>
            <Link to={item.path}>{item.title}</Link>
          </Menu.Item>
        );
      } else {
        const children = item.children.find((cItem) => cItem.path === pathname);
        if (children) {
          setOpenKeys([item.path]);
        }
        rootSubmenuKeys.push(item.path);
        return (
          <SubMenu key={item.path} icon={item.icon} title={item.title}>
            {returnMenu(item.children)}
          </SubMenu>
        );
      }
    });
  };
  useEffect(() => {
    menuSource = returnMenu(menu);
  }, []);
  return (
    <Layout style={{ height: "100%" }} id="components-layout-demo-top">
      <Header
        className="header"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="logo"
          style={{
            width: "120px",
            height: "31px",
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* <img
            src="../../assets/yay.jpg"
            alt=""
            style={{ width: "35px", height: "35px" }}
          /> */}
        </div>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{ padding: "0 50px", marginTop: "80px", marginBottom: "50px" }}
      >
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Layout
          style={{ height: "100%" }}
          className="site-layout-background"
          // style={{ padding: "24px 0" }}
        >
          <Sider
            className="site-layout-background"
            width={256}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
            }}
          >
            <Menu
              mode="inline"
              selectedKeys={[pathname]}
              style={{ height: "100%" }}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
            >
              {menuSource}
            </Menu>
          </Sider>
          <Content
            style={{ padding: "0 24px", minHeight: 280, marginLeft: "256px" }}
          >
            <Switch>
              <Route path="/tabs" component={Tabs} />
              <Route path="/table" component={Table} />
              <Route path="/chat" component={Chat} />
              <Route path="/form" component={Form} />
              <Route path="/input" component={Input} />
              <Route path="/list" component={List} />
              <Route path="/modal" component={Modal} />
              <Route path="/select" component={Select} />
              <Route path="/route" component={Router} />
              <Route path="/tag" component={Tag} />
              <Route path="/progress" component={Progress} />
              <Route path="/card" component={Card} />
              <Route path="/rc/form" component={ReactForm} />
              <Redirect to="/tabs" />
            </Switch>
          </Content>
        </Layout>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer> */}
    </Layout>
  );
};

export default LayoutWpper;
