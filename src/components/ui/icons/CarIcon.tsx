import React from 'react'
type Property = { height: number, width: number }
export default function CarIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/96/car.png" alt="car" />
}
