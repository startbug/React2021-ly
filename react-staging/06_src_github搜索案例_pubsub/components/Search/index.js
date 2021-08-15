import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  //refs会将指定的节点元素放入到this对象中(当前实例对象)
  search = () => {
    //获取用户输入
    //连续结构赋值，最终只有value是有值的(最里面的值)，keyWordElement是undefined
    //甚至可以给value重命名成keyWord
    const {
      keyWordElement: { value: keyWord },
    } = this;
    //发送请求前通知App更新状态
    PubSub.publish("star", { isFirst: false, isLoading: true });
    //发送网络请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (result) => {
        const userList = result.data.items;
        const simpleUserList = userList.map((gitUser) => {
          //请求成功后通知App更新状态
          PubSub.publish("star", { isLoading: false });
          const simple = {
            id: gitUser.id,
            username: gitUser.login,
            avatarUrl: gitUser.avatar_url,
            homepage: gitUser.html_url,
          };
          return simple;
        });
        PubSub.publish("star", { userList: simpleUserList });
      },
      (err) => {
        console.log("查询失败:", err);
        PubSub.publish("star", { isLoading: false, err: err.message });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="输入关键词进行搜索"
          />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
