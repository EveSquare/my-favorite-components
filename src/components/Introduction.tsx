type Props = {
  title: string;
  description: string;
};

const Introduction: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Introduction;
