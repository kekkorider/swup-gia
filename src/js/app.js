import Swup from 'swup'
import SwupGiaPlugin from '@swup/gia-plugin'

import Counter from './components/Counter'

new Swup({
  plugins: [
    new SwupGiaPlugin({
      components: {
        Counter
      }
    })
  ]
})
