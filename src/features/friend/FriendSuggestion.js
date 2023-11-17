import { useEffect, useState } from "react";
import SuggestedCard from "./SuggestedCard";
import * as friendApi from "../../apis/friend-api";

export default function FriendSuggestion() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchPage = async () => {
      const res = await friendApi.suggestionFriend();
      setSuggestions(res.data.friendSuggest);
    };
    fetchPage();
  }, []);

  // console.log(suggestions);

  return (
    <>
      <h1 className="mb-3 fw-bold text-5">Friend Suggestions</h1>
      <div className="row g-2">
        {suggestions.map((el) => (
          <SuggestedCard
            key={el.id}
            suggestion={el}
            setSuggestions={setSuggestions}
          />
        ))}
      </div>
    </>
  );
}
