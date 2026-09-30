//hi
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const addProductPage = () => {
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [inventoryCount, setInventoryCount] = useState("");
    
    const [supplierName, setSupplierName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [isVerified, setIsVerified] = useState("")

    const navigate = useNavigate();
}


const addProduct = async (newProduct) => {
    try {
        const res = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(newProduct)
        });

        if (!res.ok) {
            throw new Error("Failed to add a product");
        }
    } catch (error) {
        toast.error("An error happened while adding product");
        return false;
    }
    return true;




    const submitForm = (e) => {
        e.preventDefault();

        const newProduct = {
            productName,
            category,
            description,
            price,
            inventoryCount,
            supplier: {
                name: supplierName,
                contactEmail,
                contactPhone,
                isVerified,
            }
        }

        addProduct(newProduct);
        toast.success("Product has been added");
        return navigate("/products");
    };

    return (
        <section className="box1">
            <div className="box2">
                <form onSubmit={submitForm}>
                    <h2 className="addProduct">Add new product</h2>

                    <div className="box3">
                        <label htmlFor="productName" className="productName">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            className="productNameInput"
                            placeholder="Product name"
                            required
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>

                    <div className="box4">
                        <label htmlFor="productCategory" className="productCategory">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            className="productCategory"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="Electronics">Electronics</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Games">Games</option>
                            <option value="Food">Food</option>
                            <option value="Vehicles">Vehicles</option>
                            <option value="SomethingElse">Something else</option>
                        </select>
                    </div>

                    <div className="box5">
                        <label htmlFor="description" className="description">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            className="descriptionInput"
                            placeholder="This product is so cool..."
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="box5">
                        <label htmlFor="price" className="price">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="priceInput"
                            placeholder="0.0"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className="box5">
                        <label htmlFor="inventoryCount" className="inventoryCount">
                            P
                        </label>
                        <input
                            type="text"
                            id="inventoryCount"
                            name="inventoryCount"
                            className="inventoryCountInput"
                            placeholder="0"
                            required
                            value={inventoryCount}
                            onChange={(e) => setInventoryCount(e.target.value)}
                        />
                    </div>

                    <div className="box5">
                        <label htmlFor="supplierName" className="supplierName">
                            Supplier
                        </label>
                        <input
                            type="text"
                            id="supplierName"
                            name="supplierName"
                            className="supplierNameInput"
                            placeholder="supplierName"
                            required
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                        />
                    </div>

                    <div className="box5">
                        <label htmlFor="contactEmail" className="contactEmail">
                            contactEmail
                        </label>
                        <input
                            type="text"
                            id="contactEmail"
                            name="contactEmail"
                            className="contactEmailInput"
                            placeholder="contactEmail"
                            required
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                        />
                    </div>

                    <div className="box5">
                        <label htmlFor="contactPhone" className="contactPhone">
                            contactPhone
                        </label>
                        <input
                            type="text"
                            id="contactPhone"
                            name="contactPhone"
                            className="contactPhoneInput"
                            placeholder="contactPhone"
                            required
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                        />
                    </div>


                    <div>
                        <label htmlFor="isVerified" className="isVerified">
                            Verified
                        </label>
                        <input
                            id="isVerified"
                            type="checkbox"
                            checked={isVerified}
                            onChange={(e) => setIsVerified(e.target.checked)}
                        />
                    </div>

                    <button className="buttonAddProduct"
                        type="submit">
                        Add new product
                    </button>
                </form>
            </div>
        </section>
    );
};


export default addProductPage;




