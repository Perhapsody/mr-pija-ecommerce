import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={product.thumbnail.url} alt={product.name} className="w-full h-64 object-cover rounded-t-2xl" />
      <CardContent className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-xl text-gray-700">
          {product.pricing.priceRange.start.gross.amount} {product.pricing.priceRange.start.gross.currency}
        </p>
        <Button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
          <ShoppingCart size={20} /> Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
