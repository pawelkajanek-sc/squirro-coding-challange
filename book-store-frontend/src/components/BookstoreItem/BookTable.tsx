import {Book} from "../../models/Book";
import {ReactNode} from "react";
import styled from "@emotion/styled";

const Table = styled.table`
  border: solid darkgrey 1px;
  border-collapse: collapse;
  td {
    border: solid darkgrey 1px;
    width: 50%;
  }
  th {
    text-align: start;
  }
  td, th {
    padding: .2rem .5rem;
  }
`

export const BookTable = ({books}: { books?: Book[] }) => {
  return <Table>
    <thead>
      <tr>
        <th>Best-selling books</th>
      </tr>
    </thead>
    <tbody>
      {renderBookRows(books)}
    </tbody>
  </Table>
}

const renderBookRows = (books?: Book[]): ReactNode => {
  if (books) {
    if (books.length === 1)
      return (<tr>
        <td>{books[0].attributes.name}</td>
        <td>{books[0].relationships.author.data.fullName}</td>
      </tr>)
    const sortedBooks = books.sort((a, b) => b.attributes.copiesSold - a.attributes.copiesSold);
    return sortedBooks.slice(0, 2).map(book => (<tr>
      <td>{book.attributes.name}</td>
      <td>{book.relationships.author.data.fullName}</td>
    </tr>))
  } else {
    return (<tr>
      <td>No data available</td>
      <td></td>
    </tr>);
  }
}