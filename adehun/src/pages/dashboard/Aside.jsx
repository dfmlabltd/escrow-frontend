import Sidebar from "../../components/dash/Sidebar";
function Aside() {
  return (
    <aside className="max-w-navx fixed inset-y-0 min-h-screen py-6 block flex-wrap items-center justify-between overflow-y-auto shadow-none transition-transform duration-200">
      <Sidebar />
    </aside>
  );
}

export default Aside;
