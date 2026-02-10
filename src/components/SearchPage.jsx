import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { allProducts } from "../datas/products";
import { Link } from "react-router-dom";

export default function SearchPage() {
  const { query } = useContext(SearchContext);

  const filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Search Results</h2>
      <div className="flex flex-wrap gap-10 ml-16">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block"
            >
              <div className="w-64 h-[400px] border rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden relative">
                {/* Product ka Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />

                {/* Information */}
                <div className="p-3">
                  {/* Brand name */}
                  <p className="text-sm text-gray-500 mb-1">Gordon & Bros</p>

                  {/* product Name */}
                  <h3 className="text-md font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  {/* product Rating */}
                  <div className="flex items-center text-yellow-500 text-sm mt-1">
                    ⭐⭐⭐⭐☆
                  </div>

                  {/* Price */}
                  <div className="mt-2">
                    <span className="text-lg font-bold text-green-600">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through ml-2">
                      ₹{product.price + 200}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
