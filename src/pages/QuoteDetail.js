import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h2> Quotes detail</h2>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
