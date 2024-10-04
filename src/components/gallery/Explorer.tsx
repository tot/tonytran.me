import ExplorerIcon from "./icons/ExplorerIcon";
import Table from "./Table";

const Explorer = () => {
    return (
        <div className="p-6 border border-white/10 relative">
            <div className="absolute top-0 left-3 transform -translate-y-1/2 bg-[#121212] px-3">
                <div className="flex items-center gap-2">
                    <ExplorerIcon />
                    <p className="text-white text-base font-departure tracking-wide">
                        gallery
                    </p>
                </div>
                <Table />
            </div>
        </div>
    );
};

export default Explorer;
