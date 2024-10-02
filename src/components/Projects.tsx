const Projects = () => {
    return (
        <div>
            <h2 className="text-lg font-medium text-white mb-2 font-departure uppercase tracking-wide w-full">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-white/10">
                    <div className="w-full text-center border-b border-white/10 py-2">
                        <h3 className="text-base font-medium text-white font-departure uppercase tracking-wide w-full">
                            CavComms
                        </h3>
                    </div>
                    <div className="p-4">
                        <p className="text-white/60">
                            A real-time communications platform for FRC robots.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
