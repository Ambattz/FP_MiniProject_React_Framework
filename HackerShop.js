name = name.toLowerCase();
{props.subTotal * 0.05}

        const addItem = (item) => {
      if (cart.some(cartItem => cartItem.name === item.name)) {
        var newItems = cart.map(i => i.name == item.name 
          ? {...i, quantity: i.quantity+1, totalPrice:i.totalPrice+item.price} : i);
        setCart(newItems); 
      }
      else{
        const newItem = {
          name:item.name,
          quantity:1,
          totalPrice:item.price
        };
        const newItems = [...cart,newItem];
        setCart(newItems);        
      }
    }

    const removeItem = (item) => {
      if (cart.some(cartItem => cartItem.name === item.name)) {
        var newItems = cart.map(i => i.name == item.name 
          ? {...i, quantity: i.quantity-1, totalPrice:i.totalPrice-item.price} : i);
        var Items = newItems.filter(item => item.quantity !== 0);
        setCart(Items);
        }
    } 


const calcSubTotal = (newCart, tempCoupon) => {
        if (newCart !== undefined && newCart !== null && newCart !== []) {
          if(tempCoupon === 0){
            var subtotal = 0;
             newCart.map(i => subtotal = i.totalPrice + subtotal) ;
            setSubTotal(subtotal);
          }
          if(tempCoupon === 15){
            var subtotal = 0;
             newCart.map(i => subtotal = i.totalPrice + subtotal);
             subtotal=subtotal-subtotal*0.15;
            setSubTotal(subtotal);
          }
          if(tempCoupon === 25){
            var subtotal = 0;
             newCart.map(i => subtotal = i.totalPrice + subtotal) ;
             subtotal=subtotal-subtotal*0.25;
            setSubTotal(subtotal);
          }
            
        }
    }