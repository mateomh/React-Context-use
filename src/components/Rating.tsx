import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface RatingProps {
  rating: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}

const Rating:React.FC<RatingProps> = ({ rating, onClick }) => {
  return(
    <>
      {
        [...Array(5)].map((_, i) => {
          return(
            <span
              key={i}
              onClick={() => onClick(i + 1)}
              style={{cursor: 'pointer'}}
            >
              { rating > i ? 
                (<AiFillStar fontSize='15px' />) : 
                (<AiOutlineStar fontSize='15px'/>)}
            </span>
          )
        })
      }
    </>
  );
}

export default Rating;