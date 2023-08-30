import { useEffect, useState } from "react";
import List from "./List";
import withLoading from "./listWithLoading";

const ListWithLoading = withLoading(List);

const initialItems = ["gone girl", "fight club", "batman"];
const Index = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // mimic api call
    setTimeout(() => {
      setItems([...initialItems]);
    }, 2000);
  }, []);

  return (
    <>
      <div>
        <h1>List without loading feature</h1>
        <List items={items} />
      </div>
      <div>
        <h1>List with loading feature</h1>
        <ListWithLoading isLoading={items.length === 0} items={items} />
      </div>
    </>
  );
};

export default Index;
