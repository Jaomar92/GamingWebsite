import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/hooks";
import { fetchGames } from "@/redux/store/slices/gameSlice";
import { useEffect } from "react";

import { useDispatch } from "react-redux";

const HomePage = () => {
  const games = useAppSelector((state) => state.games.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  console.log(games);
  return (
    <div>
      Game List
      <div className="grid grid-cols-3 gap-5">
        {games?.results.map((game) => {
          return (
            <div
              style={{
                backgroundImage: `url("${game.background_image}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
              className="h-[200px]"
            >
              <div>{game.name}</div>
            </div>
          );
        })}
      </div>
      <div className="py-3">
        <Button
          onClick={() => {
            games?.next;
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
