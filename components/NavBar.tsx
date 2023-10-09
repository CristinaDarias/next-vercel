import Link from 'next/link'
import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'


const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map(({text, href}, index) => (
          <ActiveLink key={`menu-item-${index}`} text={text} href={href} />
        ))
      }
    </nav>
  )
}
