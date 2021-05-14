import { BrowserRouter as Router, Switch, Route, Link } from "dva/router";
import About from "./About";
import Users from "./Users";
import Home from "./Home";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const RouteDemo = () => {
  return (
    <Router>
      <div>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
          <Menu.Item key="app" icon={<AppstoreOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="three" icon={<SettingOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
        </Menu>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default RouteDemo;
