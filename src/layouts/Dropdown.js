import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownEl = useRef(); // จะใส่ค่าให้เป็น { current: undefined } -->  หลังจาก render รอบแรก{ current: <div className="dropdown"></div>}

  useEffect(() => {
    const handleClickOutside = e => {
      // ถ้าคลิก element ที่อยู่นอก dropdown (ไม่ได้เป็น children ของ dropdown) ให้ปิด
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="d-flex justify-content-end">
      <div className="dropdown" ref={dropdownEl}>
        <DropdownToggle onClick={() => setOpen(!open)} />
        <DropdownMenu open={open} onClose={() => setOpen(false)}/>
      </div>
    </div>
  );
}
