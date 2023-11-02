import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    deleteAssignment,
} from "./assignmentsReducer";

function DeleteConfirm({ state, setOpen }) {
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteAssignment(assignment._id));
        setOpen({ open: false });
    };

    const handleCancel = () => {
        setOpen({ open: false });
    };

    return (
        state.open && (
            <div className="wd-delete-confirm">
                <h3>
                    Would you really like to delete: {assignment.title}?
                </h3>
                <br />
                <button onClick={handleDelete}>Yes</button>
                <button onClick={handleCancel}>No</button>
            </div>
        )
    );
}

export default DeleteConfirm;
