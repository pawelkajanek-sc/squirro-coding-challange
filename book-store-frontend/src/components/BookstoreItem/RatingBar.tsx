import styled from "@emotion/styled";
import {ReactNode} from "react";

const Star = styled.div<{full?: boolean}>`
  height: 1.2rem;
  width: 1.2rem;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background-color: ${props => props.full ? "gold" : "white"};
`
const RatingBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`

const renderStars = (rating: number):ReactNode => {
  const stars = [];
  for (let i = 5; i > 0; i--) {
    stars.push(i > rating ? <Star key={i} /> : <Star key={i} full /> )
  }
  return <>{stars}</>
}

export const RatingBar = ({rating}: { rating: number }) => {
  return <RatingBarContainer>
    {renderStars(rating)}
  </RatingBarContainer>
}
