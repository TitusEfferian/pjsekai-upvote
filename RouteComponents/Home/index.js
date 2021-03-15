import { memo } from "react";
import NavBar from "../../components/NavBar";
import Card from "./Card";
import { UserVotedProvider } from "./contexts/UserVotedContext";

const Home = () => {
  return (
    <UserVotedProvider>
      <NavBar title="Upvote" />
      <div className="pb-8">
        <Card />
      </div>
    </UserVotedProvider>
  );
};

export default memo(Home);
