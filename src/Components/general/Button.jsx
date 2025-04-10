import { Link } from "react-router-dom";
/**
 * Button component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
const Button = ({ name, linkPath }) => {
  return (
    <Link to={linkPath}>
      <button className="bg-purple-600 hover:scale-95 rounded-xl text-2xl font-semibold capitalize flex items-center justify-center py-5 px-7 hover:bg-purple-900>">
        {name}
      </button>
    </Link>
  );
};

/**
 * Button2 component that displays a button with a name.
 * @param {string} name - The text to display on the button.
 */
const Button2 = ({ name, linkPath }) => {
  return (
    <Link to={linkPath}>
      <button className="items-center justify-center capitalize rounded-xl py-5 px-7 bg-white/5 border-2 border-white/5 hover:bg-purple-600 text-2xl font-semibold">
        {name}
      </button>
    </Link>
  );
};
export { Button, Button2 };
