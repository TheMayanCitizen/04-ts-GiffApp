type GiffProps = {
  id: string;
  title: string;
  img: string;
};

export const GiffContainer = ({ title, img }: GiffProps) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <p>{title}</p>
    </div>
  );
};
