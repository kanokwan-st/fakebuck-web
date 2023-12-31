import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import * as postApi from "../../apis/post-api";

export default function PostDropdown({ post, setPosts }) {
  const [open, setOpen] = useState(false);
  const dropdownEl = useClickOutside(() => setOpen(false));

  const handleClickDelete = async () => {
    await postApi.deletePostById(post.id);
    setPosts((previous) => previous.filter((el) => el.id !== post.id)); //เอาแค่อันที่ไม่ลบ
    setOpen(false);
  };

  // const handleClickEdit = async () => {
  //   await postApi.editPostById(post.id);
  //   // setPosts(previous => {
  //   //   const deepClone = structuredClone(previous);
  //   //   const idx = deepClone.findIndex((el) => el.id === post.id);
  //   //   deepClone[idx].title = title;
  //   //   deepClone[idx].image = image;

  //   // })
  // };

  return (
    <div className="dropdown" ref={dropdownEl}>
      {/*จุดสามจุด*/}
      <button
        className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
        onClick={() => setOpen(!open)}
      >
        <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
      </button>
      {/*dropdown ที่ซ่อนอยู่*/}
      <div className={`dropdown-menu end-0 mt-1 ${open ? "d-block" : ""} `}>
        <button className="dropdown-item">
          Edit
        </button>
        <button className="dropdown-item" onClick={handleClickDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
