import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 1, name: "banana", color: "yellow" },
    { id: 2, name: "apple", color: "green" },
    { id: 3, name: "cherry", color: "red" },
    { id: 4, name: "peach", color: "pink" },
    { id: 5, name: "grapes", color: "violet" },
    { id: 6, name: "melone", color: "white" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
