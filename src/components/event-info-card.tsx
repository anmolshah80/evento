const EventInfoCard = () => {
  return (
    <div className="w-full h-[100px] bg-white/10 rounded-md flex flex-col justify-center px-6 py-4 relative cursor-pointer">
      <div className="absolute top-0 left-[1rem] w-4 h-2 bg-accent-green rounded-sm"></div>
      <p className="text-xl font-bold capitalize">Jazz Fusion Night</p>
      <p className="text-base text-white/50 mt-1">08:00 AM - 09:00 AM</p>
    </div>
  );
};

export default EventInfoCard;
