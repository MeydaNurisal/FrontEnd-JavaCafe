import React, { useState, useEffect } from 'react';
import './Product.css';

const Product = ({ products, setProducts }) => {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        description: '',
        image: ''
    });
    const [editedProduct, setEditedProduct] = useState(null);

    useEffect(() => {
        // Mengambil daftar produk dari props saat komponen dimuat
        setProducts(products);
    }, [products, setProducts]);

    useEffect(() => {
        // Menyimpan daftar produk ke dalam props setiap kali ada perubahan pada daftar produk
        setProducts(products);
    }, [products, setProducts]);

    const toggleAddModal = () => {
        setShowAddModal(!showAddModal);
    };

    const toggleEditModal = (product) => {
        setEditedProduct(product);
        setShowEditModal(!showEditModal);
    };

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        if (type === 'file') {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProduct({
                    ...newProduct,
                    image: reader.result
                });
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        } else {
            setNewProduct({
                ...newProduct,
                [name]: value
            });
        }
    };

    const handleAddProduct = () => {
        const newProductId = products.length + 1; // Gunakan panjang array products untuk mendapatkan ID baru
        const newProductWithId = { ...newProduct, id: newProductId };
        setProducts([...products, newProductWithId]);
        toggleAddModal();
        // Reset state newProduct to clear the form after adding a product
        setNewProduct({
            name: '',
            price: '',
            description: '',
            image: ''
        });
    };


    const handleEditProduct = () => {
        const updatedProducts = products.map(product =>
            product.id === editedProduct.id ? { ...editedProduct } : product
        );
        setProducts(updatedProducts);
        toggleEditModal();
    };

    const handleDeleteProduct = (index) => {
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };


    return (
        <div className="product-page">
            <div className="header">
                <h1>Product</h1>
                <button onClick={toggleAddModal} className='add-product-button'>Tambah Product</button>
            </div>
            <div className="product-list">
                <h2>List Product</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <th>Nama</th>
                            <th>ID</th>
                            <th>Harga</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td><img className='product-image' src={product.image} alt={product.name} /></td>
                                <td>{product.name}</td>
                                <td>{product.id}</td>
                                <td>{product.price}</td>
                                <td className='button-container'>
                                    <div className='button-group'>
                                        <button onClick={() => toggleEditModal(product)} className='edit'>Edit</button>
                                        <button onClick={() => handleDeleteProduct(index)} className='delete'>Hapus</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {showAddModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleAddModal}>&times;</span>
                        <h2>Tambah Produk</h2>
                        <form>
                            <div className="form-group">
                                <label>Nama Kopi:</label>
                                <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Harga:</label>
                                <input type="text" name="price" value={newProduct.price} onChange={handleInputChange} />
                            </div>
                            <div className="form-group">
                                <label>Deskripsi:</label>
                                <textarea name="description" value={newProduct.description} onChange={handleInputChange}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Gambar:</label>
                                <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                            </div>
                            <div className="buttons">
                                <button type="button" className="cancel" onClick={toggleAddModal}>Batal</button>
                                <button type="button" className="add" onClick={handleAddProduct}>Tambah</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {showEditModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleEditModal}>&times;</span>
                        <h2>Edit Produk</h2>
                        <form>
                            <div className="form-group">
                                <label>Nama Kopi:</label>
                                <input type="text" name="name" value={editedProduct.name} onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Harga:</label>
                                <input type="text" name="price" value={editedProduct.price} onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Deskripsi:</label>
                                <textarea name="description" value={editedProduct.description} onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Gambar:</label>
                                <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                            </div>
                            <div className="buttons">
                                <button type="button" className="cancel" onClick={toggleEditModal}>Batal</button>
                                <button type="button" className="add" onClick={handleEditProduct}>Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
