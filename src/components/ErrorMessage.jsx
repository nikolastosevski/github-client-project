function ErrorMessage({ message }) {
  return (
    <div
      style={{
        background: '#ffe6e6',
        color: '#cc0000',
        padding: '10px 15px',
        borderRadius: '6px',
        margin: '10px 0',
      }}
    >
      ⚠️ {message}
    </div>
  );
}

export default ErrorMessage;