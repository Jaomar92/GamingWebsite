import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const GameCard = ({ name, image, rating }) => {
  return (
    <div className="h-fit cursor-pointer">
      <Card className="h-full rounded-md">
        <div
          className="h-[200px] rounded-tl-md rounded-tr-md shadow-md"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="bg-black/80 py-2 flex flex-col justify-evenly items-center rounded-bl-md rounded-br-md">
          <CardTitle className="text-white text-center text-lg">
            {name}
          </CardTitle>
          <CardDescription className="text-yellow-300 font-bold">
            {rating}
          </CardDescription>
        </div>
      </Card>
    </div>
  );
};

export default GameCard;
