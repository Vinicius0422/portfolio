interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-10">
      {children}
    </div>
  );
};
