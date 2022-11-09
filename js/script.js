:root { font-size: 16px; }
main {
  width: 480px;
  margin: 0 auto;
  padding: 30px 30px 50px;
  box-shadow: 0 0 10px 0 lightgray;
}
input, select { margin: 0.5rem 1rem 0.5rem 0; }
input[type='number'] { width: 30px; }
button#submit, button#priority, button#remove {
  padding: 5px 10px;
  margin-top: 1rem;
  background-color: royalblue;
  color: white;
  border-style: none;
}
button#priority { background-color: olivedrab; }
button#remove { background-color: firebrick; }
table {
  margin-top: 2rem;
  border: solid 2px lightgray;
  border-collapse: collapse;
}
th, td {
  border: solid 1px lightgray;
  border-collapse: collapse;
}
th {
  background-color: beige;
  padding: 0 0.5rem 0;
}
th#todoLabel { width: 200px; }
th#dateLabel { width: 100px; }
td { text-align: center; }
td input[type='checkbox'] { margin: 0; }