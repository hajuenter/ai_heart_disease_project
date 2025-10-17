export default function InputField({
  label,
  type = "number",
  value,
  onChange,
  placeholder = "",
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none
                   shadow-sm transition"
      />
    </div>
  );
}
