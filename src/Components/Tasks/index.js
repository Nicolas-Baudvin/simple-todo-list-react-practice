import { useEffect, useState } from 'react';
import './style.css';

const Tasks = ({ tasks, setTasks }) => {
    const [sortedTasks, setSortedTasks] = useState([...tasks]);
    const [activeOptions, setActiveOptions] = useState({
        all: true,
        active: false,
        completed: false
    });

    const handleClickDelete = (e, clickedIndex) => {
        const newTasksArray = tasks.filter((task, i) => i !== clickedIndex);
        setTasks([...newTasksArray]);
    };

    const handleClickClearCompletedTasks = (e) => {
        const newTasksArray = tasks.filter((task) => !task.isChecked);
        setTasks([...newTasksArray]);
        setSortedTasks([...newTasksArray]);
    };

    const handleClickShowAllTasks = () => {
        setActiveOptions({ completed: false, all: true, active: false });
    };

    const handleClickShowActiveTasks = () => {
        setActiveOptions({ active: true, all: false, completed: false });
    };

    const handleClickShowCompletedTasks = () => {
        setActiveOptions({ completed: true, all: false, active: false });
    };

    const handleClickCheckTask = (taskClicked) => {
        console.log(taskClicked);
        const newTasks = tasks.map((task) => {
            if (taskClicked.id === task.id)
                task.isChecked = !task.isChecked;
            return task;
        });

        setTasks([...newTasks]);
    };

    useEffect(() => {
        const { all, active, completed } = activeOptions;

        if (all)
        {
            setSortedTasks([...tasks]);
        }
        else if (completed)
        {
            const newSortedTasks = tasks.filter((task) => task.isChecked);
            setSortedTasks([...newSortedTasks]);
        }
        else if (active)
        {
            const newSortedTasks = tasks.filter((task, i) => !task.isChecked);
            setSortedTasks([...newSortedTasks]);
        }
    }, [activeOptions, tasks]);

    return <div className="tasks">
        <div className="tasks-container">

            {
                sortedTasks.length !== 0 && sortedTasks.map((task, i) => <div key={i} className="task">
                    <div onClick={() => handleClickCheckTask(task)} className={task.isChecked ? "task-img-container checked" : "task-img-container"}>
                        {
                            task.isChecked && <img className="form-img" src={`${process.env.PUBLIC_URL}/img/icon-check.svg`} alt="" />
                        }
                    </div>
                    <div className="task-title"> {task.title} </div>
                    <img onClick={(e) => handleClickDelete(e, i)} className="task-delete" src={`${process.env.PUBLIC_URL}/img/icon-cross.svg`} alt="" />
                </div>
                )
            }
            {
                sortedTasks.length === 0 && <p className="text">Your tasks will appear here</p>
            }
        </div>
        <div className="tasks-settings">
            <p className="settings-text">
                {sortedTasks.length} items left
            </p>
            <div className="settings-options">
                <p className={activeOptions.all ? "selected" : ""} onClick={handleClickShowAllTasks}>All</p>
                <p className={activeOptions.active ? "selected" : ""} onClick={handleClickShowActiveTasks}>Active</p>
                <p className={activeOptions.completed ? "selected" : ""} onClick={handleClickShowCompletedTasks}>Completed</p>
            </div>
            <p onClick={handleClickClearCompletedTasks} className="settings-clear">Clear Completed</p>
        </div>
    </div>
};

export default Tasks;