import React, { useContext, useState, FC, createContext} from 'react'

const DataContext: any = createContext(null);

export function DataContextProvider({children}: any) {
    const [activeCategory, setActiveCategory] = useState<any[]>();
    const [products, setProducts] = useState<any[]>();
    const [categories,setCategories] = useState<any[]>([
        {
          "id": 1,
          "name": "Kitchen",
          "slug": "/search?q=home+appliances&sortBy=amount",
          "image": {
            "mobile": {
              "url": "/src/images/collections/kitchendepartment.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "/src/images/collections/kitchendepartment.png",
              "width": 475,
              "height": 250
            }
          },
          "icon": "/src/images/collections/kitchendepartment.png",
          "children": [
            {
              "id": 1,
              "name": "Kitchen Tools & Utensils",
              "parent": "Kitchen",
              "slug": "/search?q=Kitchen+Tools&Utensils&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/refrigerator.svg",
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Aprons&sortBy=amount",
                  "parent": "Kitchen Tools & Utensils",
                  "name": "Aprons",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Baking Peels&sortBy=amount",
                  "name": "Baking Peels",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Basters&sortBy=amount",
                  "name": "Basters",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Basting Brushes&sortBy=amount",
                  "name": "Basting Brushes",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Beverage Dispensers&sortBy=amount",
                  "name": "Beverage Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cake Decorating Supplies&sortBy=amount",
                  "name": "Cake Decorating Supplies",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cake Servers&sortBy=amount",
                  "name": "Cake Servers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Can Crushers&sortBy=amount",
                  "name": "Can Crushers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Can Openers&sortBy=amount",
                  "name": "Can Openers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Carving Forks&sortBy=amount",
                  "name": "Carving Forks",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Channel Knives&sortBy=amount",
                  "name": "Channel Knives",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Colanders & Strainers&sortBy=amount",
                  "name": "Colanders & Strainers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Condiment Dispensers&sortBy=amount",
                  "name": "Condiment Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cookie Cutters&sortBy=amount",
                  "name": "Cookie Cutters",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cookie Presses&sortBy=amount",
                  "name": "Cookie Presses",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cooking Thermometer Accessories&sortBy=amount",
                  "name": "Cooking Thermometer Accessories",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cooking Thermometers&sortBy=amount",
                  "name": "Cooking Thermometers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cooking Timers&sortBy=amount",
                  "name": "Cooking Timers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cooking Torches&sortBy=amount",
                  "name": "Cooking Torches",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cooling Racks&sortBy=amount",
                  "name": "Cooling Racks",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cutting Boards&sortBy=amount",
                  "name": "Cutting Boards",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Dish Racks & Drain Boards&sortBy=amount",
                  "name": "Dish Racks & Drain Boards",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Dough Wheels&sortBy=amount",
                  "name": "Dough Wheels",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Electric Knife Accessories&sortBy=amount",
                  "name": "Electric Knife Accessories",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Electric Knife Replacement Blades&sortBy=amount",
                  "name": "Electric Knife Replacement Blades",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Electric Knives&sortBy=amount",
                  "name": "Electric Knives",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Flour Sifters&sortBy=amount",
                  "name": "Flour Sifters",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food & Drink Stencils&sortBy=amount",
                  "name": "Food & Drink Stencils",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Crackers&sortBy=amount",
                  "name": "Food Crackers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Lobster & Crab Crackers&sortBy=amount",
                  "name": "Lobster & Crab Crackers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Nutcrackers&sortBy=amount",
                  "name": "Nutcrackers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Decorative Nutcrackers&sortBy=amount",
                  "name": "Decorative Nutcrackers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Dispensers&sortBy=amount",
                  "name": "Food Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Graters & Zesters&sortBy=amount",
                  "name": "Food Graters & Zesters",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Peelers & Corers&sortBy=amount",
                  "name": "Food Peelers & Corers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Steaming Bags&sortBy=amount",
                  "name": "Food Steaming Bags",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Sticks & Skewers&sortBy=amount",
                  "name": "Food Sticks & Skewers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Funnels&sortBy=amount",
                  "name": "Funnels",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Garlic Presses&sortBy=amount",
                  "name": "Garlic Presses",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Gelatin Molds&sortBy=amount",
                  "name": "Gelatin Molds",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ice Cube Trays&sortBy=amount",
                  "name": "Ice Cube Trays",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Jerky Guns&sortBy=amount",
                  "name": "Jerky Guns",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Knives&sortBy=amount",
                  "name": "Kitchen Knives",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Molds&sortBy=amount",
                  "name": "Kitchen Molds",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Organizers&sortBy=amount",
                  "name": "Kitchen Organizers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Can Organizers&sortBy=amount",
                  "name": "Can Organizers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Drinkware Holders&sortBy=amount",
                  "name": "Drinkware Holders",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Cabinet Organizers&sortBy=amount",
                  "name": "Kitchen Cabinet Organizers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Counter & Beverage Station Organizers&sortBy=amount",
                  "name": "Kitchen Counter & Beverage Station Organizers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Utensil Holders & Racks&sortBy=amount",
                  "name": "Kitchen Utensil Holders & Racks",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Knife Blocks & Holders&sortBy=amount",
                  "name": "Knife Blocks & Holders",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Napkin Holders & Dispensers&sortBy=amount",
                  "name": "Napkin Holders & Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Paper Towel Holders & Dispensers&sortBy=amount",
                  "name": "Paper Towel Holders & Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pot Racks&sortBy=amount",
                  "name": "Pot Racks",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Spice Organizers&sortBy=amount",
                  "name": "Spice Organizers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Straw Holders & Dispensers&sortBy=amount",
                  "name": "Straw Holders & Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sugar Caddies&sortBy=amount",
                  "name": "Sugar Caddies",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Toothpick Holders & Dispensers&sortBy=amount",
                  "name": "Toothpick Holders & Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Utensil & Flatware Trays&sortBy=amount",
                  "name": "Utensil & Flatware Trays",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Scrapers&sortBy=amount",
                  "name": "Kitchen Scrapers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bench Scrapers&sortBy=amount",
                  "name": "Bench Scrapers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bowl Scrapers&sortBy=amount",
                  "name": "Bowl Scrapers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Grill Scrapers&sortBy=amount",
                  "name": "Grill Scrapers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Shears&sortBy=amount",
                  "name": "Kitchen Shears",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Slicers&sortBy=amount",
                  "name": "Kitchen Slicers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Kitchen Utensil Sets&sortBy=amount",
                  "name": "Kitchen Utensil Sets",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ladles&sortBy=amount",
                  "name": "Ladles",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Mashers&sortBy=amount",
                  "name": "Mashers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Measuring Cups & Spoons&sortBy=amount",
                  "name": "Measuring Cups & Spoons",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Meat Tenderizers&sortBy=amount",
                  "name": "Meat Tenderizers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Mixing Bowls&sortBy=amount",
                  "name": "Mixing Bowls",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Mortars & Pestles&sortBy=amount",
                  "name": "Mortars & Pestles",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Oil & Vinegar Dispensers&sortBy=amount",
                  "name": "Oil & Vinegar Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Oven Bags&sortBy=amount",
                  "name": "Oven Bags",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Oven Mitts & Pot Holders&sortBy=amount",
                  "name": "Oven Mitts & Pot Holders",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pasta Molds & Stamps&sortBy=amount",
                  "name": "Pasta Molds & Stamps",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pastry Blenders&sortBy=amount",
                  "name": "Pastry Blenders",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pastry Cloths&sortBy=amount",
                  "name": "Pastry Cloths",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pizza Cutter Accessories&sortBy=amount",
                  "name": "Pizza Cutter Accessories",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pizza Cutters&sortBy=amount",
                  "name": "Pizza Cutters",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ricers&sortBy=amount",
                  "name": "Ricers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Rolling Pin Accessories&sortBy=amount",
                  "name": "Rolling Pin Accessories",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Rolling Pin Covers & Sleeves&sortBy=amount",
                  "name": "Rolling Pin Covers & Sleeves",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Rolling Pin Rings&sortBy=amount",
                  "name": "Rolling Pin Rings",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Rolling Pins&sortBy=amount",
                  "name": "Rolling Pins",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Salad Dressing Mixers & Shakers&sortBy=amount",
                  "name": "Salad Dressing Mixers & Shakers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Salad Spinners&sortBy=amount",
                  "name": "Salad Spinners",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Scoops&sortBy=amount",
                  "name": "Scoops",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ice Cream Scoops&sortBy=amount",
                  "name": "Ice Cream Scoops",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ice Scoops&sortBy=amount",
                  "name": "Ice Scoops",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Melon Ballers&sortBy=amount",
                  "name": "Melon Ballers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Popcorn & French Fry Scoops&sortBy=amount",
                  "name": "Popcorn & French Fry Scoops",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sink Caddies&sortBy=amount",
                  "name": "Sink Caddies",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sink Mats & Grids&sortBy=amount",
                  "name": "Sink Mats & Grids",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Slotted Spoons&sortBy=amount",
                  "name": "Slotted Spoons",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Spatulas&sortBy=amount",
                  "name": "Spatulas",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Spice Grinder Accessories&sortBy=amount",
                  "name": "Spice Grinder Accessories",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Spice Grinders&sortBy=amount",
                  "name": "Spice Grinders",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Spoon Rests&sortBy=amount",
                  "name": "Spoon Rests",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sugar Dispensers&sortBy=amount",
                  "name": "Sugar Dispensers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sushi Mats&sortBy=amount",
                  "name": "Sushi Mats",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tea Strainers&sortBy=amount",
                  "name": "Tea Strainers",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tongs&sortBy=amount",
                  "name": "Tongs",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Whisks&sortBy=amount",
                  "name": "Whisks",
    
                  "parent": "Kitchen Tools & Utensils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            },
            {
              "id": 1,
              "name": "Tableware",
              "parent": "Kitchen",
              "slug": "/search?q=Tableware&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/refrigerator.svg",
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Coffee & Tea Sets&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Coffee & Tea Sets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Coffee Servers & Tea Pots&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Coffee Servers & Tea Pots",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Dinnerware&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Dinnerware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bowls&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Bowls",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Dinnerware Sets&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Dinnerware Sets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Plates&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Plates",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Drinkware&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Drinkware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Beer Glasses&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Beer Glasses",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Coffee & Tea Cups&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Coffee & Tea Cups",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Coffee & Tea Saucers&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Coffee & Tea Saucers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Drinkware Sets&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Drinkware Sets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Mugs&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Mugs",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Shot Glasses&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Shot Glasses",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Stemware&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Stemware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tumblers&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Tumblers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Flatware&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Flatware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Chopstick Accessories&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Chopstick Accessories",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Chopsticks&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Chopsticks",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Flatware Sets&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Flatware Sets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Forks&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Forks",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Spoons&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Spoons",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Table Knives&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Table Knives",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Salt & Pepper Shakers&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Salt & Pepper Shakers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Serveware&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Serveware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Butter Dishes&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Butter Dishes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cake Boards&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Cake Boards",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cake Stands&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Cake Stands",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Egg Cups&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Egg Cups",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Gravy Boats&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Gravy Boats",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Punch Bowls&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Punch Bowls",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Serving Pitchers & Carafes&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Serving Pitchers & Carafes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Serving Platters&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Serving Platters",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Serving Trays&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Serving Trays",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sugar Bowls & Creamers&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Sugar Bowls & Creamers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tureens&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Tureens",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Serveware Accessories&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Serveware Accessories",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Punch Bowl Stands&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Punch Bowl Stands",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tureen Lids&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Tureen Lids",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tureen Stands&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Tureen Stands",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tablecloth Clips & Weights&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Tablecloth Clips & Weights",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Trivets&sortBy=amount",
                  "parent": "Tableware",
                  "name": "Trivets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            },
            {
              "id": 1,
              "name": "Food Storage",
              "parent": "Kitchen",
              "slug": "/search?q=Food+Storage&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/refrigerator.svg",
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Bread Boxes & Bags&sortBy=amount",
                  "name": "Bread Boxes & Bags",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Candy Buckets&sortBy=amount",
                  "name": "Candy Buckets",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cookie Jars&sortBy=amount",
                  "name": "Cookie Jars",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Container Covers&sortBy=amount",
                  "name": "Food Container Covers",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Storage Bags&sortBy=amount",
                  "name": "Food Storage Bags",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Storage Containers&sortBy=amount",
                  "name": "Food Storage Containers",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Wraps&sortBy=amount",
                  "name": "Food Wraps",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Foil&sortBy=amount",
                  "name": "Foil",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Parchment Paper&sortBy=amount",
                  "name": "Parchment Paper",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Plastic Wrap&sortBy=amount",
                  "name": "Plastic Wrap",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Wax Paper&sortBy=amount",
                  "name": "Wax Paper",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Honey Jars&sortBy=amount",
                  "name": "Honey Jars",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Storage Accessories&sortBy=amount",
                  "name": "Food Storage Accessories",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food & Beverage Labels&sortBy=amount",
                  "name": "Food & Beverage Labels",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Food Wrap Dispensers&sortBy=amount",
                  "name": "Food Wrap Dispensers",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Oxygen Absorbers&sortBy=amount",
                  "name": "Oxygen Absorbers",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Twist Ties & Bag Clips&sortBy=amount",
                  "name": "Twist Ties & Bag Clips",
                  "parent": "Food Storage",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            },
            {
              "id": 1,
              "name": "Bakeware",
              "parent": "Kitchen",
              "slug": "/search?q=bakeware&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/refrigerator.svg",
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Bakeware Sets&sortBy=amount",
                  "name": "Bakeware Sets",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Baking & Cookie Sheets&sortBy=amount",
                  "name": "Baking & Cookie Sheets",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bread Pans & Molds&sortBy=amount",
                  "name": "Bread Pans & Molds",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Broiling Pans&sortBy=amount",
                  "name": "Broiling Pans",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Cake Pans & Molds&sortBy=amount",
                  "name": "Cake Pans & Molds",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Muffin & Pastry Pans&sortBy=amount",
                  "name": "Muffin & Pastry Pans",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pie & Quiche Pans&sortBy=amount",
                  "name": "Pie & Quiche Pans",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pizza Pans&sortBy=amount",
                  "name": "Pizza Pans",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Pizza Stones&sortBy=amount",
                  "name": "Pizza Stones",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ramekins & Souffle Dishes&sortBy=amount",
                  "name": "Ramekins & Souffle Dishes",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Roasting Pans&sortBy=amount",
                  "name": "Roasting Pans",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bakeware Accessories&sortBy=amount",
                  "name": "Bakeware Accessories",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Baking Mats & Liners&sortBy=amount",
                  "name": "Baking Mats & Liners",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Baking Weights&sortBy=amount",
                  "name": "Baking Weights",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Roasting Pan Racks&sortBy=amount",
                  "name": "Roasting Pan Racks",
                  "parent": "Bakeware",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            }
          ]
        },
        {
          "id": 2,
          "name": "Home Appliances",
          "slug": "/search?q=home+appliances&sortBy=amount",
          "image": {
            "mobile": {
              "url": "ibynn-ui2/src/images/collections/homedepartment.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "ibynn-ui2/src/images/collections/homedepartment.png",
              "width": 475,
              "height": 250
            }
          },
          "icon": "ibynn-ui2/src/images/collections/homedepartment.png",
          "children": [
            {
              "id": 1,
              "name": "Washing Machines",
              "parent": "Home Appliances",
              "slug": "/search?q=laundry+washing+machines&min_price=300",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/washer.png",
              "children": [
                {
                  "id": 1,
                  "name": "Washing Machines",
                  "parent": "Washing Machines",
                  "slug": "/search?q=laundry+washing+machines&min_price=300",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/washer.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Dryer Machines",
              "parent": "Home Appliances",
              "slug": "/search?q=laundry+clothing+dryer&min_price=300",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/dryer.png",
              "children": [
                {
                  "id": 1,
                  "name": "Dryer Machines",
                  "parent": "Dryer Machines",
                  "slug": "/search?q=laundry+clothing+dryer&min_price=300",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/dryer.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Toaster",
              "parent": "Home Appliances",
              "slug": "/search?q=bread+toaster&min_price=30",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/toaster.png",
              "children": [
                {
                  "id": 1,
                  "name": "Toaster",
                  "parent": "Toaster",
                  "slug": "/search?q=bread+toaster&min_price=30",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/toaster.png"
                }
              ]
            },
    
            {
              "id": 1,
              "name": "Freezer",
              "parent": "Home Appliances",
              "slug": "/search?q=food+Freezer&min_price=350",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/freezer.png",
              "children": [
                {
                  "id": 1,
                  "name": "Freezer",
                  "parent": "Freezer",
                  "slug": "/search?q=food+Freezer&min_price=350",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/freezer.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Air conditioner",
              "parent": "Home Appliances",
              "slug": "/search?q=home+Air+conditioner&min_price=250",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/ac.png",
              "children": [
                {
                  "id": 1,
                  "name": "Air conditioner",
                  "parent": "Air conditioner",
                  "slug": "/search?q=home+Air+conditioner&min_price=250",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/ac.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Fans",
              "parent": "Home Appliances",
              "slug": "/search?q=house+fans&min_price=65",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/fan.png",
              "children": [
                {
                  "id": 1,
                  "name": "Fans",
                  "parent": "Fans",
                  "slug": "/search?q=house+fans&min_price=65",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/fan.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Blender",
              "parent": "Home Appliances",
              "slug": "/search?q=food+Blender&min_price=50",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/blender.png",
              "children": [
                {
                  "id": 1,
                  "name": "Blender",
                  "parent": "Blender",
                  "slug": "/search?q=food+Blender&min_price=50",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/blender.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Coffeemaker",
              "parent": "Home Appliances",
              "slug": "/search?q=Coffeemaker&min_price=75",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/coffee.png",
              "children": [
                {
                  "id": 1,
                  "name": "Coffeemaker",
                  "parent": "Coffeemaker",
                  "slug": "/search?q=Coffeemaker&min_price=75",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/coffee.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Dishwasher",
              "parent": "Home Appliances",
              "slug": "/search?q=home+Dishwasher&min_price=300",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/dishwasher.png",
              "children": [
                {
                  "id": 1,
                  "name": "Dishwasher",
                  "parent": "Dishwasher",
                  "slug": "/search?q=home+Dishwasher&min_price=300",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/dishwasher.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Stove",
              "parent": "Home Appliances",
              "slug": "/search?q=home+cooking+stove&min_price=300",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/stove.png",
              "children": [
                {
                  "id": 1,
                  "name": "Stove",
                  "parent": "Stove",
                  "slug": "/search?q=home+cooking+stove&min_price=300",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/stove.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Oven",
              "parent": "Home Appliances",
              "slug": "/search?q=food+oven&min_price=300",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/oven.png",
              "children": [
                {
                  "id": 1,
                  "name": "Oven",
                  "parent": "Oven",
                  "slug": "/search?q=food+oven&min_price=300",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/oven.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Food processor",
              "parent": "Home Appliances",
              "slug": "/search?q=electric+Food+processor&min_price=35",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/food-processor.png",
              "children": [
                {
                  "id": 1,
                  "name": "Food processor",
                  "parent": "Food processor",
                  "slug": "/search?q=electric+Food+processor&min_price=35",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/food-processor.png"
                }
              ]
            },
    
            {
              "id": 1,
              "name": "Mixer",
              "parent": "Home Appliances",
              "slug": "/search?q=food+electric+mixer&min_price=15",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/mixer.png",
              "children": [
                {
                  "id": 1,
                  "name": "Mixer",
                  "parent": "Mixer",
                  "slug": "/search?q=food+electric+mixer&min_price=15",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/mixer.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Juicer",
              "parent": "Home Appliances",
              "slug": "/search?q=electric+home+juicer&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/juicer.png",
              "children": [
                {
                  "id": 1,
                  "name": "Juicer",
                  "parent": "Juicer",
                  "slug": "/search?q=electric+home+juicer&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/juicer.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Vacuum cleaner",
              "parent": "Home Appliances",
              "slug": "/search?q=home+vacuum+cleaner&min_price=50",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/vacuum.png",
              "children": [
                {
                  "id": 1,
                  "name": "Vacuum cleaner",
                  "parent": "Vacuum cleaner",
                  "slug": "/search?q=home+vacuum+cleaner&min_price=50",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/vacuum.png"
                }
              ]
            },
            {
              "id": 1,
              "name": "Ironer",
              "parent": "Home Appliances",
              "slug": "/search?q=clothing+ironer&min_price=26",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/ironer.png",
              "children": [
                {
                  "id": 1,
                  "name": "Ironer",
                  "parent": "Ironer",
                  "slug": "/search?q=clothing+ironer&min_price=26",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/ironer.png"
                }
              ]
            }
          ]
        },
        {
          "id": 3,
          "name": "Electronics",
          "slug": "/search?q=Electronics&sortBy=amount",
          "image": {
            "mobile": {
              "url": "ibynn-ui2/src/images/collections/electronicsdepartment.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "ibynn-ui2/src/images/collections/electronicsdepartment.png",
              "width": 475,
              "height": 250
            }
          },
          "icon": "ibynn-ui2/src/images/collections/electronicsdepartment.png",
          "children": [
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Audio&sortBy=amount",
              "name": "Audio",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/audio.png",
              "children": [
                {
                  "id": 1,
                  "parent": "Audio",
                  "slug": "/search?q=Headphones & Headsets&sortBy=amount",
                  "name": "Headphones & Headsets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/headphones.png"
                },
                {
                  "id": 1,
                  "parent": "Audio",
                  "slug": "/search?q=Microphones&sortBy=amount",
                  "name": "Microphones",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/microphone.png"
                },
    
                {
                  "id": 1,
                  "parent": "Audio",
                  "slug": "/search?q=Speakers&sortBy=amount",
                  "name": "Speakers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/speaker.png"
                },
                {
                  "id": 1,
                  "parent": "Audio",
                  "slug": "/search?q=Audio Players & Recorders&sortBy=amount",
                  "name": "Audio Players & Recorders",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/recorder.png"
                },
                {
                  "id": 1,
                  "parent": "Audio",
                  "slug": "/search?q=Boomboxes&sortBy=amount",
                  "name": "Boomboxes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/boombox.png"
                },
                {
                  "id": 1,
                  "parent": "Audio",
                  "slug": "/search?q=CD Players & Recorders&sortBy=amount",
                  "name": "CD Players & Recorders",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/cd-player.png"
                }
              ]
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=walkie+talkie+radios&sortBy=amount",
              "name": "Walkie Talkies",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/walkie.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=smart+phones&min_price=121",
              "name": "Smart Phones",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/phone.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Desktop+computers&min_price=98",
              "name": "Desktop Computers",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/desktop.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Laptops&min_price=115",
              "name": "Laptops",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/laptop.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=tablet+devices&sortBy=amount",
              "name": "Tablets",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/tablet.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Wireless Routers&sortBy=amount",
              "name": "Wireless Routers",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/router.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Modems&sortBy=amount",
              "name": "Modems",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/modem.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Print, Copy, Scan & Fax&sortBy=amount",
              "name": "Printing",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/printer.png",
              "children": [
                {
                  "id": 1,
                  "parent": "Printing",
                  "slug": "/search?q=3D Printers&sortBy=amount",
                  "name": "3D Printers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/3d-printer.png"
                },
                {
                  "id": 1,
                  "parent": "Printing",
                  "slug": "/search?q=Paper+Printer+Toner+Inkjet+Cartridges&sortBy=amount",
                  "name": "Toner, Cartridges & Refils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/cartridge.png"
                },
                {
                  "id": 1,
                  "parent": "Printing",
                  "slug": "/search?q=Printers+Copiers+&+Fax Machines&sortBy=amount",
                  "name": "Printers, Copiers & Fax Machines",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/copier.png"
                },
                {
                  "id": 1,
                  "parent": "Printing",
                  "slug": "/search?q=home+office+document+Scanners&sortBy=amount",
                  "name": "Scanners",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/scanner.png"
                }
              ]
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Multimedia Projectors&sortBy=amount",
              "name": "Projectors",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/projector.png"
            },
            {
              "id": 1,
              "parent": "Electronics",
              "slug": "/search?q=Televisions&sortBy=amount",
              "name": "Televisions",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/tv.png",
              "children": [
                {
                  "id": 1,
                  "parent": "Televisions",
                  "slug": "/search?q=TV & Monitor Mounts&sortBy=amount",
                  "name": "Smart TVs",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/smart-tv.png"
                },
                {
                  "id": 1,
                  "parent": "Televisions",
                  "slug": "/search?q=TV & Monitor Mounts&sortBy=amount",
                  "name": "Digital Media Player",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/digital-media-player.png",
                  "children": [
                    {
                      "id": 1,
                      "parent": "Digital media player",
                      "slug": "/search?q=Apple TV&sortBy=amount",
                      "name": "Apple TV",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/apple-tv.png"
                    },
                    {
                      "id": 1,
                      "parent": "Digital media player",
                      "slug": "/search?q=Chromecast&sortBy=amount",
                      "name": "Chromecast",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/chromecast.png"
                    }
                  ]
                },
                {
                  "id": 1,
                  "parent": "Televisions",
                  "slug": "/search?q=TV & Monitor Mounts&sortBy=amount",
                  "name": "TV & Monitor Mounts",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/tv-mount.png"
                }
              ]
            }
          ]
        },
        {
          "id": 4,
          "slug": "/search?q=Office Supplies&sortBy=amount",
          "name": "Office Supplies",
          "image": {
            "mobile": {
              "url": "/ibynn-ui2/src/images/collections/officedepartment.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "ibynn-ui2/src/images/collections/officedepartment.png",
              "width": 475,
              "height": 250
            }
          },
          "icon": "/assets/images/category/icon/office supplies.svg",
          "children": [
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Pencils&sortBy=amount",
              "name": "Pencils",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/pencils.png",
              "children": [
                {
                  "id": 1,
                  "parent": "Pencils",
                  "slug": "/search?q=Art Pencils&sortBy=amount",
                  "name": "Art Pencils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/art-pencils.png"
                },
                {
                  "id": 1,
                  "parent": "Office Supplies",
                  "slug": "/search?q=Mechanical Pencils&sortBy=amount",
                  "name": "Mechanical Pencils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/lead-pencils.png"
                },
                {
                  "id": 1,
                  "parent": "Office Supplies",
                  "slug": "/search?q=Wooden Pencils&sortBy=amount",
                  "name": "Wooden Pencils",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/wooden-pencil.png"
                }
              ]
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Binders&sortBy=amount",
              "name": "Binders",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/binder.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Calendars, Organizers & Planners&sortBy=amount",
              "name": "Calendars",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/calendar.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Correction Fluids, Pens & Tapes&sortBy=amount",
              "name": "Correction Tape",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/correction-tape.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Erasers&sortBy=amount",
              "name": "Erasers",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/erasers.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Labels & Tags&sortBy=amount",
              "name": "Labels & Tags",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/labels.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Office Tape&sortBy=amount",
              "name": "Office Tape",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/tape.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Paper Clips&sortBy=amount",
              "name": "Paper Clips",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/paper-clips.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Envelopes&sortBy=amount",
              "name": "Envelopes",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/envelopes.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Index Cards&sortBy=amount",
              "name": "Index Cards",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/index cards.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Notebooks & Notepads&sortBy=amount",
              "name": "Notebooks & Notepads",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/notebooks.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Printer & Copier Paper&sortBy=amount",
              "name": "Printer & Copier Paper",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/printing-paper.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Sticky Notes&sortBy=amount",
              "name": "Sticky Notes",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/sticky-notes.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Calculators&sortBy=amount",
              "name": "Calculators",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/calculator.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Label Makers&sortBy=amount",
              "name": "Label Makers",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/label-maker.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Office Shredders&sortBy=amount",
              "name": "Office Shredders",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/shredder.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Clipboards&sortBy=amount",
              "name": "Clipboards",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/clipboard.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Office Rubber Stamps&sortBy=amount",
              "name": "Rubber Stamps",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/stamp.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Pencil Sharpeners&sortBy=amount",
              "name": "Pencil Sharpeners",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/sharpener.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Staple Removers&sortBy=amount",
              "name": "Staple Removers",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/staple-remover.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Staplers&sortBy=amount",
              "name": "Staplers",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/staplers.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Chalk&sortBy=amount",
              "name": "Chalk",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/chalk.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Crayons&sortBy=amount",
              "name": "Crayons",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/crayons.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Markers & Highlighters&sortBy=amount",
              "name": "Markers & Highlighters",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/markers.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Hole Puncher&sortBy=amount",
              "name": "Hole Puncher",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/hole-puncher.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Chalkboards&sortBy=amount",
              "name": "Chalkboards",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/chalk-board.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Bulletin Boards&sortBy=amount",
              "name": "Bulletin Boards",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/bulletin-board.png"
            },
            {
              "id": 1,
              "parent": "Office Supplies",
              "slug": "/search?q=Moving & Shipping Boxes&sortBy=amount",
              "name": "Shipping Boxes",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "icon": "/assets/images/category/icon/packing-boxes.png"
            }
          ]
        },
        {
          "id": 5,
          "name": "Cosmetics & Cologne",
          "parent": "Cosmetics & Cologne",
          "slug": "/search?q=Cosmetics&sortBy=massVolume",
          "icon": "/assets/images/category/icon/personal-care.svg",
          "image": {
            "mobile": {
              "url": "ibynn-ui2/src/images/collections/cosmeticsdepartment.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "ibynn-ui2/src/images/collections/cosmeticsdepartment.png",
              "width": 475,
              "height": 250
            }
          },
          "children": [
            {
              "id": 1,
              "slug": "/search?q=Perfume & Cologne&sortBy=massVolume",
              "name": "Perfume & Cologne",
              "parent": "Cosmetics & Cologne",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 5,
                  "name": "Eau De Parfume",
                  "parent": "Perfume & Cologne",
                  "slug": "/search?q=Eau De Parfume&sortBy=massVolume",
                  "icon": "/assets/images/category/icon/personal-care.svg",
                  "children": [
                    {
                      "id": 5,
                      "name": "Mens",
                      "parent": "Eau De Parfume",
                      "slug": "/search?q=mens male Eau De Parfume&sortBy=massVolume",
                      "icon": "/assets/images/category/icon/personal-care.svg"
                    },
                    {
                      "id": 5,
                      "name": "Womens",
                      "parent": "Eau De Parfume",
                      "slug": "/search?q=women female Eau De Parfume&sortBy=massVolume",
                      "icon": "/assets/images/category/icon/personal-care.svg"
                    }
                  ]
                },
                {
                  "id": 5,
                  "name": "Eau De Toilete",
                  "parent": "Perfume & Cologne",
                  "slug": "/search?q=Cosmetics&sortBy=massVolume",
                  "icon": "/assets/images/category/icon/personal-care.svg",
                  "children": [
                    {
                      "id": 5,
                      "name": "Mens",
                      "parent": "Eau De Toilete",
                      "slug": "/search?q=mens male Eau De toilete&sortBy=massVolume",
                      "icon": "/assets/images/category/icon/personal-care.svg"
                    },
                    {
                      "id": 5,
                      "name": "Womens",
                      "parent": "Eau De Toilete",
                      "slug": "/search?q=womens female Eau De toilete&sortBy=massVolume",
                      "icon": "/assets/images/category/icon/personal-care.svg"
                    }
                  ]
                }
              ]
            },
            {
              "id": 1,
              "name": "Makeup",
              "parent": "Cosmetics & Cologne",
              "slug": "/search?q=makeup&sortBy=massVolume",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Body Makeup",
                  "parent": "Makeup",
                  "slug": "/search?q=body+makeup&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Body & Hair Glitter&sortBy=massVolume",
                      "name": "Body & Hair Glitter",
                      "parent": "Body Makeup",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Body Paint & Foundation&sortBy=massVolume",
                      "name": "Body Paint & Foundation",
                      "parent": "Body Makeup",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Costume & Stage Makeup&sortBy=massVolume",
                      "name": "Costume & Stage Makeup",
                      "parent": "Body Makeup",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                },
                {
                  "id": 1,
                  "name": "Eye Makeup",
                  "parent": "Makeup",
                  "slug": "/search?q=eye+makeup&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Eye Primer&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Eye Primer",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Eye Shadow&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Eye Shadow",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Eyebrow Enhancers&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Eyebrow Enhancers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Eyeliner&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Eyeliner",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=False Eyelashes&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "False Eyelashes",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Lash & Brow Growth Treatments&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Lash & Brow Growth Treatments",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Mascara&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Mascara",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Mascara Primer&sortBy=massVolume",
                      "parent": "Eye Makeup",
                      "name": "Mascara Primer",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                },
                {
                  "id": 1,
                  "name": "Face Makeup",
                  "parent": "Makeup",
                  "slug": "/search?q=face+makeup&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Blushes & Bronzers&sortBy=massVolume",
                      "parent": "Face Makeup",
                      "name": "Blushes & Bronzers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Face Powder&sortBy=massVolume",
                      "parent": "Face Makeup",
                      "name": "Face Powder",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Face Primer&sortBy=massVolume",
                      "parent": "Face Makeup",
                      "name": "Face Primer",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Foundations & Concealers&sortBy=massVolume",
                      "parent": "Face Makeup",
                      "name": "Foundations & Concealers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Highlighters & Luminizers&sortBy=massVolume",
                      "parent": "Face Makeup",
                      "name": "Highlighters & Luminizers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                },
                {
                  "id": 1,
                  "name": "Lip Makeup",
                  "parent": "Makeup",
                  "slug": "/search?q=Lip+makeup&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Lip & Cheek Stains&sortBy=massVolume",
                      "parent": "Lip Makeup",
                      "name": "Lip & Cheek Stains",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Lip Gloss&sortBy=massVolume",
                      "parent": "Lip Makeup",
                      "name": "Lip Gloss",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Lip Liner&sortBy=massVolume",
                      "parent": "Lip Makeup",
                      "name": "Lip Liner",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Lip Primer&sortBy=massVolume",
                      "parent": "Lip Makeup",
                      "name": "Lip Primer",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Lipstick&sortBy=massVolume",
                      "parent": "Lip Makeup",
                      "name": "Lipstick",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                }
              ]
            },
            {
              "id": 1,
              "name": "Bath & Body",
              "parent": "Cosmetics & Cologne",
              "slug": "/search?q=Bath&body&sortBy=massVolume",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Adult Hygienic Wipes&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Adult Hygienic Wipes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bar Soap&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Bar Soap",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bath Additives&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Bath Additives",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bath Brushes&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Bath Brushes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bath Sponges & Loofahs&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Bath Sponges & Loofahs",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Body Wash&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Body Wash",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Hand Sanitizers & Wipes&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Hand Sanitizers & Wipes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Liquid Hand Soap&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Liquid Hand Soap",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Powdered Hand Soap&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Powdered Hand Soap",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Shower Caps&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Shower Caps",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Bath & Body Gift Sets&sortBy=massVolume",
                  "parent": "Bath & Body",
                  "name": "Bath & Body Gift Sets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            },
            {
              "id": 1,
              "name": "Cosmetic Tools",
              "parent": "Cosmetics & Cologne",
              "slug": "/search?q=Cosmetic Tools&sortBy=massVolume",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Makeup Tools",
                  "parent": "Cosmetic Tools",
                  "slug": "/search?q=Makeup Tools&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Double Eyelid Glue & Tape&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Double Eyelid Glue & Tape",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Eyebrow Stencils&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Eyebrow Stencils",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Eyelash Curler Refills&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Eyelash Curler Refills",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Eyelash Curlers&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Eyelash Curlers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Face Mirrors&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Face Mirrors",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Facial Blotting Paper&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Facial Blotting Paper",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=False Eyelash Accessories&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "False Eyelash Accessories",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=False Eyelash Adhesive&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "False Eyelash Adhesive",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=False Eyelash Applicators&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "False Eyelash Applicators",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=False Eyelash Remover&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "False Eyelash Remover",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Makeup Brushes&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Makeup Brushes",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Makeup Sponges&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Makeup Sponges",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Refillable Makeup Palettes & Cases&sortBy=massVolume",
                      "parent": "Makeup Tools",
                      "name": "Refillable Makeup Palettes & Cases",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                },
                {
                  "id": 1,
                  "name": "Nail Tools",
                  "parent": "Cosmetic Tools",
                  "slug": "/search?q=Nail Tools&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Cuticle Pushers&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Cuticle Pushers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Cuticle Scissors&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Cuticle Scissors",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Manicure & Pedicure Spacers&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Manicure & Pedicure Spacers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Manicure Tool Sets&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Manicure Tool Sets",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Nail Buffers&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Nail Buffers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Nail Clippers&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Nail Clippers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Nail Drill Accessories&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Nail Drill Accessories",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Nail Drills&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Nail Drills",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Nail Dryers&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Nail Dryers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Nail Files & Emery Boards&sortBy=massVolume",
                      "parent": "Nail Tools",
                      "name": "Nail Files & Emery Boards",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                },
                {
                  "id": 1,
                  "name": "Skin Care Tools",
                  "parent": "Cosmetic Tools",
                  "slug": "/search?q=Skin Care Tools&sortBy=massVolume",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "children": [
                    {
                      "id": 1,
                      "slug": "/search?q=Facial Saunas&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Facial Saunas",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Foot Files&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Foot Files",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Lotion & Sunscreen Applicators&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Lotion & Sunscreen Applicators",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Pumice Stones&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Pumice Stones",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Skin Care Extractors&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Skin Care Extractors",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Skin Care Rollers&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Skin Care Rollers",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Skin Cleansing Brush Heads&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Skin Cleansing Brush Heads",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    },
                    {
                      "id": 1,
                      "slug": "/search?q=Skin Cleansing Brushes & Systems&sortBy=massVolume",
                      "parent": "Skin Care Tools",
                      "name": "Skin Cleansing Brushes & Systems",
                      "image": {
                        "mobile": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        },
                        "desktop": {
                          "url": "/assets/images/category/camera.png",
                          "width": 475,
                          "height": 250
                        }
                      },
                      "icon": "/assets/images/category/icon/home-goods.svg"
                    }
                  ]
                }
              ]
            },
            {
              "id": 1,
              "name": "Nail Care",
              "parent": "Cosmetics & Cologne",
              "slug": "/search?q=Nail Care&sortBy=massVolume",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Cuticle Cream & Oil&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Cuticle Cream & Oil",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=False Nails&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "False Nails",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Manicure Glue&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Manicure Glue",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Nail Art Kits & Accessories&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Nail Art Kits & Accessories",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Nail Polish Drying Drops & Sprays&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Nail Polish Drying Drops & Sprays",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Nail Polish Removers&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Nail Polish Removers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Nail Polish Thinners&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Nail Polish Thinners",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Nail Polishes&sortBy=massVolume",
                  "parent": "Nail Care",
                  "name": "Nail Polishes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            },
            {
              "id": 1,
              "name": "Skin Care",
              "parent": "Cosmetics & Cologne",
              "slug": "/search?q=Skin Care&sortBy=massVolume",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Acne Treatments & Kits&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Acne Treatments & Kits",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Anti-Aging Skin Care Kits&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Anti-Aging Skin Care Kits",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Body Oil&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Body Oil",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Body Powder&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Body Powder",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Compressed Skin Care Mask Sheets&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Compressed Skin Care Mask Sheets",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Facial Cleansers&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Facial Cleansers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Facial Cleansing Kits&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Facial Cleansing Kits",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Facial Pore Strips&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Facial Pore Strips",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Lip Balms & Treatments&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Lip Balms & Treatments",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Lip Balms&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Lip Balms",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Medicated Lip Treatments&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Medicated Lip Treatments",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Lotion & Moisturizer&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Lotion & Moisturizer",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Makeup Removers&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Makeup Removers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Petroleum Jelly&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Petroleum Jelly",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Skin Care Masks & Peels&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Skin Care Masks & Peels",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Skin Insect Repellent&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Skin Insect Repellent",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Sunscreen&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Sunscreen",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tanning Products&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Tanning Products",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Self Tanner&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Self Tanner",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Tanning Oil & Lotion&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Tanning Oil & Lotion",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Toners & Astringents&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Toners & Astringents",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Astringents&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Astringents",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Toners&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Toners",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                },
                {
                  "id": 1,
                  "slug": "/search?q=Wart Removers&sortBy=massVolume",
                  "parent": "Skin Care",
                  "name": "Wart Removers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  },
                  "icon": "/assets/images/category/icon/home-goods.svg"
                }
              ]
            }
          ]
        },
        {
          "id": 6,
          "name": "Personal Care",
          "parent": "Personal Care",
          "slug": "/search?q=Personal Care&sortBy=amount",
          "icon": "/assets/images/category/icon/personal-care.svg",
          "image": {
            "mobile": {
              "url": "ibynn-ui2/src/images/collections/department2.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "ibynn-ui2/src/images/collections/department2.png",
              "width": 475,
              "height": 250
            }
          },
          "children": [
            {
              "id": 1,
              "slug": "/search?q=Cotton Balls&sortBy=amount",
              "parent": "Personal Care",
              "name": "Cotton Balls",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              }
            },
            {
              "id": 1,
              "slug": "/search?q=Cotton Swabs&sortBy=amount",
              "parent": "Personal Care",
              "name": "Cotton Swabs",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              }
            },
            {
              "id": 1,
              "slug": "/search?q=Deodorant & Anti-Perspirant&sortBy=amount",
              "parent": "Personal Care",
              "name": "Deodorant & Anti-Perspirant",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Anti-Perspirant&sortBy=amount",
                  "parent": "Deodorant & Anti-Perspirant",
                  "name": "Anti-Perspirant",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Deodorant&sortBy=amount",
                  "name": "Deodorant",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "slug": "/search?q=Ear Care&sortBy=amount",
              "parent": "Personal Care",
              "name": "Ear Care",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "slug": "/search?q=Ear Candles&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Ear Candles",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ear Drops&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Ear Drops",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ear Dryers&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Ear Dryers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ear Picks & Spoons&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Ear Picks & Spoons",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ear Syringes&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Ear Syringes",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Ear Wax Removal Kits&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Ear Wax Removal Kits",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Earplug Dispensers&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Earplug Dispensers",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "slug": "/search?q=Earplugs&sortBy=amount",
                  "parent": "Ear Care",
                  "name": "Earplugs",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "id": 7,
          "slug": "/search?q=Health & Beauty&sortBy=amount",
          "name": "Health & Beauty",
          "image": {
            "mobile": {
              "url": "ibynn-ui2/src/images/collections/beautydepartment.png",
              "width": 475,
              "height": 250
            },
            "desktop": {
              "url": "ibynn-ui2/src/images/collections/beautydepartment.png",
              "width": 475,
              "height": 250
            }
          },
          "icon": "/assets/images/category/icon/personal-care.svg",
          "children": [
            {
              "id": 1,
              "name": "Jewelry Cleaning & Care",
              "slug": "/search?q=Health & Beauty&sortBy=amount",
              "parent": "Health & Beauty",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Jewelry Cleaning Solutions & Polishes",
                  "parent": "Jewelry Cleaning & Care",
                  "slug": "/search?q=Jewelry Cleaning Solutions & Polishes&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Jewelry Cleaning Tools",
                  "parent": "Jewelry Cleaning & Care",
                  "slug": "/search?q=Jewelry Cleaning Tools&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Jewelry Holders",
                  "parent": "Jewelry Cleaning & Care",
                  "slug": "/search?q=Jewelry Holders&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Jewelry Steam Cleaners",
                  "parent": "Jewelry Cleaning & Care",
                  "slug": "/search?q=Jewelry Steam Cleaners&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Watch Repair Kits",
                  "parent": "Jewelry Cleaning & Care",
                  "slug": "/search?q=Watch Repair Kits&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Blood Health",
              "parent": "Health & Beauty",
              "slug": "/search?q=medical+tests&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Blood Glucose Test Strips",
                  "parent": "Blood Health",
                  "slug": "/search?q=Blood Glucose Test Strips&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Lancing Devices",
                  "parent": "Blood Health",
                  "slug": "/search?q=Lancing Devices&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Blood Pressure Monitor Cuffs",
                  "parent": "Blood Health",
                  "slug": "/search?q=Blood Pressure Monitor Cuffs&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Biometric Monitors",
                  "parent": "Blood Health",
                  "slug": "/search?q=Biometric Monitors&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Activity Monitors",
                  "parent": "Blood Health",
                  "slug": "/search?q=Activity Monitors&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Blood Glucose Meters",
                  "parent": "Blood Health",
                  "slug": "/search?q=Blood Glucose Meters&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Blood Pressure Monitors",
                  "parent": "Blood Health",
                  "slug": "/search?q=Blood Pressure Monitors&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Body Fat Analyzers",
                  "parent": "Blood Health",
                  "slug": "/search?q=Body Fat Analyzers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Body Weight Scales",
                  "parent": "Blood Health",
                  "slug": "/search?q=Body Weight Scales&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Breathalyzers",
                  "parent": "Blood Health",
                  "slug": "/search?q=Breathalyzers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Cholesterol Analyzers",
                  "parent": "Blood Health",
                  "slug": "/search?q=Cholesterol Analyzers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Fertility",
              "parent": "Health & Beauty",
              "slug": "/search?q=medical+tests&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Fertility Tests & Monitors",
                  "parent": "Fertility",
                  "slug": "/search?q=Fertility Tests & Monitors&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Ovulation Tests",
                  "parent": "Fertility",
                  "slug": "/search?q=Ovulation Tests&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "First Aid",
              "parent": "Health & Beauty",
              "slug": "/search?q=first+aid&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Antiseptics & Cleaning Supplies",
                  "parent": "First Aid",
                  "slug": "/search?q=Antiseptics & Cleaning Supplies&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Cast & Bandage Protectors",
                  "parent": "First Aid",
                  "slug": "/search?q=Cast & Bandage Protectors&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Eye Wash Supplies",
                  "parent": "First Aid",
                  "slug": "/search?q=Eye Wash Supplies&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "First Aid Kits",
                  "parent": "First Aid",
                  "slug": "/search?q=First Aid Kits&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Hot & Cold Therapies",
                  "parent": "First Aid",
                  "slug": "/search?q=Hot & Cold Therapies&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Heat Rubs",
                  "parent": "First Aid",
                  "slug": "/search?q=Heat Rubs&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Heating Pads",
                  "parent": "First Aid",
                  "slug": "/search?q=Heating Pads&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Ice Packs",
                  "parent": "First Aid",
                  "slug": "/search?q=Ice Packs&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Medical Tape & Bandages",
                  "parent": "First Aid",
                  "slug": "/search?q=Medical Tape & Bandages&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Fitness & Nutrition",
              "parent": "Health & Beauty",
              "slug": "/search?q=medical+tests&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Nutrition Bars",
                  "parent": "Fitness & Nutrition",
                  "slug": "/search?q=Nutrition Bars&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Nutrition Drinks & Shakes",
                  "parent": "Fitness & Nutrition",
                  "slug": "/search?q=Nutrition Drinks & Shakes&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Nutrition Gels & Chews",
                  "parent": "Fitness & Nutrition",
                  "slug": "/search?q=Nutrition Gels & Chews&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Nutritional Food Purées",
                  "parent": "Fitness & Nutrition",
                  "slug": "/search?q=Nutritional Food Purées&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Tube Feeding Supplements",
                  "parent": "Fitness & Nutrition",
                  "slug": "/search?q=Tube Feeding Supplements&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Vitamins & Supplements",
                  "parent": "Fitness & Nutrition",
                  "slug": "/search?q=Vitamins & Supplements&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Medical Tests",
              "parent": "Health & Beauty",
              "slug": "/search?q=medical+tests&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Allergy Test Kits",
                  "parent": "Medical Tests",
                  "slug": "/search?q=Allergy Test Kits&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Blood Typing Test Kits",
                  "parent": "Medical Tests",
                  "slug": "/search?q=Blood Typing Test Kits&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Drug Tests",
                  "parent": "Medical Tests",
                  "slug": "/search?q=Drug Tests&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "HIV Tests",
                  "parent": "Medical Tests",
                  "slug": "/search?q=HIV Tests&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Pregnancy Tests",
                  "parent": "Medical Tests",
                  "slug": "/search?q=Pregnancy Tests&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Urinary Tract Infection Tests",
                  "parent": "Medical Tests",
                  "slug": "/search?q=Urinary Tract Infection Tests&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Medicine & Drugs",
              "parent": "Health & Beauty",
              "slug": "/search?q=Medicine&Drugs&sortBy=amount",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Pillboxes",
                  "parent": "Medicine & Drugs",
                  "slug": "/search?q=Pillboxes&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Pain Killers",
                  "parent": "Medicine & Drugs",
                  "slug": "/search?q=pain+killers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Mobility & Accessibility",
              "slug": "/search?q=Health & Beauty&sortBy=amount",
              "parent": "Health & Beauty",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Accessibility Equipment",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Accessibility Equipment&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Mobility Scooters",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Mobility Scooters&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Supports & Braces",
                  "parent": "Health & Beauty",
                  "slug": "/search?q=Supports & Braces&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Stair Lifts",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Stair Lifts&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Transfer Boards & Sheets",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Transfer Boards & Sheets&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Wheelchairs",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Wheelchairs&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Accessibility Furniture & Fixtures",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Accessibility Furniture & Fixtures&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Shower Benches & Seats",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Shower Benches & Seats&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Walking Aid Accessories",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Walking Aid Accessories&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Walking Aids",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Walking Aids&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Canes & Walking Sticks",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Canes & Walking Sticks&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
    
                {
                  "id": 1,
                  "name": "Back Care",
                  "parent": "Health & Beauty",
                  "slug": "/search?q=Back Care&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Back & Lumbar Support Cushions",
                  "parent": "Health & Beauty",
                  "slug": "/search?q=Back & Lumbar Support Cushions&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Crutches",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Crutches&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Walkers",
                  "parent": "Mobility & Accessibility",
                  "slug": "/search?q=Walkers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Occupational & Physical Therapy",
              "slug": "/search?q=Health & Beauty&sortBy=amount",
              "parent": "Health & Beauty",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Electrical Muscle Stimulators",
                  "parent": "Occupational & Physical Therapy",
                  "slug": "/search?q=Electrical Muscle Stimulators&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Therapeutic Swings",
                  "parent": "Occupational & Physical Therapy",
                  "slug": "/search?q=Therapeutic Swings&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            },
            {
              "id": 1,
              "name": "Respiratory Care",
              "slug": "/search?q=Health & Beauty&sortBy=amount",
              "parent": "Health & Beauty",
              "image": {
                "mobile": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                },
                "desktop": {
                  "url": "/assets/images/category/camera.png",
                  "width": 475,
                  "height": 250
                }
              },
              "children": [
                {
                  "id": 1,
                  "name": "Nebulizers",
                  "parent": "Respiratory Care",
                  "slug": "/search?q=Nebulizers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Oxygen Tanks",
                  "parent": "Respiratory Care",
                  "slug": "/search?q=Oxygen Tanks&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "PAP Machines",
                  "parent": "Respiratory Care",
                  "slug": "/search?q=PAP Machines&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "PAP Masks",
                  "parent": "Respiratory Care",
                  "slug": "/search?q=PAP Masks&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                },
                {
                  "id": 1,
                  "name": "Steam Inhalers",
                  "parent": "Respiratory Care",
                  "slug": "/search?q=Steam Inhalers&sortBy=amount",
                  "image": {
                    "mobile": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    },
                    "desktop": {
                      "url": "/assets/images/category/camera.png",
                      "width": 475,
                      "height": 250
                    }
                  }
                }
              ]
            }
          ]
        }
      ]);

    const value = {
        activeCategory,
        setActiveCategory,
        products,
        setProducts,
        categories,
        setCategories
    };

    return (
        <DataContext.Provider value={value}>{children}</DataContext.Provider>
    )
}

export default DataContext;