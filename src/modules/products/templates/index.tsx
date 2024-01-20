"use client"

import React, { useEffect, useRef, useState } from "react";
import { ProductProvider } from "@lib/context/product-context";
import { useIntersection } from "@lib/hooks/use-in-view";
import ProductInfo from "@modules/products/templates/product-info";
import ProductTabs from "@modules/products/components/product-tabs";
import RelatedProducts from "@modules/products/components/related-products";
import ImageGallery from "@modules/products/components/image-gallery";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import ProductActions from "../components/product-actions";
import Input from "@modules/common/components/input";
import NativeSelect from "@modules/common/components/native-select";
import wilaya from "../components/assets/wilaya.json";
import communes from "../components/assets/communes.json";
import { Button, Toaster, useToast } from "@medusajs/ui";
import { useStore } from "@lib/context/store-context"
import {
  useCart,
  useCompleteCart,
  useCreateLineItem,
  useCreatePaymentSession, useAddShippingMethodToCart,
  useShippingOptions,
  useUpdateCart,
} from "medusa-react"
import { StorePostCartsCartReq } from "@medusajs/medusa";
// const IS_SERVER = typeof window === "undefined"
const CART_KEY = "medusa_cart_id"
type AddressValues = {
  first_name: string
  last_name: string
  company: string
  address_1: string
  address_2: string
  city: string
  province: string
  postal_code: string
  country_code: string
  phone: string
}


type ProductTemplateProps = {
  product: PricedProduct
}


const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const { setRegion, createNewCart, resetCart } = useStore();

  const { cart, setCart, updateCart : updatecartt } = useCart();
  const { mutate: updateCart, isLoading: updatingCart } = useUpdateCart(
    cart?.id!
  );

  const addLineItem = useCreateLineItem(cart?.id!)
  const inStock = 1;
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<number>(0);
  const [qte, setQte] = useState<number>(1);
  const [wilay, setWilay] = useState<string>('1');
  const [wilaia, setWilaya] = useState<string>('1');
  const [commune, setCommune] = useState<string>('');
  const [postal_code, setPostalCode] = useState<string>('');
  const [isOnboarding, setIsOnboarding] = useState<boolean>(false);
  const { toast } = useToast();
  const infoRef = useRef<HTMLDivElement>(null);
  const inView = useIntersection(infoRef, "0px");
  const [variant, setVariant] = useState<string>('');
  const createPaymentSession = useCreatePaymentSession(cart?.id!)
  const completeCart = useCompleteCart(cart?.id ? cart.id : '0')
  const [isLoading, setLoading] = useState(false);
  /*const {
    shipping_options,
  } = useShippingOptions();*/
  const addShippingMethod = useAddShippingMethodToCart(cart?.id!)
  useEffect(() => {
    const onboarding = window.sessionStorage.getItem("onboarding");
    createNewCart("reg_01HJPFP3HFP3JDKPG8PD1SE5A1");
    setRegion("reg_01HJPFP3HFP3JDKPG8PD1SE5A1", "213");
    setIsOnboarding(onboarding === "true");
    
  }, []);
  function storeCart(id: string) {
    localStorage.setItem(CART_KEY, id)
  }

  function handleError(error: Error) {
    console.log(error);
    throw new Error("Function not implemented.");
  }

  return (
    <ProductProvider product={product}>
      <Toaster />
      <div className="content-container flex flex-col small:flex-col small:items-start py-6 relative">
        <div className="block w-full relative">
          <ImageGallery images={product?.images || []} />
        </div>
        <div className="flex flex-col small:sticky small:top-48 small:py-0 w-full py-8 gap-y-6">
          <ProductInfo product={product} />
          <ProductTabs product={product} />
          <Input
            label="الإسم"
            name="nom"
            autoComplete="family-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required

          />
          <Input
            label="رقم الهاتف"
            name="phone"
            autoComplete="phone-number"
            value={phone}
            onChange={(e) => {
              if (e.target.value.length > 1 && !['05', '06', '07'].includes(e.target.value.slice(0, 2))) {
                toast({
                  variant: 'error',
                  title: "خلل",
                  description: "يرجى كتابة رقم هاتف صحيح"
                })
              }
              else if (e.target.value?.length > 10) {
                toast({
                  variant: 'error',
                  title: "خلل",
                  description: "رقم الهاتف لا يتجاوز 10 أرقام"
                })
              }
              else setPhone(parseInt(e.target.value))
            }}
            type="number"
            required
          />
          <NativeSelect placeholder={"الولاية"} defaultValue={''} onChange={(e) => { setWilay(e.target.value); setWilaya(e.target.selectedOptions[0].label) }}  >
            {wilaya.map(({ id, ar_name }, index) => (
              <option key={id} value={id}>
                {ar_name}
              </option>
            ))}
          </NativeSelect>
          <NativeSelect placeholder={"البلدية"} defaultValue={''} onChange={(e) => { setCommune(e.target.selectedOptions[0].label); setPostalCode(e.target.value) }}  >
            {communes.filter((val) => val.wilaya_id == wilay).map(({ id, ar_name, post_code }, index) => (
              <option key={id} value={post_code}>
                {ar_name}
              </option>
            ))}
          </NativeSelect>
          <Input
            label="الكمية"
            name="qte"
            autoComplete="phone-number"
            value={qte}
            onChange={(e) => {
              setQte(parseInt(e.target.value))
            }}
            type="number"
            required
          />

          <ProductActions product={product} setVariant={setVariant} />

          <Button
            disabled={(variant && qte && phone?.toString()?.length === 9 && name && wilaia && commune && (inStock > 0)
            ) ? false : true}
            variant="primary"
            isLoading={isLoading}
            className="w-full h-10 bg-black text-white font-bold"

            onClick={() => {
              setLoading(true);
              const shipping_address = {
                first_name:
                  name,
                last_name: '',
                address_1:
                  wilaia,
                address_2:
                  '',
                city: commune,
                country_code: "dz",
                province: commune,
                company: "Setze Inc.",
                postal_code: postal_code,
                phone: phone?.toString(),

              }
              const email = name + '@gmail.com'
              const payload: StorePostCartsCartReq = {
                shipping_address,
                email,
                billing_address: shipping_address
              }

              addLineItem.mutate(
                {
                  variant_id: variant,
                  quantity: qte,
                },
                {
                  onSuccess: ({ cart }) => {
                    setCart(cart)
                    storeCart(cart.id)
                    updateCart(payload, {
                      onSuccess: async ({ cart }) => {
                        setCart(cart);
                        storeCart(cart.id);
                        createPaymentSession.mutate(void 0, {
                          onSuccess: ({ cart }) => {
                            setCart(cart);
                            storeCart(cart.id);
                            // add shipping method id, ive used this for 3mexpress  "so_01HJPPZS0B76ESSGTFCZ0QMV99"
                            addShippingMethod.mutate({
                              option_id: "so_01HJPPZS0B76ESSGTFCZ0QMV99",
                            }, {
                              onSuccess: ({ cart }) => {
                                setCart(cart);
                                completeCart.mutate(void 0, {
                                  onSuccess: ({ data, type }) => {
                                    setLoading(false);
                                    console.log(data.id, type);
                                    toast({
                                      variant: 'success',
                                      title: "تمت الطلبية بنجاح",
                                      description: "سوف نتصل بكم فورا، شكرا!"
                                    })
                                    resetCart();
                                  }, onError: (error) => {
                                    setLoading(false);
                                    handleError(error)
                                  }
                                })
                              }, onError: (error) => {
                                setLoading(false);
                                handleError(error)
                              }

                            })

                          }, onError: (error) => {
                            setLoading(false);
                            handleError(error)
                          }
                        })
                      }, onError: (error) => {
                        setLoading(false);
                        handleError(error)
                      }
                    })
                  },
                  onError: (error) => {
                    setLoading(false);
                    handleError(error)
                  },
                }
              )
            }
            }
          >
            {!inStock ?
              'المنتج غير متوفر حاليا'
              :
              'أطلب الآن'}
          </Button>

        </div>
      </div>
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div>
    </ProductProvider>
  )
}

export default ProductTemplate;