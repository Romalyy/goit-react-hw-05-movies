import PropTypes from "prop-types";
import img from '../../../images/img.png';
const CastPageItem = ({ items }) => {

    const elements = items.map(({ id, name, profile_path, character }) => {

        const profileImg = profile_path
      ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${profile_path}`
      : img;

    return (
      <li key={id} >
        <img
          src={profileImg}
          alt={name}
          width="200"
          height="300"
        />
        <p >{name}</p>
        <p>{character}</p>
      </li>
    );
  });
    
    return (
        <ul>
            {elements}
        </ul>)
}

CastPageItem.defaultProps = {
  items: [],
};

CastPageItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            profile_path: PropTypes.string.isRequired,
            character: PropTypes.string.isRequired,
        })
    )
};

export default CastPageItem;