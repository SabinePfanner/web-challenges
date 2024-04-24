import "./styles.css";

export default function App() {
  return <Greeting name="Klaus" />;
}

function Greeting({ name }) {
  const coaches = ["Peter", "Walter", "Klaus"];
  const currentName = coaches.includes(name) ? "Coach" : name;
  return (
    <>
      <p>Hello {currentName} !</p>
    </>
  );
}
