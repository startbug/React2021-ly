import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

export default class Search extends Component {
  //refs会将指定的节点元素放入到this对象中(当前实例对象)
  search = async () => {
    //获取用户输入
    //连续结构赋值，最终只有value是有值的(最里面的值)，keyWordElement是undefined
    //甚至可以给value重命名成keyWord
    const {
      keyWordElement: { value: keyWord },
    } = this;
    //发送请求前通知App更新状态
    PubSub.publish("star", { isFirst: false, isLoading: true });
    //发送网络请求
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    //   (result) => {
    //     const userList = result.data.items;
    //     const simpleUserList = userList.map((gitUser) => {
    //       //请求成功后通知App更新状态
    //       PubSub.publish("star", { isLoading: false });
    //       const simple = {
    //         id: gitUser.id,
    //         username: gitUser.login,
    //         avatarUrl: gitUser.avatar_url,
    //         homepage: gitUser.html_url,
    //       };
    //       return simple;
    //     });
    //     PubSub.publish("star", { userList: simpleUserList });
    //   },
    //   (err) => {
    //     console.log("查询失败:", err);
    //     PubSub.publish("star", { isLoading: false, err: err.message });
    //   }
    // );

    //fetch发送请求，未优化
    // fetch(`https://api.github.com/search/users?q=${keyWord}`)
    //   .then(
    //     (response) => {
    //       console.log("联系服务器成功");
    //       PubSub.publish("star", { isLoading: false });
    //       //json()方法返回一个promise对象，装载着服务器返回的查询数据
    //       return response.json();
    //     }
    //     // ,(error) => {
    //     //   console.log("联系服务器失败", error);
    //     //   return new Promise(() => {});
    //     // }
    //   )
    //   .then(
    //     (response) => {
    //       const userList = response.items;
    //       const simpleUserList = userList.map((gitUser) => {
    //         const simple = {
    //           id: gitUser.id,
    //           username: gitUser.login,
    //           avatarUrl: gitUser.avatar_url,
    //           homepage: gitUser.html_url,
    //         };
    //         return simple;
    //       });
    //       PubSub.publish("star", { userList: simpleUserList });
    //     }
    //     // ,(error) => {
    //     //   console.log("获取数据失败", error);
    //     //   PubSub.publish("star", { isLoading: false, err: error });
    //     // }
    //   )
    //   .catch((error) => {
    //     console.log(error);
    //   });

    //fetch发送请求--优化
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyWord}`
      );
      PubSub.publish("star", { isLoading: false });
      const data = await response.json();
      console.log(data);
      const userList = data.items;
      const simpleUserList = userList.map((gitUser) => {
        const simple = {
          id: gitUser.id,
          username: gitUser.login,
          avatarUrl: gitUser.avatar_url,
          homepage: gitUser.html_url,
        };
        return simple;
      });
      PubSub.publish("star", { userList: simpleUserList });
    } catch (error) {
      console.log(error);
      PubSub.publish("star", { isLoading: false, err: error });
    }
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
