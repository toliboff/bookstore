const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
// const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const initialState = [];
const baseAPI = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
let appId = '';

const createNewApp = async () => {
  if (!localStorage.getItem('bookstoreID')) {
    const register = await fetch(`${baseAPI}/apps/`, { method: 'POST', body: {}, headers: { 'Content-type': 'application/json;' } });
    const id = await register.text();
    localStorage.setItem('bookstoreID', id);
    console.log('no');
  }
  appId = localStorage.getItem('bookstoreID');
};

createNewApp();

// const getAllBooks = async () => {
//   const books = await fetch(`${baseAPI}/apps/${appId}/books`);
//   const list = await books.json();
//   console.log(list);
// };

// getAllBooks();

export const addBook = (payload) => async (dispatch) => {
  const response = await fetch(`${baseAPI}/apps/${appId}/books`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.category,
    }),
  });

  const res = await response.text();
  console.log(res);

  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// export const fetchBooks = () => ({
//   type: FETCH_BOOKS,
//   payload,
// });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_BOOKS: return [...state, action.payload];
    case ADD_BOOK: return [...state, action.payload];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
