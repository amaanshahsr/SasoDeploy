import { Suspense, useEffect } from "react";

import { scrollToTop } from "../Components/ScrollToTop";
import React from "react";
const Landing = React.lazy(() => import("./Landing"));
const Test = React.lazy(() => import("./Test"));

function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Landing />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Test />
      </Suspense>
    </>
  );
}

export default Home;
