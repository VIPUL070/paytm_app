import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"SignIn"}></Heading>
          <SubHeading
            label={"Enter your credentials to access your account"}
          ></SubHeading>

          <InputBox
            placeholder="johnDoe@gmail.com"
            label={"username"}
            onChange={() => {}}
          ></InputBox>
          <InputBox
            placeholder="123456"
            label={"password"}
            onChange={() => {}}
          ></InputBox>
          <div className="pt-4">
            <Button label={"Sign In"} onClick={async () => {}}></Button>
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
};

export default Signin;
