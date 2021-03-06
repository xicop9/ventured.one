import React from 'react'
import PropTypes from 'prop-types'

const Logo = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    className={props.className}
    width={props.width}
    height={props.height}
    viewBox='0 0 1983 1899'
  >
    <defs>
      <linearGradient id='a' x1='100.935%' x2='0%' y1='-.313%' y2='100%'>
        <stop offset='0%' stopColor='#14E9FE' />
        <stop offset='100%' stopColor='#00AAFF' />
      </linearGradient>
    </defs>
    <g fill='url(#a)'>
      <polygon points='0 827.015 205.795 7.712 277.042 79.244' transform='matrix(1 0 0 -1 0 834.726)' />
      <polygon points='205.795 1107.827 594.872 755.482 277.042 1179.36' transform='matrix(1 0 0 -1 0 1934.842)' />
      <polygon points='0 755.482 277.042 7.712 348.289 63.821' transform='matrix(1 0 0 -1 0 763.194)' />
      <polygon points='0 699.373 406.558 58.769 348.289 7.712' transform='matrix(1 0 0 -1 0 707.084)' />
      <polygon points='277.042 1123.251 594.872 699.373 348.289 1179.36' transform='matrix(1 0 0 -1 0 1878.733)' />
      <polygon points='348.289 1179.36 594.872 699.373 703.994 796.434' transform='matrix(1 0 0 -1 0 1878.733)' />
      <polygon points='594.872 1801.881 986.333 1082.299 703.994 1898.943' transform='matrix(1 0 0 -1 0 2981.242)' />
      <polygon points='846.488 821.962 986.333 954.657 1118.498 827.015' transform='matrix(1 0 0 -1 0 1776.619)' />
      <polygon points='703.994 954.657 846.488 1082.299 1260.727 959.709' transform='matrix(1 0 0 -1 0 2036.956)' />
      <polygon points='703.994 1893.89 986.333 1077.246 1260.727 1898.943' transform='matrix(1 0 0 -1 0 2976.19)' />
      <polygon points='846.488 1072.194 1118.498 1077.246 1260.727 949.604' transform='matrix(1 0 0 -1 0 2026.85)' />
      <polygon points='986.333 1077.246 1365.081 1791.776 1260.727 1898.943' transform='matrix(1 0 0 -1 0 2976.19)' />
      <polygon points='986.333 640.87 1558.163 824.621 1240.598 638.211' transform='matrix(1 0 0 -1 0 1462.832)' />
      <polygon points='348.289 775.958 406.558 827.015 732.069 648.316' transform='matrix(1 0 0 -1 0 1475.33)' />
      <polygon points='348.289 1082.299 703.994 699.373 732.069 954.657' transform='matrix(1 0 0 -1 0 1781.671)' />
      <polygon points='406.558 827.015 986.333 653.368 732.069 648.316' transform='matrix(1 0 0 -1 0 1475.33)' />
      <polygon points='703.994 827.015 846.488 954.657 732.069 1082.299' transform='matrix(1 0 0 -1 0 1909.314)' />
      <polygon points='846.488 821.962 986.333 954.657 732.069 949.604' transform='matrix(1 0 0 -1 0 1776.619)' />
      <polygon points='1769.255 0 1982.731 824.621 1698.008 63.821' transform='matrix(1 0 0 -1 0 824.621)' />
      <polygon points='1260.727 867.967 1365.081 760.8 1698.008 1184.413' transform='matrix(1 0 0 -1 0 1945.213)' />
      <polygon points='1365.081 760.8 1769.255 1120.592 1698.008 1184.413' transform='matrix(1 0 0 -1 0 1945.213)' />
      <polygon points='1240.598 951.998 1260.727 699.373 1626.761 1077.246' transform='matrix(1 0 0 -1 0 1776.619)' />
      <polygon points='1240.598 638.211 1558.163 824.621 1626.761 763.46' transform='matrix(1 0 0 -1 0 1462.832)' />
      <polygon points='1260.727 699.373 1698.008 1015.819 1626.761 1077.246' transform='matrix(1 0 0 -1 0 1776.619)' />
      <polygon points='1558.163 61.162 1982.731 699.373 1626.761 0' transform='matrix(1 0 0 -1 0 699.373)' />
      <polygon points='1698.008 0 1982.731 760.8 1626.761 61.428' transform='matrix(1 0 0 -1 0 760.8)' />
      <polygon points='986.333 949.604 1118.498 821.962 1118.498 821.962' transform='matrix(1 0 0 -1 0 1771.566)' />
      <polygon points='986.333 949.604 1240.598 946.945 1118.498 821.962' transform='matrix(1 0 0 -1 0 1771.566)' />
      <path d='M1118.49778,1077.24644 L1260.72684,949.604305 L1118.49778,1077.24644 Z' transform='matrix(1 0 0 -1 0 2026.85)' />
      <polygon points='1240.598 1077.246 1260.727 824.621 1118.498 952.264' transform='matrix(1 0 0 -1 0 1901.868)' />
    </g>
  </svg>

)

Logo.defaultProps = {
  className: '',
  width: 417,
  height: 417
}

Logo.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Logo
