export default function DropdownToggle({ onClick }) {
    return <div onClick={onClick}>
        <img
            src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
            className="rounded-circle cursor-pointer"
            width="40"
            height="40"
            alt="user"
          />
    </div>;
}