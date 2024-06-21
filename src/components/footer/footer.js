import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = ()=>{
    return (
        <footer className="footer">
  <div className="footer__addr">
    <h1 style={{marginBottom:'0'}}>Toil Chamber of Mathematics</h1>
        <br></br>
        <br></br>
        <br></br>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +91 93363 39618<br/><br></br>
    
    <address>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> 2nd FLOOR, VINAYAK VRINDAVAN TOWER, Tashkent Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001
      
    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <Link to="#" >LinkedIn</Link>
        </li>

        <li>
          <Link to="#" >FaceBook</Link>
        </li>
            
        <li>
          <Link to="#" >Instagram</Link>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Courses</h2>
      
      <ul className="nav__ul nav__ul--extra">
        <li>
          <Link to="/cat/Cat" >CAT</Link>
        </li>
        
        <li>
          <Link to="/cat/ipmat" >IPMAT</Link>
        </li>
        
        <li>
          <Link to="/cat/clat" >CLAT</Link>
        </li>
        
        <li>
          <Link to="/cat/cuet" >CUET</Link>
        </li>
        
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
        <li>
          <Link to="#" >Privacy Policy</Link>
        </li>
        
        <li>
          <Link to="#" >Terms of Use</Link>
        </li>
        
        <li>
          <Link to="#" >About US</Link>
        </li>

        <li>
          <Link to="#" >Contact US</Link>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2024 TCM. All rights reserved.</p>
  </div>
        </footer>
    )
}