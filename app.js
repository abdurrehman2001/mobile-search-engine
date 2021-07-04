var mobile = {
    infinix: {
        pro10: {
            brand: "Infinix Note 10 Pro",
            price: "30,999",
            storage: "128GB 6GB",
            camera: "64 MP",
            charging: "Fast Charging 33W",
            color: "Black, Purple, Nordic Secret",
            src: "image/pro10.jpg"
        },
        note10: {
            brand: "Infinix Note 10",
            price: "34,999",
            storage: "128GB 6GB",
            camera: "16 MP",
            charging: "Fast Charging 23W",
            color: "Black, Purple, Emerald Green",
            src: "image/InfinixNote10.jpg"
        },
        hot10: {
            brand: "Infinix Hot 10",
            price: "19,299",
            storage: "32GB 4GB",
            camera: "26 MP",
            charging: "Fast Charging 25W",
            color: "Obsidian Black, Amber Red, Moonlight Jade, Ocean Wave",
            src: "image/InfinixHot10.jpg"
        },
    },
    iphone: {
        x: {
            brand: "Iphone X",
            charging: "Fast Charging 25W",
            price: "150,000",
            color: "Gray,Black & White",
            storage: "4-64GB , 6-128GB , 6-256GB",
            camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
            src: "image/IphoneX.jpg"
        },
        11: {
            brand: "Iphone 11",
            charging: "Fast Charging 25W",
            price: "200,000",
            color: "Gray,Black & White & Crystal",
            storage: "4-64GB , 12-512GB",
            camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
            src: "image/Iphone11.jpg"
        },
        12: {
            brand: "Iphone 12",
            charging: "Fast Charging 25W",
            price: "250,000",
            color: "Gray,Black & White & Crystal & New Crystal",
            storage: "4-64GB , 6-128GB",
            camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
            src: "image/iphone12jpg.jpg"
        }
    },
    samsung: {
        s8: {
            brand: "Samsung S-8",
            charging: "Fast Charging 25W",
            price: "70,000",
            color: "Golden & Gray",
            storage: "4-64GB , 6-128GB",
            camera: "12px Back, And 4px Front",
            src: "image/samsungs8.jpg"
        },
        s9: {
            brand: "Samsung S-9",
            charging: "Fast Charging 25W",
            price: "100,000",
            color: "Golden",
            storage: "4-64GB , 6-128GB",
            src: "image/samsungs9.jpg"
        },
        s10: {
            brand: "Samsung S-10",
            charging: "Fast Charging 25W",
            price: "100,000",
            color: "Golden",
            storage: "4-64GB , 6-128GB",
            camera: "12px Back, And 4px Front",
            src: "image/samsungs10.jpg"
        }
    },
    oppo: {
        f8: {
            brand: "Oppo F-8",
            price: "50,000",
            charging: "Fast Charging 35W",
            color: "Golden",
            storage: "4-64 GB , 6-128 GB",
            camera: "12px Back, And 4px Front",
            src: "image/oppof8.webp"
        },
        f9: {
            brand: "Oppo F-9",
            charging: "Fast Charging 35W",
            price: "75,000",
            color: "Golden & White",
            storage: "4-64 GB , 6-128 GB",
            camera: "12px Back, And 4px Front",
            src: "image/oppof9.jpg"
        },
        f10: {
            brand: "Oppo F-10",
            charging: "Fast Charging 25W",
            price: "100,000",
            color: "Cristal Shade",
            storage: "4-64 GB, 6-128 GB , 6-256 GB",
            camera: "12px Back, And 4px Front",
            src: "image/oppof10.jpg"
        },
    },
};
function search() {
    var brand = document.getElementById("brand")
    var model = document.getElementById("model")
    var name = document.getElementById("name")
    var price = document.getElementById("price")
    var storage = document.getElementById("storage")
    var charging = document.getElementById("charging")
    var colors = document.getElementById("colors")
    var camera = document.getElementById("camera")
    var image = document.getElementById("img")
    name.innerHTML = "Brand :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].brand
    price.innerHTML = "Price :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].price
    charging.innerHTML = "Charging Timing :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].charging
    colors.innerHTML = "Colour's :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].color
    camera.innerHTML = "Camera :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].camera
    storage.innerHTML = "Stroage :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].storage
    image.src = mobile[brand.value.toLowerCase()][model.value.toLowerCase()].src
    image.style.border = "4px solid black"
}