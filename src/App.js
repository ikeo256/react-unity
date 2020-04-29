import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.unityContent = new UnityContent(
            "Build/ball.json",
            "Build/UnityLoader.js"
        );
    }

    onClickStart = () => {
        console.log('hoge');
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickStart}>START</button>
                <Unity unityContent={this.unityContent} />;
            </div>
        )
    }
}

export default App;