

import React from 'react'

type Property = { height: number, width: number }
export default function MobileIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/48/iphone13.png" alt="iphone13" />

}
