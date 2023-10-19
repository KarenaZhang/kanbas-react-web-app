import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";


function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                    <Route path="Calendar" element={<h1>Calendar</h1>} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;



// import Nav from "../Nav";
// function Kanbas() {
//     return (
//         <div>
//             <Nav/>
//             <h1>Kanbas</h1>
//         </div>
//     )
// }
// export default Kanbas