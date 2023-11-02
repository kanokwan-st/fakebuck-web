import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import { useRef, useState } from "react";
import useLoading from "../../hooks/useLoading";
import * as userApi from '../../apis/user-api';

export default function ProfileImageForm({ onSuccess, updateProfileUser }) {
  const { authenticatedUser, updateProfile } = useAuth();
  const { profileImage } = authenticatedUser;
  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  const inputEl = useRef(); // เพื่อให้ได้ inputEl = { current: <input type="file" className="d-none" ref={inputEl}/>} และสามารถเรียกใช้ input โดย inputEl.current

  const handleClickSave = async () => {
    startLoading();
    const formData = new FormData();
    formData.append("profileImage", file); //ชื่อkey, สิ่งที่อัพเดท
    const res = await userApi.updateProfile(formData);
    updateProfile(res.data);
    updateProfileUser(res.data);
    stopLoading();
    setFile(null);
    onSuccess();
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Profile Picture</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl} //เอา ref มาใส่เพื่อใช้เรียก input
          onChange={(e) => {
            // ถ้ากด cancel ไม่ต้องอัพเดท state
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {/*ถ้า state file มีค่าให้ show ปุ่ม save และ cancel */}
          {file && (
            <>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={handleClickSave}
              >
                Save
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null; //เพื่อ reset ค่า e (เวลากดเลือกคนนึงแล้วกดcancel แล้วกดคนเดิมซ้ำจะได้กดได้ เพราะ เกิด onChange ที่ input)
                }}
              >
                Cancel
              </button>
            </>
          )}
          {/*ถ้า state file ไม่มีค่าให้ show แค่ปุ่ม edit */}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()} //เมื่อคลิก button edit ให้เปิด element input
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
        {/*เมื่อคลิก Avatar ให้เปิด element input*/}
        <span onClick={() => inputEl.current.click()}> 
          <Avatar
            src={file ? URL.createObjectURL(file) : profileImage}
            size="168"
          />
        </span>
      </div>
    </>
  );
}
