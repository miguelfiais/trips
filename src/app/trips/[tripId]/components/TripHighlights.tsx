import Image from "next/image";

interface TripHighlightsProps {
  highlights: string[];
}

const TripHighlights = ({ highlights }: TripHighlightsProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker mb-2">Destaques</h2>
      <div className="grid grid-cols-2 gap-3">
        {highlights.map((highlight) => (
          <div key={highlight} className="flex items-center gap-1">
            <Image
              src="/check-icon.svg"
              alt={highlight}
              width={16}
              height={16}
            />
            <p className="text-xs text-grayPrimary">{highlight}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-primaryDarker leading-5 mt-1"></p>
    </div>
  );
};

export default TripHighlights;
