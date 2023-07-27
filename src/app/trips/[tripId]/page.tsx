import { prisma } from "@/lib/prisma";
import TripDescription from "./components/TripDescription";
import TripHeader from "./components/TripHeader";
import TripHighlights from "./components/TripHighlights";
import TripLocation from "./components/TripLocation";
import TripReservation from "./components/TripReservation";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);
  if (!trip) return null;
  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation
        maxGuests={trip.maxGuests}
        tripStartDate={trip.startDate}
        tripEndDate={trip.endDate}
        pricePerDay={Number(trip.pricePerDay)}
      />
      <TripDescription description={trip.description} />
      <TripHighlights highlights={trip.highlights} />
      <TripLocation location={trip.location} />
    </div>
  );
};

export default TripDetails;
