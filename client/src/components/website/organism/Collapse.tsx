"use client";
import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const App: React.FC = ({ items }: any) => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
  );
};

export default App;
