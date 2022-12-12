import Nav from "../Dashboard/Nav";
import Transactions from "./transaction";

interface Props {
  page: string;
  url: string;
}

const Main: React.FC<Props> = ({ page, url }: Props) => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <Transactions url={url} page={page} />
    </main>
  );
};

export default Main;
