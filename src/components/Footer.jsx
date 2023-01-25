import styles from '@/styles/Footer.module.css'
import { footer } from '@/constants'
import Link from 'next/link'
const Footer = () => {
  const { buttons } = footer

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* social icons */}
          <div className={styles.socialButtons}>
            {
              buttons.map((item) => (
                <div key={item.id} className={styles.button}>
                  <Link className={item.icon} href={`/${item.link}`}></Link>
                </div>
              ))
            }
          </div>
          {/* list of links */}
          <div className={styles.links}>
            {
              footer.links.map((item) => (
                <div>
                  <Link key={item.id} href={item.link}>{item.title}</Link>
                </div>
              ))
            }
          </div>
          {/* copi right */}
          <div className={styles.copyRight}>
            <p>© 1997-2021 Netflix, Inc. i-062d573a0ee099242</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer