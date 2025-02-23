interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full">
        {children}
      </div>
    </div>
  );
};
