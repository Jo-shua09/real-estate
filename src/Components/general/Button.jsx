import PropTypes from "prop-types";
/**
 * Button component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
const Button = ({ name }) => {
  return (
    <button className="bg-purple-600 hover:scale-95 rounded-xl text-2xl font-semibold capitalize flex items-center justify-center py-5 px-7 hover:bg-purple-900">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
/**
 * Button2 component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
const Button2 = ({ name }) => {
  return (
    <button className="items-center justify-center capitalize rounded-xl py-5 px-7 bg-black/20 border border-white/5 hover:bg-purple-600 text-2xl font-semibold">
      {name}
    </button>
  );
};

Button2.propTypes = {
  name: PropTypes.string.isRequired,
};
/**
 * Button3 component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
const Button3 = ({ name }) => {
  return (
    <button className="sm:text-2xl w-max h-[4.2rem] font-Rubik text-[1.15rem] bg-gray-900 text-white uppercase py-4 px-14 rounded-lg font-semibold">
      {name}
    </button>
  );
};

Button3.propTypes = {
  name: PropTypes.string.isRequired,
};
export { Button, Button2, Button3 };
