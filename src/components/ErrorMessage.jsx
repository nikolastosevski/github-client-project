function ErrorMessage({ message }) {
  return (
    <div
      role="alert"
      className="
        bg-red-100 text-red-800 border border-red-300 rounded p-4 mt-4
        dark:bg-red-900 dark:text-red-300 dark:border-red-700
        flex items-center gap-2 shadow-md
      "
    >
      <svg
        className="w-5 h-5 flex-shrink-0 text-red-600 dark:text-red-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 5.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" />
      </svg>
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}

export default ErrorMessage;