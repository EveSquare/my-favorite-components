type Props = {
  title: string;
  description: string;
  component: React.ReactNode;
};

const Article: React.FC<Props> = ({ title, description, component }) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {component}
    </>
  );
};

export default Article;
