import Chest from "./Components/chest";
import Leg from "./Components/leg";
import Shoulder from "./Components/shoulder";

function App() {
    return (
        <div className="App">
            <h1>이력서</h1>
            <Chest name={'fucking chest day'} exercise={'벤치프레스'}/>
            <Leg name={'fucking chest day'} exercise={'벤치프레스'}/>
            <Shoulder name={'fucking chest day'} exercise={'벤치프레스'}/>
        </div>
    );
}

export default App;