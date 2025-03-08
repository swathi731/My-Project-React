import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        veg: [
            { name: "Potato", price: 34, image: "/potatos.avif" },
            { name: "Tomato", price: 15, image: "/tomatos.avif" },
            { name: "Green Chilli", price: 30, image: "/chilli.webp" },
            { name: "Carrot", price: 50, image: "/carrot.avif" },
            { name: "Onion", price: 60, image: "/onion.avif" },
            { name: "Cabbage", price: 40, image: "/cabbage.avif" },
            { name: "Cauliflower", price: 55, image: "/cauliflower.jpeg" },
            { name: "Brinjal", price: 35, image: "/brinjal.jpeg" },
            { name: "Lady Finger", price: 45, image: "/lady finger.webp" },
            { name: "Pumpkin", price: 38, image: "/pumpkin.jpeg" },
            { name: "Radish", price: 28, image: "/radish.jpeg" },
            { name: "Capsicum", price: 50, image: "/capsicum.jpeg" },
            { name: "Coriander", price: 20, image: "/coriander.jpeg" },
            { name: "Cucumber", price: 30, image: "/cucumber.jpg" },
            { name: "Spinach", price: 25, image: "/spinach.jpeg" },
            { name: "Fenugreek", price: 22, image: "/fenugreek.jpeg" },
            { name: "Bottle Gourd", price: 35, image: "/bottle gourd.jpeg" },
            { name: "Bitter Gourd", price: 40, image: "/bittergourd.jpeg" },
            { name: "Spring Onion", price: 45, image: "/springonion.jpeg" },
            { name: "Zucchini", price: 60, image: "/zucchini.jpeg" },
            { name: "Turnip", price: 30, image: "/turnip.jpeg" },
            { name: "Sweet Corn", price: 55, image: "/sweetcorn.jpeg" },
            { name: "Mushroom", price: 80, image: "/mushroom.jpeg" },
            { name: "Lettuce", price: 45, image: "/lettuce.jpeg" },
            { name: "Beetroot", price: 40, image: "/beetroot.jpeg" },
            { name: "Garlic", price: 70, image: "/garlic.jpeg" },
            { name: "Ginger", price: 90, image: "/ginger.jpeg" },
            { name: "Drumstick", price: 50, image: "/drumstick.jpeg" },
            { name: "Asparagus", price: 100, image: "/asparagus.jpeg" },
            { name: "Broccoli", price: 120, image: "/broccoli.jpeg" },
          ], 
          nonveg: [
            { name: "Chicken", price: 240,image:"/chicken24.jpeg" },
            { name: "Fish", price: 450,image:"/fishes.jpeg" },
            { name: "Mutton", price: 890,image:"/mutton.jpeg" },
            { name: "Prawns", price: 500,image:"/prawns.jpeg" },
            { name: "Skinless Chicken", price: 220 ,image:"/skinlesschicken.jpeg"},
            { name: "Crab", price: 600,image:"/crab.jpeg"},
            { name: "Squid", price: 450,image:"/squid.jpeg" },
            { name: "Salmon", price: 1000,image:"/salmon.jpeg" },
            { name: "Turkey", price: 1200,image:"/turkey.jpeg" },
            { name: "Duck", price: 800,image:"/duck.jpeg" },
            { name: "Lamb Chops", price: 900,image:"/lamb chops.jpeg" },
            { name: "Beef Steak", price: 950,image:"/beef steak.jpeg" },
            { name: "Pork Chops", price: 750,image:"/pork chops.jpeg" },
            { name: "Quail", price: 700,image:"/quail.jpeg" },
            { name: "Goat Meat", price: 850,image:"/goat meat.jpeg" },
            { name: "Buffalo Meat", price: 920,image:"/buffalo meat.jpeg" },
            { name: "Tilapia", price: 400,image:"/tilapia.jpeg" },
            { name: "Catfish", price: 430,image:"/catfish.jpeg" },
            { name: "Shrimp", price: 700 ,image:"/shrimp.jpeg"},
            { name: "Octopus", price: 1100,image:"/octopus.jpeg" },
            { name: "Lobster", price: 1500,image:"/lombster.jpeg" },
            { name: "Rohu Fish", price: 350,image:"/rohu.jpeg" },
            { name: "Hilsa Fish", price: 800,image:"/hilsa.jpeg" },
            { name: "Pomfret", price: 1200,image:"/pomfret.jpeg" },
            { name: "King Fish", price: 1400,image:"/kingfish.jpeg" },
            { name: "Silver Fish", price: 380,image:"/silverfish.jpg" },
            { name: "Shellfish", price: 980,image:"/shellfish.jpeg" },
            { name: "Squid Rings", price: 600,image:"/squidring.jpeg" },
            { name: "Goat Kidney", price: 500,image:"/goatkidney.jpeg" },
            { name: "Chicken Liver", price: 350,image:"/chicken liver.jpeg" },
          ],
          milk: [
            { name: "Jersey", price: 32,image:"/jersey24.jpeg" },
            { name: "Heritage", price: 31 ,image:"/heritage.jpeg"},
            { name: "Sangam", price: 34,image:"/sangam.jpeg" },
            { name: "Amul Gold", price: 60,image:"/amulgold.jpeg" },
            { name: "Mother Dairy", price: 55,image:"/motherdairy.jpeg" },
            { name: "Aavin", price: 50,image:"/aavin.jpeg" },
            { name: "Nandini", price: 45,image:"/nandini.jpeg" },
            { name: "Milky Mist", price: 40,image:"/milkymist.jpeg" },
            { name: "Nestle A+ Milk", price: 70,image:"/nestle milk.png" },
            { name: "Govardhan Milk", price: 48,image:"/govardhan.jpeg" },
            { name: "Dairy Pure", price: 52,image:"/dairy pure.jpeg" },
            { name: "Country Delight", price: 58,image:"/country delight.jpeg" },
            { name: "Pride of Cows", price: 80,image:"/pride of cows.jpeg" },
            { name: "Organic Cow Milk", price: 75,image:"/organic cow.jpeg" },
            { name: "Full Cream Milk", price: 65,image:"/full cream.jpeg" },
            { name: "Skimmed Milk", price: 40,image:"/skimmed milk.jpeg" },
            { name: "Low Fat Milk", price: 45,image:"/low fat.png" },
            { name: "Buffalo Milk", price: 50,image:"/buffalo milk.jpeg" },
            { name: "Soy Milk", price: 60,image:"/soy milk.jpeg" },
            { name: "Almond Milk", price: 90,image:"almond milk.jpeg" },
            { name: "Oat Milk", price: 100,image:"/oat milk.jpeg" },
            { name: "Coconut Milk", price: 85,image:"/coconut milk.jpeg" },
            { name: "Condensed Milk", price: 120,image:"/condensed milk.jpeg" },
            { name: "Evaporated Milk", price: 110,image:"/evaporated milk.jpeg" },
            { name: "Cheese", price: 350,image:"/cheese.jpeg" },
            { name: "Paneer", price: 300,image:"/paneer.jpeg" },
            { name: "Butter", price: 280,image:"/butter.jpeg" },
            { name: "Ghee", price: 450,image:"/ghee.jpeg" },
            { name: "Curd", price: 60,image:"/curd.jpeg" },
            { name: "Flavored Milk", price: 95,image:"/flavored milk.jpeg" },
          ],
    },
    reducers:{}
});

const cartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter(item =>item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
            return state.filter(item =>item.name!==action.payload.name);
        },
        clearCart:()=>[]
    }
});
let purchaseDetailsSlice=createSlice({
    name:'purchase',
    initialState:[],
    reducers:{
        purchaseItems:(state,action)=>{
            state.push(action.payload);
        },
    }
});
const authSlice = createSlice({
    name:'auth',
    initialState:{ 
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username") || "",
    },
    reducers:{ 
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);
        },
        Logout:(state)=>{
            state.isAuthenticated=false;
            state.user=" ";
            localStorage.removeItem("username");
        }
    }
});
const store =configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        purchase: purchaseDetailsSlice.reducer,
        auth:authSlice.reducer
    },  
});
export default store;
export const{addToCart,increment,decrement,remove}=cartSlice.actions;
export const{purchaseItems}=purchaseDetailsSlice.actions;
export const{clearCart}=cartSlice.actions;
export const{login,Logout}=authSlice.actions;