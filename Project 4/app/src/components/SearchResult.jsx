import styled from "styled-components"
import { BASE_URL, Button } from "../App";

const SearchResult = ({data}) => {
  return (
    <FoodCardContainer>
        <FoodCards>
            {
                data?.map(({name,image,text,price})=>
                <FoodCard key={name}>
                    <div className="food_image">
                        <img src={BASE_URL+image} alt="" />
                    </div>
                    <div className="food_info">
                        <div>
                            <h3>{name}</h3>
                            <p>{text}</p>
                        </div>

                    </div>
                    <Button>${price.toFixed(2)}</Button>
                </FoodCard>)
            }
        </FoodCards>
      </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer=styled.section`
background-image: url("/bg.png");
background-size:cover;
height: calc(100vh - 220px );
`;
const FoodCards =styled.div``;

const FoodCard=styled.div``;