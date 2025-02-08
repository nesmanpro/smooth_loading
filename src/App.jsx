import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import "./sass/main.scss";

// components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";


// Components


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <LayoutGroup >
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className="transition-image final">
                <motion.img
                  src={`${import.meta.env.BASE_URL}images/image-2.jpg`}
                  layoutId="main-image-1"
                  transition={{ ease: [.6, .01, .05, .9], duration: 1.6 }} />
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>

  );
}

export default App;
