import React, { useState } from 'react';
import './pricingCards.css';
import { Link } from 'react-router-dom';

const Pricing = ({title, discription, list, price, batchInfo,}) => {
  const [blue,setBlue] = useState(false);
  
  if(blue){
    return(
      <div onMouseLeave={ ()=> setBlue(false)} className="card" style={{backgroundColor:'#14A4F5',transform:`scale(${blue?1.1:1})`}}>
        <div className="card-header">
          <img className='icon' src = "/images/circle_two.png"/>
          <h1 style={{color:'white'}}>{title || `TCM'S Online Holistic Batch - CAT 2025`}</h1>
        </div>
        <div className="card-body">
          <h2 style={{color:'white'}}>{discription || `Live Online CAT 2024 Weekday Batch`}</h2>
          <ul>
            {
              list?.map((i)=>{
                return <li style={{color:'white',filter:'brightness(100)'}}> {i} </li>
              })
            }
            {!list && <><li style={{color:'white',filter:'brightness(100)'}}>120+ Interactive Classes</li>
            <li style={{color:'white',filter:'brightness(100)'}}>150+ Interactive Classes</li>
            <li style={{color:'white',filter:'brightness(100)'}}>100+ Pre recorded classes on QUANT, VARC & DILR</li>
            <li style={{color:'white',filter:'brightness(100)'}}>and many more</li></>}
          </ul>
          <h3 style={{color:'white'}}>{price || `Rs. 52,000`} (incl GST)</h3>
          <Link to="/checkout" className="buy-now" style={{color:'#007bff',backgroundColor:'white'}}>Buy Now</Link>
          <Link className="view-more" style={{color:'white'}}>View more</Link>
          <div className="batch-info">
            <img src='/images/bell.svg'/>
            <p>{batchInfo || `New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`}</p>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className="card"
    onMouseEnter={() => setBlue(true)}
    >
      <div className="card-header">
        <img className='icon' src = "/images/circle_two.png"/>
        <h1>{title || `TCM'S Online Holistic Batch - CAT 2025`}</h1>
      </div>
      <div className="card-body">
        <h2>{discription || `Live Online CAT 2024 Weekday Batch`}</h2>
        <ul>
          {
            list?.map((i)=>{
              return <li> {i} </li>
            })
          }
          {!list && <><li>120+ Interactive Classes</li>
          <li>150+ Interactive Classes</li>
          <li>100+ Pre recorded classes on QUANT, VARC & DILR</li>
          <li>and many more</li></>}
        </ul>
        <h3>{price || `Rs. 52,000`} (incl GST)</h3>
        <Link to="/checkout" className="buy-now">Buy Now</Link>
        <Link to="/planning/Cat" className="view-more">View more</Link>
        <div className="batch-info">
          <img src='/images/bell.svg'/>
          <p>{batchInfo || `New batch starts 10th April 2024 Class Timing 8:30PM to 10:30PM`}</p>
        </div>
      </div>
    </div>
  )
}

const PricingCards = ({data}) => {
  console.log(data)
  return (
    
    <div className="pricing">
      {data?.map((card,i)=>{
        return <Pricing key={i} {...card} />
      })}
    <div style={{width:'50px',flexShrink:'0'}}></div>

    </div>
  );
};

export default PricingCards;
