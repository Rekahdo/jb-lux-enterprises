const ROUTE = {
  root: "/",
  admin: {
    root: "/admin",
    orders: "/admin/orders",
    products: "/admin/products",
    settings: "/admin/settings",
  },
  auth: {
    root: "/auth",
    login: "/auth/login",
    signup: "/auth/signup",
  },
  products: "/products",
  cart: "/cart",
  checkout: "/checkout",
  orders: "/orders",
  profile: "/profile",
  about: "/about",
  contact: "/contact",
  policy: "/policy",
  storefront: "/storefront",
  flagship: "/flagship",
} as const;

export const ROOT_ROUTE = ROUTE.root;

export const ADMIN_ROUTE = ROUTE.admin.root;
export const ADMIN_ORDERS_ROUTE = ROUTE.admin.orders;
export const ADMIN_PRODUCTS_ROUTE = ROUTE.admin.products;
export const ADMIN_SETTINGS_ROUTE = ROUTE.admin.settings;

export const AUTH_ROUTE = ROUTE.auth.root;
export const LOGIN_ROUTE = ROUTE.auth.login;
export const SIGNUP_ROUTE = ROUTE.auth.signup;

export const PRODUCTS_ROUTE = ROUTE.products;
export const CART_ROUTE = ROUTE.cart;
export const CHECKOUT_ROUTE = ROUTE.checkout;
export const ORDERS_ROUTE = ROUTE.orders;
export const PROFILE_ROUTE = ROUTE.profile;
export const ABOUT_ROUTE = ROUTE.about;
export const CONTACT_ROUTE = ROUTE.contact;
export const POLICY_ROUTE = ROUTE.policy;
export const STOREFRONT_ROUTE = ROUTE.storefront;
export const FLAGSHIP_ROUTE = ROUTE.flagship;
