import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} || Inventory Car </title>
    </Helmet>
  );
};
export default PageTitle;
