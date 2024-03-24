import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#ff751d"
        barColor="rgba(82, 85, 95, 70%)"
      />
    </div>
  );
};