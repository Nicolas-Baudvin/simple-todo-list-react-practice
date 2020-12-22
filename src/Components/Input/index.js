import { useState } from "react";
import Input from "../StyledComponents/Input";
import './style.css';

const TaskInput = ({ tasks, setTasks }) => {
    const [value, setValue] = useState("");
    const [isChecked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (value)
        {
            const newTasks = tasks;
            newTasks.push({ title: value, isChecked });
            console.log(newTasks);
            setTasks([...newTasks]);
            setValue("");
        }
    };

    return <form onSubmit={handleSubmit} className="form" action="">
        <div onClick={(e) => setChecked(!isChecked)} className={isChecked ? "form-img-container checked" : "form-img-container"}>
            {
                isChecked && <img className="form-img" src={`${process.env.PUBLIC_URL}/img/icon-check.svg`} alt="" />
            }
        </div>
        <Input className="form-input" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type your task here" />
    </form>
};

export default TaskInput;