const IntroVideo: React.FC = () => {
  return (
    <div
      className="relative w-full col-span-1 h-full"
      aria-labelledby="Adehun Intro Video"
    >
      <div className="flex flex-row flex-wrap h-full bg-dashsecondary shadow-sm shadow-dashsecondary p-10 rounded-sm gap-4 gap-y-3 items-center justify-between text-white">
        <div className="flex w-full justify-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/illustration/start-soon.png"}
            alt="Intro Thubmnail"
            className="w-9/12 object-contain"
          />
        </div>
        <p className="text-sm mt-4">
          Adehun is an escrow app, made for making p2p transaction, bridging gap
          user and client.
        </p>
        <button
          className="bg-secondary text-sm flex flex-row justify-between py-2 px-3 text-white items-center gap-1 rounded-sm"
          aria-label="watch video"
        >
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default IntroVideo;
