import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const AllArtTableRow = ({ art, index }) => {
  const { _id, title, category, price, rating, posted_by_email, stock_status } =
    art || {};
  return (
    <tr className="dark:text-white ">
      <th className="text-[#5FA4E6]">{index + 1}</th>
      <td className="capitalize">{title}</td>
      <td className="capitalize">{category}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td className="capitalize">{stock_status}</td>
      <td>{posted_by_email}</td>
      <td>
        <Link
          to={`/art-details/${_id}`}
          className="flex w-28 items-center justify-center gap-1 bg-[#266daf] px-2 py-1 text-white dark:bg-[#417763]"
        >
          <p>View Details</p>
          <FaArrowAltCircleRight />
        </Link>
      </td>
    </tr>
  );
};

AllArtTableRow.propTypes = {
  art: PropTypes.object,
  index: PropTypes.number,
};

export default AllArtTableRow;
