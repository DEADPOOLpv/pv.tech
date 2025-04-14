import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I&apos;m Prathit Visen
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I&apos;m an enthusiastic and determined computer science graduate at the University of Delhi.
          I have real-world experience with full-stack development, cloud development, and cross-platform app creation.
          I like making strong, flexible apps, and I&apos;ve worked on a lot of personal and school projects that require this skill.  
          I&apos;m always researching and learning about new tools.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
