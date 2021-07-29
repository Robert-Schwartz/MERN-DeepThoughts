import React from "react";
// useQuery Hook from Apollo Client
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";

// Components:
import ThoughtList from "../components/ThoughtList";

// Home page declaration
const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // optional chaining (see notes below):
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;

/* Optional Chaining Notes:
// no data will exist until the query to the server is finished
if data exists, store it in the thoughts constant we just created.
If data is undefined, then save an empty array to the thoughts component.
*/
