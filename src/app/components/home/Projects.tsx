import ProjectCard from "./ProjectCard"
import Section from "./Section"

const PROJECTS = [
   {
      year: "2023",
      title: "Harmonyze",
      description: "A social space to showcase your music personality.",
      url: "https://github.com/tot/harmonyze",
      dateColor: "text-sky-500",
      bgColor: "to-sky-500/15",
      border: "border-sky-500/20",
   },
   {
      year: "2023",
      title: "VEO",
      description:
         "A digital portal for students of the entrepreneurship club at UVA.",
      url: "https://github.com/veovirginia/veo-website",
      dateColor: "text-[#FF6969]",
      bgColor: "to-[#FF6969]/15",
      border: "border-[#FF6969]/20",
   },
   {
      year: "2022",
      title: "Flux",
      description:
         "A platform for businesses to manage cryptocurrency finances.",
      url: "https://github.com/Flux-Crypto/Flux/tree/dev",
      dateColor: "text-purple-500",
      bgColor: "to-purple-500/15",
      border: "border-purple-500/20",
   },
   {
      year: "2022",
      title: "CavComms",
      description: "A backend server for FRC robot communications.",
      url: "https://github.com/tot/cavcomms",
      dateColor: "text-[#FFEECC]",
      bgColor: "to-[#FFEECC]/15",
      border: "border-[#FFEECC]/20",
   },
   {
      year: "2022",
      title: "CavComms Dashboard",
      description: "A dashboard client to manage FRC robots.",
      url: "https://github.com/tot/cavcomms-dashboard",
      dateColor: "text-lime-500",
      bgColor: "to-lime-500/15",
      border: "border-lime-500/20",
   },
]

const Projects = () => {
   return (
      <Section>
         <h1 className="text-3xl font-bold text-white">Projects</h1>
         <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROJECTS.map((project) => (
               <ProjectCard key={project.title} {...project} />
            ))}
         </div>
      </Section>
   )
}

export default Projects
