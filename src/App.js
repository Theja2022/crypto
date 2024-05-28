import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Herosection } from './components/Herosection/HeroSection';
import { FeatureSection } from './components/Herosection/FeatureSection';
import { WorkFLow } from './components/Herosection/WorkFLow';
import { Testimonials } from './components/Herosection/Testimonials';
import { Footer } from './components/Herosection/Footer';


export const App = () => {
  return (
 
    <>
    <Navbar/>
   
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <Herosection/>
   
    <FeatureSection/>
    <WorkFLow/>
    <Testimonials/>
    <Footer/>
    
    
    </div>

    </>
  
 )
}

export default App;






// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Herosection from './components/Herosection/HeroSection';
// import FeatureSection from './components/Herosection/FeatureSection';
// import WorkFLow from './components/Herosection/WorkFLow';
// import Testimonials from './components/Herosection/Testimonials';
// import Footer from './components/Herosection/Footer';

// // const Home = () => (
// //   <>
// //     <Navbar/>
// //     <Herosection />
// //     <FeatureSection />
// //     <WorkFLow />
// //     <Testimonials />
// //   </>
// // );

// const App = () => {
//   return (
    
//     <Router>
//       <Navbar />
//       <div className='max-w-7xl mx-auto pt-20 px-6'>
//         <Routes>
//           <Route path="/" element={<Herosection/>} />
//           <Route path="/features" element={<FeatureSection />} />
//           <Route path="/workflow" element={<WorkFLow />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

