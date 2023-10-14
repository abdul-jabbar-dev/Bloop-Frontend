import React from 'react'
type Property = { height: number, width: number }
export default function AcIcon ({ height, width }: Property) {
    return <img width={width} height={height} src="https://img.icons8.com/external-3d-design-circle/66/external-Ac-interior-3d-design-circle.png" alt="external-Ac-interior-3d-design-circle" />

}
