import React from 'react';
import { useQuery } from '@apollo/client';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS_QUERY } from '@/graphql/queries';

const Home = () => {
  const { loading, error, data } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products.edges;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800">Mr. Pija</h1>
        <p className="text-lg text-gray-600">The best Rubik's Cubes in town!</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(({ node: product }) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;