var mobile = {
        infinix: {
            pro10: {
                brand: "Infinix Note 10 Pro",
                price: "30,999",
                stroage: "128GB 6GB",
                camera: "64 MP",
                charging: "Fast Charging 33W",
                color: "Black, Purple, Nordic Secret",
            },
            note10: {
                brand: "Infinix Note 10",
                price: "34,999",
                stroage: "128GB 6GB",
                camera: "16 MP",
                charging: "Fast Charging 23W",
                color: "Black, Purple, Emerald Green",
            },
            hot10: {
                brand: "Infinix Hot 10",
                price: "19,299",
                stroage: "32GB 4GB",
                camera: "26 MP",
                charging: "Fast Charging 25W",
                color: "Obsidian Black, Amber Red, Moonlight Jade, Ocean Wave",
            },
        },
        iphone: {
            iphonex: {
                brand: "Iphone",
                charging: "Fast Charging 25W",
                price: "150,000",
                color: "Gray,Black & White",
                storage: "4-64GB , 6-128GB , 6-256GB",
                camera: "12px Back, And 4px Front (Full Hd Dslar Wala)",
            },
            iphone11: {
                brand: "Iphone",
                charging: "Fast Charging 25W",
                price: "200,000",
                color: "Gray,Black & White & Crystal",
                storage: "4-64GB , 12-512GB",
                camera: "16px Back, And 6px Front (Full Hd Dslar Wala)",
            },
            iphone12: {
                brand: "Iphone",
                charging: "Fast Charging 25W",
                price: "250,000",
                color: "Gray,Black & White & Crystal & New Crystal",
                storage: "4-64GB , 6-128GB",
                camera: "20px Back, And 8px Front (Full Hd Dslar Wala)",
            }
    },
    samsung: {
        s8: {
            brand: "Samsung",
            charging: "Fast Charging 25W",
            price: "70,000",
            color: "Golden",
            storage: "4-64GB , 6-128GB",
            camera: "12px Back, And 4px Front",
        },
        s9: {
            brand: "Samsung",
            charging: "Fast Charging 25W",
            price: "100,000",
            color: "Golden",
            storage: "4-64GB , 6-128GB",

        },
        s10: {
            brand: "Samsung",
            charging: "Fast Charging 25W",
            price: "100,000",
            color: "Golden",
            storage: "4-64GB , 6-128GB",
            camera: "12px Back, And 4px Front",
        }
    },
}
function search() {
    var brand = document.getElementById("brand")
    var model = document.getElementById("model")
    var name = document.getElementById("name")
    var price = document.getElementById("price")
    var storage = document.getElementById("storage")
    var charging = document.getElementById("charging")
    var colors = document.getElementById("colors")
    var camera = document.getElementById("camera")
    name.innerHTML = "Brand :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].brand
    price.innerHTML = "Price :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].price
    charging.innerHTML = "Charging Timing :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].charging
    colors.innerHTML = "Colour's :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].color
    camera.innerHTML = "Camera :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].camera
    storage.innerHTML = "Stroage :" + " " + mobile[brand.value.toLowerCase()][model.value.toLowerCase()].storage
}