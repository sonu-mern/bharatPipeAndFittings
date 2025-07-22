import { constantValue } from "./constantValue"
import { productImages, bannerImages } from "../utils/loadImages";

import steel1 from "../assets/images/products/stainless-steel-sheets-plates1.jpg"
import steel2 from "../assets/images/products/stainless-steel-sheets-plates2.jpg"
import steel3 from "../assets/images/products/stainless-steel-sheets-plates3.jpg"
import steel4 from "../assets/images/products/stainless-steel-sheets-plates4.jpg"
import steel5 from "../assets/images/products/stainless-steel-sheets-plates5.jpg"
import steel6 from "../assets/images/products/stainless-steel-sheets-plates6.jpg"
import steel7 from "../assets/images/products/stainless-steel-sheets-plates7.jpg"
import steel8 from "../assets/images/products/stainless-steel-sheets-plates8.jpg"
import SheetsBanner1 from "../assets/images/banners/sheets-plates-coils1.jpg"
import SheetsBanner2 from "../assets/images/banners/sheets-plates-coils2.jpg"
import SheetsBanner3 from "../assets/images/banners/sheets-plates-coils3.jpg"
import SheetSub2img1 from "../assets/images/products/alloy-steel-sheets-plates1.jpg";
import SheetSub2img2 from "../assets/images/products/alloy-steel-sheets-plates2.jpg";
import SheetSub2img3 from "../assets/images/products/alloy-steel-sheets-plates3.jpg";
import SheetSub2img4 from "../assets/images/products/alloy-steel-sheets-plates4.jpg";
import SheetSub2img5 from "../assets/images/products/alloy-steel-sheets-plates5.jpg";
import SheetSub2img6 from "../assets/images/products/alloy-steel-sheets-plates6.jpg";
import SheetSub2img7 from "../assets/images/products/alloy-steel-sheets-plates7.jpg";
import SheetSub2img8 from "../assets/images/products/alloy-steel-sheets-plates8.jpg";

let companyName = constantValue.companyName;
export const allProducts = [
  {
    id: 1,
    productShortName: "Sheets, Plates & Coils",
    images: [bannerImages["sheets-plates-coils1"],
    bannerImages["sheets-plates-coils2"],
    bannerImages["sheets-plates-coils3"],],
    name: "Leading Sheets, Plates & Coils Manufacturer, Supplier & Stockist in India",
    description: `${companyName} is a reputed manufacturer, supplier, and stockist of high-quality Sheets, Plates & Coils in India. These products are available in various sizes, thicknesses, and materials to meet diverse industrial requirements. We offer a wide range of types including Shim Sheets, Perforated Sheets, Hot Rolled Sheets & Plates, Cold Rolled Sheets & Plates, Chequered Plates, and Foils in multiple grades.

Our manufacturing range includes Stainless Steel, Carbon Steel, Hastelloy, and other high-performance alloy Sheets, Plates & Coils tailored for multiple industry applications.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Sheets, Plates & Coils",
        materialSpecifications: {
          Dimension: "MSRR, AMS, BS, JIS, AISI, ASTM, GB, DIN, EN, etc.",
          Size: "0.1 mm to 120 mm thickness; Widths: 1000 / 1220 / 1250 / 1500 / 2000 mm; Lengths: 2000 / 2500 / 3000 / 5000 / 6000 mm",
          Width: "1000mm, 1219mm, 1500mm, 1800mm, 2000mm, 2500mm, 3000mm, 3500mm, etc.",
          Length: "2000mm, 2440mm, 3000mm, 5800mm, 6000mm, etc.",
          Thickness: "0.1mm to 12 mm",
          Hardness: "Soft, Hard, Half Hard, Quarter Hard, Spring Hard, etc.",
          Surface: "2B, 2D, BA, No.1, No.4, No.8, 8K, Mirror, Checkered, Embossed, Hair Line, Sand Blast, Brush, Etching",
          Finish: "Hot Rolled Plate (HR), Cold Rolled Sheet (CR), Satin (with Plastic Coating)",
          Forms: "Sheets, Plates, Coils, Flats, Strips, Profiles, Blanks, Circles, Rings, Shim Sheets, Perforated Sheets, B.Q. Profiles"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        productShortName: "SHEETS, PLATES & COILS",
        name: "Stainless Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["stainless-steel-sheets-plates1"],
          productImages["stainless-steel-sheets-plates2"],
          productImages["stainless-steel-sheets-plates3"],
          productImages["stainless-steel-sheets-plates4"],
          productImages["stainless-steel-sheets-plates5"],
          productImages["stainless-steel-sheets-plates6"],
          productImages["stainless-steel-sheets-plates7"],
          productImages["stainless-steel-sheets-plates8"]
        ],
        description: `${companyName} is a trusted manufacturer and supplier of premium quality Stainless Steel Sheets, Plates & Coils. Renowned for excellent corrosion resistance, tensile strength, and durability, our SS range is ideal for various industrial applications. Their non-corrosive and anti-abrasive properties ensure low maintenance and long-lasting performance.`,
        materialSpecifications: {
          Standards: "ASTM A240 / ASME SA240",
          Grades: "201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 17-4PH, 904L, 253MA, 353MA, AL-6XN (N08367), Alloy 28 (N08028), A286 (S66286)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["alloy-steel-sheets-plates1"],
          productImages["alloy-steel-sheets-plates2"],
          productImages["alloy-steel-sheets-plates3"],
          productImages["alloy-steel-sheets-plates4"],
          productImages["alloy-steel-sheets-plates5"],
          productImages["alloy-steel-sheets-plates6"],
          productImages["alloy-steel-sheets-plates7"],
          productImages["alloy-steel-sheets-plates8"]
        ],
        description: `${companyName} manufactures and stocks a diverse range of Alloy Steel Sheets, Plates & Coils in various sizes, th icknesses, and grades. Our products are crafted to meet stringent quality standards and fulfill specific industrial requirements. We supply across domestic and international markets.`,
        materialSpecifications: {
          Standards: "ASTM A387 / ASME SA387",
          Grades: "11, 12, 22, 5, 9, 91, A283 Gr. C, 16Mo3"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["nickel-alloy-sheets-plates1"],
          productImages["nickel-alloy-sheets-plates2"],
          productImages["nickel-alloy-sheets-plates3"],
          productImages["nickel-alloy-sheets-plates4"],
          productImages["nickel-alloy-sheets-plates5"],
          productImages["nickel-alloy-sheets-plates6"],
          productImages["nickel-alloy-sheets-plates7"],
          productImages["nickel-alloy-sheets-plates8"]
        ],
        description: `${companyName} is a prominent exporter and supplier of high-grade Nickel Alloy Sheets, Plates & Coils. These products are available in different dimensions and specifications and are ideal for high-temperature and high-strength applications. Nickel's versatility enables superior corrosion resistance and mechanical performance.`,
        materialSpecifications: {
          Standards: "ASTM / ASME B161, B162, B163, B725, B730",
          Grades: "Nickel 200/201, Monel 400, Monel K500, Inconel 600, Inconel 625, Inconel 718, Incoloy 800, Incoloy 825, Hastelloy C276, C22, B2, Alloy 20, 904L, Titanium Gr 2, Gr 5, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Brass, Bronze, Titanium, Tantalum, Bismuth, Aluminium, High-Speed Steel, Zinc, Lead"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Sheets, Plates & Coils Specifications",
        images: [
          productImages["carbon-steel-sheets-plates1"],
          productImages["carbon-steel-sheets-plates2"],
          productImages["carbon-steel-sheets-plates3"],
          productImages["carbon-steel-sheets-plates4"],
          productImages["carbon-steel-sheets-plates5"],
          productImages["carbon-steel-sheets-plates6"],
          productImages["carbon-steel-sheets-plates7"],
          productImages["carbon-steel-sheets-plates8"]
        ],
        description: `With years of industry experience, ${companyName} delivers high-quality Carbon Steel Sheets, Plates & Coils manufactured from top-grade raw materials using advanced technology. Our carbon steel range is valued for its excellent weldability and formability, making it suitable for a wide array of structural and industrial applications.`,
        materialSpecifications: {
          Standards: "ASTM A36, IS 2062, CK60, Wear Resistant Steel, Boiler Quality ASTM A516",
          Grades: "ASTM A283, A285, A515, A516, A105, A234, LF1, LF2, A106, A333, A53, API 5L, 400 HB, 450 HB, 500 HB, 60, 70, Corten A, Corten B, Hadfield Manganese Steel"
        }
      }
    ]
  },

  {
    id: 2,
    name: "Round Bars & Rods Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["round-bars-rods1"],
      bannerImages["round-bars-rods2"],
      bannerImages["round-bars-rods3"]
    ],
    productShortName: "Round Bars & Rods",
    description: `${companyName} is a renowned manufacturer, supplier, and stockist of a wide range of Round Bars & Rods in India. Our products are manufactured using premium-grade raw materials and undergo strict quality testing at every stage. Each bar and rod conforms to both national and international standards to ensure performance and reliability.

We stock and supply various types of Round Bars & Rods made from materials such as Stainless Steel, Alloy Steel, Duplex & Super Duplex Steel, Hastelloy, Monel, Inconel, Titanium, Aluminum, and more.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Round Bars & Rods",
        materialSpecifications: {
          Size: "1 MM to 250 MM OD",
          RodSize: "3 mm to 500 mm",
          BrightBars: "Outside Diameter in the range of 4 mm to 100 mm",
          HexBars: "18 mm – 57 mm (11/16” to 2-3/4”)",
          SquareBars: "18 mm – 47 mm (11/16” to 1-3/4”)",
          FlatBars: "1/2” to 10” in thickness range of 2 mm to 150 mm",
          WireSize: "0.1 mm to 10 mm",
          Length: "100 MM to 6000 MM",
          Type: "Black, Polish, Export",
          Form: "Round Bar, Square Bar, Rectangular Bar, Triangular, Oval Bar, Wire, Filler Rod",
          InspectionReports: "Mill Test Certificates, EN 10204 3.1, Chemical Reports, Mechanical Reports, PMI Test Reports, Visual Inspection Reports, Third Party Inspection Reports, NABL Approved Lab Reports, Destructive Test Reports, Non-Destructive Test Reports"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Round Bars & Rods Specifications",
        images: [
          productImages["stainless-steel-bars-rods1"],
          productImages["stainless-steel-bars-rods2"],
          productImages["stainless-steel-bars-rods3"],
          productImages["stainless-steel-bars-rods4"],
          productImages["stainless-steel-bars-rods5"],
          productImages["stainless-steel-bars-rods6"],
          productImages["stainless-steel-bars-rods7"],
          productImages["stainless-steel-bars-rods8"]
        ],

        description: `${companyName} offers premium-grade Stainless Steel Round Bars & Rods known for excellent toughness at cryogenic temperatures, superior strength-to-weight ratio, corrosion resistance, and ease of fabrication. These bars are manufactured in a variety of sizes and grades using advanced processes to ensure consistent performance in demanding environments.`,
        materialSpecifications: {
          Standards: "ASTM A276 / A182 / A479",
          Grades: "201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 317L, 321, 330, 347, 405, 409, 410, 416, 420, 430, 431, 440C, 17-4PH, 904L, AL-6XN (N08367), Nitronic 50 / 60, 422, 416, 446, Nimonic 80 (N07080), A286 (S66286), 15-5PH, Alloy 28 (N08028)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Round Bars & Rods Specifications",
        images: [
          productImages["alloy-steel-bars-rods1"],
          productImages["alloy-steel-bars-rods2"],
          productImages["alloy-steel-bars-rods3"],
          productImages["alloy-steel-bars-rods4"],
          productImages["alloy-steel-bars-rods5"],
          productImages["alloy-steel-bars-rods6"],
          productImages["alloy-steel-bars-rods7"],
          productImages["alloy-steel-bars-rods8"]
        ],
        description: `${companyName} manufactures and supplies top-grade Alloy Steel Round Bars & Rods using high-quality materials and cutting-edge technology. These bars offer superior strength, hardenability, and resistance to wear and pressure. Available in various grades, sizes, and types, they are well-suited for use in multiple industrial applications.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91, 4140, 4130, Kanthal A1, Nichrome 80/20"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Round Bars & Rods Specifications",
        images: [
          productImages["nickel-alloy-bars-rods1"],
          productImages["nickel-alloy-bars-rods2"],
          productImages["nickel-alloy-bars-rods3"],
          productImages["nickel-alloy-bars-rods4"],
          productImages["nickel-alloy-bars-rods5"],
          productImages["nickel-alloy-bars-rods6"],
          productImages["nickel-alloy-bars-rods7"],
          productImages["nickel-alloy-bars-rods8"]
        ],
        description: `${companyName} offers high-performance Nickel Alloy Round Bars & Rods with exceptional durability, corrosion resistance, and strength at elevated temperatures. These alloys are highly versatile and can be customized to specific client requirements in terms of size, shape, and specification — all at competitive prices.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B166, B574, B473 / SB160, SB164, SB166, SB574, SB473",
          Grades: "Nickel 200, Nickel 201, Hastelloy C276, C22, B2, Monel 400, Monel K500, Inconel 600, 625, 718, Incoloy 800, 825, Alloy 20, 904L, Titanium Gr 2, Gr 5, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Tantalum, Bismuth, Aluminium, Brass, Bronze, High-Speed Steel, Zinc, Lead"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Round Bars & Rods Specifications",
        images: [
          productImages["carbon-steel-bars-rods1"],
          productImages["carbon-steel-bars-rods2"],
          productImages["carbon-steel-bars-rods3"],
          productImages["carbon-steel-bars-rods4"],
          productImages["carbon-steel-bars-rods5"],
          productImages["carbon-steel-bars-rods6"],
          productImages["carbon-steel-bars-rods7"],
          productImages["carbon-steel-bars-rods8"]
        ]
        ,
        description: `${companyName} is one of India’s largest manufacturers of Carbon Steel Bars & Rods. Using advanced production techniques and high-grade raw materials, we deliver durable and precision-engineered bars in multiple sizes and grades. These bars possess strong mechanical properties such as elongation, density, thermal conductivity, and corrosion resistance — making them ideal for structural and mechanical use.`,
        materialSpecifications: {
          Standards: "ASTM A105 / ASME SA105, ASTM A350 / ASME SA350",
          Grades: "Gr. LF2, LF3"
        }
      }
    ]
  },
  {
    id: 3,
    name: "Pipes & Tubes Manufacturers, Suppliers & Stockist in India",
    images: [
      bannerImages["pipes-tubes1"],
      bannerImages["pipes-tubes2"],
      bannerImages["pipes-tubes3"]
    ],
    productShortName: "Pipes & Tubes",
    description: `${companyName} is a trusted manufacturer, supplier, and exporter of a wide range of Pipes & Tubes available in different forms, shapes, dimensions, and material grades. 

We utilize high-grade raw materials and advanced machinery to deliver products that meet exact client specifications. Our wide portfolio of Pipes & Tubes is widely used across multiple industries. These products are available in material variants such as Stainless Steel, Duplex & Super Duplex Steel, Hastelloy, Monel, Inconel, Nickel, Carbon Steel, Alloy Steel, and Cupronickel.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Pipes & Tubes",
        materialSpecifications: {
          Dimensions: "ASTM, ASME and API",
          PipeSize: "Seamless Pipes: 1/2″ NB to 16″ NB, Welded Pipes: 1/8″ NB to 30″ NB, EFW Pipes: 6″ NB to 24″ NB",
          TubeSize: "Seamless Tubes: 1/2″ NB to 16″ NB, Welded Tubes: 1/8″ NB to 30″ NB, EFW Pipes: 6″ NB to 24″ NB",
          Schedule: "SCH5, SCH5S, SCH10, SCH10S, SCH20, SCH30, SCH40, STD, SCH80, XS, SCH60, SCH120, SCH140, SCH160, XXS",
          Type: "Seamless / ERW / EFW / Welded / Fabricated / LSAW Pipes",
          Form: "Welded Pipes, Seamless Pipes, EFW Pipes, ERW Pipes, Pipes, Tubes, Seamless Tubes, EFW Tubes, Hollow Tubes, Rectangular Tubes, Square Tubes, Oval Tubes, Capillary Tubes, Pan Cake Coils, Coiled, Hex, U Shape, Slotted, Hydraulic, Round, Rectangular, Square Pipes & Tubes etc.",
          Length: "Single Random, Double Random & Custom Cut Length",
          End: "Plain End, Beveled End, Threaded"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Pipes & Tubes Specifications",
        images: [],
        description: `${companyName} offers high-quality Stainless Steel Pipes & Tubes in a wide range of grades, sizes, thicknesses, and specifications. We also provide customization options to meet specific client needs. These pipes and tubes are widely used in oil & gas, chemical processing, pulp & paper, boiler, heat exchanger, and nuclear industries.`,
        materialSpecifications: {
          Standards: "ASTM A312 / A213 / A269 / A358 / A778",
          Grades: "TP 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L, AL-6XN (N08367)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Pipes & Tubes Specifications",
        images: [],
        description: `${companyName} manufactures Alloy Steel Seamless Pipes & Tubes composed of chromium, molybdenum, and additional elements like silicon and manganese. These pipes are known for excellent strength, corrosion resistance, and durability under high temperatures and pressure. They are highly demanded across numerous industrial sectors for their robustness and weldability.`,
        materialSpecifications: {
          Standards: "ASTM A335 / A213",
          Grades: "P11, P12, P22, P5, P9, P91, T11, T12, T22, T5, T9, T91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Pipes & Tubes Specifications",
        images: [],
        description: `${companyName} supplies Nickel Alloy Pipes & Tubes known for excellent magnetic properties, thermal conductivity, and corrosion resistance. These pipes are ideal for applications requiring cleanliness, purity, and high performance under thermal stress. We provide both standard and custom sizes to meet specific project needs.`,
        materialSpecifications: {
          Standards: "ASTM B161, B165, B167, B444, B407, B423 / ASME SB161, SB165, SB167, SB444, SB407, SB423",
          Grades: "Nickel 200, 201, Inconel 600, 625, 718, Incoloy 800, 825, Hastelloy C276, C22, B2, Monel 400, K500, Alloy 20, Titanium Gr 2, Gr 5, Alloy 904L, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Tantalum, Brass, Bronze, Aluminium, Zinc, Lead, Bismuth, HighSpeed Steel"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Pipes & Tubes Specifications",
        images: [],
        description: `${companyName} is a leading provider of Carbon Steel Pipes & Tubes in India. These products are manufactured using high carbon content steel, offering excellent strength, weldability, and formability. Widely used in industrial piping systems, these pipes are available in different grades, sizes, shapes, and specifications.`,
        materialSpecifications: {
          Standards: "ASTM A106 / A53 / A179 / A333 / A210",
          Grades: "Gr. B, API 5L X42/X46/X52/X56/X60/X65/X70 PSL-1 / PSL-2, Gr. 3, 6, IS 1239, IS 3589, Boiler Tube – BS 3059 – Gr. 320, 360, Gr. A1, BS 6323"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Buttweld Pipe Fittings Manufacturers, Suppliers & Stockist in India",
    productShortName: "Pipe Fittings",
    description: `${companyName} is a reputed manufacturer, supplier, and stockist of premium-quality Buttweld Pipe Fittings in India. Known for their high tensile strength, corrosion resistance, and excellent finish, our fittings are widely demanded across industries. We manufacture, export, and supply Buttweld Fittings that conform to national and international quality standards, supported by advanced refining and fabrication equipment.

We offer ASME B16.9 Buttweld Fittings such as Elbows, Tees, Crosses, Reducers, Nipples, and Couplings in various materials including Stainless Steel, Carbon Steel, and High Nickel Alloys.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Buttweld Pipe Fittings",
        materialSpecifications: {
          "Butt weld Fittings Dimensions": "ASME B16.9, ANSI B16.9, ASME B16.28, MSS-SP-43",
          "Seamless Fittings Size": "1/2\" NB to 10\" NB",
          "Welded Fittings Size": "1/2\" NB to 48\" NB",
          "Pipe Fitting Size": "1/8\" NB to 48\" NB (Seamless, 100% X-Ray Welded, Fabricated)",
          "Pipe Fittings Thickness": "5s, 10s, 40s, 80s, 10, 20, 40, STD, 60, 80, XS, 100, 120, 140, 160, XXS (NACE MR 01-75 compliant)",
          "Type of Pipe Fittings": "Seamless, Welded, Fabricated",
          "Specialized manufacturer of Pipe Fittings": "Bend, Cross, Tee, Elbow, 90º Elbow, 45º Elbow, Reducer, Stub End, Cap",
          "Butt weld Fittings Form": "Elbow, Tee, Cross, Reducer, End Cap, 45° Elbow, 3D Elbow, 1.5D Elbow, 90° Elbow, 5D Elbow, Reducing Elbow, Reducing Tee, Long Radius Elbow, 180° Elbow, Short Stub End, 10D Elbow, Short Radius Elbow, Concentric Reducer, Eccentric Reducer, Bends, Piggable Bend, Reducing Nipple, U-Bend, Equal Tee, Collar, Dish Cap, 180° Bend, Long Stub End, Unequal Tee, Lateral Tee, etc.",
          "Pipe Fittings Schedule": "SCH10, SCH20, SCH30, SCH40, SCH60, SCH80, SCH120, SCH140, SCH160, STD, XS, XXS",
          "Pipe Fittings Connection": "Welded",
          "Available Materials of Pipe Fittings": "Stainless Steel, Carbon Steel, Alloy Steel, Duplex Steel, Super Duplex Steel, High Nickel Alloys, Inconel, Incoloy, Monel, Hastelloy, Alloy 20, Titanium, Copper Nickel"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Pipe Fittings Specifications",
        images: [],
        description: `${companyName} offers Stainless Steel Buttweld Fittings in a wide range of shapes, sizes, grades, and specifications in compliance with ANSI/ASME and DIN standards. Our SS fittings range includes reducers, elbows, tees, crosses, stub ends, and pipe bends, designed for durability and long-term performance in demanding applications.`,
        materialSpecifications: {
          Standards: "ASTM A403 / ASME SA403",
          Grades: "WP – 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Buttweld Fittings Specifications",
        images: [],
        description: `We produce high-quality Alloy Steel Buttweld Fittings, including custom-fabricated pieces up to 48”. Our product range includes elbows, tees, reducers, crosses, stub ends, and pipe bends. Alloy Steel fittings are ideal for applications where corrosion resistance is less critical but strength and durability are essential.`,
        materialSpecifications: {
          Standards: "ASTM A335 / ASME SA335",
          Grades: "WP11, WP12, WP22, WP5, WP9, WP91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Buttweld Fittings Specifications",
        images: [],
        description: `${companyName} offers a comprehensive range of Nickel Alloy Buttweld Fittings available in various sizes, grades, and thicknesses. These fittings provide excellent corrosion resistance, strength, and heat resistance, making them suitable for industries like aerospace, chemical processing, and power generation.`,
        materialSpecifications: {
          Standards: "ASTM B366 / ASME SB366",
          Grades: `200 (WPN, N02200), 201 (WPNL, N02201), Alloy 20 (WP20CB, N08020), 600 (WPNCI, N06600), 601 (N06601), 625 (WPNCMC, N06625), 718 (N07718), 800 (WPNIC, N08800), 800H (WPNIC10, N08810), 800HT (WPNIC11, N08811), 825 (WPNICMC, N08825), 904L (N08904), 400 (WPNC, N04400), 500 (N05500), C276 (WPHC276, N10276), C4 (WPHC4, N06455), C22 (WPHC22, N06022), C2000 (WPHC2000, N06200), X (WPHX, N06002), B2 (WPHB-2, N10665), B3 (WPHB-3, N10675), Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Pipe Fittings Specifications",

        images: [],
        description: `${companyName} is a leading manufacturer and supplier of Carbon Steel Buttweld Fittings, offering outstanding strength and weldability. These fittings are available in various shapes and dimensions and are widely used in structural and pressure applications. Our CS fittings include elbows, tees, reducers, crosses, nipples, and more.`,
        materialSpecifications: {
          Standards: "ASTM A234 / A420 / A860",
          Grades: "Gr. WPB, Gr. WPL-3, WPL-6, IS 1239, IS 3589, WPHY42, WPHY46, WPHY52, WPHY60, WPHY65, WPHY70"
        }
      }
    ]
  }
  ,
  {
    id: 5,
    name: "Flanges Manufacturers, Suppliers & Stockist in India",
    productShortName: "Flanges",
    description: `${companyName} is a trusted manufacturer, supplier, and stockist of high-quality steel flanges in India. We offer a wide variety of flanges in different types, shapes, sizes, dimensions, and material grades. Depending on the connection method, our range includes Slip-On Flanges, Orifice Flanges, Spectacle Flanges, Lap Joint Flanges, Raised Face Flanges, Ring Joint Flanges, Weld Neck Flanges, Socket Weld Flanges, and more.

Flanges are essential components used to connect pipes, valves, pumps, and other equipment to form a complete piping system. These connections are typically made through bolting and welding methods.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Flanges",
        materialSpecifications: {
          "Size": "6 NB to 2400 NB",
          "Class": "150#, 300#, 400#, 600#, 900#, 1500#, 2500#, 3000# (also as per National & International Standards)",
          "Standard": "ANSI B16.5, B16.47 Series A (MSS SP-44), B16.47 Series B (API 605), MSS SP-43, DIN 2527–2642, BS 10, IS 1538 & IS 6392, JIS Flanges, etc.",
          "Types of Flanges": "Weld Neck, Slip-On, Blind, Lap Joint, Socket-Weld, Threaded, Long Weld Neck, Spectacle Blind, Spacer, Ring Type Joint, Reducing, Raised Face, Orifice, Deck, Large Diameter, Custom, Drawing, Forged, Plate, Flat Face",
          "Flange Dimension Standard": "ANSI B16.5 (150# to 2500#), ANSI B16.47 (Series A/B), EN 1092-1, DIN, UNI, API 6A, BS 10, JIS B2220, MSS SP-44, AS 2129, IS 6392",
          "Form": "Slip-On (SO), Blind (BL), Lap Joint (LF), Socket-Weld (SW), Weld Neck (WN), Long Weld Neck (LWN), RTJ, Threaded, RF, FF, Customized"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Flanges Specifications",
        images: [],
        description: `${companyName} offers an extensive range of stainless steel flanges in various sizes and pressure classes to meet your specific project needs, including rare configurations. Our Stainless Steel Pipe Flanges offer excellent corrosion resistance, high strength, and mechanical durability. For example, SS Blind Flanges are ideal for sealing off piping systems or vessel openings with secure and leak-proof connections.`,
        materialSpecifications: {
          Standards: "ASTM A403 / ASME SA403",
          Grades: "WP – 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Flanges Specifications",
        images: [],
        description: `${companyName} is a top manufacturer and supplier of Alloy Steel Flanges in India. These flanges offer excellent strength and chemical resistance and are suitable for high-temperature environments (1725–1850°F). The Alloy Steel Slip-On Flanges are resistant to water, atmospheric conditions, and chemicals, making them suitable for various critical applications.`,
        materialSpecifications: {
          Standards: "ASTM A335 / ASME SA335",
          Grades: "WP11, WP12, WP22, WP5, WP9, WP91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Flanges Specifications",
        images: [],
        description: `${companyName} has earned a solid reputation for producing high-quality Nickel Alloy Flanges. These flanges offer outstanding thermal and electrical conductivity, low vapor pressure, and excellent weldability. Nickel Alloy 200 and 201 are commonly used in industries requiring high corrosion resistance and formability.`,
        materialSpecifications: {
          Standards: "ASTM B366 / ASME SB366",
          Grades: `200 (WPN, N02200), 201 (WPNL, N02201), Alloy 20 (WP20CB, N08020), 600 (WPNCI, N06600), 601 (N06601), 625 (WPNCMC, N06625), 718 (N07718), 800 (WPNIC, N08800), 800H (WPNIC10, N08810), 800HT (WPNIC11, N08811), 825 (WPNICMC, N08825), 904L (N08904), 400 (WPNC, N04400), 500 (N05500), C276 (WPHC276, N10276), C4 (WPHC4, N06455), C22 (WPHC22, N06022), C2000 (WPHC2000, N06200), X (WPHX, N06002), B2 (WPHB-2, N10665), B3 (WPHB-3, N10675), Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Flanges Specifications",
        images: [],
        description: `${companyName} manufactures premium-grade Carbon Steel Flanges that deliver excellent mechanical strength and corrosion resistance. These flanges are designed to withstand high pressures and temperatures, making them ideal for applications in power plants, petrochemical industries, and more.`,
        materialSpecifications: {
          Standards: "ASTM A234 / A420 / A860",
          Grades: "Gr. WPB, Gr. WPL-3, WPL-6, IS 1239, IS 3589, WPHY42, WPHY46, WPHY52, WPHY60, WPHY65, WPHY70"
        }
      }
    ]
  },
  {
    id: 6,
    name: "Forged Fittings Manufacturers, Suppliers & Stockist in India",
    productShortName: "Forged Fittings",
    description: `${companyName} is one of the most preferred manufacturers, suppliers, and exporters of premium-quality Forged Fittings known for their outstanding durability and reliable performance. These fittings are offered in a variety of types, forms, sizes, material grades, and specifications. Known for their long operational life and superior build, our forged pipe fittings include 90° elbows, 45° elbows, half couplings, lateral outlets, unions, crosses, full couplings, and more.

Forged Fittings are a conventional and robust solution for joining pipes, especially suitable for piping systems with sizes up to NPS 2. Engineered to perform under various pressure and temperature conditions, our forged fittings conform to stringent global standards and ensure dependable operation in critical applications.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Forged Fittings",
        materialSpecifications: {
          "DIMENSION": "ANSI B16.11, ASME B16.11, BS 3799, MSS SP-79, 83, 95, 97",
          "TYPE": "Socket Weld (S/W) & Screwed (SCRD) – NPT, BSP, BSPT / Threaded Fitting",
          "RANGE": "1/8\" NB TO 48\" NB",
          "FORMS": "Elbow, Tee, Cross, 45° Elbow, 90° Elbow, Cap, End Caps, Bends, Stub Ends - Lap Joint, Nipples, Outlet Fittings, Boss, Union, Plug, Barrel Nipple, Full Coupling, Half Coupling, Swage Nipple & Customized Fittings",
          "CLASS": "3000LBS, 6000LBS, 9000LBS"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Forged Fittings Specifications",
        images: [],
        description: `${companyName} provides a comprehensive range of stainless steel forged fittings in multiple grades and dimensions. With a reputation for consistent quality and on-time delivery, we manufacture forged fittings that are widely used across industries for their excellent corrosion resistance, strength, and long service life.`,
        materialSpecifications: {
          Standards: "ASTM A182 & ASME SA182",
          Grades: "F201, F202, F301, F302, F304, F304L, F309, F310, F316, F316L, F316LN, F316Ti, F317L, F321, F347, 405, 409, 410, 420, 430, 440C, F904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Forged Fittings Specifications",
        images: [],
        description: `${companyName} manufactures and supplies an extensive variety of alloy steel forged fittings using advanced machinery and skilled technicians. Designed for high-temperature and high-pressure applications, these fittings are engineered to perform reliably in demanding environments.`,
        materialSpecifications: {
          Standards: "ASTM A182 & ASME SA182",
          Grades: "F1, F5, F9, F11, F12, F22, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Forged Fittings Specifications",
        images: [],
        description: `As a leading manufacturer and exporter, ${companyName} delivers high-performance Nickel Alloy Forged Fittings known for their exceptional corrosion resistance and strength in extreme environments. These fittings are widely used in industries such as aerospace, marine, petrochemical, and chemical processing.`,
        materialSpecifications: {
          Standards: "ASTM / ASME SB 564, SB 160, SB 366, SB 472",
          Grades: `Hastelloy B2/B3/C4/C22/C276/C2000/X, Inconel 600/601/625/718/715, Incoloy 800/800H/800HT/825/925, Nickel 200/201, Alloy 36/42/A286, Monel 400/K500, Alloy 2205/2507, UNS N08020, UNS R30605, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Forged Fittings Specifications",
        images: [],
        description: `${companyName} has been a pioneer in manufacturing Carbon Steel Forged Fittings. These fittings are widely used in high-pressure systems for their strength and mechanical durability. Suitable for extreme temperature conditions—whether cold, annealed, or high-heat—they are produced with precision using state-of-the-art technology.`,
        materialSpecifications: {
          Standards: "ASTM A105 / A350",
          Grades: "Gr. LF2, LF3, ASTM A694 – F42, F46, F48, F50, F52, F56, F60, F65, F70"
        }
      }
    ]
  },
  {
    id: 7,
    name: "Fasteners Manufacturers, Suppliers & Stockist in India",
    productShortName: "Fasteners",
    description: `${companyName}, an ISO 9001:2015 Certified Company, is one of the leading manufacturers, stockists, and suppliers of high-quality Fasteners in India. Our fasteners are manufactured in compliance with stringent industrial standards and are available in a comprehensive range of sizes from M2 to M150, with lengths up to 6 meters.

Renowned for their corrosion resistance, excellent tensile strength, and long-lasting performance, our range includes nuts, bolts, screws, and washers made from a variety of materials such as Stainless Steel, Inconel, Monel, Brass, Duplex, Aluminum, and more.

Yes, fasteners are available in stock and ready for immediate delivery. For custom specifications or large quantities, please reach out to us for a free quote.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Fasteners",
        materialSpecifications: {
          SIZE: "M2 to M150",
          LENGTH: "Up to 6 Meters",
          "Types of Nuts": "Hexagon Nuts, Dome Nuts, Square Nuts, Hex Nut, Heavy Hex Nut, Hexagon Coupling Nuts, Self-Locking Nut, Hex Head Nut, Hexagon Castle Nuts, Hexagon Thin Nuts, Hexagon Domed Cap Nuts",
          "Types of Bolts": "Hex Head Bolts, J Bolts, Lag Bolts, Wing Screw Bolts, Hex Bolts, Stud Bolts, T-Head Bolts, Threaded Bolts, Anchor Bolts, Mushroom Head Square Neck Bolts, Anchor Studs, Foundation Bolts, Eye Bolts, U-Bolts, Countersunk Bolts, H Bolts, Square Bolts, Structural Bolts",
          "Types of Screws": "Grub Screw, Hex Screw, Socket Head Cap Screw, Anchor Screw, CSK Screw, Threaded Screw, Machine Screw, Socket Set Screws, Concrete Screw, Shoulder Screw, Hex Head Screw, Panel Screw, Cap Screw, Blind Rivet",
          "Types of Washers": "Square Washer, Plain Washer, Heavy Duty Spring Washers, Tooth Washers, Plain Big & Small Washers, Spring Lock Washers, Machine Washer, Flat Washer, Sealing Washer, Tab Washers (One & Two Tab), Slot Washer, Star Washers, Split Washer",
          FINESH: "Bright, Black & Polish"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Fasteners Specifications",
        images: [],
        description: `${companyName} offers a comprehensive inventory of stainless steel fasteners suitable for a wide range of industrial applications. These fasteners are available in multiple grades and provide excellent strength and corrosion resistance. We maintain ready stock of all major grades including SS 304, 316, 310, 904L, and others.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F201, F202, F301, F302, F304, F304L, F309, F310, F316, F316L, F316LN, F317L, F321, F347, 405, 409, 410, 420, 430, 440C, F904L, Al-6XN (N08367), Nitronic 50 / 60, 422, 416, 446, Nimonic 80 (N07080), A286 (S66286), 17-4ph, 15-5ph, Alloy 28 (N08028)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Fasteners Specifications",
        images: [],
        description: `${companyName} manufactures alloy steel fasteners in a variety of grades, dimensions, and finishes to meet critical performance requirements. These fasteners are widely used in power plants, petrochemical industries, and high-temperature environments.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Fasteners Specifications",
        images: [],
        description: `We offer a broad selection of Nickel Alloy Fasteners that include premium-grade materials such as Inconel, Monel, Hastelloy, and more. These fasteners are engineered for superior resistance to corrosion, oxidation, and extreme heat, making them suitable for critical applications in aerospace, marine, and chemical industries.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B425, B166, B446, B574, B472 / ASME SB160, SB164, SB425, SB166, SB446, SB574, SB472",
          Grades: `Hastelloy B2/B3/C4/C22/C276/C2000/X, Inconel 600/601/625/715/718, Incoloy 800/800H/800HT/825/925, Nickel 200/201, Alloy 36/42/A286, Monel 400/K500, Alloy 2205/2507, UNS N08020, UNS R30605, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Fasteners Specifications",
        images: [],
        description: `${companyName} produces durable and high-strength carbon steel fasteners that are widely used in high-pressure and high-temperature environments. Manufactured in compliance with ASTM and ASME standards, these fasteners are an economical solution for structural and industrial applications.`,
        materialSpecifications: {
          Standards: "ASTM A193, A194, ASME SA193, SA194",
          Grades: "MS, Gr. B7, B8, B16, Gr. L7, 4.6, 8.8, 10.9"
        }
      }
    ]
  },
  {
    id: 8,
    name: "Valves Manufacturers, Suppliers & Stockist in India",
    productShortName: "Valves",
    description: `${companyName} is a leading manufacturer and supplier of high-quality industrial valves, catering to both domestic and international markets. Our valves are designed to meet global standards including AISI, BS, IS, ASME, and ANSI. They efficiently regulate, control, and direct fluid flow through mechanisms like full closure, partial opening, or directional changes.

We offer a diverse range of valves such as Ball Valves, Gate Valves, Needle Valves, Globe Valves, Butterfly Valves, Check Valves, Control Valves, and Safety Valves. Manufactured using premium materials like Stainless Steel, High Nickel Alloys, Carbon Steel, and more, our valves are known for excellent corrosion and wear resistance, making them suitable for high-pressure and high-temperature applications.

Yes, our valves are available in stock and ready for dispatch. For custom solutions or bulk inquiries, feel free to contact us and get a free quote.`,

    productDetails: {
      tableData: {
        tableName: "Specifications for Valves",
        materialSpecifications: {
          Standard: "API 600 / BS1414, API 598 / BS EN 12266-1, ASME B16.10, ASME B16.5, ASME B16.25, ASME B16.34",
          "Bolt / Screw Size": "M3 – M56 | 3/6\" to 2\" | Custom Sizes Available",
          Size: "1/8\" to 1\", Custom Sizes Available on Request",
          "Working Pressure": "Up to 6000 PSIG; higher-pressure variants available on request",
          "End Connection": "Male/Female NPT, BSPT, Socket Weld (SW), Dual Ferrule Tube, Male to Female, Female to Female",
          "Temperature Rating": "PTFE up to 450°F (232°C) / Grafoil up to 700°F (371°C)",
          "Pressure Rating": "150#, 300#, 600#, 800#, 1500#"
        }
      }
    },

    subProducts: [
      {
        id: 1,
        name: "Stainless Steel Valves Specifications",
        images: [],
        description: `${companyName} is one of India's largest exporters of stainless steel valves. These valves are widely used in industries such as petrochemicals, chemicals, water treatment, gas distribution, and general engineering. Our Stainless Steel Ball Valves are easy to maintain, highly durable, and corrosion-resistant.`,
        materialSpecifications: {
          Grades: "304, 304L, 309, 310, 316, 316L, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Valves Specifications",
        images: [],
        description: `Our Alloy Steel Valves, including Butterfly and Gate Valves, are manufactured using premium ASTM A217 grade materials. With advanced production capabilities, we offer customizable sizes and configurations suited for high-pressure, high-temperature applications across a wide range of industries.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Valves Specifications",
        images: [],
        description: `${companyName} manufactures precision-engineered Nickel Alloy Valves ideal for handling corrosive fluids in chemical processing, marine, steam, and gas systems. These valves are engineered for optimal resistance and longevity, available in custom sizes and pressure ratings.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B425, B166, B446, B574, B472 / ASME SB160, SB164, SB425, SB166, SB446, SB574, SB472",
          Grades: `Hastelloy (B2, B3, C4, C22, C276, C2000, X), Inconel (600, 601, 625, 715, 718), Incoloy (800, 800H, 800HT, 825, 925), Nickel (200, 201, 36, 42, A286), Monel (400, K500), Alloy 2205, 2507, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Valves Specifications",
        images: [],
        description: `${companyName} offers robust and cost-effective Carbon Steel Valves, including ASTM A105 and A350 grades. Designed for durability and performance under pressure, these valves are widely used in power generation, oil & gas, water treatment, and other heavy-duty applications.`,
        materialSpecifications: {
          Standards: "ASTM A105 / A350",
          Grades: "Cast Iron, Gr. LF2, LF3"
        }
      }
    ]
  }

]




