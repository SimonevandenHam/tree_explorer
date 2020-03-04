import React from "react";
import "./Tree.css";

type Props = {
  name: string;
  scientificName: string;
  numLikes: number;
  handleClick: number;
  id: number;
  onLike: (myArg: number) => void;
};

class Tree extends React.Component<Props> {
  handleLike = () => {
    this.props.onLike(this.props.id);
  };

  render() {
    return (
      <div className="treeCard">
        <p>Name:{this.props.name}</p>
        <p>Scientific name: {this.props.scientificName}</p>
        <p>Number of likes: {this.props.numLikes}</p>
        <button onClick={() => this.props.onLike(this.props.id)}>👍🌳</button>
      </div>
    );
  }
}
export default Tree;
