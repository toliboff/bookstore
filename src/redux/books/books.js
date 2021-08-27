const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const initialState = [];
const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
let appId = '';

const createNewApp = async () => {
  if (!localStorage.getItem('bookstoreID')) {
    const register = await fetch(`${baseAPI}/apps/`, { method: 'POST', body: {}, headers: { 'Content-type': 'application/json;' } });
    const id = await register.text();
    localStorage.setItem('bookstoreID', id);
  }
  appId = localStorage.getItem('bookstoreID');
};

createNewApp();

export const getAllBooks = async () => {
  const books = await fetch(`${baseAPI}/apps/${appId}/books`);
  const list = await books.json();
  return list;
};

export const addBook = (payload) => async (dispatch) => {
  await fetch(`${baseAPI}/apps/${appId}/books`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.category,
    }),
  });

  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => async (dispatch) => {
  await fetch(`${baseAPI}/apps/${appId}/books/${String(payload)}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({
      item_id: payload,
    }),
  });

  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};

export const fetchBook = () => async (dispatch) => {
  const books = await fetch(`${baseAPI}/apps/${appId}/books`);
  const booksObj = await books.json();
  const list = Object.keys(booksObj);
  console.log('List of books:', list);
  const fetchedBooks = [];

  list.map((book) => fetchedBooks.push({
    id: book,
    title: booksObj[book][0].title,
    category: booksObj[book][0].category,
    author: 'SomeOne',
    progress: 0,
    currentChapter: 'Introduction',
  }));

  dispatch({
    type: FETCH_BOOKS,
    payload: fetchedBooks,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS: return [...action.payload];
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
