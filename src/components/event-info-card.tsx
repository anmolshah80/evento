const EventInfoCard = () => {
  return (
    <div className="relative flex h-25 w-full cursor-pointer flex-col justify-center rounded-md bg-white/10 px-6 py-4">
      <div className="bg-accent-green absolute top-0 left-4 h-2 w-4 rounded-sm"></div>
      <p className="text-xl font-bold capitalize">Jazz Fusion Night</p>
      <p className="mt-1 text-base text-white/50">08:00 AM - 09:00 AM</p>
    </div>
  );
};

export default EventInfoCard;
