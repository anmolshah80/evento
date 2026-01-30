type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col max-w-7xl min-h-screen mx-auto bg-white/2">
      {children}
    </div>
  );
};

export default Container;
