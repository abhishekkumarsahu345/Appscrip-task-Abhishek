import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function ProductCard({ product, isWishlisted, onWishlistToggle }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className={styles.productImage}
        />
        <button
          className={styles.wishlistBtn}
          onClick={() => onWishlistToggle(product.id)}
          aria-label="Add to wishlist"
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <p className={styles.signIn}>
          <span className={styles.signInLink}>Sign in</span> or{' '}
          <span className={styles.signInLink}>Create an account</span> to see pricing
        </p>
      </div>
    </div>
  );
}