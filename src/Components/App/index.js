import './style.css';

import { Container } from '../StyledComponents/';
import MainTitle from '../MainTitle';
import TaskInput from '../Input';
import { useState } from 'react';
import Tasks from '../Tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isNightMode, setNightMode] = useState(true);
  return (
    <div className="App">
      <img
        className="background-image"
        src={isNightMode ? `${process.env.PUBLIC_URL}/img/bg-desktop-dark.jpg` : `${process.env.PUBLIC_URL}/img/bg-desktop-light.jpg`}
        alt="Background"
      />
      <div style={{}} className="main-container">
        <Container>
          <MainTitle />
          <TaskInput tasks={tasks} setTasks={setTasks} />
          <Tasks tasks={tasks} setTasks={setTasks} />
        </Container>
      </div>
    </div>
  );
}

export default App;
