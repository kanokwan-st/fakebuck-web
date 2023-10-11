export default function LoginForm() {
  return (
    <form className="d-flex flex-column gap-3">
      <input
        type="text"
        className="form-control rounded-md h-13"
        placeholder="Email address or phone number"
      />
      <input
        type="password"
        className="form-control rounded-md h-13"
        placeholder="Password"
      />
      <button className="btn btn-primary w-100 fw-bold rounded-md h-12 text-4.5">
        Log In
      </button>
    </form>
  );
}
