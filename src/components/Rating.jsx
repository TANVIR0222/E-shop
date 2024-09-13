import 'remixicon/fonts/remixicon.css'
const Rating = ({rating}) => {    
    const starts = [];
    for (let i = 1; i <= 5 ; i++) {
        starts.push(
            <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`} ></span>
        )
        
    }
    return (
        <div className="product__rating">
            {starts}
            <span>< i className="ri-star-line"></i> </span>

        </div>
    );
};

export default Rating;