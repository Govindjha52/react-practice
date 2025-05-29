import "./App.css";
import { people } from "./data";
function App() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const item = chemists.map((person) => (
    <li>
      <p>
        <b> Name: {person.name}:</b> <br />
      Profession:   {" " + person.profession + " "} <br />
        known for -----{">"} {person.accomplishment} <br />
      </p>
      <br />
    </li>
  ));

  return(
    <ul>{item}</ul>
  )
 
}

export default App;
