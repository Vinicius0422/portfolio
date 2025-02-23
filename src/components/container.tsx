interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="px-10 max-w-md md:max-w-2xl md:px-0 lg:max-w-4xl xl:max-w-6xl w-full">
        {children}
      </div>
    </div>
  );
};
