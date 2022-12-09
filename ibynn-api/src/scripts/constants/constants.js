import convert from "convert-units";

export const storeImages = {
  Target:
    "https://www.freepnglogos.com/uploads/target-png-logo/target-logo-photo-3.png",
  Amazon:
    "https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png",
  Walmart: "https://www.freepnglogos.com/uploads/walmart-logo-24.jpg",
  Kmart:
    "https://www.freepnglogos.com/uploads/best-buy-png-logo/kmart-png-logo-27.png",
  "Best Buy":
    "https://www.freepnglogos.com/uploads/best-buy-png-logo/best-buy-png-logo-vector-0.png",
  "Home Depot":
    "https://www.pngkit.com/png/detail/664-6640520_home-depot-logo.png",
  "PC Richard & Son":
    "https://www.pngkit.com/png/detail/530-5300166_pc-richard-son-pc-richards-and-sons-logo.png",
  "Bed Bath & Beyond":
    "https://www.pngkit.com/png/full/897-8976060_bed-bath-and-beyond.png",
};

export const storeNames = [
  "Target",
  "Amazon",
  "Walmart",
  "Kmart",
  "Best Buy",
  "Home Depot",
  "PC Richard & Son",
  "Bed Bath & Beyond",
];

export const amounts = ["count", "ct", "pk", "pack", "pieces", "pcs", "sheet"];

export const measurements = {
  amount: ["count", "ct", "pk", "pack", "pieces", "pcs", "sheet"],
  weight: ["mcg", "mg", "g ", "kg", "oz", "lb", "mt"],
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
    "yd3",
  ],
  massVolume: [
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
    "yd3",
    "mcg",
    "mg",
    "g ",
    "kg",
    "oz",
    "lb",
    "mt",
  ],
};

export const per_type = {
  amount: "each",
  weight: "oz",
  volume: "fl-oz",
  massVolume: "oz",
};

export const stringReverse = (str) => {
  return str.split("").reverse().join("");
};

export const calculations = (item, match, sort_by, unit) => {
  let unit_price;
  if (sort_by === "amount") {
    unit_price = (item.extracted_price / parseFloat(match)).toFixed(2);
    item.unit_price = parseFloat(unit_price);
    item.unit_price_displayed = `$${unit_price}/${per_type[sort_by]}`;
  } else if (sort_by === "weight") {
    if (unit) {
      const weight = convert(match).from(unit).to("oz");
      unit_price = (item.extracted_price / parseFloat(weight)).toFixed(2);
      item.unit_price = parseFloat(unit_price);
      item.unit_price_displayed = `$${unit_price}/${per_type[sort_by]}`;
    }
  } else if (sort_by === "volume") {
    if (unit) {
      const volume = convert(match)
        .from(unit === "floz" || "fl oz" ? "fl-oz" : unit)
        .to("fl-oz");
      unit_price = (item.extracted_price / parseFloat(volume)).toFixed(2);
      item.unit_price = parseFloat(unit_price);
      item.unit_price_displayed = `$${unit_price}/${per_type[sort_by]}`;
    }
  } else if (sort_by === "massVolume") {
    if (unit === "floz" || unit === "fl oz") unit = "fl-oz";

    if (unit) {
      let massVolume;

      if (convert().describe(unit.replace(/\s/g, "")).measure === "mass") {
        massVolume = convert(match).from(unit.replace(/\s/g)).to("oz");
      }

      if (convert().describe(unit.replace(/\s/g, "")).measure === "volume") {
        massVolume = convert(match)
          .from(unit === "floz" || "fl oz" ? "fl-oz" : unit)
          .to("fl-oz");
      }

      unit_price = (item.extracted_price / parseFloat(massVolume)).toFixed(2);
      item.unit_price = parseFloat(unit_price);
      item.unit_price_displayed = `$${unit_price}/${per_type[sort_by]}`;
    }
  }
};
