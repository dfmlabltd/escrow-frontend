import Sidebar from "../../components/dash/Sidebar";

const Aside: React.FC = () => {
  return (
    <aside className="max-w-navx fixed inset-y-0 min-h-screen py-6 block flex-wrap items-center justify-between overflow-y-auto shadow-none transition-transform duration-200 bg-dashsecondary">
      <Sidebar />
    </aside>
  );
};

export default Aside;
