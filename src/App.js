import "./App.css";
import Employee from "./components/Employee";

function App() {
  console.log("Hi this the trail project for leraning");
  const showEmployees = true;
  return (
    <div className="App">
      {console.log("Hi test leraning")}
      {showEmployees ? (
        <>
          <Employee activity="Singing" role="engineer" />
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>You cannot see the employee</p>
      )}
    </div>
  );
}

export default App;
