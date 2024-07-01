import { Link } from "react-router-dom"
import "./footer.css"

export const Footer = ()=>{
    return (
        <footer className="footer">
  <div className="footer__addr">
    <h1 style={{marginBottom:'0'}}>TCM Education</h1>
        <br></br>
        <br></br>
        <br></br>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg> &nbsp;tcmeducationpvt21@gmail.com<br/><br/>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> +91 93363 39618<br/><br></br>
    
    <address>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg> <strong>Head Quarters:</strong> 2nd FLOOR, VINAYAK VRINDAVAN TOWER, Tashkent Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001
      <br/><br/>
      

    </address>
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Media</h2>

      <ul className="nav__ul">
        <li>
          <Link target="_blank" to="https://www.youtube.com/@TCMEducation">YouTube</Link>
        </li>

        <li>
          <Link target="_blank" to="https://www.facebook.com/TCMEducation" >FaceBook</Link>
        </li>
            
        <li>
          <Link target="_blank" to="https://www.instagram.com/tcm_education/" >Instagram</Link>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item">
      <h2 className="nav__title">Courses</h2>
      
      <ul className="nav__ul nav__ul">
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

    <li className="nav__item nav__item">
      <h2 className="nav__title">Useful Links</h2>
      
      <ul className="nav__ul nav__ul">
        <li>
          <Link to="/pyqs/cat" >Previous Year Papers</Link>
        </li>

        <li>
          <Link to="https://tcmedu.tcyonline.com/" >Test Panel 1</Link>
        </li>

        <li>
          <Link to="https://tcm.testfunda.com/  " >Test Panel 2</Link>
        </li>

        <li>
          <Link to="https://a1rankers.com/" >A1 Rankers</Link>
        </li>
        
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Legal</h2>
      
      <ul className="nav__ul">
      <li>
          <Link to="/directors" >About Directors</Link>
        </li>
        <li>
          <Link to="/privacy" >Privacy Policy</Link>
        </li>
        
        <li>
          <Link to="/tandc" >Terms of Use</Link>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2024 Toil Chamber of Mathamatics PVT LTD. All rights reserved.</p>
  </div>
  <div className="legal" style={{justifyContent:'center',gap:'7px'}}>
    <p style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'7px'}}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
      Designed & Devloped by <a href="tel:+91 9310473657" style={{textDecoration:'underline',color:'#fff'}} title="+91 9310473657"><strong>Satya Space </strong></a>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
</svg>
      </p>
  </div>
        </footer>
    )
}