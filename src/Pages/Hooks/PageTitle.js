import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || Cars Inventory</title>
    </Helmet>
  );
};
export default PageTitle;
