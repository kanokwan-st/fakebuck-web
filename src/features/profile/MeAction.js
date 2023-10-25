import Modal from "../../components/Modal";
import CoverImageForm from "./CoverImageForm";
import ProfileImageForm from "./ProfileImageForm";
import { useState } from 'react';

export default function MeAction() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
        <i className="fa-solid fa-pen" /> <span>Edit Profile</span>
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Edit Profile">
        <ProfileImageForm />
        <CoverImageForm />
      </Modal>
    </>
  );
}
