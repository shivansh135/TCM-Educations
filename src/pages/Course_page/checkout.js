import './OrderSummary.css';

export const OrderSummary = ({ studentName, courseDetails, totalPrice=23000, gstIncluded=5200 }) => {
    return (
      <div className="order-summary">
        <h1 style={{color:'#14a4f5'}}>Order Summary</h1>
        <div className="summary-item">
          <span className="label">Student Name:</span>
          <input className="value" style={{width:'90%',outline:'none',padding:'7px',border:'1px solid #00000022',borderRadius:'8px'}} value={studentName || "Prakhar Raj"}/>
        </div>
        <div className="summary-item">
          <span className="label">Course Details:</span>
          <span className="value">{courseDetails || "CAT 2024"}</span>
        </div>
        <div className="summary-item">
          <span className="label">Course Duration:</span>
          <span className="value">{courseDetails || "21 July 2024 - 12 Jan 2025"}</span>
        </div>
        <div className="summary-item">
          <span className="label">Total Price:</span>
          <span className="value">₹ {totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span className="label">GST Included:</span>
          <span className="value">₹ {gstIncluded.toFixed(2)}</span>
        </div>
        <button className="proceed-button">Proceed</button>
      </div>
    );
  };
  