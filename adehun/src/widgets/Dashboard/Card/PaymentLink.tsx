import { useSelector } from "react-redux";
import useClipboard from "react-use-clipboard";
import IState from "../../../redux/istore";

const PaymentLink: React.FC = () => {
  const user: any = useSelector<IState>((state) => state.user);

  const [isCopied, setCopied] = useClipboard("https://adehun.com/pay/eax", {
    successDuration: 1000,
  });

  const SetCard = () => {
    return (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          fill="rgba(255, 255, 255, 1)"
        >
          <path d="M4 21a1 1 0 00.24 0l4-1a1 1 0 00.47-.26L21 7.41a2 2 0 000-2.82L19.42 3a2 2 0 00-2.83 0L4.3 15.29a1.06 1.06 0 00-.27.47l-1 4A1 1 0 003.76 21 1 1 0 004 21zM18 4.41L19.59 6 18 7.59 16.42 6zM5.91 16.51L15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
        </svg>
      </span>
    );
  };

  const CopyCard = () => {
    return isCopied ? (
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          fill="rgba(255, 255, 255, 1)"
        >
          <path d="M4 21a1 1 0 00.24 0l4-1a1 1 0 00.47-.26L21 7.41a2 2 0 000-2.82L19.42 3a2 2 0 00-2.83 0L4.3 15.29a1.06 1.06 0 00-.27.47l-1 4A1 1 0 003.76 21 1 1 0 004 21zM18 4.41L19.59 6 18 7.59 16.42 6zM5.91 16.51L15 7.41 16.59 9l-9.1 9.1-2.11.52z"></path>
        </svg>
      </span>
    ) : (
      <span
        onClick={() => {
          setCopied();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ msFilter: "" }}
          fill="rgba(255, 255, 255, 1)"
        >
          <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
        </svg>
      </span>
    );
  };

  return (
    <div className="flex flex-col flex-wrap bg-dashbase p-6 rounded-sm gap-4 justify-between text-white">
      <div className="flex flex-col gap-y-1">
        <div className="flex flex-row items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ msFilter: "" }}
              fill="rgba(255, 255, 255, 1)"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
            </svg>
          </div>
          <span className="text-sm">
            adehun.com/pay/
            <span className="font-bold">{user.username ?? "{paylink}"}</span>
          </span>
          <div>{user.username ? <CopyCard /> : <SetCard />}</div>
        </div>
        <div>
          <p className="text-sm bg-dashbasealt p-3 rounded-sm mt-2">
            {user.username
              ? "Rather than giving out your email address, why not send your payment link instead?"
              : "You are yet to set your payment link."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
