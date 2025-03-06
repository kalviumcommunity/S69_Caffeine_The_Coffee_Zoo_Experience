import React from "react";
import CoffeeCard from "./components/CoffeeCards";



function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Caffeine: The Coffee Zoo Experience ☕🐾</h1>
      <p>Welcome to the Coffee Zoo! Explore different coffee species, learn about their origins, and adopt your favorite coffee pets.</p>
      <button onClick={() => alert("Coming Soon!")}>Explore the Coffee Zoo</button>

      <CoffeeCard 
      name="Arabica"
      origin="Ethiopia"
      description="Arabica coffee is known for its smooth, complex flavor and accounts for over 60% of the world's coffee production, thriving at high altitudes in regions with steady rainfall."
      />
      
      <CoffeeCard 
      name="Robusta"
      origin="Central and Western Africa"
      description="Robusta coffee is characterized by its strong, bold flavor and higher caffeine content, making it more resilient to pests and diseases, and is often used in espresso blends for added body and crema. "
      />
    </div>

    
  );
}

export default App;
