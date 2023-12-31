import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 3px solid purple;
  width: 360px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;

  & th,
  & td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid purple;
  }

  & th {
    background-color: plum;
    font-weight: bold;
  }

  & td {
    background-color: white;
  }

  & tr:nth-of-type(even) {
    background-color: lightblue;
  }

  & tr:last-of-type td {
    border-bottom: none;
  }

  & td:hover,
  & td:hover ~ td {
    background-color: lightyellow;
  }
`;
