import React from 'react';
import { format } from 'date-fns';


const Card = ({ productName, productImage, description, price, category, ratings, brandName, creationDate }) => {


    return (
        <>
          <section>
          <div className="card bg-base-100 w-72 shadow-xl border border-slate-400">
  <figure>
    <img
      src={productImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {productName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h4>${price}</h4>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{brandName}</div>
    </div>
    <div>
        <p>{ratings}⭐</p>
        <p>{format(new Date(creationDate), "MMMM do, yyyy h:mm:ss a")}</p>
    </div>
  </div>
</div>
          </section>  
        </>
    );
};

export default Card;