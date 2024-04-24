type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className="rounded-md border-solid border-1 border-cyan-700 p-5">
      {children}
    </div>
  );
};

export default Card;
