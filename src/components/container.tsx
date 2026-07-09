type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-white/2">
      {children}
    </div>
  );
};

export default Container;
