import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const App = () => {
    const myCount = useSelector((state) => state.mycounter.cnt);
    const dispatch = useDispatch();

    return (
        <>
            <h1>This is toolkit :</h1>
            <button onClick={() => { dispatch(increment()) }}>increment</button>
            <h1>{myCount}</h1>
            <button onClick={() => { dispatch(decrement()) }}>decrement</button>

        </>
    )
}

export default App;
