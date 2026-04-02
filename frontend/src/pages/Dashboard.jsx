import { AppBar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

function Dashboard() {

  return (
    <div>
      <AppBar label = {(first)}></AppBar>
      <div className="m-8">
        <Balance value={(amount)}></Balance>
        <Users></Users>
      </div>
    </div>
  );
}

export default Dashboard