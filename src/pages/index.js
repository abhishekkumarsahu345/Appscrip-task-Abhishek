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
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: { products },
    revalidate:60,
  };
}