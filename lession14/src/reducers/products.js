var initialState = [
    {
        id: 1,
        name: 'Iphone 7 plus',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71TPTWoDypL._AC_SX466_.jpg',
        decription: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 1,
        name: 'Samsung galaxy s7',
        image: 'https://mobilcase.com.ua/image/cache/catalog/Samsung/A3%202017/glass-samsung-a320-445x445.jpg',
        decription: 'Sản phẩm do Samsung sản xuất',
        price: 570,
        inventory: 15,
        rating: 3
    },
    {
        id: 1,
        name: 'Oppo F1s',
        image: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/450x/9df78eab33525d08d6e5fb8d27136e95/o/p/oppo-reno-5-5g_2_.jpg',
        decription: 'Sản phẩm do Chine sản xuất',
        price: 300,
        inventory: 5,
        rating: 5
    }

];

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}
export default products