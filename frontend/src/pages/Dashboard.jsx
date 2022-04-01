import { useEffect } from "react";
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom';
import GoalForm from "../components/GoalForm";
import GoalsContainer from "../components/GoalsContainer";



function Dashboard() {

    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {

        !user && navigate('/login');
    }, [user, navigate])
    return (
        <>
            <section className='heading'>
                <h1>Welcome, {user && user.name}.</h1>
                <p>Goals dashboard</p>
            </section>
            <GoalForm />
            <GoalsContainer />
        </>
    )
}

export default Dashboard
