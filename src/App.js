import React from "react";
import Unity, {UnityContent} from "react-unity-webgl";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.unityContent = new UnityContent(
      "Build/ball.json",
      "Build/UnityLoader.js"
    );
  }

  handleClick = () => {
    this.unityContent.send("Ball", "MoveRight", 1);
  }

  render() {
    return (
      <div>
        <button type={"button"} onClick={this.handleClick}>
          右へ
        </button>
        <Unity unityContent={this.unityContent}/>;
      </div>
    )
  }
}

export default App;