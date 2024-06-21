import { Link } from "react-router-dom"
import { Button } from "../../components/button/button"

export const News = ()=>{
    return(
        <>
        <div className='sticky-note'>
                <svg width="30" height="31" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4032 13.0786C12.7029 12.3107 12.6382 9.01473 12.6369 8.93157V6.72038C12.6369 4.59222 11.3365 2.76223 9.4885 1.98304C9.48453 0.88889 8.59339 0 7.49843 0C6.40345 0 5.51234 0.888943 5.50834 1.98298C3.66044 2.76217 2.35997 4.59216 2.35997 6.72032V8.93152C2.35876 9.01468 2.29403 12.3106 0.593662 13.0785C0.399962 13.166 0.293505 13.3769 0.338289 13.5847C0.383021 13.7925 0.566786 13.9409 0.779362 13.9409H5.08996C5.17832 14.427 5.40818 14.8792 5.75974 15.2455C6.22667 15.732 6.84416 15.9999 7.49835 15.9999C8.1526 15.9999 8.77009 15.732 9.23697 15.2455C9.58858 14.8792 9.81844 14.427 9.90675 13.9409H14.2173C14.4299 13.9409 14.6137 13.7925 14.6584 13.5847C14.7033 13.3769 14.5969 13.166 14.4032 13.0786ZM12.1634 11.4996C12.3421 12.0415 12.5952 12.5857 12.9541 13.0386H2.04271C2.40156 12.5858 2.65466 12.0416 2.8334 11.4996H12.1634ZM7.49843 0.902354C7.99373 0.902354 8.4125 1.23517 8.54353 1.68881C8.20596 1.6188 7.85642 1.58188 7.49843 1.58188C7.14044 1.58188 6.7909 1.61877 6.45333 1.68881C6.58439 1.23519 7.00316 0.902354 7.49843 0.902354ZM3.26232 8.93429V6.7203C3.26232 4.38453 5.16261 2.48424 7.49843 2.48424C9.83425 2.48424 11.7345 4.38453 11.7345 6.7203V8.93798C11.7351 9.00585 11.7457 9.71913 11.9255 10.5972H3.07129C3.25116 9.71829 3.26177 9.00375 3.26232 8.93429ZM7.49843 15.0977C6.80978 15.0977 6.20876 14.6011 6.01584 13.9409H8.98097C8.78806 14.6011 8.18714 15.0977 7.49843 15.0977Z" fill="white"/>
                <path d="M7.49897 3.11726C5.55779 3.11726 3.97852 4.69648 3.97852 6.63763C3.97852 6.88681 4.18053 7.08882 4.42971 7.08882C4.67888 7.08882 4.8809 6.88681 4.8809 6.63763C4.8809 5.19405 6.05536 4.01961 7.49899 4.01961C7.74817 4.01961 7.95018 3.8176 7.95018 3.56842C7.95016 3.31922 7.74814 3.11726 7.49897 3.11726Z" fill="white"/>
                </svg>
                <span>
                <strong>Leaders Batch - CAT 2024</strong> starting from 25 June, 2024. <Link to="/upcomming-batch" style={{textDecoration:'underline',color:'#ffffff'}}>Browse all batches</Link>

                </span>
                </div>
                <div className='home'>
            
            <Link to="/login" className='headd'>
                <div className='black-head'>
                <span className='blue-head'>TCM Education </span>making Headlines from past 20 Years!
                </div>
                <div className='para-one'>
                Discover how TCM Education is making headlines! Check out our media coverage to see our achievements, innovations, and success stories featured in top publications.
                </div>
                <Button/>
            </Link>
            <div className='home_two_img'>
                <img src={`/images/news.png`} style={{width:'90%',height:'auto'}} alt='frame'/>
            </div>
        </div>
        </>

    )
}