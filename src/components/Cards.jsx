const Cards = ({ cardDataName, cardDataNumber }) => {
  return (
    <div>
      <div className="bg-stone-300 p-4 text-xl rounded-lg text-center">
        {cardDataName && <h2>{cardDataNumber}</h2>}
        <h1>{cardDataName}</h1>
      </div>
    </div>
  );
};

export default Cards;
