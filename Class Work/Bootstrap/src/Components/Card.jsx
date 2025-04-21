// import React from 'react'

function Card() {
  const cards = [
    {
      id: "1",
      title: "Card Title 1",
      subTitle: "Card Sub Title 1",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "2",
      title: "Card Title 2",
      subTitle: "Card Sub Title 2",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "3",
      title: "Card Title 3",
      subTitle: "Card Sub Title 3",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "4",
      title: "Card Title 4",
      subTitle: "Card Sub Title 4",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "5",
      title: "Card Title 5",
      subTitle: "Card Sub Title 5",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      id: "6",
      title: "Card Title 6",
      subTitle: "Card Sub Title 6",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  const list = cards.map((card) => (
    <div
      key={card.id}
      className="card d-inline-flex m-3 p-5"
      style={{ width: "31%" }}
    >
      <div className="card-body">
        <h2 className="card-title">{card.title}</h2>
        <h3 className="card-subtitle mb-2 text-body-secondary">
          {card.subTitle}
        </h3>
        <p className="card-text">{card.desc}</p>
      </div>
    </div>
  ));
  return (
    <>
      <div>{list}</div>
    </>
  );
}

export default Card;
