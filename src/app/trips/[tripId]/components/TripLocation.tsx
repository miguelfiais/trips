import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationPros {
  location: string;
}

const TripLocation = ({ location }: TripLocationPros) => {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          alt={location}
          style={{ objectFit: "cover" }}
          fill
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="text-primaryDarker text-sm font-semibold mt-3">
        {location}
      </h3>
      <p className="text-xs text-primaryDarker mt-2 leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        consectetur totam dicta obcaecati iure sequi minus aperiam officia
        provident.
      </p>
      <Button className="w-full mt-5" variant="outlined">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;
