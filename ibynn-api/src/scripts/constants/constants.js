const storeImages = {
    Target: "https://www.freepnglogos.com/uploads/target-png-logo/target-logo-photo-3.png",
    Amazon: "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png",
    Walmart: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg"
};

const storeNames = [
"Target",
"Amazon",
"Walmart"
]

const amounts = [
    "count",
    "ct",
    "pk",
    "pack",
    "pieces",
    "pcs",
    "sheet"
]

const measurements = {
    amount: [
        "count",
        "ct",
        "pk",
        "pack",
        "pieces",
        "pcs",
        "sheet"
    ],
    weight: [ 
        "mcg", 
        "mg", 
        "g ", 
        "kg", 
        "oz", 
        "lb", 
        "mt" 
    ],
    volume: [
        "mm3",
        "cm3",
        "ml",
        "l ",
        "kl",
        "m3",
        "km3",
        "tsp",
        "Tbs",
        "in3",
        "fl-oz",
        "fl oz",
        "floz",
        "cup",
        "pnt",
        "qt",
        "gal",
        "ft3",
        "yd3"
    ],
    volToWeight: [
        
        "mm3",
        "cm3",
        "ml",
        "l ",
        "kl",
        "m3",
        "km3",
        "tsp",
        "Tbs",
        "in3",
        "fl-oz",
        "cup",
        "pnt",
        "qt",
        "gal",
        "ft3",
        "yd3",
        "mcg", 
        "mg", 
        "g ", 
        "kg", 
        "oz", 
        "lb", 
        "mt" 
    ]
}

const per_type = {
    amount: "each",
    weight: "oz",
    volume: "fl-oz"
}

exports.storeImages = storeImages;
exports.storeNames = storeNames;
exports.amounts = amounts;
exports.measurements = measurements;
exports.per_type = per_type;
