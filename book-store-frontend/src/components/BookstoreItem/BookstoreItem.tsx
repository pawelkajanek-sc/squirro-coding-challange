import styled from "@emotion/styled";
import {RatingBar} from "./RatingBar";
import {BookTable} from "./BookTable";
import {CountryFlag} from "./CountryFlag";
import {Bookstore} from "../../models/Bookstore";

const BookStoreContainer = styled.div`
  border-radius: 16px;
  border: solid black 2px;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  margin: 1rem 0;
  max-width: 900px;
`

const StoreImage = styled.img`
  height: 7rem;
  width: 7rem;
  border-radius: 100%;
  margin-right: 1rem;
  object-fit: cover;
`

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: .5rem 0;
  column-gap: 1rem;
`

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 80% 1 0;
`

const BookstoreName = styled.h2`
  margin: .4rem 0;
`

export const BookstoreItem = ({store}: { store: Bookstore }) => {
  return <BookStoreContainer>
    <Row>
      <StoreImage src={store.attributes.storeImage} alt={`image of ${store.attributes.name}`}/>
      <Column>
        <Row>
          <BookstoreName>{store.attributes.name}</BookstoreName>
          <RatingBar rating={store.attributes.rating}/>
        </Row>
        <BookTable books={store.relationships.books?.data.map(book => book.book!)}/>
      </Column>
    </Row>
    <Row>
      <span>
        {formatDate(store.attributes.establishmentDate)}
        {" - "}
        <a href={store.attributes.website}>{store.attributes.website}</a>
      </span>
      <CountryFlag code={store.relationships.countries.data.code}/>
    </Row>
  </BookStoreContainer>
}

const formatDate = (date: string): string => `${date.substring(8,10)}.${date.substring(5,7)}.${date.substring(0,4)}`
