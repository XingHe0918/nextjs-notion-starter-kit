import * as React from 'react'

// import { FaEnvelopeOpenText } from '@react-icons/all-files/fa/FaEnvelopeOpenText'
// import { FaGithub } from '@react-icons/all-files/fa/FaGithub'
// import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin'
// import { FaMastodon } from '@react-icons/all-files/fa/FaMastodon'
// import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
// import { FaYoutube } from '@react-icons/all-files/fa/FaYoutube'
// import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const currentYear = new Date().getFullYear()

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright {currentYear} {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
