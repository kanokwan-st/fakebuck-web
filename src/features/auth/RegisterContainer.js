import { useState } from "react";
import RegisterForm from "./RegisterForm";
import Modal from "../../components/Modal";

export default function RegisterContainer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-center tw-py-2.5">
        <button
          className="btn fw-bold btn-green rounded-md h-12"
          type="button"
          onClick={() => setOpen(true)}
        >
          Create New Account
        </button>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Sign Up">
        <RegisterForm />
      </Modal>
    </>
  );
}
