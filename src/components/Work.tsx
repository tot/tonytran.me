import WorkCard from "./WorkCard";

const Work = () => {
    return (
        <div className="">
            <h2 className="text-lg font-medium text-white mb-2 font-departure uppercase tracking-wide w-full pb-4">
                Work
            </h2>
            <WorkCard
                title="Software Engineer Intern"
                company="Investure"
                date="May 2024 - Aug 2024"
                description="Built interfaces and APIs using LLMs to summarize financial documents for analysts."
                technologies={["FastAPI", "React", "ASP.NET", "MSSQL"]}
                first={true}
            />
            <WorkCard
                title="Frontend Engineer"
                company="web3 startup"
                date="Sep 2022 - May 2023"
                description="Founding frontend engineer, built the first version of a crypto + NFT trading platform for retail investors."
                technologies={[
                    "Next.js",
                    "React",
                    "TailwindCSS",
                    "TypeScript",
                    "WebSockets",
                ]}
            />
            <WorkCard
                title="Frontend Developer"
                company="freelance"
                date="Oct 2018 - Present"
                description="Operating a digital currency focused on startups. Specialize in building high conversion websites and web apps that grow revenue."
                technologies={["React", "TailwindCSS", "Node.js", "Next.js"]}
            />
        </div>
    );
};

export default Work;
