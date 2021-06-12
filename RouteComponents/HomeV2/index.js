import { memo } from "react";
import "firebase/firestore";
import { useFirestore } from "reactfire";
import NavBar from "../../components/NavBar";
import { useFirestoreCollectionData } from "reactfire";
import Card from "./Card";
import { CardIndexProvider } from "./contexts/CardIndex";
import { LoginBtsProvider } from "./contexts/LoginBTS";

const HomeV2 = () => {
  const docsRef = useFirestore().collection("songs");
  const { status, data } = useFirestoreCollectionData(docsRef);
  if (status === "loading") {
    return (
      <>
        <NavBar title="Pjsekai wishlist songs" />
      </>
    );
  }
  return (
    <>
      <NavBar title="Pjsekai wishlist songs" withAction />
      {data.map((_, index) => {
        return (
          <CardIndexProvider index={index} key={index}>
            <LoginBtsProvider>
              <Card />
            </LoginBtsProvider>
          </CardIndexProvider>
        );
      })}
    </>
  );
};

export default memo(HomeV2);
