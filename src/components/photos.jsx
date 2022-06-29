import React, { useState } from 'react';

import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg"
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg"
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg"
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"

function Photos(params) {

    let arrayPhotos = [product1, product2, product3, product4];
    let arrayThumbnail = [thumbnail1, thumbnail2, thumbnail3, thumbnail4]
    
    const [showPhoto, setShowPhoto] = useState(arrayPhotos[0])
    const [isActive, setIsActive] = useState(0)

    function clickShow(e) {
        let idPhoto = Number(e.currentTarget.dataset.id);
        console.log(isActive)
        switch (idPhoto) {
            case 0:
                setShowPhoto(arrayPhotos[0])
                setIsActive(idPhoto)
                break;
            case 1:
                setShowPhoto(arrayPhotos[1])
                setIsActive(idPhoto)
                break;
            case 2:
                setShowPhoto(arrayPhotos[2])
                setIsActive(idPhoto)
                break;
            case 3:
                setShowPhoto(arrayPhotos[3])
                setIsActive(idPhoto)
                break;
            default:
                setShowPhoto(arrayPhotos[0])
                setIsActive(idPhoto)
                break;
        }
    }

    return (
        <div className="container-imagesProduct-photos">
            <div className="show-product"><img src={showPhoto} alt="" /></div>
            <ul className="show-products">
              {
                arrayThumbnail.map( (thumb, i) => 
                    <li className={`show-products-select ${isActive === i ? "active" : ""}`} key={i} data-id={i} onClick={clickShow}>
                        <span><img src={thumb} alt={"thumbnail"+i+1} /></span>
                    </li> )
              }
            </ul>
        </div>
    )
}

export default Photos;