import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "../modulesReducer";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        dispatch(addModule({ ...module, course: courseId }));
    };

    const handleUpdateModule = () => {
        dispatch(updateModule(module));
    };

    const handleNameChange = (e) => {
        dispatch(setModule({ ...module, name: e.target.value }));
    };

    const handleDescriptionChange = (e) => {
        dispatch(setModule({ ...module, description: e.target.value }));
    };

    const handleDeleteModule = (moduleId) => {
        dispatch(deleteModule(moduleId));
    };

    return (
        <div className="wd-module-list">
            <div className="module-controls">
                <button onClick={handleAddModule}>Add</button>
                <button onClick={handleUpdateModule}>Update</button>
                <input
                    value={module.name}
                    onChange={handleNameChange}
                    placeholder="Module Name"
                />
                <textarea
                    value={module.description}
                    onChange={handleDescriptionChange}
                    placeholder="Module Description"
                />
            </div>

            <ul className="list-group wd-assignment-table">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={module._id} className="list-group-item">
                            <h4>{module.name}</h4>
                            <div className="wd-module-icons">
                                <FaEllipsisV className="wd-module-icon" />
                                <AiFillCheckCircle className="wd-module-icon" />
                                <BsFillTrashFill
                                    onClick={() => handleDeleteModule(module._id)}
                                    className="wd-module-icon"
                                />
                                <AiFillEdit
                                    onClick={() => dispatch(setModule(module))}
                                    className="wd-module-icon"
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ModuleList;
