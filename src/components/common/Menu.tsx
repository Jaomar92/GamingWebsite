import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchGenres } from "@/redux/store/slices/genresSlice";
import { RootState } from "@/redux/store/store";
import { fetchPlatforms } from "@/redux/store/slices/platformSlice";
import { fetchGames } from "@/redux/store/slices/gameSlice";

const Menu = () => {
  const dispatch = useAppDispatch();
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);

  useEffect(() => {
    // Check if selectedGenre is not null before dispatching
    if (selectedGenre) {
      dispatch(fetchGames({ genre: selectedGenre }));
    }
  }, [dispatch, selectedGenre]);

  const genreState = useAppSelector((state: RootState) => state.genre.data);
  const Genres = genreState?.results;

  const platformState = useAppSelector(
    (state: RootState) => state.platform.data
  );
  const PlatForms = platformState?.results;
  return (
    <>
      <div>
        <h5 className="font-mono text-xl">Genres</h5>
        <div className="pb-3">
          <ul>
            {Genres?.map((genre) => (
              <li
                key={genre.id}
                className="cursor-pointer hover:text-gray-500"
                onClick={() => setSelectedGenre(genre.slug)}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
        <h5 className="font-mono text-xl">Platforms</h5>
        <div className="pb-3">
          <ul>
            {PlatForms?.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-gray-500">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
