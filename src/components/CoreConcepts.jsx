import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((core_concept) => (
          <CoreConcept key={core_concept.title} {...core_concept} />
        ))}
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
    </Section>
  );
}
