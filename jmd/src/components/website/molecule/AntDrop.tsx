import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown, Space } from "antd";



const App: React.FC = ({ items }: any) => (
  <Dropdown menu={{ items }} trigger={["click"]} placement="bottom">
    <Button>bottom</Button>
  </Dropdown>
);

export default App;
