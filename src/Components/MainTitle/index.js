import { Title } from '../StyledComponents';
import './style.css';

const MainTitle = () => {

    return <div className="title">
        <Title> todo </Title>
        <img className="title-icon" src={`${process.env.PUBLIC_URL}/img/icon-sun.svg`} alt="sun"/>
    </div>
};

export default MainTitle;