import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>RTL Query: getAllByLabelText</h1>
      <label htmlFor="user-name1">Username</label>
      <input type="text" id="user-name1" defaultValue="shahrukh" />
      <label htmlFor="user-name2">Username</label>
      <input type="text" id="user-name2" defaultValue="shahrukh" />
      <label htmlFor="user-name3">Username</label>
      <input type="text" id="user-name3" defaultValue="shahrukh" />

      <label htmlFor="skill1">Skills</label>
      <input type="checkbox" id="skill1" defaultChecked={true} />
      <label htmlFor="skill2">Skills</label>
      <input type="checkbox" id="skill2" defaultChecked={true} />
      <label htmlFor="skill3">Skills</label>
      <input type="checkbox" id="skill3" defaultChecked={true} />
    </div>
  );
}

export default App;
