import { useParams } from "react-router";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h2> Quotes detail</h2>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
