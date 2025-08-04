import { constantValue } from "./constantValue"
import { productImages, bannerImages } from "../utils/loadImages";
//hii
let companyName = constantValue.companyName;
export const allProducts = [
  {
    id: 1,
    productShortName: "Sheets, Plates & Coils",
    images: [bannerImages["sheets-plates-coils1"],
    bannerImages["sheets-plates-coils2"],
    bannerImages["sheets-plates-coils3"],],
    name: "Leading Sheets, Plates & Coils Manufacturer, Supplier & Stockist in India",
    description: `<strong>${companyName}</strong> is a reputed manufacturer, supplier, and stockist of high-quality Sheets, Plates & Coils in India. These products are available in various sizes, thicknesses, and materials to meet diverse industrial requirements. We offer a wide range of types including Shim Sheets, Perforated Sheets, Hot Rolled Sheets & Plates, Cold Rolled Sheets & Plates, Chequered Plates, and Foils in multiple grades.

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
        description: `<strong>${companyName}</strong> is a trusted manufacturer and supplier of premium quality Stainless Steel Sheets, Plates & Coils. Renowned for excellent corrosion resistance, tensile strength, and durability, our SS range is ideal for various industrial applications. Their non-corrosive and anti-abrasive properties ensure low maintenance and long-lasting performance.`,
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
        description: `<strong>${companyName}</strong> manufactures and stocks a diverse range of Alloy Steel Sheets, Plates & Coils in various sizes, th icknesses, and grades. Our products are crafted to meet stringent quality standards and fulfill specific industrial requirements. We supply across domestic and international markets.`,
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
        description: `<strong>${companyName}</strong> is a prominent exporter and supplier of high-grade Nickel Alloy Sheets, Plates & Coils. These products are available in different dimensions and specifications and are ideal for high-temperature and high-strength applications. Nickel's versatility enables superior corrosion resistance and mechanical performance.`,
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
        description: `With years of industry experience, <strong>${companyName}</strong> delivers high-quality Carbon Steel Sheets, Plates & Coils manufactured from top-grade raw materials using advanced technology. Our carbon steel range is valued for its excellent weldability and formability, making it suitable for a wide array of structural and industrial applications.`,
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
    description: `<strong>${companyName}</strong> is a renowned manufacturer, supplier, and stockist of a wide range of Round Bars & Rods in India. Our products are manufactured using premium-grade raw materials and undergo strict quality testing at every stage. Each bar and rod conforms to both national and international standards to ensure performance and reliability.

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

        description: `<strong>${companyName}</strong> offers premium-grade Stainless Steel Round Bars & Rods known for excellent toughness at cryogenic temperatures, superior strength-to-weight ratio, corrosion resistance, and ease of fabrication. These bars are manufactured in a variety of sizes and grades using advanced processes to ensure consistent performance in demanding environments.`,
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
        description: `<strong>${companyName}</strong> manufactures and supplies top-grade Alloy Steel Round Bars & Rods using high-quality materials and cutting-edge technology. These bars offer superior strength, hardenability, and resistance to wear and pressure. Available in various grades, sizes, and types, they are well-suited for use in multiple industrial applications.`,
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
        description: `<strong>${companyName}</strong> offers high-performance Nickel Alloy Round Bars & Rods with exceptional durability, corrosion resistance, and strength at elevated temperatures. These alloys are highly versatile and can be customized to specific client requirements in terms of size, shape, and specification — all at competitive prices.`,
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
        description: `<strong>${companyName}</strong> is one of India’s largest manufacturers of Carbon Steel Bars & Rods. Using advanced production techniques and high-grade raw materials, we deliver durable and precision-engineered bars in multiple sizes and grades. These bars possess strong mechanical properties such as elongation, density, thermal conductivity, and corrosion resistance — making them ideal for structural and mechanical use.`,
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
    description: `<strong>${companyName}</strong> is a trusted manufacturer, supplier, and exporter of a wide range of Pipes & Tubes available in different forms, shapes, dimensions, and material grades. 

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
        images: [
          productImages["stainless-steel-pipes-tubes1"],
          productImages["stainless-steel-pipes-tubes2"],
          productImages["stainless-steel-pipes-tubes3"],
          productImages["stainless-steel-pipes-tubes4"],
          productImages["stainless-steel-pipes-tubes5"],
          productImages["stainless-steel-pipes-tubes6"],
          productImages["stainless-steel-pipes-tubes7"],
          productImages["stainless-steel-pipes-tubes8"]
        ],
        description: `<strong>${companyName}</strong> offers high-quality Stainless Steel Pipes & Tubes in a wide range of grades, sizes, thicknesses, and specifications. We also provide customization options to meet specific client needs. These pipes and tubes are widely used in oil & gas, chemical processing, pulp & paper, boiler, heat exchanger, and nuclear industries.`,
        materialSpecifications: {
          Standards: "ASTM A312 / A213 / A269 / A358 / A778",
          Grades: "TP 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L, AL-6XN (N08367)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Pipes & Tubes Specifications",
        images: [
          productImages["alloy-steel-pipes-tubes1"],
          productImages["alloy-steel-pipes-tubes2"],
          productImages["alloy-steel-pipes-tubes3"],
          productImages["alloy-steel-pipes-tubes4"],
          productImages["alloy-steel-pipes-tubes5"],
          productImages["alloy-steel-pipes-tubes6"],
          productImages["alloy-steel-pipes-tubes7"],
          productImages["alloy-steel-pipes-tubes8"]
        ],
        description: `<strong>${companyName}</strong> manufactures Alloy Steel Seamless Pipes & Tubes composed of chromium, molybdenum, and additional elements like silicon and manganese. These pipes are known for excellent strength, corrosion resistance, and durability under high temperatures and pressure. They are highly demanded across numerous industrial sectors for their robustness and weldability.`,
        materialSpecifications: {
          Standards: "ASTM A335 / A213",
          Grades: "P11, P12, P22, P5, P9, P91, T11, T12, T22, T5, T9, T91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Pipes & Tubes Specifications",
        images: [
          productImages["nickel-alloy-pipes-tubes1"],
          productImages["nickel-alloy-pipes-tubes2"],
          productImages["nickel-alloy-pipes-tubes3"],
          productImages["nickel-alloy-pipes-tubes4"],
          productImages["nickel-alloy-pipes-tubes5"],
          productImages["nickel-alloy-pipes-tubes6"],
          productImages["nickel-alloy-pipes-tubes7"],
          productImages["nickel-alloy-pipes-tubes8"]
        ],
        description: `<strong>${companyName}</strong> supplies Nickel Alloy Pipes & Tubes known for excellent magnetic properties, thermal conductivity, and corrosion resistance. These pipes are ideal for applications requiring cleanliness, purity, and high performance under thermal stress. We provide both standard and custom sizes to meet specific project needs.`,
        materialSpecifications: {
          Standards: "ASTM B161, B165, B167, B444, B407, B423 / ASME SB161, SB165, SB167, SB444, SB407, SB423",
          Grades: "Nickel 200, 201, Inconel 600, 625, 718, Incoloy 800, 825, Hastelloy C276, C22, B2, Monel 400, K500, Alloy 20, Titanium Gr 2, Gr 5, Alloy 904L, Cu-Ni 90/10 (C70600), Cu-Ni 70/30 (C71500), Tantalum, Brass, Bronze, Aluminium, Zinc, Lead, Bismuth, HighSpeed Steel"
        }
      },
      {
        id: 4,
        name: "Carbon Steel Pipes & Tubes Specifications",
        images: [
          productImages["carbon-steel-pipes-tubes1"],
          productImages["carbon-steel-pipes-tubes2"],
          productImages["carbon-steel-pipes-tubes3"],
          productImages["carbon-steel-pipes-tubes4"],
          productImages["carbon-steel-pipes-tubes5"],
          productImages["carbon-steel-pipes-tubes6"],
          productImages["carbon-steel-pipes-tubes7"],
          productImages["carbon-steel-pipes-tubes8"]
        ]
        ,
        description: `<strong>${companyName}</strong> is a leading provider of Carbon Steel Pipes & Tubes in India. These products are manufactured using high carbon content steel, offering excellent strength, weldability, and formability. Widely used in industrial piping systems, these pipes are available in different grades, sizes, shapes, and specifications.`,
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
    images: [
      bannerImages["pipe-fittings1"],
      bannerImages["pipe-fittings2"],
      bannerImages["pipe-fittings3"]
    ],
    productShortName: "Pipe Fittings",
    description: `<strong>${companyName}</strong> is a reputed manufacturer, supplier, and stockist of premium-quality Buttweld Pipe Fittings in India. Known for their high tensile strength, corrosion resistance, and excellent finish, our fittings are widely demanded across industries. We manufacture, export, and supply Buttweld Fittings that conform to national and international quality standards, supported by advanced refining and fabrication equipment.

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
        images: [
          productImages["stainless-steel-pipe-fittings1"],
          productImages["stainless-steel-pipe-fittings2"],
          productImages["stainless-steel-pipe-fittings3"],
          productImages["stainless-steel-pipe-fittings4"],
          productImages["stainless-steel-pipe-fittings5"],
          productImages["stainless-steel-pipe-fittings6"],
          productImages["stainless-steel-pipe-fittings7"],
          productImages["stainless-steel-pipe-fittings8"]
        ]
        ,
        description: `<strong>${companyName}</strong> offers Stainless Steel Buttweld Fittings in a wide range of shapes, sizes, grades, and specifications in compliance with ANSI/ASME and DIN standards. Our SS fittings range includes reducers, elbows, tees, crosses, stub ends, and pipe bends, designed for durability and long-term performance in demanding applications.`,
        materialSpecifications: {
          Standards: "ASTM A403 / ASME SA403",
          Grades: "WP – 201, 202, 301, 302, 304, 304L, 304H, 309, 309S, 310, 310S, 316, 316L, 316LN, 316Ti, 317, 317L, 321, 321H, 347, 347H, 405, 409, 410, 410S, 420, 430, 434, 436, 440A, 440B, 440C, 904L, UNS S31803, S32205 (2205), UNS S32750, S32760 (Super Duplex), 254 SMO (UNS S31254), Alloy 20 (UNS N08020), Incoloy 800/800H/800HT, Inconel 600/625/718, Hastelloy C22/C276",

        }
      },
      {
        id: 2,
        name: "Alloy Steel Buttweld Fittings Specifications",
        images: [
          productImages["alloy-steel-pipe-fittings1"],
          productImages["alloy-steel-pipe-fittings2"],
          productImages["alloy-steel-pipe-fittings3"],
          productImages["alloy-steel-pipe-fittings4"],
          productImages["alloy-steel-pipe-fittings5"],
          productImages["alloy-steel-pipe-fittings6"],
          productImages["alloy-steel-pipe-fittings7"],
          productImages["alloy-steel-pipe-fittings8"]
        ],
        description: `We produce high-quality Alloy Steel Buttweld Fittings, including custom-fabricated pieces up to 48”. Our product range includes elbows, tees, reducers, crosses, stub ends, and pipe bends. Alloy Steel fittings are ideal for applications where corrosion resistance is less critical but strength and durability are essential.`,
        materialSpecifications: {
          Standards: "ASTM A335 / ASME SA335",
          Grades: "WP11, WP12, WP22, WP5, WP9, WP91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Buttweld Fittings Specifications",
        images: [
          productImages["nickel-alloy-pipe-fittings1"],
          productImages["nickel-alloy-pipe-fittings2"],
          productImages["nickel-alloy-pipe-fittings3"],
          productImages["nickel-alloy-pipe-fittings4"],
          productImages["nickel-alloy-pipe-fittings5"],
          productImages["nickel-alloy-pipe-fittings6"],
          productImages["nickel-alloy-pipe-fittings7"],
          productImages["nickel-alloy-pipe-fittings8"]
        ]
        ,
        description: `<strong>${companyName}</strong> offers a comprehensive range of Nickel Alloy Buttweld Fittings available in various sizes, grades, and thicknesses. These fittings provide excellent corrosion resistance, strength, and heat resistance, making them suitable for industries like aerospace, chemical processing, and power generation.`,
        materialSpecifications: {
          Standards: "ASTM B366 / ASME SB366",
          Grades: `200 (WPN, N02200), 201 (WPNL, N02201), Alloy 20 (WP20CB, N08020), 600 (WPNCI, N06600), 601 (N06601), 625 (WPNCMC, N06625), 718 (N07718), 800 (WPNIC, N08800), 800H (WPNIC10, N08810), 800HT (WPNIC11, N08811), 825 (WPNICMC, N08825), 904L (N08904), 400 (WPNC, N04400), 500 (N05500), C276 (WPHC276, N10276), C4 (WPHC4, N06455), C22 (WPHC22, N06022), C2000 (WPHC2000, N06200), X (WPHX, N06002), B2 (WPHB-2, N10665), B3 (WPHB-3, N10675), Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Pipe Fittings Specifications",

        images: [
          productImages["carbon-steel-pipe-fittings1"],
          productImages["carbon-steel-pipe-fittings2"],
          productImages["carbon-steel-pipe-fittings3"],
          productImages["carbon-steel-pipe-fittings4"],
          productImages["carbon-steel-pipe-fittings5"],
          productImages["carbon-steel-pipe-fittings6"],
          productImages["carbon-steel-pipe-fittings7"],
          productImages["carbon-steel-pipe-fittings8"]
        ],
        description: `<strong>${companyName}</strong> is a leading manufacturer and supplier of Carbon Steel Buttweld Fittings, offering outstanding strength and weldability. These fittings are available in various shapes and dimensions and are widely used in structural and pressure applications. Our CS fittings include elbows, tees, reducers, crosses, nipples, and more.`,
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
    images: [
      bannerImages["flanges1"],
      bannerImages["flanges2"],
      bannerImages["flanges3"]
    ]
    ,
    productShortName: "Flanges",
    description: `<strong>${companyName}</strong> is a trusted manufacturer, supplier, and stockist of high-quality steel flanges in India. We offer a wide variety of flanges in different types, shapes, sizes, dimensions, and material grades. Depending on the connection method, our range includes Slip-On Flanges, Orifice Flanges, Spectacle Flanges, Lap Joint Flanges, Raised Face Flanges, Ring Joint Flanges, Weld Neck Flanges, Socket Weld Flanges, and more.

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
        images: [
          productImages["stainless-steel-flanges1"],
          productImages["stainless-steel-flanges2"],
          productImages["stainless-steel-flanges3"],
          productImages["stainless-steel-flanges4"],
          productImages["stainless-steel-flanges5"],
          productImages["stainless-steel-flanges6"],
          productImages["stainless-steel-flanges7"],
          productImages["stainless-steel-flanges8"]
        ],
        description: `<strong>${companyName}</strong> offers an extensive range of stainless steel flanges in various sizes and pressure classes to meet your specific project needs, including rare configurations. Our Stainless Steel Pipe Flanges offer excellent corrosion resistance, high strength, and mechanical durability. For example, SS Blind Flanges are ideal for sealing off piping systems or vessel openings with secure and leak-proof connections.`,
        materialSpecifications: {
          Standards: "ASTM A403 / ASME SA403",
          Grades: "WP – 201, 202, 301, 302, 304, 304L, 309, 310, 316, 316L, 316LN, 316Ti, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Flanges Specifications",
        images: [
          productImages["alloy-steel-flanges1"],
          productImages["alloy-steel-flanges2"],
          productImages["alloy-steel-flanges3"],
          productImages["alloy-steel-flanges4"],
          productImages["alloy-steel-flanges5"],
          productImages["alloy-steel-flanges6"],
          productImages["alloy-steel-flanges7"],
          productImages["alloy-steel-flanges8"],
        ],
        description: `<strong>${companyName}</strong> is a top manufacturer and supplier of Alloy Steel Flanges in India. These flanges offer excellent strength and chemical resistance and are suitable for high-temperature environments (1725–1850°F). The Alloy Steel Slip-On Flanges are resistant to water, atmospheric conditions, and chemicals, making them suitable for various critical applications.`,
        materialSpecifications: {
          Standards: "ASTM A335 / ASME SA335",
          Grades: "WP11, WP12, WP22, WP5, WP9, WP91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Steel Flanges Specifications",
        images: [
          productImages["nickel-alloy-flanges1"],
          productImages["nickel-alloy-flanges2"],
          productImages["nickel-alloy-flanges3"],
          productImages["nickel-alloy-flanges4"],
          productImages["nickel-alloy-flanges5"],
          productImages["nickel-alloy-flanges6"],
          productImages["nickel-alloy-flanges7"],
          productImages["nickel-alloy-flanges8"],
        ],
        description: `<strong>${companyName}</strong> has earned a solid reputation for producing high-quality Nickel Alloy Flanges. These flanges offer outstanding thermal and electrical conductivity, low vapor pressure, and excellent weldability. Nickel Alloy 200 and 201 are commonly used in industries requiring high corrosion resistance and formability.`,
        materialSpecifications: {
          Standards: "ASTM B366 / ASME SB366",
          Grades: `200 (WPN, N02200), 201 (WPNL, N02201), Alloy 20 (WP20CB, N08020), 600 (WPNCI, N06600), 601 (N06601), 625 (WPNCMC, N06625), 718 (N07718), 800 (WPNIC, N08800), 800H (WPNIC10, N08810), 800HT (WPNIC11, N08811), 825 (WPNICMC, N08825), 904L (N08904), 400 (WPNC, N04400), 500 (N05500), C276 (WPHC276, N10276), C4 (WPHC4, N06455), C22 (WPHC22, N06022), C2000 (WPHC2000, N06200), X (WPHX, N06002), B2 (WPHB-2, N10665), B3 (WPHB-3, N10675), Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Flanges Specifications",
        images: [
          productImages["carbon-steel-flanges1"],
          productImages["carbon-steel-flanges2"],
          productImages["carbon-steel-flanges3"],
          productImages["carbon-steel-flanges4"],
          productImages["carbon-steel-flanges5"],
          productImages["carbon-steel-flanges6"],
          productImages["carbon-steel-flanges7"],
          productImages["carbon-steel-flanges8"],
        ],
        description: `<strong>${companyName}</strong> manufactures premium-grade Carbon Steel Flanges that deliver excellent mechanical strength and corrosion resistance. These flanges are designed to withstand high pressures and temperatures, making them ideal for applications in power plants, petrochemical industries, and more.`,
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
    images: [
      bannerImages["forged-fittings1"],
      bannerImages["forged-fittings2"],
      bannerImages["forged-fittings3"],
    ],
    productShortName: "Forged Fittings",
    description: `<strong>${companyName}</strong> is one of the most preferred manufacturers, suppliers, and exporters of premium-quality Forged Fittings known for their outstanding durability and reliable performance. These fittings are offered in a variety of types, forms, sizes, material grades, and specifications. Known for their long operational life and superior build, our forged pipe fittings include 90° elbows, 45° elbows, half couplings, lateral outlets, unions, crosses, full couplings, and more.

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
        images: [
          productImages["stainless-steel-forged-fittings1"],
          productImages["stainless-steel-forged-fittings2"],
          productImages["stainless-steel-forged-fittings3"],
          productImages["stainless-steel-forged-fittings4"],
          productImages["stainless-steel-forged-fittings5"],
          productImages["stainless-steel-forged-fittings6"],
          productImages["stainless-steel-forged-fittings7"],
          productImages["stainless-steel-forged-fittings8"],
          productImages["stainless-steel-forged-fittings9"],
          productImages["stainless-steel-forged-fittings10"],
        ],
        description: `<strong>${companyName}</strong> provides a comprehensive range of stainless steel forged fittings in multiple grades and dimensions. With a reputation for consistent quality and on-time delivery, we manufacture forged fittings that are widely used across industries for their excellent corrosion resistance, strength, and long service life.`,
        materialSpecifications: {
          Standards: "ASTM A182 & ASME SA182",
          Grades: "F201, F202, F301, F302, F304, F304L, F309, F310, F316, F316L, F316LN, F316Ti, F317L, F321, F347, 405, 409, 410, 420, 430, 440C, F904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Forged Fittings Specifications",
        images: [
          productImages["alloy-steel-forged-fittings1"],
          productImages["alloy-steel-forged-fittings2"],
          productImages["alloy-steel-forged-fittings3"],
          productImages["alloy-steel-forged-fittings4"],
          productImages["alloy-steel-forged-fittings5"],
          productImages["alloy-steel-forged-fittings6"],
          productImages["alloy-steel-forged-fittings7"],
          productImages["alloy-steel-forged-fittings8"],
          productImages["alloy-steel-forged-fittings9"],
          productImages["alloy-steel-forged-fittings10"],
        ],

        description: `<strong>${companyName}</strong> manufactures and supplies an extensive variety of alloy steel forged fittings using advanced machinery and skilled technicians. Designed for high-temperature and high-pressure applications, these fittings are engineered to perform reliably in demanding environments.`,
        materialSpecifications: {
          Standards: "ASTM A182 & ASME SA182",
          Grades: "F1, F5, F9, F11, F12, F22, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Forged Fittings Specifications",
        images: [
          productImages["nickel-alloy-forged-fittings1"],
          productImages["nickel-alloy-forged-fittings2"],
          productImages["nickel-alloy-forged-fittings3"],
          productImages["nickel-alloy-forged-fittings4"],
          productImages["nickel-alloy-forged-fittings5"],
          productImages["nickel-alloy-forged-fittings6"],
          productImages["nickel-alloy-forged-fittings7"],
          productImages["nickel-alloy-forged-fittings8"],
          productImages["nickel-alloy-forged-fittings9"],
          productImages["nickel-alloy-forged-fittings10"],
        ],

        description: `As a leading manufacturer and exporter, <strong>${companyName}</strong> delivers high-performance Nickel Alloy Forged Fittings known for their exceptional corrosion resistance and strength in extreme environments. These fittings are widely used in industries such as aerospace, marine, petrochemical, and chemical processing.`,
        materialSpecifications: {
          Standards: "ASTM / ASME SB 564, SB 160, SB 366, SB 472",
          Grades: `Hastelloy B2/B3/C4/C22/C276/C2000/X, Inconel 600/601/625/718/715, Incoloy 800/800H/800HT/825/925, Nickel 200/201, Alloy 36/42/A286, Monel 400/K500, Alloy 2205/2507, UNS N08020, UNS R30605, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Forged Fittings Specifications",
        images: [
          productImages["carbon-steel-forged-fittings1"],
          productImages["carbon-steel-forged-fittings2"],
          productImages["carbon-steel-forged-fittings3"],
          productImages["carbon-steel-forged-fittings4"],
          productImages["carbon-steel-forged-fittings5"],
          productImages["carbon-steel-forged-fittings6"],
          productImages["carbon-steel-forged-fittings7"],
          productImages["carbon-steel-forged-fittings8"],
          productImages["carbon-steel-forged-fittings9"],
          productImages["carbon-steel-forged-fittings10"],
        ],

        description: `<strong>${companyName}</strong> has been a pioneer in manufacturing Carbon Steel Forged Fittings. These fittings are widely used in high-pressure systems for their strength and mechanical durability. Suitable for extreme temperature conditions—whether cold, annealed, or high-heat—they are produced with precision using state-of-the-art technology.`,
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
    images: [
      bannerImages["fasteners1"],
      bannerImages["fasteners2"],
      bannerImages["fasteners3"],
    ],

    productShortName: "Fasteners",
    description: `<strong>${companyName}</strong>, an ISO 9001:2015 Certified Company, is one of the leading manufacturers, stockists, and suppliers of high-quality Fasteners in India. Our fasteners are manufactured in compliance with stringent industrial standards and are available in a comprehensive range of sizes from M2 to M150, with lengths up to 6 meters.

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
        images: [
          productImages["stainless-steel-fasteners1"],
          productImages["stainless-steel-fasteners2"],
          productImages["stainless-steel-fasteners3"],
          productImages["stainless-steel-fasteners4"],
          productImages["stainless-steel-fasteners5"],
          productImages["stainless-steel-fasteners6"],
          productImages["stainless-steel-fasteners7"],
          productImages["stainless-steel-fasteners8"],
          productImages["stainless-steel-fasteners9"],
          productImages["stainless-steel-fasteners10"],
        ],

        description: `<strong>${companyName}</strong> offers a comprehensive inventory of stainless steel fasteners suitable for a wide range of industrial applications. These fasteners are available in multiple grades and provide excellent strength and corrosion resistance. We maintain ready stock of all major grades including SS 304, 316, 310, 904L, and others.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F201, F202, F301, F302, F304, F304L, F309, F310, F316, F316L, F316LN, F317L, F321, F347, 405, 409, 410, 420, 430, 440C, F904L, Al-6XN (N08367), Nitronic 50 / 60, 422, 416, 446, Nimonic 80 (N07080), A286 (S66286), 17-4ph, 15-5ph, Alloy 28 (N08028)"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Fasteners Specifications",
        images: [
          productImages["alloy-steel-fasteners1"],
          productImages["alloy-steel-fasteners2"],
          productImages["alloy-steel-fasteners3"],
          productImages["alloy-steel-fasteners4"],
          productImages["alloy-steel-fasteners5"],
          productImages["alloy-steel-fasteners6"],
          productImages["alloy-steel-fasteners7"],
          productImages["alloy-steel-fasteners8"],
          productImages["alloy-steel-fasteners9"],
          productImages["alloy-steel-fasteners10"],
        ],

        description: `<strong>${companyName}</strong> manufactures alloy steel fasteners in a variety of grades, dimensions, and finishes to meet critical performance requirements. These fasteners are widely used in power plants, petrochemical industries, and high-temperature environments.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Fasteners Specifications",
        images: [
          productImages["nickel-alloy-fasteners1"],
          productImages["nickel-alloy-fasteners2"],
          productImages["nickel-alloy-fasteners3"],
          productImages["nickel-alloy-fasteners4"],
          productImages["nickel-alloy-fasteners5"],
          productImages["nickel-alloy-fasteners6"],
          productImages["nickel-alloy-fasteners7"],
          productImages["nickel-alloy-fasteners8"],
          productImages["nickel-alloy-fasteners9"],
          productImages["nickel-alloy-fasteners10"],
        ],

        description: `We offer a broad selection of Nickel Alloy Fasteners that include premium-grade materials such as Inconel, Monel, Hastelloy, and more. These fasteners are engineered for superior resistance to corrosion, oxidation, and extreme heat, making them suitable for critical applications in aerospace, marine, and chemical industries.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B425, B166, B446, B574, B472 / ASME SB160, SB164, SB425, SB166, SB446, SB574, SB472",
          Grades: `Hastelloy B2/B3/C4/C22/C276/C2000/X, Inconel 600/601/625/715/718, Incoloy 800/800H/800HT/825/925, Nickel 200/201, Alloy 36/42/A286, Monel 400/K500, Alloy 2205/2507, UNS N08020, UNS R30605, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Fasteners Specifications",
        images: [
          productImages["carbon-steel-fasteners1"],
          productImages["carbon-steel-fasteners2"],
          productImages["carbon-steel-fasteners3"],
          productImages["carbon-steel-fasteners4"],
          productImages["carbon-steel-fasteners5"],
          productImages["carbon-steel-fasteners6"],
          productImages["carbon-steel-fasteners7"],
          productImages["carbon-steel-fasteners8"],
          productImages["carbon-steel-fasteners9"],
          productImages["carbon-steel-fasteners10"],
        ],

        description: `<strong>${companyName}</strong> produces durable and high-strength carbon steel fasteners that are widely used in high-pressure and high-temperature environments. Manufactured in compliance with ASTM and ASME standards, these fasteners are an economical solution for structural and industrial applications.`,
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
    images: [
      bannerImages["valves1"],
      bannerImages["valves2"],
      bannerImages["valves3"],
      bannerImages["valves4"],
      bannerImages["valves5"],
    ],
    description: `<strong>${companyName}</strong> is a leading manufacturer and supplier of high-quality industrial valves, catering to both domestic and international markets. Our valves are designed to meet global standards including AISI, BS, IS, ASME, and ANSI. They efficiently regulate, control, and direct fluid flow through mechanisms like full closure, partial opening, or directional changes.

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
        images: [
          productImages["stainless-steel-valves1"],
          productImages["stainless-steel-valves2"],
          productImages["stainless-steel-valves3"],
          productImages["stainless-steel-valves4"],
          productImages["stainless-steel-valves5"],
          productImages["stainless-steel-valves6"],
          productImages["stainless-steel-valves7"],
          productImages["stainless-steel-valves8"],
        ],
        description: `<strong>${companyName}</strong> is one of India's largest exporters of stainless steel valves. These valves are widely used in industries such as petrochemicals, chemicals, water treatment, gas distribution, and general engineering. Our Stainless Steel Ball Valves are easy to maintain, highly durable, and corrosion-resistant.`,
        materialSpecifications: {
          Grades: "304, 304L, 309, 310, 316, 316L, 317L, 321, 347, 405, 409, 410, 420, 430, 440C, 904L"
        }
      },
      {
        id: 2,
        name: "Alloy Steel Valves Specifications",
        images: [
          productImages["alloy-steel-valves1"],
          productImages["alloy-steel-valves2"],
          productImages["alloy-steel-valves3"],
          productImages["alloy-steel-valves4"],
          productImages["alloy-steel-valves5"],
          productImages["alloy-steel-valves6"],
          productImages["alloy-steel-valves7"],
          productImages["alloy-steel-valves8"],
          productImages["alloy-steel-valves9"],
          productImages["alloy-steel-valves10"],
        ],

        description: `Our Alloy Steel Valves, including Butterfly and Gate Valves, are manufactured using premium ASTM A217 grade materials. With advanced production capabilities, we offer customizable sizes and configurations suited for high-pressure, high-temperature applications across a wide range of industries.`,
        materialSpecifications: {
          Standards: "ASTM A182, ASME SA182",
          Grades: "F11, F12, F22, F5, F9, F91"
        }
      },
      {
        id: 3,
        name: "Nickel Alloy Valves Specifications",
        images: [
          productImages["nickel-alloy-valves1"],
          productImages["nickel-alloy-valves2"],
          productImages["nickel-alloy-valves3"],
          productImages["nickel-alloy-valves4"],
          productImages["nickel-alloy-valves5"],
          productImages["nickel-alloy-valves6"],
          productImages["nickel-alloy-valves7"],
          productImages["nickel-alloy-valves8"],
          productImages["nickel-alloy-valves9"],
          // productImages["nickel-alloy-valves10"],
        ],

        description: `<strong>${companyName}</strong> manufactures precision-engineered Nickel Alloy Valves ideal for handling corrosive fluids in chemical processing, marine, steam, and gas systems. These valves are engineered for optimal resistance and longevity, available in custom sizes and pressure ratings.`,
        materialSpecifications: {
          Standards: "ASTM B160, B164, B425, B166, B446, B574, B472 / ASME SB160, SB164, SB425, SB166, SB446, SB574, SB472",
          Grades: `Hastelloy (B2, B3, C4, C22, C276, C2000, X), Inconel (600, 601, 625, 715, 718), Incoloy (800, 800H, 800HT, 825, 925), Nickel (200, 201, 36, 42, A286), Monel (400, K500), Alloy 2205, 2507, Cu-Ni 70/30 & 90/10, Titanium, Tantalum, Brass, Bronze, Bismuth, High-Speed Steel, Zinc, Aluminium, Lead`
        }
      },
      {
        id: 4,
        name: "Carbon Steel Valves Specifications",
        images: [
          productImages["carbon-steel-valves1"],
          productImages["carbon-steel-valves2"],
          productImages["carbon-steel-valves3"],
          productImages["carbon-steel-valves4"],
          productImages["carbon-steel-valves5"],
          productImages["carbon-steel-valves6"],
          productImages["carbon-steel-valves7"],
          productImages["carbon-steel-valves8"],
          productImages["carbon-steel-valves9"],
          productImages["carbon-steel-valves10"],
        ],

        description: `<strong>${companyName}</strong> offers robust and cost-effective Carbon Steel Valves, including ASTM A105 and A350 grades. Designed for durability and performance under pressure, these valves are widely used in power generation, oil & gas, water treatment, and other heavy-duty applications.`,
        materialSpecifications: {
          Standards: "ASTM A105 / A350",
          Grades: "Cast Iron, Gr. LF2, LF3"
        }
      }
    ]
  },
  {
    id: 9,
    productShortName: "Angles, Channels & Flat",
    images: [
      bannerImages["angles-channels-flats1"],
      bannerImages["angles-channels-flats2"],
      bannerImages["angles-channels-flats3"],
    ],
    name: "Angles, Channels & Flat Manufacturers, Suppliers & Stockist in India",
    description: `<strong>${companyName}</strong> mainly use high-quality raw material and advanced machinery to produced world class products. Our production unit manufactured these Angles, Channels & Flats as per Indian and International Standards. Various types of angles & channels including Equal Angles, Unequal Angles, C-Channels, and U-Channels are provided with excellent surface finish and dimensional accuracy.

  The different types of industries where our high-quality angles & channels used are paper & pulp, construction, piping, water treatment applications, raceways, braces and frames for machinery and housing in corrosive environments, etc.`,
    productDetails: {
      tableData: {
        tableName: "Specifications for Angles, Channels & Flat",
        materialSpecifications: {
          Width: "20mm to 150mm",
          Thickness: "03mm To 10mm",
          Length: "upto 12 Feet",
          Finish: "Mill, Customer specific finish",
          Surface: "Anodize, electrophoresis, powder coating, PVDF coating, wood grain painting, matted, etc.",
          Type: "Angles, Channels, Flat",
          Processing: "Cutting, Forming, Drilling/Machining, Grinding, Testing",
          "Type of material": "stainless steel, nickel alloy, titanium, aluminum",
          Dimensions: "EN, DIN, JIS, ASTM, BS, ASME, AISI",
          Standards: "ASTM A 276/A 276M,A 484/A 484M,A 564/A 564M,A 582/A582M,A 638 /A 638M,A705/A705M",
          Size: "angle – 5mm to 9mm, channel – 40mm*20mm~300mm*300mm",
          Types: "Equal angle, Unequal angle, U channel, C channel"
        }
      }
    },
    subProducts: [
      {
        id: 1,
        productShortName: "Angles",
        name: "Angles Specifications",
        imagesWithLabel: [
          {
            image: productImages["steel-equal-angles"],
            label: "Equal Angles",
          },
          {
            image: productImages["steel-unequal-angles"],
            label: "Unequal Angles",
          },
          {
            image: productImages["steel-bulb-angles"],
            label: "Bulb Angles",
          },
        ],


        description: `The most commonly found steel angles are formed at a 90 degree angle and has two legs of equal length. The sides are either equal or of different sizes, if one leg is longer than the other then it is known as UNEQUAL angle. The steel angles of various strength like HT/MS are formed as required by different applications. The steel angle are used in various applications like reinforcement, transmission towers, Bridges, Sheds etc.`,
        materialSpecifications: {
          Standards: "",
          Grades: ""
        }
      },
      {
        id: 2,
        name: "Channels Specifications",
        imagesWithLabel: [
          {
            image: productImages["steel-u-channels"],
            label: "U-Steel channels",
          },
          {
            image: productImages["steel-c-channels"],
            label: "C-Steel channels",
          },
          {
            image: productImages["steel-z-channels"],
            label: "Z-Steel channels",
          },
          {
            image: productImages["steel-h-channels"],
            label: "Hat-Steel channels",
          },
          {
            image: productImages["steel-t-channels"],
            label: "T-Steel channels",
          },
          {
            image: productImages["steel-j-channels"],
            label: "J-Steel channels",
          },
        ],
        description: `
  A channel is a right angle "C" section. They are also called C Channels. Along with beams, channels are mainly used in structural applications. Mostly MS Channels are used as supports and guide. These are roll-formed products. MS Channels has wide range of applications like Purling for Sheds, Scaffoldings in construction Industries, and Supporting frames for Structures, Base frames of heavy machinery and automotives etc.
  <br><br>
  U-steel channels sport a simple ‘U’ shape with two flanges that are parallel and perpendicular to the base. They are great materials for manufacturing since they are made to assist heavy machinery and equipment, especially in metal rolling. They are often used to support windows, doors, and flat panels.
  <br><br>
  <strong>C-STEEL CHANNELS</strong> are the most common type of channels. They are similar to the shape of U-steel channels with the only difference being that they have two parallel flanges. This is a result of continuous rolling during their production. They have a consistent size from the web to the tip of the flange, sporting a flatter profile.
  <br><br>
  <strong>Z-STEEL CHANNELS</strong> are known as purlins. Apart from construction, they are often used in DIY projects, such as shelving units, workbenches, plant hangers, and more. Their main purposes in projects are as supports, slides, tracks, and framing. That’s why they are typically found in garage doors, window frames, store fixtures, toolboxes, or fences.
  <br><br>
  <strong>HAT-STEEL CHANNEL</strong> resembles a hat when turned upside down. They are steel channels with outward flanges that are perpendicular to the usual steel channel flanges. This design makes them ideal for framing roofs. Besides that, they make a good addition as supports in ceilings or floors, ensuring the durability of these constructions. Their shape makes them a good furring material or channels in wall construction.
  <br><br>
  Like many other steel channels, the <strong>J-STEEL CHANNEL</strong> sport the letter that they are named after with one side longer than the other. They have a wide range of sizes and can be customized to any project specifications. They come in hemmed, hemless, and with nailer variations that are manufactured to make construction more secure. Their shape makes them ideal for mounting siding or roofing materials. That’s why they are used in installations of windows and doors to support and secure the panel edges. They hide the cut lines or cover the gaps of panels such as glass, mirrors, or thin laminates, making your project more seamless.
  `,

        materialSpecifications: {
          Standards: "",
          Grades: ""
        }
      },
      {
        id: 3,
        name: "Flat Specifications",
        images: [
          productImages["steel-flats1"],
          productImages["steel-flats2"],
          productImages["steel-flats3"],
        ],
        description: `The Stainless Steel Flat Bars can be manufactured using different types of ss including ferritic, austenitic, martensitic and duplex. The material of the flat bars can vary according to its composition, however, the most used among them is the austenitic type. Depending on the steel grade with which the flat bars are made, it can be used in a wide range of applications. For example, the 316 grade ss helps to resist chloride ion corrosion and hence they are widely used in several marine applications. They are also used in applications that require higher structural strength. They can withstand elevated temperatures of up to 870 degrees C.`,
        materialSpecifications: {
          Standards: "",
          Grades: "Stainless steel: 201, 202, 304, 304l, 310, 310s, 316, 316l, 317, 317l, 321, 321h, 347, 347h, 410 | Nickel Alloy: UNS 2200 (NICKEL 200), UNS 2201 (NICKEL 201) | Aluminium: 1050,1100, 2017, 7150, 7178, 7575, 2050, 7085, 2011 A92011, 2014A A92014, 2024 A92024, 2219, 5052 A95052, 5083 A95083, 5754, 6061 A96061 A86061, 6063, 6082 A96082, 7071 7020, 7050 A97050, 7075 A97075 A87075, 7175 | Titanium: Grade 1, Grade 4, Grade 5(Ti 6Al-4V), Grade 6(Ti 5Al-2.5Sn), Grade 7, Grade 11, Grade 12, 8Ai-1Mo-1V, Grade 9(3Al-2.5V), 6Al-6V-25n, 6Al-2Sn-4Zr-2Mo, 6Al-7Nb, Grade 23(Ti 6AL-4V ELI), Grade 5 ELI"
        }
      }
    ]
  },
  {
    id: 10,
    productShortName: "Stainless Steel",
    images: [
      bannerImages["Stainless-Steel-316-316L-Round-B"],
      // bannerImages["stainless-steel2"],
      // bannerImages["stainless-steel3"]
    ],
    name: "Stainless Steel Manufacturer & Supplier in India ",
    description: `
      <p><strong>${companyName}</strong> is a Leading <strong>Stainless Steel Manufacturer in India</strong>. We offer a wide selection of Stainless Steel Products in different sizes, shapes, and specifications to meet our clients' needs. Our Stainless Steel is recognized globally for its reliability and high quality. Our High-quality Stainless Steel Products meet the needs of various industries and applications.</p>
      <p>We are a top-notch Stainless Steel Supplier in India and other countries worldwide. We offer <strong>Stainless Steel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings</strong>.</p>
      <p>These Stainless Steel are tested through a series of quality tests before delivery. Our products are known for ultimate performance, precise design, high-grade materials, and robust build. They are widely used in power, engineering, construction, and other industries.</p>
    `,
    productDetails: {
      tableData: {
        tableName: "Stainless Steel - Specifications",
        materialSpecifications: {
          "Stainless Steel Grades": "201, 202, 205, 301, 302, 303, 304, 304l, 308, 309, 309s, 310, 310s, 314, 316, 316l, 316ti, 317, 317l, 321, 347, 405, 409, 429, 430, 430f, 430fse, 434, 436, 442, 446, 403, 410, 414, 416, 416se, 420, 420f, 422, 431, 440a, 440b, 440c, 501, 502, 630",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Available Products": "Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Stainless Steel",
        name: "Stainless Steel Pipe Fittings",
        imagesWithLabel: [
          {
            label: "Stainless Steel Pipe Fittings",
            image: bannerImages["pipe-fittings1"],
          },
          {
            label: "Stainless Steel Fasteners",
            image: productImages["stainless-steel-fasteners1"]
          },
          {
            label: "Stainless Steel Pipe & Tube",
            image: productImages["stainless-steel-pipe-tube-manufa"]
          },
          {
            label: "Stainless Steel Round Bar",
            image: productImages["ss-round-bar-manufacturer-india"]
          },
          {
            label: "Stainless Steel Sheet & Plate",
            image: productImages["stainless-steel-sheet-plate-manu"]
          },
          {
            label: "Stainless Steel Forged Fitting",
            image: productImages["stainless-steel-forged-fittings"]
          },
          {
            label: "Stainless Steel Flanges",
            image: productImages["stainless-steel-flanges1"]
          },
          {
            label: "Stainless Steel Angle & Channels",
            image: productImages["ss-angle-channel-manufacturer-in"]
          },
          {
            label: "Stainless Steel Wire Mesh",
            image: productImages["ss-wire-mesh-manufacturer-india"]
          }
        ],
        description: "",
        materialSpecifications: {}
      }
    ]
  },
  {
    id: 11,
    productShortName: "Carbon Steel",
    images: [
      bannerImages["Carbon-Steel-Bars"],
    ],
    name: "Carbon Steel Manufacturer & Supplier in India ",
    description: `<strong>${companyName}</strong> is a leading Carbon Steel Manufacturer in India offering a wide range of Carbon Steel products in various sizes, shapes, and specifications. Our products are known for their durability, precision design, and superior surface finish. Used across power, engineering, construction, and other industries, our Carbon Steel offerings are quality tested and performance-driven.`,
    productDetails: {
      tableData: {
        tableName: "Carbon Steel - Specifications",
        materialSpecifications: {
          "Carbon Steel Grades": "ASTM / ASME A 335 GRP 1 , P5 , P9 , P11 , P12 , P22 , P23 , P91",
          "Standards": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Available Products": "Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Carbon Steel",
        name: "Carbon Steel Products",
        imagesWithLabel: [
          {
            label: "Carbon Steel Pipe Fittings",
            image: productImages["carbon-steel-pipe-fittings1"]
          },
          {
            label: "Carbon Steel Fasteners",
            image: productImages["carbon-steel-fasteners1"]
          },
          {
            label: "Carbon Steel Pipes & Tubes",
            image: productImages["carbon-steel-pipes-tubes1"]
          },
          {
            label: "Carbon Steel Round Bar",
            image: productImages["carbon-steel-round-bar-manufactu"]
          },
          {
            label: "Carbon Steel Sheet & Plate",
            image: productImages["carbon-steel-sheet-plate-manufac"]
          },
          {
            label: "Carbon Steel Forged Fittings",
            image: productImages["carbon-steel-forged-fittings1"]
          },
          {
            label: "Carbon Steel Flanges",
            image: productImages["carbon-steel-flanges1"]
          },
          {
            label: "Carbon Steel Angle & Channels",
            image: productImages["carbon-steel-angle-manufacturer"]
          },
          {
            label: "Carbon Steel Wire Mesh",
            image: productImages["carbon-steel-wire-mesh-manufactu"]
          }
        ]
      }
    ]
  },
  {
    id: 12,
    productShortName: "Hastelloy",
    images: [
      bannerImages["hastelloy-manufacturer-india"],
    ],
    name: "Hastelloy Manufacturer & Supplier in India",
    description: `<strong>${companyName}</strong> is a leading Hastelloy Manufacturer in India, offering a wide range of Hastelloy products in various shapes, sizes, and grades. Our products are known for their reliability, high quality, and performance. We provide Hastelloy Pipe Fittings, Round Bars, Flanges, Angles & Channels, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings to industries across the globe.`,
    productDetails: {
      tableData: {
        tableName: "Hastelloy - Specifications",
        materialSpecifications: {
          "Hastelloy Grades": "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000, Hastelloy C-4, Hastelloy X, Hastelloy B, Hastelloy N, Hastelloy G",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Hastelloy Products": "Hastelloy Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Hastelloy",
        name: "Hastelloy Products",
        imagesWithLabel: [
          {
            label: "Hastelloy Pipe Fittings",
            image: productImages["hastelloy-pipe-fitting-manufactu"]
          },
          {
            label: "Hastelloy Fasteners",
            image: productImages["hastelloy-fastener-manufacturer"]
          },
          {
            label: "Hastelloy Pipes & Tubes",
            image: productImages["hastelloy-pipe-manufacturer-indi"]
          },
          {
            label: "Hastelloy Round Bar",
            image: productImages["hastelloy-round-bar-manufacturer"]
          },
          {
            label: "Hastelloy Sheet & Plate",
            image: productImages["hastelloy-sheet-plate-manufactur"]
          },
          {
            label: "Hastelloy Forged Fittings",
            image: productImages["hastelloy-forged-fittings-manufa"]
          },
          {
            label: "Hastelloy Flanges",
            image: productImages["hastelloy-flange-manufacturer-in"]
          },
          {
            label: "Hastelloy Angle & Channels",
            image: productImages["hastelloy-angle-channel-manufact"]
          },
          {
            label: "Hastelloy Wire Mesh",
            image: productImages["hastelloy-wire-mesh-manufacturer"]
          }
        ]
      }
    ]
  }
  ,
  {
    id: 13,
    productShortName: "Titanium",
    images: [
      bannerImages["titanium-manufacturer-india"],

    ],
    name: "Titanium Manufacturer & Supplier in India",
    description: `<strong>${companyName}</strong> is a trusted Titanium Manufacturer and Supplier based in India, offering a broad range of Titanium products tailored to industrial requirements. Known for their strength, corrosion resistance, and durability, our Titanium offerings include Pipe Fittings, Round Bars, Flanges, Pipes & Tubes, Fasteners, Angles & Channels, Sheet & Plates, Forged Fittings, and Wire Mesh. We serve clients across India and export globally.`,
    productDetails: {
      tableData: {
        tableName: "Titanium - Specifications",
        materialSpecifications: {
          "Titanium Grades": "Grade 1, Grade 4, Grade 5 (Ti 6Al-4V), Grade 6 (Ti 5Al-2.5Sn), Grade 7, Grade 11, Grade 12, 8Al-1Mo-1V, Grade 9 (3Al-2.5V), 6Al-6V-2Sn, 6Al-2Sn-4Zr-2Mo, 6Al-7Nb, Grade 23 (Ti 6AL-4V ELI), Grade 5 ELI",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Titanium Products": "Titanium Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Titanium",
        name: "Titanium Products",
        imagesWithLabel: [
          {
            label: "Titanium Pipe Fittings",
            image: productImages["titanium-pipe-fittings-manufactu"]
          },
          {
            label: "Titanium Fasteners",
            image: productImages["titanium-fasteners-manufacturer"]

          },
          {
            label: "Titanium Pipes & Tubes",

            image: productImages["titanium-pipe-tube-manufacturer"]
          },
          {
            label: "Titanium Round Bar",
            image: productImages["titanium-round-bar-manufacturer"]
          },
          {
            label: "Titanium Sheet & Plate",
            image: productImages["titanium-sheet-plate-manufacture"]
          },
          {
            label: "Titanium Forged Fittings",
            image: productImages["titanium-forged-fittings-manufac"]
          },
          {
            label: "Titanium Flanges",
            image: productImages["titanium-flange-manufacturer-ind"]
          },
          {
            label: "Titanium Angle & Channels",
            image: productImages["titanium--angle-channel-manufact"]
          },
          {
            label: "Titanium Wire Mesh",
            image: productImages["titanium-wire-mesh-manufacturer"]
          }
        ]
      }
    ]
  },
  {
    id: 14,
    productShortName: "Inconel",
    images: [
      bannerImages["inconel-manufacturer-india"],

    ],
    name: "Inconel Manufacturer & Supplier in India",
    description: `<strong>${companyName}</strong> is a reputed Inconel Manufacturer and Supplier in India, offering premium-grade Inconel products in various dimensions and forms. Known for their exceptional strength and resistance to high temperatures and corrosion, our Inconel range includes Pipe Fittings, Flanges, Pipes & Tubes, Fasteners, Round Bars, Angles & Channels, Sheet & Plates, Forged Fittings, and Wire Mesh. We cater to both domestic and international clients across various industries.`,
    productDetails: {
      tableData: {
        tableName: "Inconel - Specifications",
        materialSpecifications: {
          "Inconel Grades": "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750, Inconel 690, Inconel 602, Inconel 617, Inconel 925, Inconel A-289, Inconel AL-6XN, AL-904L",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Inconel Products": "Inconel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Inconel",
        name: "Inconel Products",
        imagesWithLabel: [
          {
            label: "Inconel Pipe Fittings",
            image: productImages["titanium-pipe-fittings-manufactu"]
          },
          {
            label: "Inconel Fasteners",
            image: productImages["titanium-fasteners-manufacturer"]
          },
          {
            label: "Inconel Pipes & Tubes",
            image: productImages["titanium-pipe-tube-manufacturer"]
          },
          {
            label: "Inconel Round Bar",
            image: productImages["titanium-round-bar-manufacturer"]
          },
          {
            label: "Inconel Sheet & Plate",
            image: productImages["titanium-sheet-plate-manufacture"]
          },
          {
            label: "Inconel Forged Fittings",
            image: productImages["titanium-forged-fittings-manufac"]
          },
          {
            label: "Inconel Flanges",
            image: productImages["titanium-flange-manufacturer-ind"]
          },
          {
            label: "Inconel Angle & Channels",
            image: productImages["titanium--angle-channel-manufact"]
          },
          {
            label: "Inconel Wire Mesh",
            image: productImages["titanium-wire-mesh-manufacturer"]
          }
        ]
      }
    ]
  }
  ,
  {
    id: 15,
    productShortName: "Monel",
    images: [
      bannerImages["monel-manufacturer-india"],

    ],
    name: "Monel Manufacturer & Supplier in India ",
    description: `<strong>${companyName}</strong> is a well-known Monel Manufacturer and Supplier in India, delivering a wide array of Monel products engineered to meet various industrial needs. Our Monel products are recognized for their strength, corrosion resistance, and long-lasting performance. We supply Pipe Fittings, Flanges, Pipes & Tubes, Round Bars, Fasteners, Sheet & Plates, Forged Fittings, Angles & Channels, and Wire Mesh across India and export to multiple countries.`,
    productDetails: {
      tableData: {
        tableName: "Monel - Specifications",
        materialSpecifications: {
          "Monel Grades": "Monel 400, Monel K500",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Monel Products": "Monel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Monel",
        name: "Monel Products",
        imagesWithLabel: [
          {
            label: "Monel Pipe Fittings",
            image: productImages["monel-pipe-fitting-manufacturer"]
          },
          {
            label: "Monel Fasteners",
            image: productImages["monel-fasteners-manufacturer-ind"]
          },
          {
            label: "Monel Pipes & Tubes",
            image: productImages["monel-pipe-tube-manufacturer-ind"]
          },
          {
            label: "Monel Round Bar",
            image: productImages["monel-round-bar-manufacturer-ind"]
          },
          {
            label: "Monel Sheet & Plate",
            image: productImages["monel-sheet-plate-manufacturer-i"]
          },
          {
            label: "Monel Forged Fittings",
            image: productImages["monel-forged-fittings-manufactur"]
          },
          {
            label: "Monel Flanges",
            image: productImages["monel-flange-manufacturer-india"]
          },
          {
            label: "Monel Angle & Channels",
            image: productImages["monel-angle-channel-manufacturer"]
          },
          {
            label: "Monel Wire Mesh",
            image: productImages["monel-wire-mesh-manufacturer-ind"]
          }
        ]
      }
    ]
  }
  ,
  {
    id: 16,
    productShortName: "Alloy Steel",
    images: [
      bannerImages["alloy-steel-manufacturer-india"],

    ],
    name: "Alloy Steel Manufacturer & Supplier in India ",
    description: `<strong>${companyName}</strong> is a renowned Alloy Steel Manufacturer and Supplier in India, offering a wide variety of Alloy Steel products in multiple forms and specifications. Our products are known for their high strength, excellent surface finish, and resistance to wear and pressure. We supply Alloy Steel Pipe Fittings, Round Bars, Pipes & Tubes, Flanges, Fasteners, Angles & Channels, Sheet & Plates, Forged Fittings, and Wire Mesh to both domestic and global markets.`,
    productDetails: {
      tableData: {
        tableName: "Alloy Steel - Specifications",
        materialSpecifications: {
          "Alloy Steel Grades": "ASTM / ASME A 691 GRP1 CR, 1 1/4 CR, 2 1/4 CR, 5 CR, 9 CR, 91",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and all International Standards",
          "Alloy Steel Products": "Alloy Steel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Alloy Steel",
        name: "Alloy Steel Products",
        imagesWithLabel: [
          {
            label: "Alloy Steel Pipe Fittings",
            image: productImages["alloy-steel-pipe-fittings1"]
          },
          {
            label: "Alloy Steel Fasteners",
            image: productImages["alloy-steel-fasteners1"]
          },
          {
            label: "Alloy Steel Pipes & Tubes",
            image: productImages["alloy-steel-pipes-tubes1"]
          },
          {
            label: "Alloy Steel Round Bar",
            image: productImages["alloy-steel-round-bar-manufactur"]
          },
          {
            label: "Alloy Steel Sheet & Plate",
            image: productImages["alloy-steel-sheet-plate-manufact"]
          },
          {
            label: "Alloy Steel Forged Fittings",
            image: productImages["alloy-steel-forged-fittings1"]
          },
          {
            label: "Alloy Steel Flanges",
            image: productImages["alloy-steel-flanges1"]
          },
          {
            label: "Alloy Steel Angle & Channels",
            image: productImages["alloy-steel-angle-channel-manufa"]
          },
          {
            label: "Alloy Steel Wire Mesh",
            image: productImages["alloy-steel-wire-mesh-manufactur"]
          }
        ]
      }
    ]
  }
  ,
  {
    id: 17,
    productShortName: "Copper",
    images: [
      bannerImages["copper-manufacturer-india"],

    ],
    name: "Copper Manufacturer & Supplier in India ",
    description: `<strong>${companyName}</strong> is a prominent Copper Manufacturer and Supplier based in India, offering a wide range of copper products in various dimensions, grades, and standards. Known for their excellent electrical conductivity and corrosion resistance, our copper products are widely used in electrical, construction, and industrial sectors. Our range includes Copper Pipe Fittings, Flanges, Fasteners, Pipes & Tubes, Round Bars, Sheets & Plates, Forged Fittings, Angle & Channel, and Wire Mesh.`,
    productDetails: {
      tableData: {
        tableName: "Copper - Specifications",
        materialSpecifications: {
          "Copper Grades": "Grade 1 (A) Copper, Grade 2 (B) Copper, Grade 3 (C) Copper, Grade 4 (D) Copper",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and other International Standards",
          "Copper Products": "Copper Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Copper",
        name: "Copper Products",
        imagesWithLabel: [
          {
            label: "Copper Pipe Fittings",
            image: productImages["copper-pipe-fitting-manufacturer"]
          },
          {
            label: "Copper Fasteners",
            image: productImages["copper-fastener-manufacturer-ind"]
          },
          {
            label: "Copper Pipes & Tubes",
            image: productImages["copper-pipe-tube-manufacturer-in"]
          },
          {
            label: "Copper Round Bar",
            image: productImages["copper-round-bar-manufacturer-in"]
          },
          {
            label: "Copper Sheet & Plate",
            image: productImages["copper-sheet-plate-manufacturer"]
          },
          {
            label: "Copper Forged Fittings",
            image: productImages["copper-forged-fitting-manufactur"]
          },
          {
            label: "Copper Flanges",
            image: productImages["copper-flanges-manufacturer-indi"]
          },
          {
            label: "Copper Angle & Channels",
            image: productImages["copper-angle-channel-manufacture"]
          },
          {
            label: "Copper Wire Mesh",
            image: productImages["copper-wire-mesh-manufacturer-in"]
          }
        ]
      }
    ]
  }
  ,
  {
    id: 18,
    productShortName: "Super Duplex Steel",
    images: [
      bannerImages["super-duplex-steel-manufacturer"],

    ],
    name: "Super Duplex Steel Manufacturer & Supplier in India ",
    description: `<strong>${companyName}</strong> is a well-established manufacturer and supplier of Super Duplex Steel in India, offering a wide range of products in various grades, shapes, and dimensions. Known for superior strength, excellent corrosion resistance, and durability, our Super Duplex Steel is widely used in marine, oil & gas, chemical processing, and construction industries. Our offerings include Super Duplex Pipe Fittings, Flanges, Fasteners, Pipes & Tubes, Sheet & Plates, Forged Fittings, Round Bars, Angles & Channels, and Wire Mesh.`,
    productDetails: {
      tableData: {
        tableName: "Super Duplex Steel - Specifications",
        materialSpecifications: {
          "Super Duplex Steel Grades": "ASTM / ASME SA 790 UNS NO S31803, S32205, S32550, S32750, S32760",
          "Standard": "ASTM, ASME, DIN, JIS, BS, and other International Standards",
          "Super Duplex Steel Products": "Super Duplex Steel Pipe Fittings, Round Bar, Flanges, Angle & Channel, Wire Mesh, Fasteners, Pipes & Tubes, Sheet & Plates, and Forged Fittings"
        }
      }
    },
    subProducts: [
      {
        id: null,
        productShortName: "Types of Super Duplex Steel",
        name: "Super Duplex Steel Products",
        imagesWithLabel: [
          {
            label: "Super Duplex Steel Pipe Fittings",
            image: productImages["super-duplex-steel-pipe-fitting"]
          },
          {
            label: "Super Duplex Steel Fasteners",
            image: productImages["super-duplex-steel-fastener-manu"]
          },
          {
            label: "Super Duplex Steel Pipes & Tubes",
            image: productImages["super-duplex-steel-pipe-manufact"]
          },
          {
            label: "Super Duplex Steel Round Bar",
            image: productImages["super-duplex-steel-round-bar-man"]
          },
          {
            label: "Super Duplex Steel Sheet & Plate",
            image: productImages["super-duplex-steel-sheet-plate-m"]
          },
          {
            label: "Super Duplex Steel Forged Fittings",
            image: productImages["super-duplex-steel-forged-fittin"]
          },
          {
            label: "Super Duplex Steel Flanges",
            image: productImages["super-duplex-steel-flange-manufa"]
          },
          {
            label: "Super Duplex Steel Angle & Channels",
            image: productImages["super-duplex-steel-angle-channel"]
          },
          {
            label: "Super Duplex Steel Wire Mesh",
            image: productImages["super-duplex-steel-wire-mesh-man"]
          }
        ]
      }
    ]
  }



]




