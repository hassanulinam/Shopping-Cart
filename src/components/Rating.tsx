import { AiFillStar, AiOutlineStar } from "react-icons/ai";

type TypeofRatingProps = {
  rating: number;
  onClickingStar?: (i: number) => void;
};

const Rating = ({ rating, onClickingStar }: TypeofRatingProps) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          onClick={() => onClickingStar?.(i)}
          style={{ cursor: "pointer" }}
        >
          {rating > i ? (
            <AiFillStar fontSize="20px" />
          ) : (
            <AiOutlineStar fontSize="20px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
