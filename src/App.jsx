import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx';

// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function App() {
  let [topic, setTopic] = useState();

  let tabContent = <p>Please select a topic</p>;

  if (topic) {
    tabContent = (<div id="tabContent"><h3>{EXAMPLES[topic].title}</h3>
    <p>{EXAMPLES[topic].description}</p>
    <pre>
      <code>
        {EXAMPLES[topic].code}
      </code>
    </pre></div>);
  }

  function handleClick(selectedButton) {
    console.log(selectedButton);
    setTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((core_concept) => (<CoreConcept key={core_concept.title} {...core_concept} />))}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* <CoreConcept
              title="Components"
              description="The Core UI building block"
              image={componentsImg}
            />
            <CoreConcept
              title="JSX"
              description="The Core UI building block"
              image={jsxImg} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={topic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected={topic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={topic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={topic === 'state'} onClick={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
          {/* { !topic ? (<p>Please select a topic</p>) : (<div id="tabContent"><h3>{EXAMPLES[topic].title}</h3>
          <p>{EXAMPLES[topic].description}</p>
          <pre>
            <code>
              {EXAMPLES[topic].code}
            </code>
          </pre></div>) } */}

          {/* { !topic && (<p>Please select a topic</p>) }
          { topic && (<div id="tabContent"><h3>{EXAMPLES[topic].title}</h3>
            <p>{EXAMPLES[topic].description}</p>
            <pre>
              <code>
                {EXAMPLES[topic].code}
              </code>
            </pre></div>)
          } */}

          {tabContent}
      </main>
    </div>
  );
}

export default App;
