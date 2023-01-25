import styles from '@/styles/Footer.module.css'
import { footer } from '@/constants'
import Link from 'next/link'
const Footer = () => {
  const { buttons } = footer
  const { twitter, facebook, youtube, instagram } = buttons
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        {/* social icons */}
        <div className={styles.socialButtons}>
          <div className={styles.button}>
            <Link className={twitter.icon} href={`/${twitter.link}`}></Link>
          </div>
          <div className={styles.button}>
            <Link className={facebook.icon} href={`/${facebook.link}`}></Link>
          </div>
          <div className={styles.button}>
            <Link className={youtube.icon} href={`/${youtube.link}`}></Link>
          </div>
          <div className={styles.button}>
            <Link className={instagram.icon} href={`/${instagram.link}`}></Link>
          </div>
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
  )
}

export default Footer