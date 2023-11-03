import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle, AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "../modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group wd-assignment-table">
            <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
            <button onClick={() => dispatch(updateModule(module))}>
                Update
            </button>

            <input value={module.name}
                   onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <textarea value={module.description}
                      onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            />

            {
                modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item">
                            <h4>{module.name}</h4>
                            <FaEllipsisV className="wd-module-icon wd-assignment-ellipsis float-end"/>
                            <AiFillCheckCircle className="wd-module-icon wd-assignment-check float-end"/>
                            <BsFillTrashFill  onClick={() => dispatch(deleteModule(module._id))}
                                              className="wd-module-icon wd-assignment-trash float-end" />
                            <AiFillEdit onClick={() => dispatch(setModule(module))}
                                        className="wd-module-icon wd-assignment-edit float-end" />

                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;