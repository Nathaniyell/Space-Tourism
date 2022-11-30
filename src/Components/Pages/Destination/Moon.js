// import React, { useState } from 'react';
// import styles from './destination.module.css';
// import Button from '../../Button';
// import data from '../../data.json';
// import Destination from './Destination';

// const MoonData = data.destinations[0];
// const allData = data.destinations;
// const Moon = () =>{
//     const [buttonName, setButtonName] = useState([...allData.map((item)=> item.name)]);
//     const [destination, setDestination] = useState(allData)

//   function filter(button){
//     if(button === 'Moon'){
//         setDestination(MoonData)
//     }
// const filteredData = allData.filter(item => item.name === button);
//     setDestination(filteredData)
//   }


//     return <div>
//         {/* {destination.length>0 &&
//         <Destination 
//          destination={destination}
//          button={buttonName}
//          btnFilter={filter}
//         /> } */}
//         <main key={MoonData.name}>
//     <div className={styles.left}>
//       <div className={styles.image}>
//         <img
//           src={MoonData.images.png}
//           alt="destination-pics"
//           width="100%"
//         />
//       </div>
//     </div>
//     <aside className={styles.right}>
//       <nav>
//         <Button button={buttonName} filter={filter} />
//       </nav>
//       <div className={styles.text}>
//         <h1>{MoonData.name}</h1>
//         <p>{MoonData.description}</p>
//         <div className={styles.bottom}>
//           <div>
//             <span>avg distance</span>
//             <p>{MoonData.distance}</p>
//           </div>
//           <div>
//             <span>est. travel time</span>
//             <p>{MoonData.travel}</p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   </main>
//   </div>
// }

// export default Moon