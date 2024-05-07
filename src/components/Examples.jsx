import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  let [topic, setTopic] = useState();

  let tabContent = <p>Please select a topic</p>;

  if (topic) {
    tabContent = (
      <div id="tabContent">
        <h3>{EXAMPLES[topic].title}</h3>
        <p>{EXAMPLES[topic].description}</p>
        <pre>
          <code>{EXAMPLES[topic].code}</code>
        </pre>
      </div>
    );
  }

  function handleClick(selectedButton) {
    console.log(selectedButton);
    setTopic(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={topic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={topic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={topic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={topic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
