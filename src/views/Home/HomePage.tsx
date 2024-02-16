import { Button } from "@/components/ui/button";
import { useAppSelector, useAppDispatch } from "@/hooks/hooks";
import { fetchGames } from "@/redux/store/slices/gameSlice";
import { useEffect, useState } from "react";

import GameCard from "./components/GameCard";
import { RootState } from "@/redux/store/store";

const HomePage = () => {
  const gamesState = useAppSelector((state: RootState) => state.games);
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGames({ page: currentPage }));
  }, [dispatch, currentPage]);

  // Adjusted: Corrected variable name and access based on your state structure
  const games = gamesState.games?.results;

  // Handle navigation
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  // Loading and error handling
  if (gamesState.status === "loading") {
    return <div>Loading...</div>;
  }

  if (gamesState.status === "failed") {
    return <div>Error loading games.</div>;
  }

  return (
    <div>
      <h2 className="py-3 font-mono text-2xl">Games List</h2>
      <div className="grid grid-cols-3 gap-5">
        {games && games.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.id}
              name={game.name}
              image={game.background_image}
              rating={game.rating}
            />
          ))
        ) : (
          <div>No games found.</div>
        )}
      </div>
      <div className="py-3">
        <Button onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};

export default HomePage;
