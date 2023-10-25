import profileImage from "../assets/blank.png";

export default function Avatar({ src, size, borderSize, borderColor }) {
  //เช็คว่ามีส่ง props borderSize กับ borderColor เข้ามามั้ย
  const classes = `${borderSize ? "border border-" + borderSize : ""} ${
    borderColor ? "border-" + borderColor : ""
  }`;
  return (
    <img
      src={src || profileImage}
      className={`rounded-circle cursor-pointer ${classes}`}
      alt="user"
      width={size}
      height={size}
    />
  );
}
