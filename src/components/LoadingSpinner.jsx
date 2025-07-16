// Komponenta za prikaz loading kružića za očitavanje
function LoadingSpinner() {
  return (
    <div className="w-6 h-6 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin inline-block mx-2 dark:border-gray-600 dark:border-t-blue-400" aria-label="Loading" role="status"/>
  );
}

export default LoadingSpinner;