import Sidebar from "./components/layout/Sidebar";
import ViewPort from "./components/layout/ViewPort";

const App = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-5">
            <Sidebar style="row-span-5 h-screen w-screen bg-zinc-900 text-white" />
            <ViewPort style="col-span-4 row-span-5" />
        </div>
    );
};

export default App;