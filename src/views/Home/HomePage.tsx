import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/hooks";
import { decrement, increment } from "@/redux/utils/CounterSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        Testing out the Counter to see if the Store is configured correctly
      </div>
      <div className="my-3 flex flex-col gap-2 items-center justify-center">
        <div>Count: {count}</div>
        <div className="flex items-center gap-3">
          <div>
            <Button
              onClick={() => dispatch(decrement())}
              disabled={count === 0}
            >
              -
            </Button>
          </div>
          <div>
            <Button
              disabled={count === 10}
              onClick={() => dispatch(increment())}
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
