import React from "react";
import Tree from "./Tree";
import { TreeData } from "../model";

type Props = {};
type State = {
  trees: Array<TreeData>;
  commonName: string;
  scientificName: string;
  numLikes: number;
  id: number;
};

class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      {
        name: "White birch",
        scientificName: "Betula pendula",
        numLikes: 1,
        id: 3
      },
      {
        name: "Weeping willow",
        scientificName: "Salix sepulcralis",
        numLikes: 4,
        id: 2
      },
      {
        name: "London planetree",
        scientificName: "Platanus hybryda",
        numLikes: 8,
        id: 1
      }
    ],
    commonName: "",
    scientificName: "",
    numLikes: 0,
    id: Math.round(Math.random() * 100000)
  };

  addTree = () => {
    console.log(this.addTree);

    this.setState({
      trees: [
        ...this.state.trees,
        {
          name: this.state.commonName,
          scientificName: this.state.scientificName,
          numLikes: this.state.numLikes,
          id: this.state.id
        }
      ]
    });
  };

  handleLike = (id: number) => {
    const updatedTree = this.state.trees.map(tree => {
      if (tree.id === id) {
        return { ...tree, numLikes: tree.numLikes + 1 };
      } else {
        return tree;
      }
    });
    this.setState({ trees: updatedTree });
  };

  render() {
    // copying the array of players because `.sort()` **mutates!**
    const trees_copy = [...this.state.trees];
    trees_copy.sort((a, b) => b.numLikes - a.numLikes);
    console.log(trees_copy);

    return (
      <div>
        <div>
          {/*mapping over the copied version on the trees to sort them by like*/}
          {trees_copy.map(tree => (
            <Tree key={tree.id} {...tree} onLike={this.handleLike} />
          ))}
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            this.addTree();
          }}
          style={{ display: "flex" }}
        >
          <p style={{ margin: ".25rem" }}>
            <label>
              Common name:{" "}
              <input
                type="text"
                value={this.state.commonName}
                onChange={e => this.setState({ commonName: e.target.value })}
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <label>
              Scientific name:{" "}
              <input
                type="text"
                value={this.state.scientificName}
                onChange={e =>
                  this.setState({ scientificName: e.target.value })
                }
              />
            </label>
          </p>
          <p style={{ margin: ".25rem" }}>
            <button type="submit">Add!</button>
          </p>
        </form>
      </div>
    );
  }
}

export default PopularTrees;
