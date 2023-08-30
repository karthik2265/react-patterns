import "./App.css";
import { Tabs, Tab, TabHeader, TabContent } from "./patterns/CompoundComponents/Tabs";

// Usage
function App() {
  return (
    <Tabs>
      <Tab>
        <TabHeader>Tab 1</TabHeader>
        <TabContent>Content 1</TabContent>
      </Tab>
      <Tab>
        <TabHeader>Tab 2</TabHeader>
        <TabContent>Content 2</TabContent>
      </Tab>
    </Tabs>
  );
}

export default App;
