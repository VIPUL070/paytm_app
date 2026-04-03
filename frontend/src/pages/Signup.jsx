import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";
import { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"SignUp"}></Heading>
          <SubHeading
            label={"Enter your information to create an account"}
          ></SubHeading>
          <InputBox
            placeholder="John"
            label={"First Name"}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            placeholder="Doe"
            label={"Last Name"}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          ></InputBox>
          <InputBox
            placeholder="johnDoe@gmail.com"
            label={"Email"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></InputBox>
          <InputBox
            placeholder="123456"
            label={"password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></InputBox>

          <div className="pt-4">
            <Button
              onClick={async () => {
                const response = await fetch("http://localhost:3000/api/v1/user/signup", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                   body: JSON.stringify({
                    username,
                    password,
                    firstName,
                    lastName,
                  }),
                });
                //after sign up we have to store token in the local storage (key-val pair)
                const data = await response.json();
                localStorage.setItem("token" ,data.token)
              }}
              label={"Sign Up"}
            ></Button>
          </div>

          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign In"}
            to={"/signin"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
