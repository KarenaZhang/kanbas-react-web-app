import {Link} from "react-router-dom";
import "./index.css";
function Account() {
    return (
        <div class="wd-flex-row-container">

            <div class="d-none d-md-block">
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
                      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
                      crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="/vendors/bootstrap/bootstrap.min.css" />


            </div>
            <div class="d-none d-md-block">
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="/kanbas/Courses/CourseNavigation/index.css" />
                <ul class="wd-course-navigation">
                    <li><a href="#">Notifications</a></li>
                    <li class="wd-active"><a href="/Kanbas/Account/Profile/index.html">Profile</a></li>
                    <li><a href="#">Files</a></li>
                    <li><a href="/Kanbas/Courses/Settings/Details/screen.html">Settings</a></li>
                    <li><a href="#">ePortfolios</a></li>
                    <li><a href="#">Shared Content</a></li>
                    <li><a href="#">The Hub</a></li>
                    <li><a href="#">Qwickly Course Tools</a></li>
                    <li><a href="#">Global Announcements</a></li>
                </ul>
            </div>
            <div class="wd-flex-grow-1">
                <div class="wd-header-container">

                    <i class="fa-regular fa-user fa-10x"></i>
                    <Link
                        to={`/Kanbas/Account/Edit`}
                        className="list-group-item btn btn-secondary float-end wd-edit-button">

                        <i
                            class="fa-solid fa-pencil"></i>Edit
                        Profile</Link>
                </div>
                <h3>Samuel Tomlinson</h3>

                <h1>Samuel Tomlinson</h1>
                <h2>Contact</h2>
                <div>No reigstered services, you can add some on the <a href="#">settings</a> page.</div>
                <h2>Biography</h2>
                <div>Student, Software Engineer, AI, Space</div>
                <h2>Links</h2>
                <div><a href="https://www.youtube.com/@WebDevTV">YouTube</a></div>

            </div>

        </div>
    )
}

export default Account;