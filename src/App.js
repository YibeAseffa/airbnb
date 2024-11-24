//Testing for Listing component only

// import React from "react";
// import "./styles/App.css";

// import Listing from "./components/Listing";

// function App() {
//   return (
//     <div className="app">
//       <Listing />
//     </div>
//   );
// }

// export default App;

//Testing for StandardSearch component only

// import React from "react";
// import "./styles/App.css";

// import StandardSearch from "./components/StandardSearch";

// function App() {
//   return (
//     <div className="app">
//       <StandardSearch />
//     </div>
//   );
// }

// export default App;

//Homepage components only

import React from "react";
import Homepage from "./components/Homepage"; // Import the Homepage component
import "./styles/App.css"; // General styles for the application

function App() {
  return (
    <div className="App">
      {/* Render the Homepage component directly */}
      <Homepage />
    </div>
  );
}

export default App;

