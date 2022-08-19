import {BookstoreItem} from "./BookstoreItem/BookstoreItem";
import styled from "@emotion/styled";
import {ReactNode, useEffect, useState} from "react";
import {getBookstores} from "../services/bookstoreApi";
import {Bookstore} from "../models/Bookstore";

const ListContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const renderBookstores = (bookstores: Bookstore[]): ReactNode => {
  const list = bookstores.map((bookstore, index) => <BookstoreItem store={bookstore} key={index}/>)
  return <>{list}</>
}

export const BookstoreList = () => {
  const [bookstores, setBookstores] = useState<Bookstore[]>([])
  useEffect(() => {
    getBookstores().then(data => setBookstores(data))
  }, [])
  console.log(bookstores)
  return <ListContainer>
    {renderBookstores(bookstores)}
  </ListContainer>
}