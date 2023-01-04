import Nav from "../../Dashboard/Nav";
import Main from "./Main";

interface Props {
  page: string;
  url: string;
}

const Detail: React.FC<Props> = ({ page, url }: Props) => {
  return (
    <main className="relative h-full min-h-screen main-adehun py-6 px-12 bg-dashprimary">
      <Nav />
      <Main url={url} page={page} />
    </main>
  );
};

export default Detail;
