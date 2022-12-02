function Togglebutton(props) {
  return (
    <div className="flex relative py-2">
      <div className="flex items-center h-5">
        <label class="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"></div>
          <span class="ml-3 text-sm font-medium text-white">
            {props.title}
          </span>
        </label>
      </div>
    </div>
  );
}

export default Togglebutton;
