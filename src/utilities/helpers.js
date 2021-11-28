/*=============================================
=                 Helper functions            =
=============================================*/

import { USER_LOCALE } from 'utilities/config'

/**
 * Formats number  depending on locale. If currency is present, add style: currency options
 */
const formatNumber = (number, currency = '', locale = USER_LOCALE) => {
  return new Intl.NumberFormat(
    locale,
    currency && {
      style: 'currency',
      currency,
      minimumFractionDigits: 2
    }
  ).format(number)
}

export { formatNumber }
