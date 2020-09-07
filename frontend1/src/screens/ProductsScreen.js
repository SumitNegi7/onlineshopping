
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { saveProduct, listProducts, deleteProduct } from '../actions/productActions';

function ProductsScreen(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');

    const productList = useSelector(state => state.productList)
    const { loading, products, error } = productList
    const productSave = useSelector(state => state.productSave);

    const { loading: loadingSave, success: successSave, error: errorSave } = productSave;
    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = productDelete;
    const dispatch = useDispatch();
    // const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if (successSave) {
            setModalVisible(false)
        }
        dispatch(listProducts());
        return () => {
            //
        };
    }, [successSave, successDelete]);

    const openModal = (product) => {
        setModalVisible(true);
        setId(product._id);
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setImage1(product.image1);
        setImage2(product.image2);
        setBrand(product.brand);
        setDescription(product.description);
        setCategory(product.category);
        setCountInStock(product.countInStock);

    }
    const deleteHandler = (product) => {

        dispatch(deleteProduct(product._id));

    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({
            _id: id,
            name, price, image, image1, image2, brand, category,
            countInStock, description
        }));

    }
    return <div className="content content-margined">


        <div className="product-admin-header">

            <div className="create-prod">
                <button className="btn-create-product" onClick={() => openModal({})}> Create Products </button>
            </div></div>
        {modalVisible &&
            <div className="form-admin">
                <form onSubmit={submitHandler} >
                    <ul className="form-container-admin">
                        <li>
                            <h2>Create Products</h2>
                        </li>
                        {<li>
                            {loadingSave && <div>Loading...</div>}
                            {errorSave && <div>Error..</div>}
                        </li>}
                        <li>

                            <input placeholder="Name" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>

                        <li>

                            <input placeholder="Price" type="text" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)}>
                            </input>
                        </li>
                        <li>

                            <input placeholder="Image" type="text" name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}>
                            </input>
                        </li>
                        <li>

                            <input placeholder="Image" type="text" name="image" id="image" value={image1} onChange={(e) => setImage1(e.target.value)}>
                            </input>
                        </li>
                        <li>

                            <input placeholder="Image" type="text" name="image" id="image" value={image2} onChange={(e) => setImage2(e.target.value)}>
                            </input>
                        </li>
                        <li>

                            <input placeholder="Brand" type="text" name="brand" id="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
                            </input>
                        </li>
                        <li>

                            <input placeholder="Count In Stock" type="text" name="countinstock" id="countinstock" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}>
                            </input>
                        </li>

                        <li>

                            <input placeholder="Category" type="text" name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                            </input>
                        </li>

                        <li>
                            <label htmlFor="name">
                                Description<br />
                            </label>
                            <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}>
                            </textarea>
                        </li>




                        <li className="btn-admin">
                            <button type="submit" className="button primary">{id ? "Update" : "Create"}</button>

                            <button type="button" onClick={() => setModalVisible(false)} className="button secondary">Back</button>
                        </li>

                    </ul>
                </form>
            </div >
        }
        <h2 className="admin-header"> Products </h2>
        <div className="product-list">

            <table>
                <thead>
                    <tr className="tr">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (<tr key={product._id}>

                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.brand}</td>
                        <td>
                            <button onClick={() => openModal(product)}>Edit</button>
                            <button onClick={() => deleteHandler(product)}>Delete</button>

                        </td>
                    </tr>))}
                </tbody>
            </table>
        </div>

    </div>
}
export default ProductsScreen;