import { useState } from "react";
import Input from "../../components/Input";
import validateRegister from "../../validators/validate-register";
import * as authApi from "../../apis/auth-api";

const initialInput = {
  firstName: "",
  lastName: "",
  emailOrMobile: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); //อัพเดท state โดยให้โคลน state เดิมแล้วอัพเดทตาม key
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        console.log('no error');
        setError({});
        await authApi.register(input);
      }
    } catch (err) {}
  };

  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
      <div className="col-6">
        <Input
          placeholder="First name"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
        />
      </div>
      <div className="col-6">
        <Input
          placeholder="Last name"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
        />
      </div>
      <div className="col-12">
        <Input
          placeholder="Email address or mobile number"
          name="emailOrMobile"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
          error={error.emailOrMobile}
        />
      </div>
      <div className="col-12">
        <Input
          type="password"
          placeholder="New password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
        />
      </div>
      <div className="col-12">
        <Input
          type="password"
          placeholder="Confirm password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
        />
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-green btn-sm text-4.5 h-9 tw-px-10"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
