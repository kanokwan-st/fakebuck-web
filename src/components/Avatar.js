import profileImage from '../assets/blank.png'

export default function Avatar({src, size}) {
  return (
    <img
      src={src || profileImage}
      className="rounded-circle cursor-pointer"
      alt="user"
      width={size}
      height={size}
    />
  );
}
