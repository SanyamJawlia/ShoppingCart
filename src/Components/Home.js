import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch();

    const addToCartHandler = (options)=>{
        console.log(options);
        dispatch({type:"addToCart",payload:options})
        toast.success("Added to cart")
        dispatch({
            type:"calculatePrice",
          })
    }

    const ProductList = [
        {
            name:"Mac Book",
            price:"12000",
            imgsrc:"https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id:"oigbrviooirfvihfjoih567ouugh",
        },
        {
            name:"Black Shoes",
            price:"3000",
            imgsrc:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id:"oigbrviooiuvf67ouugh",
        },
        {
            name:"Blue Shirt",
            price:"1800",
            imgsrc:"https://images.pexels.com/photos/3751397/pexels-photo-3751397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id:"oigbroiuvrbnihfjoih567ouugh",
        },
    ]
  return (
    <div className="home">
        {
            ProductList.map((i)=>(
                <ProductCard key={i.id} name={i.name} imgsrc={i.imgsrc} price={i.price} id={i.id} handler={addToCartHandler} />
            ))
        }
    </div>
  )
}

const ProductCard = ({name,id,price,handler,imgsrc})=>(
    <div className="productCard">
        <img src={imgsrc} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
        <button onClick={()=>handler({name,price,id,imgsrc,quantity:1})}>Add to Cart</button>
    </div>
)

export default Home
