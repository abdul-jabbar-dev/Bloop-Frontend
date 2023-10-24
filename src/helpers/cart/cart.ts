import CONFIG from "../../config";
import { TCartItem } from "../../types/cart/cartItem";
import GetLocalStore from "../localStore/getLocalStore";
import crypto from "crypto";
import SetLocalStore from "../localStore/setLocalStore";
const randomByte = (byte: number) => {
  const id = crypto.randomBytes(byte).toString("hex");
  return id;
};
export const addToCart = (serviceId: string) => {
  const existCart = GetLocalStore(CONFIG.cartKey);
  const item: TCartItem = { cartId: randomByte(8), serviceId: serviceId };
  let cart: Record<string, string>[] = [];
    if (existCart) {
      cart = JSON.parse(existCart) as Record<string, string>[];
    }
    cart.push(item);
    SetLocalStore(CONFIG.cartKey, JSON.stringify(cart));
};
