import { useState } from "react";
import "./App.css";
import Modal from "./patterns/Layout/Modal";

function App() {
  const [showTermsAndConditions, setShowTermsAndConditions] = useState();
  return (
    <>
      <button onClick={() => setShowTermsAndConditions(true)}>Terms and Conditions</button>
      <Modal isOpen={showTermsAndConditions}>
        <div>
          <h1>Terms and Conditions</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias maxime nesciunt neque laboriosam,
            harum expedita quidem dignissimos, aliquid impedit illo voluptatum? Possimus voluptatem quia modi molestias
            deleniti, voluptas facere?
          </p>
          <button onClick={() => setShowTermsAndConditions(false)}>Close</button>
        </div>
      </Modal>
    </>
  );
}

export default App;
