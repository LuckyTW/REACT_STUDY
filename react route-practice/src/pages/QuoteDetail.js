import React from 'react';
import { Fragment } from 'react';
import { useParams, Route } from 'react-router';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'lucky', text: 'Learning React is Fun!' },
  { id: 'q2', author: 'Minhee', text: 'Learning React is not Fun!' },
  { id: 'q3', author: 'BK', text: 'Wanna go Home!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
