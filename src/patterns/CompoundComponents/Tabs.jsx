import React, { useState } from "react";

function Tabs({ children }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <div style={{ display: "flex", width: "max-content" }}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index, activeTabIndex, setActiveTabIndex });
      })}
    </div>
  );
}

function Tab({ index, children, activeTabIndex, setActiveTabIndex }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { index, activeTabIndex, setActiveTabIndex });
      })}
    </div>
  );
}

function TabHeader({ children, index, activeTabIndex, setActiveTabIndex }) {
  return (
    <button onClick={() => setActiveTabIndex(index)} style={{ fontSize: index === activeTabIndex ? "bold" : "" }}>
      {children}
    </button>
  );
}

function TabContent({ children, index, activeTabIndex }) {
  return <>{index === activeTabIndex ? children : null}</>;
}

export { Tabs, Tab, TabHeader, TabContent };
