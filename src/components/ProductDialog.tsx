import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductType {
  name: string
  description: string
  features: string[]
}

interface ProductDialogProps {
  isOpen: boolean
  onClose: () => void
  product: {
    name: string
    description: string
    products?: ProductType[]
    features?: string[]
  }
}

const ProductDialog: React.FC<ProductDialogProps> = ({ isOpen, onClose, product }) => {
  const [selectedTab, setSelectedTab] = useState<string>(
    product.products && product.products.length > 0 
      ? product.products[0].name 
      : "info"
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription className="pt-2 text-sm text-gray-500">
            {product.description}
          </DialogDescription>
        </DialogHeader>

        {product.products ? (
          <Tabs 
            defaultValue={selectedTab} 
            onValueChange={setSelectedTab}
            className="w-full"
          >
            <TabsList className="w-full">
              {product.products.map((prod) => (
                <TabsTrigger 
                  key={prod.name} 
                  value={prod.name}
                  className="flex-1"
                >
                  {prod.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {product.products.map((prod) => (
              <TabsContent key={prod.name} value={prod.name} className="pt-4">
                <h3 className="font-semibold text-lg mb-2">{prod.name}</h3>
                <p className="mb-4 text-sm">{prod.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-4 space-y-1">
                    {prod.features.map((feature, index) => (
                      <li key={index} className="text-sm">{feature}</li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        ) : (
          <div className="pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc pl-4 space-y-1">
                {product.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ProductDialog