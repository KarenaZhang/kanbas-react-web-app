// import React, { useState } from "react";
// function ArrayStateVariable() {
//     const [array, setArray] = useState([1, 2, 3, 4, 5]);
//     const addElement = () => {
//         setArray([...array, Math.floor(Math.random() * 100)]);
//     };
//     const deleteElement = (index) => {
//         setArray(array.filter((item, i) => i !== index));
//     };
//     return (
//         <div>
//             <h2>Array State Variable</h2>
//             <button onClick={addElement}>Add Element</button>
//             <ul>
//                 {array.map((item, index) => (
//                     <li key={index}>
//                         {item}
//                         <button onClick={() => deleteElement(index)}>
//                             Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// export default ArrayStateVariable;

import React, { useState } from "react";
function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
        const newArray = [
            Math.floor(Math.random() * 100),
            ...array,
            Math.floor(Math.random() * 100),
        ];
        setArray(newArray);
    };
    const deleteElement = (index) => {
        const newArray = array.filter((item, i) => i !== index);
        setArray(newArray);
    };
    return (
        <div>
            <h2>Array State Variable</h2>
            <button onClick={addElement}>Add Element</button>
            <ul>
                {array.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteElement(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ArrayStateVariable;