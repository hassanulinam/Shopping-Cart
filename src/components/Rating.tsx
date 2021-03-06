import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type TypeofRatingProps = {
  rating: number;
  onClickingStar?: (i: number) => void;
  fontSize: string;
};

const Rating = ({ rating, onClickingStar, fontSize }: TypeofRatingProps) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => onClickingStar?.(i)}
          style={{ cursor: "pointer" }}
        >
          {rating > i ? (
            <AiFillStar fontSize={fontSize} />
          ) : (
            <AiOutlineStar fontSize={fontSize} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
