import useAuth from "../../hooks/useAuth";
import Avatar from "../../components/Avatar";
import { useRef, useState } from "react";

export default function ProfileImageForm() {
  const {
    authenticatedUser: { profileImage },
  } = useAuth();

  const [file, setFile] = useState(null);

  const inputEl = useRef(); // { current: <input type="file" className="d-none" ref={inputEl}/>}

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Profile Picture</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={(e) => {
            // console.dir(e.target);
            // ถ้ากด cancel ไม่ต้องอัพเดท state
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                Save
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null; //เพื่อ reset ค่า e
                }}
              >
                Cancel
              </button>
            </>
          )}
          {/*ถ้า state file ไม่มีค่าให้ show แค่ปุ่ม edit */}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()} //คลิกให้เปิด element นี้
          >
            Edit
          </button>
        </div>
      </div>
      <div className="text-center mt-3">
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
