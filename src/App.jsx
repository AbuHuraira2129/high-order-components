import "./App.css";
import SearchTodos from "./components/TodoList";
import SearchUsers from "./components/UserList";

function App() {
  return (
    <>
      <div className="App">
        <h2>High Order Component</h2>
        <div className="section">
          <div>
            <SearchUsers />
          </div>
          <div>
            <SearchTodos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
