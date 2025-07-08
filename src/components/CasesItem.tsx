import { ICaseCard } from "@/models/ICaseCard";

interface CasesItemProps {
  caseCard: ICaseCard;
}

export function CasesItem({ caseCard }: CasesItemProps) {
  return (
    <li key={caseCard.title}>
      <article
        style={{ borderColor: "hsla(0,0%,92%,1)" }}
        className="group border bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full w-full relative"
      >
        {/* {/* <div className="relative h-[272px]">
          {caseCard.cover && caseCard.cover.endsWith(".mp4") && (
            <>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 rounded-t-2xl">
                  <img
                    className="absolute top-0 object-cover w-full h-full rounded-t-2xl"
                    src={card.preview}
                    alt={card.title}
                  />
                  <button
                    className="bg-black w-[56px] h-[56px] rounded-full z-20 cursor-pointer text-white flex items-center justify-center transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
                    onClick={handlePlay}
                  >
                    <PlayIcon />
                  </button>
                </div>
              )}

              <video
                ref={videoRef}
                poster={card.preview}
                className="rounded-t-2xl"
                src={card.cover}
                controls
                onEnded={handleVideoEnd}
                style={{ display: isPlaying ? "block" : "none" }}
              />
            </>
          )} */}
        {/* {card.cover && !card.cover.endsWith(".mp4") && (
            <img
              className="rounded-t-2xl h-[272px] object-cover"
              src={card.preview}
              alt={card.title}
            />
          )}
        </div> */}
        <div className="p-8 flex flex-col">
          <div className="text-xl font-semibold text-gray-900 mb-[8px]">
            {caseCard.title}
          </div>
          <p className="text-lg text-gray-500">
            {caseCard.descr}{" "}
            <span className="underline">
              <a href="#">Read more</a>
            </span>
          </p>
        </div>
      </article>
    </li>
  );
}
