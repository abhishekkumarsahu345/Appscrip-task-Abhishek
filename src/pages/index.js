import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home({ products }) {
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState('recommended');
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return b.id - a.id;
    return 0;
  });

  return (
    <div>
      <Head>
        <title>Discover Our Products</title>
        <meta name="description" content="Browse our wide range of products" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Discover Our Products',
              description: 'Browse our wide range of products',
            }),
          }}
        />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.heading}>Discover Our Products</h1>
        <p className={styles.subheading}>
          Lorem ipsum dolor sit amet consectetur. Amet est placerat in ametaugue.
        </p>

        <div className={styles.toolbar}>
          <span className={styles.itemCount}>
            {products.length} ITEMS
          </span>
          <div className={styles.toolbarRight}>
            <button
              className={styles.filterToggle}
              onClick={() => setShowFilter(!showFilter)}
            >
              {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
            </button>
            <select
              className={styles.sortSelect}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recommended">RECOMMENDED</option>
              <option value="newest">NEWEST FIRST</option>
              <option value="price-low">PRICE: LOW TO HIGH</option>
              <option value="price-high">PRICE: HIGH TO LOW</option>
            </select>
          </div>
        </div>

        <div className={styles.contentArea}>
          {showFilter && <Sidebar />}
          <div className={styles.grid}>
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onWishlistToggle={toggleWishlist}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Failed');
    const products = await res.json();
    if (!products || products.length === 0) throw new Error('Empty');
    return { props: { products }, revalidate: 60 };
  } catch (error) {
    const products = [
      { id: 1, title: "Fjallraven Backpack", price: 109.95, category: "men's clothing", image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" },
      { id: 2, title: "Mens Casual T-Shirts", price: 22.3, category: "men's clothing", image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" },
      { id: 3, title: "Mens Cotton Jacket", price: 55.99, category: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
      { id: 4, title: "Mens Casual Slim Fit", price: 15.99, category: "men's clothing", image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" },
      { id: 5, title: "John Hardy Bracelet", price: 695, category: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg" },
      { id: 6, title: "Solid Gold Petite", price: 168, category: "jewelery", image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_FMwebp_QL65_.jpg" },
      { id: 7, title: "White Gold Plated Princess", price: 9.99, category: "jewelery", image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg" },
      { id: 8, title: "Pierced Owl Rose Gold", price: 10.99, category: "jewelery", image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_FMwebp_QL65_.jpg" },
      { id: 9, title: "WD 2TB Hard Drive", price: 64, category: "electronics", image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
      { id: 10, title: "SanDisk 1TB SSD", price: 109, category: "electronics", image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" },
      { id: 11, title: "Silicon Power SSD", price: 109, category: "electronics", image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg" },
      { id: 12, title: "WD 4TB Gaming Drive", price: 114, category: "electronics", image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" },
      { id: 13, title: "Acer Monitor 21.5", price: 599, category: "electronics", image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" },
      { id: 14, title: "Samsung Gaming Monitor", price: 999.99, category: "electronics", image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" },
      { id: 15, title: "BIYLACLESEN Snowboard Jacket", price: 56.99, category: "women's clothing", image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" },
      { id: 16, title: "Lock and Love Jacket", price: 29.95, category: "women's clothing", image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" },
      { id: 17, title: "Rain Jacket Women", price: 39.99, category: "women's clothing", image: "https://fakestoreapi.com/img/71HblAHs1xL._AC_UY879_-2.jpg" },
      { id: 18, title: "MBJ Women's Solid Shirt", price: 9.85, category: "women's clothing", image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" },
      { id: 19, title: "Opna Women's T-Shirt", price: 7.95, category: "women's clothing", image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" },
      { id: 20, title: "DANVOUY Womens T Shirt", price: 12.99, category: "women's clothing", image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" },
    ];
    return { props: { products }, revalidate: 60 };
  }
}