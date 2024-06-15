import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>RTL Query: getByTestId and getAllByTestId</h1>
      <div data-testid="div-test-id">Testing with test id</div>
      <div data-testid="div-test-id">Testing with test id</div>

      <div data-testid="h2-test-id">h2 tag testing</div>
    </div>
  );
}

export default App;
