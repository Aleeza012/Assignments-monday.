import Image from 'next/image';
import { formatPrice } from './utils/helpers';

const Product = () => {
  const product = {
    id: 1,
    name: "Sample Product",
    price: 7.99 ,
    
    description: "This is a great product that you will love! Customize it with your name, enjoy home delivery straight to your doorstep. A perfect choice for anyone looking for quality and style! This is a great product that you will love!",
    
    imageUrl: "/picture.jpeg", 
  };

  return (
    <main className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h1>
      <Image 
        src={product.imageUrl} 
        alt={product.name} 
        width={500} 
        height={300} 
        className="rounded-lg shadow-lg mb-4" 
      />
      <p className="text-gray-600 mb-4 text-center">{product.description}</p>
      <h2 className='text-blue-800 mb-5 text-center'><b>CONTACT US: 03198136003</b></h2>
      <h2 className='text-blue-800 mb-5 text-center'><b>ON INSTAGRAM: Xyz account</b></h2>
      <h2 className="text-2xl font-semibold text-green-600 mb-4">{formatPrice(product.price)}</h2>
 <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
        Add to Cart
      </button>
      <p className="mt-4 text-sm text-gray-500">Hurry up, limited stock available!</p>
    </main>
  );
};

export default Product;


