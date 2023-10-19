// import React from "react";
// import { useParams } from "react-router-dom";
// import JsonPre from "../../labs/a3/JsonPre";
// import db from "../Database";
// import CourseNavigation from "./CourseNavigation";
//
// function Courses() {
//     const { courseId } = useParams();
//     const course =db.courses.find((course) => course._id === courseId);
//     return (
//         <div>
//             <h1>Courses {course.name}</h1>
//             <CourseNavigation />
//             <JsonPre json={course} />
//         </div>
//     );
// }
//
// export default Courses;




import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";


function Courses() {
    const { courseId } = useParams();
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <h1>Course {course.name}</h1>
            <CourseNavigation />
            <div>
                <div className="position-fixed bottom-50 start-50">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}


export default Courses;