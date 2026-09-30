const ProductListing = ({ product }) => {
    return (
        <div className="product-review">
            <h2>Product Name: {product.productName}</h2>
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Inventory count: {product.inventoryCount}</p>
            <p>Supplier name: {product.supplier.name}</p>
            <p>Supplier contact email: {product.supplier.contactEmail}</p>
            <p>Supplier contact phone: {product.supplier.contactPhone}</p>
            <p>Supplier verified: {product.supplier.isVerified ? "Yes" : "No"}</p>
        </div>
    );
};

export default ProductListing