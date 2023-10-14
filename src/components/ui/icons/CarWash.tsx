

import React from 'react'

type Property = { height: number, width: number }
export default function CarWash({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/color/48/automatic-car-wash.png" alt="automatic-car-wash" />

}
