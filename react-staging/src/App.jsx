import React, { Component } from "react";
import { DatePicker, Space, Button } from "antd";
// import "antd/dist/antd.css";
import { FireOutlined, LeftOutlined, SearchOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
export default class App extends Component {
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        App..
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <Button>Primary Button</Button>
        <FireOutlined />
        <br />
        <LeftOutlined />
        <br />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <br />
        <DatePicker onChange={this.onChange} />
        <br />
        <RangePicker />
      </div>
    );
  }
}
