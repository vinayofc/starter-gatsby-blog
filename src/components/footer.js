import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      CMS with <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="#">By</a> &middot;{' '}
      <a href="https://github.com/vinayofc">Vinay Chaudhary</a>
    </div>
  </Container>
)

export default Footer
