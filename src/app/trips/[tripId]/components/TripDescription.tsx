interface TripDescriptionProps {
  description: string;
}

const TripDescription = ({ description }: TripDescriptionProps) => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="font-semibold text-primaryDarker">Sobre a Viagem</h2>
      <p className="text-xs text-primaryDarker leading-5 mt-1">{description}</p>
    </div>
  );
};

export default TripDescription;
