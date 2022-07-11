import PropTypes from "prop-types";
const ReviewsPageItem = ({ items }) => {

    const elements = items.map(({ id, author, content }) => <li key={id}>
        <p>{author}</p>
        <p>{content}</p>
    </li>);

    return (<ul>
        {elements}
        </ul>)
}

ReviewsPageItem.defaultProps = {
  items: [],
};

ReviewsPageItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        })
    )
};

export default ReviewsPageItem;