/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';

export const Users = () => {
  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div>
        <input
          type="text"
          placeholder="Serach users...."
          className="w-full px-2 py-1 border rounded border-slate-200 "
        />
      </div>
      <div className="mt-2">
        
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
function User({ user }) {

  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button label={"Send Money"} onClick={()=>{
          navigate(`/send?id=${user._id}&name=${user.firstName}`);
        }}></Button>
      </div>
    </div>
  );
}