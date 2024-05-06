import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokio", "London", "Paris"];

  const handleSelecteItem = (item: string, index: number) => {
    console.log(item, index);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelecteItem}
      />
    </div>
  );
}

export default App;
