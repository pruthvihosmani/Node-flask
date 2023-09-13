// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Papa from 'papaparse';
// import logo from '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/1200px-Logo_of_Bosch_Rexroth_AG.svg.png'; // replace with actual path
// import backgroundImage from '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/120.jpeg'; // replace with actual path
// import '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/App.css'; // import the CSS file

// let pumpDatabase = {};

// Papa.parse('/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/data/pumps.csv', {
//   header: true,
//   download: true,
//   dynamicTyping: true,
//   complete: function(results) {
//     pumpDatabase = results.data.reduce((obj, item) => {
//       obj[item['Pump']] = item;
//       return obj;
//     }, {});
//   }
// });

// function MainPage() {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const matchingPumps = Object.entries(pumpDatabase).filter(([pumpNumber]) =>
//       pumpNumber.toLowerCase().startsWith(inputValue.toLowerCase())
//     );
//     setSuggestions(matchingPumps);
//   }, [inputValue]);

//   const handleInputChange = (event) => {
//     const keyword = event.target.value;
//     setInputValue(keyword);
//   };

//   return (
//     <div className="app">
//         <div className="logo-container">
//           <img src={logo} alt="Logo" className="logo" />
//         </div>
//       <div className="search-pane">
//         <h1 className="title">Pump Search</h1>
//         <div className="input-container">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter pump number..."
//             className="pump-input"
//           />
//         </div>
//         {suggestions.length > 0 && inputValue.length > 0 && (
//           <div className="suggestions">
//             {suggestions.map(([pumpNumber, pumpData], index) => (
//               <div key={index} className="suggestion">
//                 {pumpNumber}: {pumpData['A Side Fixture']}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MainPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Papa from 'papaparse';
// import logo from '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/1200px-Logo_of_Bosch_Rexroth_AG.svg.png'; // replace with actual path within src/
// import backgroundImage from '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/120.jpeg'; // replace with actual path within src/
// import './App.css'; // import the CSS file

// function MainPage() {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [pumpDatabase, setPumpDatabase] = useState({}); // Declare pumpDatabase and setPumpDatabase

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('/api/suggestions');
//       const suggestions = response.data;
//       setSuggestions(suggestions);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const matchingPumps = Object.entries(pumpDatabase).filter(([pumpNumber, pumpData]) =>
//       pumpNumber.toLowerCase().startsWith(inputValue.toLowerCase()) ||
//       (pumpData && pumpData['Pump'] && pumpData['Pump'].toLowerCase().startsWith(inputValue.toLowerCase()))
//     );
//     setSuggestions(matchingPumps);
//   }, [inputValue, pumpDatabase]);

//   const handleInputChange = (event) => {
//     const keyword = event.target.value;
//     setInputValue(keyword);

//     if (keyword === '') {
//       setSuggestions([]);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="logo-container">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <div className="header">{/* Add your header content here */}</div>
//       <div className="search-pane">
//         <h1 className="title">Pump Search</h1>
//         <div className="input-container">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter pump number..."
//             className="pump-input"
//           />
//         </div>
//         {suggestions.length > 0 && inputValue.length > 0 && (
//           <div className="suggestions">
//                         {suggestions.map((pumpNumber, index) => (
//                         <div key={index} className="suggestion">
//                             {pumpNumber}
//                             </div>
//                         ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MainPage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import logo from '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/1200px-Logo_of_Bosch_Rexroth_AG.svg.png'; // replace with actual path within src/
// import './App.css'; // import the CSS file

// function MainPage() {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('/api/suggestions');
//       const suggestions = response.data;
//       setSuggestions(suggestions);
//     };
//     fetchData();
//   }, []);

//   const handleInputChange = (event) => {
//     const keyword = event.target.value;
//     setInputValue(keyword);

//     if (keyword === '') {
//       setSuggestions([]);
//     }
//   };

//   return (
//     <div className="app">
//       <div className="logo-container">
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//       <div className="header">{/* Add your header content here */}</div>
//       <div className="search-pane">
//         <h1 className="title">Pump Search</h1>
//         <div className="input-container">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Enter pump number..."
//             className="pump-input"
//           />
//         </div>
//         {suggestions.length > 0 && inputValue.length > 0 && (
//           <div className="suggestions suggestion-container">
//             {suggestions.map((pumpNumber, index) => (
//               <div key={index} className="suggestion">
//                 {pumpNumber}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MainPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '/Users/pruthvihosmani/Desktop/NODE&FLASK/my-pump-app/frontend/src/1200px-Logo_of_Bosch_Rexroth_AG.svg.png'; // replace with actual path within src/
import './App.css'; // import the CSS file

function MainPage() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/api/suggestions');
      const suggestions = response.data;
      setSuggestions(suggestions);
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const keyword = event.target.value;
    setInputValue(keyword);

    if (keyword === '') {
      setSuggestions([]);
    }
  };

  return (
    <div className="app">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header">{/* Add your header content here */}</div>
      <div className="search-pane">
        <h1 className="title">Pump Search</h1>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter pump number..."
            className="pump-input"
          />
        </div>
        {suggestions.length > 0 && inputValue.length > 0 && (
          <div className="suggestions suggestion-container">
            {suggestions.map((pumpNumber, index) => (
              <div key={index} className="suggestion">
                {pumpNumber}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainPage;