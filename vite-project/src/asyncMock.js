const products = [
    {
    "id":1,
    "nombre":"Guitarra Epiphone",
    "category": "Epiphone",
    "cantidad":4,
    "precio":2000,
    "img":"../src/assets/guitarra-epiphone.jpg"
    },
    {
    "id":2,
    "nombre":"Guitarra SG Epiphone",
    "category": "Epiphone",
    "cantidad":5,
    "precio":1800,
    "img":"../src/assets/guitarra-sg-epiphone.jpg"
    },
    {
    "id":3,
    "nombre":"Guitarra CORT X100",
    "category": "CORT",
    "cantidad":3,
    "precio":1500,
    "img":"../src/assets/guitarra-cort.jpg"
    },
    {
    "id":4,
    "nombre":"Guitarra Ibañez 2",
    "category": "Ibañez",
    "cantidad":2,
    "precio":2000,
    "img":"../src/assets/guitarra-ibañez.jpg"
    },
    {
    "id":5,
    "nombre":"Guitarra CORT",
    "category": "CORT",
    "cantidad":3,
    "precio":1300,
    "img":"../src/assets/guitarra-cort-2.jpg"
    },
    {
    "id":6,
    "nombre":"Guitarra Ibañez",
    "category": "Ibañez",
    "cantidad":4,
    "precio":1800,
    "img":"../src/assets/guitarra-ibañez-2.jpg"
    },
    {
    "id":7,
    "nombre":"Guitarra Fender Stratocaster",
    "category": "Fender",
    "cantidad":5,
    "precio":3000,
    "img":"../src/assets/guitarra-fender.jpg"
    },
    {
    "id":8,
    "nombre":"Guitarra Fender Telecaster",
    "category": "Fender",
    "cantidad":3,
    "precio":2500,
    "img":"../src/assets/guitarra-fender-2.jpg"
    },
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products)
        },500)
    })
}

export const getProductById = (prodId) => {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id == prodId))
        },500)
    })
}