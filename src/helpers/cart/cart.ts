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

export const getFromCart = (): TCartItem[] | [] => {
  const jsonCart = GetLocalStore(CONFIG.cartKey);
  if (!jsonCart) {
    return [];
  } else {
    const cart = JSON.parse(jsonCart);
    return cart;
  }
};

export const removeItemFromCart = (cartId: string) => {
  const jsonCart = getFromCart();
  if (!jsonCart) {
    return [];
  } else {
    const exist = jsonCart.filter((item: TCartItem) => item.cartId !== cartId);
    SetLocalStore(CONFIG.cartKey, JSON.stringify(exist));
  }
};

export const getItemByCartIDFromCart = (cartId: string): TCartItem | {} => {
  const jsonCart = getFromCart();
  if (!jsonCart) {
    return {};
  } else {
    const exist = jsonCart.find((item: TCartItem) => item.cartId !== cartId);
    if (!exist) {
      return {};
    }
    return exist;
  }
};
