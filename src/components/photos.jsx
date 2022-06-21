import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg"
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"

function Photos(params) {
    return (
        <div className="container-imagesProduct-photos">
            <div className="show-product"><img src={product1} alt="" /></div>
            <ul className="show-products">
              <li className="show-products-select"><span><img src={thumbnail1} alt="" /></span></li>
              <li className="show-products-select"><span><img src={thumbnail2} alt="" /></span></li>
              <li className="show-products-select"><span><img src={thumbnail3} alt="" /></span></li>
              <li className="show-products-select"><span><img src={thumbnail4} alt="" /></span></li>
            </ul>
        </div>
    )
}

export default Photos;