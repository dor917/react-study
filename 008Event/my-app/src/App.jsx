import Login from "./Component/login";
import Hompage from "./Component/homepage";
let user = {
  login: true,
  id: 'dondon',
  nickname: 'donha'
}
function App() {

  return (
    <>
      {user.login ?<Hompage  name = {user.nickname}/> : <Login />}
      
    </>
  );
}

export default App;