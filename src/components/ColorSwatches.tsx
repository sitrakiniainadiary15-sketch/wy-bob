'use client'

import { product } from '@/lib/products'

interface Props {
  selected: number
  onChange: (id: number, image: string) => void
}

export default function ColorSwatches({ selected, onChange }: Props) {
  return (
    <div>
      <p className="colorTitle">Choisis ta couleur !</p>
      <div className="swatches">
        {product.colors.map((color) => (
          <div
            key={color.id}
            className={`swatch ${selected === color.id ? 'active' : ''}`}
            style={{ backgroundColor: color.code }}
            onClick={() => onChange(color.id, color.image)}
          />
        ))}
      </div>
    </div>
  )
}