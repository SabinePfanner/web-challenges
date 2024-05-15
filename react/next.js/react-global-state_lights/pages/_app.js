import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "../components/Layout";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleLightsOn(isOn) {
    setLights(
      lights.map((light) => (isOn === false ? light.isOn === true : light))
    );
  }

  function handleLightsOff(isOn) {
    setLights(
      lights.map((light) => (isOn === true ? light.isOn === false : light))
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        onLightsOn={handleLightsOn}
        onLightsOff={handleLightsOff}
      />
    </Layout>
  );
}
