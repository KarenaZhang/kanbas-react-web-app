// import KanbasNavigation from "./KanbasNavigation";
// import Courses from "./Courses";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
//
// function Kanbas() {
//     return (
//         <div className="d-flex">
//             <KanbasNavigation />
//             <div>
//                 <Routes>
//                     <Route path="/" element={<Navigate to="Dashboard" />} />
//                     <Route path="Account" element={<Account />} />
//                     <Route path="Dashboard" element={<Dashboard />} />
//                     <Route path="Courses/:courseId/*" element={<Courses />} />
//                     <Route path="Calendar" element={<h1>Calendar</h1>} />
//                 </Routes>
//             </div>
//         </div>
//     );
// }
// export default Kanbas;


import { Link, useLocation } from "react-router-dom";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"];
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;