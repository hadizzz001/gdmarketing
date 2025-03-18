

import Footer from "../../components/Footer";
import Carousel1 from "../../components/Carousel1";
import About1 from "../../components/About1";
import Swip from "../../components/Swip";
import Swip3 from "../../components/Swip3";
import Services1 from "../../components/Services1";
import { Suspense } from 'react';

export default function Home() {





  return (
    <>


<Suspense >
      <Carousel1 />
      <About1 />
      <Swip />
      <Services1 />
      <Swip3 /> 
      <Footer />
      </Suspense>
 

    </>

  );
}
