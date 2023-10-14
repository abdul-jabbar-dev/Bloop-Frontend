import React from 'react'
type Property = { height: number, width: number }
export default function TvIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/96/tv.png" alt="tv" />
}
