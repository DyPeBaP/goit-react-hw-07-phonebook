import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

function ContactListItem({ name, phone }) {
  return (
    <>
      <p className={s.name}>Name: {name}</p>
      <p className={s.number}>Phone: {phone}</p>
    </>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
export default ContactListItem;
