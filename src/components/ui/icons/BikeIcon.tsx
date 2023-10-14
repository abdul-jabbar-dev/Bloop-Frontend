import React from 'react'
type Property = { height: number, width: number }
export default function BikeIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/96/motorcycle.png" alt="motorcycle" />
}
