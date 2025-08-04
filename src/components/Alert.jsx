const Alert = ({ type, text }) => {
  return (
    <div className="max-w-md w-full">
      <div
        className={`
          flex items-center p-4 rounded-lg shadow-2xl backdrop-blur-sm border
          ${type === 'danger' 
            ? 'bg-red-900/90 border-red-500/50 text-red-100' 
            : 'bg-green-900/90 border-green-500/50 text-green-100'
          }
        `}
        role="alert"
      >
        <div className="flex items-center">
          <div
            className={`
              flex items-center justify-center w-8 h-8 rounded-full mr-3
              ${type === 'danger' ? 'bg-red-500' : 'bg-green-500'}
            `}
          >
            {type === 'danger' ? (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <div>
            <p className="text-sm font-medium">
              {type === 'danger' ? 'Error' : 'Success'}
            </p>
            <p className="text-sm opacity-90">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
