import './loadingspinner.css'

const LoadingSpinner = () => {
  return (
    <div className='loading-container'>
      <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </div>
  )
}

export default LoadingSpinner