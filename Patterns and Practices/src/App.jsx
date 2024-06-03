import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us??</h2>

        <Accordion className="accordion">
          <Accordion.Item
            id="exp"
            className="accordion-item"
            title="We got 20 years of experience"
          >
            <article>
              <p>You cant go wrong with us.</p>
              <p>Perfect trip planning </p>
            </article>
          </Accordion.Item>
          <Accordion.Item
            id="loc"
            className="accordion-item"
            title="We work with local guides"
          >
            <article>
              <p>You cant go wrong with us.</p>
              <p>Perfect trip planning </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
