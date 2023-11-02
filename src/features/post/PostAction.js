export default function PostAction() {
  return (
    <div className="d-flex gap-1 py-1">
      <button className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200">
        <i className="fa-regular fa-thumbs-up" />
        <small className="fw-bold">Like</small>
      </button>
      <button className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200">
        <i className="fa-regular fa-message" />
        <small className="fw-bold">Comment</small>
      </button>
    </div>
  );
}
