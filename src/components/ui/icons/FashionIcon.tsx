import React from 'react'
type Property = { height: number, width: number }
export default function FashionIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/96/clothes.png" alt="clothes"/>
}
