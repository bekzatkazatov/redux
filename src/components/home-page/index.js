import React, {useEffect} from "react";
import {getTodos} from "../../redux/action/todoAction"


const HomePage = () =>  {
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch( getTodos())
    }, [])
    return (
        <div>

        </div>
    )
}





export default HomePage;