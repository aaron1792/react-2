import Header from "../src/components/Header.jsx";
import CoreConcept from "./components/Coreconcept.jsx";
import TabButton from "./components/TabButton.jsx";

import { CORE_CONCEPTS } from "./data.js";

function App() {
  function handleClick() {
    console.log("Hello World");
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onselect={handleClick}>Components</TabButton>
            <TabButton onselect={handleClick}>JSX</TabButton>
            <TabButton onselect={handleClick}>Props</TabButton>
            <TabButton onselect={handleClick}>State</TabButton>
          </menu>
        </section>
        Dynamic Content
      </main>
    </div>
  );
}

export default App;
