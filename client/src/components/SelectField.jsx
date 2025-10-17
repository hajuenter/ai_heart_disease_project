export default function SelectField({ label, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <select
        value={value}
        onChange={onChange}
        className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none
                   shadow-sm transition"
      >
        <option value="">Pilih {label}</option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
