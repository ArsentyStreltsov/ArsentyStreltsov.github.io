import './App.css';
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl: "f-pressers-game/build_fpressers_24/Build/build_fpressers_24.loader.js",
    dataUrl: "f-pressers-game/build_fpressers_24/Build/759ab52b311786e4dd1951c2624f5da2.data",
    frameworkUrl: "f-pressers-game/build_fpressers_24/Build/cd04464fa8c418de2dc4c84d497c85f4.js",
    codeUrl: "f-pressers-game/build_fpressers_24/Build/159acb88f36fc8af537d77942ce9a53c.wasm",
  });


  return (
    <div className="App">
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

    </div>

  );
}

export default App;
