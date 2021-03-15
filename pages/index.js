import dynamic from "next/dynamic";

const LazyHome = dynamic(() => import("../RouteComponents/Home"));
const HomeProvider = dynamic(() =>
  import("../contexts/HomeContext").then((x) => x.HomeProvider)
);

const Index = ({ data }) => {
  return (
    <HomeProvider data={data}>
      <LazyHome />
    </HomeProvider>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const firebase = await (await import("../firebase")).default;
  await import("firebase/firestore");
  const data = await firebase.firestore().collection("songs").get();

  return {
    props: {
      data: data.docs.map((x) => {
        return {
          ...x.data(),
          id: x.id,
        };
      }),
    },
  };
}

export default Index;
