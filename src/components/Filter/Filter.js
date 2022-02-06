import { useSelector, useDispatch } from "react-redux";
import { filterChange } from "../../redux/phonebook-actions";
import { selectorFilter } from "../../redux/phonebook-selectors";
import s from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectorFilter);

  return (
    <>
      <p className={s.nameFilter}>Find contacts by name</p>
      <input
        className={s.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={(e) => dispatch(filterChange(e.target.value))}
      />
    </>
  );
}
