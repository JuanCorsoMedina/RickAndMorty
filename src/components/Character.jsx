export const Character = (i) => {
  const { name, image } = i.info;

  return (
    <div className="text-center p-5">
      <h3>{name}</h3>
      <img src={image} alt={name} className="img-fluid rounded-pill" />
      <p>{i.info.origin.name}</p>
    </div>
  );
};
