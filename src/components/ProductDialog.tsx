import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ProductDialogProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    description: string
    features: string[]
  }
}

const ProductDialog: React.FC<ProductDialogProps> = ({ isOpen, onClose, product }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription className="pt-4">
            <p className="mb-4">{product.description}</p>
            <div className="space-y-2">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc pl-4 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDialog