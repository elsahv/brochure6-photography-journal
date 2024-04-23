import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
// import Contact from "./components/Contact";
// import Services from "./components/Services";
// import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>

      <script src="js/main.js"></script>
    </>
  );
};
export default App;
