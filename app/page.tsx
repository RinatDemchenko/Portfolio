import Intro from "./sections/intro";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="w-screen min-h-screen flex items-center justify-start gap-10 intro-background md:flex-row flex-col md:justify-center px-4">
          <Intro />
        </div>
        <div className="w-screen min-h-screen flex flex-col items-center justify-center general-background">
          <h1 className="text-gradient text-6xl font-bold leading-relaxed">My skills</h1>
        </div>
        <div className="w-screen min-h-screen flex items-center justify-center background-reverse"></div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
