import React from 'react'
type Property = { height: number, width: number }
export default function HearphoneIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/96/aipods-pro-max.png" alt="aipods-pro-max" />
}
