import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import LoadingBar from 'react-top-loading-bar'

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
   router.events.on('routeChangeComplete', ()=>{
     setProgress(50)
   })
   router.events.on('routeChangeComplete', ()=>{
     setProgress(10)
   })
 
   router.events.on('routeChangeComplete', ()=>{
     setProgress(100)
   })
  })

  const router = useRouter()

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log("Internal Server Error");
      localStorage.clear();
    }
  }, [router.query]);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let key = Object.keys(myCart);
    for (let i = 0; i < key.length; i++) {
      subt += myCart[key[i]].price * myCart[key[i]].qty;
    }
    setSubTotal(subt);
  };

  const addToCart = (itemCode, qty, name, price, size, color, img) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else {
      newCart[itemCode] = { qty: 1, name, price, size, color, img }
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({})
    saveCart({})
    console.log("Cart has been cleared")
  }

  const removeFromCart = (itemCode, qty, name, price, size, color) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty === 0) {
      delete newCart[itemCode];
    }

    setCart(newCart);
    saveCart(newCart);
  };

  return <>
  <LoadingBar
    color='#FF00A6'
    progress={progress}
    onLoaderFinished={() => setProgress(0)}
    waitingTime={1000}
  />
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
