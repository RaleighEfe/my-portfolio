import clsx from "clsx";

type CardsProps = {
  logo?: any;
  title?: string;
  text: string;
  link?: any;
  icon?: any;
  cardType: string;
};

const Cards = ({ logo, title, text, link, cardType, icon }: CardsProps) => {
  return (
    <>
      {(() => {
        switch (cardType) {
          case "project":
            return (
              <div className="grid w-3/5 h-2/4 justify-start rounded-md shadow-lg p-3">
                <div className="justify-center py-3 w-full h-20 place-self-center">
                  {logo}
                </div>
                <h3 className="font-bold text-2xl capitalize py-6">{title}</h3>
                <p className="text-base">{text}</p>
                <div className="flex gap-3 py-8">
                  <p className="font-md  text-lg capitalize">Visit</p>
                  <span>{icon}</span>
                </div>
              </div>
            );
          case "stack":
            return (
              <div className="flex gap-3 w-fit h-14 items-center shadow-lg rounded-md text-center p-3">
                <div>{icon}</div>
                <p className="text-lg text-black font-bold capitalize">
                  {text}
                </p>
              </div>
            );
        }
      })()}
    </>
  );
};

export default Cards;
