import Nav from "../../components/dash/Nav";
import DashHeader from "../../components/dash/DashHeader";
import TableCard from "../../components/dash/DashBody";

function Main() {
  return (
    <main className="relative h-full min-h-screen main-adehun py-4 px-12 bg-dashprimary">
      <Nav />
      <DashHeader />
      <TableCard />
    </main>
  );
}

export default Main;
