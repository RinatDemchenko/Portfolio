// import Skill from "./components/skill";
// import Project from "./components/project";
import Intro from "./sections/intro";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Footer from "./sections/footer";

// {
//   name: "Next.js",
//   background: "#FFFFFF",
//   image: "/icons/nextjs.png",
//   description: "A React framework",
//   categories: ["Frontend", "Backend"],
// },

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div id="intro" className="w-screen min-h-screen flex items-center justify-start gap-10 intro-background md:flex-row flex-col md:justify-center px-4">
          <Intro />
        </div>
        <div id="skills" className="w-screen min-h-screen flex flex-col items-center justify-center general-background py-20">
          <h1 className="text-white text-5xl text-center font-bold mb-5">
            Technologies I use
          </h1>
          <Skills />
        </div>
        <div id="projects" className="w-screen min-h-screen flex flex-col items-center justify-center background-reverse py-20">
          <h1 className="text-white text-5xl text-center font-bold mb-5 z-10">
            My recent projects
          </h1>
          <Projects />
        </div>
        <div id="education" className="w-screen min-h-screen flex flex-col items-center justify-center general-background py-20">
          {/* <h1 className="text-white text-5xl text-center font-bold mb-5 z-10">
            Education
          </h1> */}
        </div>
      </main>
      <footer className="footer-background w-screen min-h-60 flex flex-row flex-wrap items-center justify-center px-5 py-10">
        <Footer />
      </footer>
    </div>
  );
}
