

import React from 'react'

type Property = { height: number, width: number }
export default function ComputerIcon({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/fluency/96/computer-support.png" alt="computer-support" />

}
