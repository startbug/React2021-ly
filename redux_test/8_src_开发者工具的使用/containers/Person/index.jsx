import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { addPerson } from "../../redux/actions/person";

class Person extends Component {
  addPerson = () => {
    const name = this.nameInputNode.value;
    const age = this.ageInputNode.value;
    const person = {
      id: nanoid(),
      age,
      name,
    };
    this.props.addPerson(person);
  };

  render() {
    return (
      <div>
        <h2>Person容器组件,上面的组件在计数：{this.props.num}</h2>
        姓名：
        <input
          ref={(c) => (this.nameInputNode = c)}
          placeholder="输入姓名"
          type="text"
        />
        年龄
        <input
          ref={(c) => (this.ageInputNode = c)}
          placeholder="输入姓名"
          type="text"
        />
        <button onClick={this.addPerson}>添加</button>
        <table border={1} cellSpacing={0} cellPadding={2}>
          <thead>
            <th align="center">id</th>
            <th align="center">age</th>
            <th align="center">name</th>
          </thead>
          <tbody>
            {this.props.persons.map((person) => {
              return (
                <tr>
                  <td align="center">{person.id}</td>{" "}
                  <td align="center">{person.age}</td>{" "}
                  <td align="center">{person.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(
  (state) => ({ persons: state.persons, num: state.count }), //映射状态到当前UI组件的props中
  {
    //映射操作状态的方法当到当前UI组件的props中
    addPerson,
  }
)(Person);
