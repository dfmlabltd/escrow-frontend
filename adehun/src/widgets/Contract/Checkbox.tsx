import { InputPropsWithTitle } from "./Input";

const CheckBox: React.FC<InputPropsWithTitle> = (
  props: InputPropsWithTitle
) => {
  return (
    <div className="flex relative py-2">
      <div className="flex items-center h-5">
        <input
          {...props}
          type="checkbox"
          className="w-3 h-3 text-secondary bg-gray-400 rounded border-gray-100"
        />
      </div>
      <div className="ml-2 text-sm">
        <p id="checkboxtext" className="text-adbase font-normal text-white">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default CheckBox;
