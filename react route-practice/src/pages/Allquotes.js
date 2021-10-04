import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'lucky', text: 'Learning React is Fun!' },
  { id: 'q2', author: 'Minhee', text: 'Learning React is not Fun!' },
  { id: 'q3', author: 'BK', text: 'Wanna go Home!' },
];

const Allquotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};

export default Allquotes;
