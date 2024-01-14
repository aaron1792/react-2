import {useState} from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "../src/components/Header.jsx";
import CoreConcept from "./components/Coreconcept.jsx";
import TabButton from "./components/TabButton.jsx";



function App() {

  const [selectedTopic, setSelecetedTopic] = useState('Please click a button')
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelecetedTopic(selectedButton);
    console.log(selectedTopic);
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
            <TabButton onSelect={handleSelect}>Components</TabButton>
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        
      </main>
    </div>
  );
}

export default App;
