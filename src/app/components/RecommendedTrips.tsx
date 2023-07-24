import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";

const fetchTrips = async () => {
  const trips = await prisma.trip.findMany();
  return trips;
};

const RecommendedTrips = async () => {
  const data = await fetchTrips();
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-5">
        <div className="w-full h-[1px] bg-grayLighter"></div>
        <h2 className="font-medium text-grayPrimary whitespace-nowrap">
          Destinos Recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter"></div>
      </div>
      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip) => (
          <TripItem trip={trip} key={trip.id} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;
