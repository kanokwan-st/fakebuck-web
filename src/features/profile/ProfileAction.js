import { STATUS_ME } from "../../config/constant";
import MeAction from "./MeAction";

export default function ProfileAction({ statusWithAuthUser }) {
  return (
    <div className="mb-3 align-self-md-end">
      {statusWithAuthUser === STATUS_ME && <MeAction />}
    </div>
  );
}
