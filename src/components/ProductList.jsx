import React from 'react';

const ProductList = () => {
    const products = [
        {
            id: 1,
            Image: "https://tse4.mm.bing.net/th?id=OIP.3ZOHbzrmM6gQBb8tbHaU9QHaGS&pid=Api&P=0&h=220",
            title: 'Product 1'
        },
        {
            id: 2,
            Image: "https://tse3.mm.bing.net/th?id=OIP.Pwk7-Y4ditgSVjOR1hdePAHaHa&pid=Api&P=0&h=220",
            title: 'Product 2'
        },
        {
            id: 3,
            Image: "https://tse1.mm.bing.net/th?id=OIP.hGm7B7ka6aFju8SR1fpUswHaKC&pid=Api&P=0&h=220",
            title: 'Product 3'
        },
        {
            id: 4,
            Image: "https://tse4.mm.bing.net/th?id=OIP.CeehbJDwU2tV5PUNxah-igHaHa&pid=Api&P=0&h=220",
            title: 'Product 4'
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">Product List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={product.Image} alt={product.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{product.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
