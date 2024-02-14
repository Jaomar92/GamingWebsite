import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchGenres } from "@/redux/store/slices/genresSlice";
import { RootState } from "@/redux/store/store";
import { fetchPlatforms } from "@/redux/store/slices/platformSlice";

const PlatformsMenu = [
  {
    id: 1,
    name: "PC",
  },
  {
    id: 2,
    name: "PlayStation4",
  },
  {
    id: 3,
    name: "Xbox One",
  },
  {
    id: 4,
    name: "Nintendo Switch",
  },
  {
    id: 5,
    name: "IOS",
  },
  {
    id: 6,
    name: "Android",
  },
];
const Menu = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPlatforms());
  }, [dispatch]);

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
              <li key={genre.id} className="cursor-pointer hover:text-gray-500">
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
