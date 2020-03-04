import React from "react";
import "./Tree.css";
import { TreeData } from "../model";
interface Props extends TreeData {
  onLike: (myArg: number) => void;
}

class Tree extends React.Component<Props> {
  handleLike = () => {
    this.props.onLike(this.props.id);
  };

  render() {
    return (
      <div className="treeCardBox">
        <div className="treeCard">
          <p>Name:{this.props.name}</p>
          <p>Scientific name: {this.props.scientificName}</p>
          <p>Number of likes: {this.props.numLikes}</p>
        </div>
        <button onClick={() => this.props.onLike(this.props.id)}>👍🌳</button>
      </div>
    );
  }
}
export default Tree;
