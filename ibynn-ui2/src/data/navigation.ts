import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const MEGAMENU_DEMO: NavItemType[] = [
    {
      "id": 1,
      "name": "Kitchen",
      "slug": "/search?q=home+appliances&sortBy=amount",
      "image": {
        "mobile": {
          "url": "ibynn-ui2/src/images/collections/kitchendepartment.png",
          "width": 475,
          "height": 250
        },
        "desktop": {
          "url": "ibynn-ui2/src/images/collections/kitchendepartment.png",
          "width": 475,
          "height": 250
        }
      },
      "icon": "ibynn-ui2/src/images/collections/kitchendepartment.png",
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
];

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/#",
    name: "Home Page",
    children: [
      { id: ncNanoId(), href: "/", name: "Home  1" },
      { id: ncNanoId(), href: "/home2", name: "Home  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Header  1" },
      { id: ncNanoId(), href: "/home2", name: "Header  2", isNew: true },
      { id: ncNanoId(), href: "/", name: "Coming Soon" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Shop Pages",
    children: [
      { id: ncNanoId(), href: "/page-collection", name: "Category Page 1" },
      { id: ncNanoId(), href: "/page-collection-2", name: "Category Page 2" },
      { id: ncNanoId(), href: "/product-detail", name: "Product Page 1" },
      { id: ncNanoId(), href: "/product-detail-2", name: "Product Page 2" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Other Pages",
    children: [
      { id: ncNanoId(), href: "/checkout", name: "Checkout Page" },
      { id: ncNanoId(), href: "/page-search", name: "Search Page" },
      { id: ncNanoId(), href: "/cart", name: "Cart Page" },
      { id: ncNanoId(), href: "/account", name: "Accout Page" },
      { id: ncNanoId(), href: "/account-my-order", name: "Order Page" },
      { id: ncNanoId(), href: "/subscription", name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Blog Page",
    children: [
      { id: ncNanoId(), href: "/blog", name: "Blog Page" },
      { id: ncNanoId(), href: "/blog-single", name: "Blog Single" },
      { id: ncNanoId(), href: "/about", name: "About Page" },
      { id: ncNanoId(), href: "/contact", name: "Contact Page" },
      { id: ncNanoId(), href: "/login", name: "Login" },
      { id: ncNanoId(), href: "/signup", name: "Signup" },
    ],
  },
];

const OTHER_PAGE_CHILD: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home Demo 1",
  },
  {
    id: ncNanoId(),
    href: "/home2",
    name: "Home Demo 2",
  },
  {
    id: ncNanoId(),
    href: "/page-collection",
    name: "Category Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/page-collection",
        name: "Category page 1",
      },
      {
        id: ncNanoId(),
        href: "/page-collection-2",
        name: "Category page 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/product-detail",
    name: "Product Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/product-detail",
        name: "Product detail 1",
      },
      {
        id: ncNanoId(),
        href: "/product-detail-2",
        name: "Product detail 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/cart",
    name: "Cart Page",
  },
  {
    id: ncNanoId(),
    href: "/checkout",
    name: "Checkout Page",
  },
  {
    id: ncNanoId(),
    href: "/page-search",
    name: "Search Page",
  },
  {
    id: ncNanoId(),
    href: "/account",
    name: "Account Page",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "Other Pages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/about",
        name: "About",
      },
      {
        id: ncNanoId(),
        href: "/contact",
        name: "Contact us",
      },
      {
        id: ncNanoId(),
        href: "/login",
        name: "Login",
      },
      {
        id: ncNanoId(),
        href: "/signup",
        name: "Signup",
      },
      {
        id: ncNanoId(),
        href: "/subscription",
        name: "Subscription",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Blog Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/blog",
        name: "Blog Page",
      },
      {
        id: ncNanoId(),
        href: "/blog-single",
        name: "Blog Single",
      },
    ],
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
  },
  {
    id: ncNanoId(),
    href: "/#",
    name: "Category",
    type: "megaMenu",
    children: MEGAMENU_DEMO,
  },
  
];
