// ============================================================
// CS391 Web Application Development Project
// data.js - All data arrays used across the application
// ============================================================

const hotelsArray = [
  {
    id: 1,
    name: "Antalya Grand Resort",
    city: "Antalya",
    country: "Turkey",
    address: "Konyaaltı Bulvarı 15, Antalya",
    description: "Situated just 5 minutes from Konyaaltı Beach, Antalya Grand Resort offers premium amenities on the Mediterranean coast. Located 15 km from Antalya Airport, it features stunning sea views and unique architectural character.",
    stars: 5,
    rating: 9.2,
    reviewCount: 3450,
    lowRate: 2800,
    highRate: 8900,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_antalya_grand.png",
    images: [
      "images/hotels/hotel_antalya_grand.png",
      "images/popular/popular_antalya.png",
      "images/deals/antalya_resort.png"
    ],
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Gym", "Parking", "Beach Access"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome. Infants up to age 2 are free of charge."
    },
    rooms: [
      {
        type: "Standard Room",
        size: "24m²",
        pricePerNight: 2800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "LCD TV", "Wireless Internet"],
        image: "images/hotels/hotel_antalya_grand.png"
      },
      {
        type: "Deluxe Room",
        size: "35m²",
        pricePerNight: 4500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_antalya_grand.png"
      },
      {
        type: "Family Suite",
        size: "60m²",
        pricePerNight: 7200,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Wireless Internet", "Balcony"],
        image: "images/hotels/hotel_antalya_grand.png"
      }
    ]
  },
  {
    id: 2,
    name: "Lara Beach Hotel",
    city: "Antalya",
    country: "Turkey",
    address: "Lara Caddesi 42, Antalya",
    description: "Lara Beach Hotel sits directly on the famous Lara Beach, one of Turkey's finest sandy shores. Enjoy all-inclusive packages and world-class entertainment in a breathtaking setting.",
    stars: 5,
    rating: 8.9,
    reviewCount: 5120,
    lowRate: 3200,
    highRate: 9500,
    checkIn: "After 14:00",
    checkOut: "Before 11:00",
    image: "images/hotels/hotel_lara_beach.png",
    images: [
      "images/hotels/hotel_lara_beach.png",
      "images/popular/popular_antalya.png",
      "images/deals/antalya_resort.png"
    ],
    amenities: ["All Inclusive", "Private Beach", "Swimming Pool", "Spa", "Restaurant", "Kids Club"],
    policies: {
      pets: "Pets not allowed",
      smoking: "Designated smoking areas only",
      children: "Children welcome. Kids Club available."
    },
    rooms: [
      {
        type: "Standard Room",
        size: "26m²",
        pricePerNight: 3200,
        guests: 2,
        conditions: ["All Inclusive", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Balcony", "Wireless Internet"],
        image: "images/hotels/hotel_lara_beach.png"
      },
      {
        type: "Sea View Room",
        size: "32m²",
        pricePerNight: 5800,
        guests: 2,
        conditions: ["All Inclusive", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_lara_beach.png"
      },
      {
        type: "Family Room",
        size: "55m²",
        pricePerNight: 8400,
        guests: 4,
        conditions: ["All Inclusive", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Wireless Internet", "Two Bathrooms"],
        image: "images/hotels/hotel_lara_beach.png"
      }
    ]
  },
  {
    id: 3,
    name: "Side Paradise Hotel",
    city: "Antalya",
    country: "Turkey",
    address: "Side Antik Kent Yolu 8, Side, Antalya",
    description: "Nestled in the historic town of Side, this 4-star hotel combines ancient Roman ruins with modern comfort. Stroll to the ancient theater and Temple of Apollo in minutes.",
    stars: 4,
    rating: 8.5,
    reviewCount: 2180,
    lowRate: 1900,
    highRate: 5200,
    checkIn: "After 15:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_side_paradise.png",
    images: [
      "images/hotels/hotel_side_paradise.png",
      "images/popular/popular_antalya.png",
      "images/deals/antalya_resort.png"
    ],
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Bar", "Parking", "Tour Desk"],
    policies: {
      pets: "Small pets allowed with prior notice",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Standard Room",
        size: "22m²",
        pricePerNight: 1900,
        guests: 2,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Wireless Internet"],
        image: "images/hotels/hotel_side_paradise.png"
      },
      {
        type: "Superior Room",
        size: "28m²",
        pricePerNight: 3100,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_side_paradise.png"
      },
      {
        type: "Family Room",
        size: "45m²",
        pricePerNight: 4800,
        guests: 4,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Wireless Internet", "Sofa Bed"],
        image: "images/hotels/hotel_side_paradise.png"
      }
    ]
  },
  {
    id: 4,
    name: "Kemer Forest Resort",
    city: "Antalya",
    country: "Turkey",
    address: "Kemer Yolu 22, Kemer, Antalya",
    description: "Surrounded by pine forests and the Taurus Mountains, Kemer Forest Resort offers a unique eco-luxury experience with private beach access and panoramic mountain views.",
    stars: 5,
    rating: 9.0,
    reviewCount: 1840,
    lowRate: 3500,
    highRate: 10500,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_kemer_forest.png",
    images: [
      "images/hotels/hotel_kemer_forest.png",
      "images/popular/popular_antalya.png",
      "images/deals/antalya_resort.png"
    ],
    amenities: ["Free WiFi", "Private Beach", "Swimming Pool", "Spa", "Restaurant", "Gym", "Tennis Court"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Forest View Room",
        size: "28m²",
        pricePerNight: 3500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Forest View Balcony", "Wireless Internet"],
        image: "images/hotels/hotel_kemer_forest.png"
      },
      {
        type: "Sea View Bungalow",
        size: "40m²",
        pricePerNight: 7800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Private Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_kemer_forest.png"
      },
      {
        type: "Family Bungalow",
        size: "65m²",
        pricePerNight: 10200,
        guests: 5,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Full Kitchen", "TV", "Mini Bar", "Private Pool", "Wireless Internet"],
        image: "images/hotels/hotel_kemer_forest.png"
      }
    ]
  },
  {
    id: 5,
    name: "Bosphorus Palace Hotel",
    city: "Istanbul",
    country: "Turkey",
    address: "Beşiktaş Caddesi 1, Beşiktaş, Istanbul",
    description: "Majestically situated on the shores of the Bosphorus Strait, this iconic 5-star hotel offers unparalleled views of Europe and Asia. Originally an Ottoman palace, it has been meticulously restored to blend historic grandeur with modern luxury.",
    stars: 5,
    rating: 9.4,
    reviewCount: 4210,
    lowRate: 5500,
    highRate: 18000,
    checkIn: "After 15:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_bosphorus_palace.png",
    images: [
      "images/hotels/hotel_bosphorus_palace.png",
      "images/popular/popular_istanbul.png",
      "images/deals/istanbul_bosphorus.png"
    ],
    amenities: ["Free WiFi", "Bosphorus View", "Swimming Pool", "Spa", "Fine Dining", "Gym", "Concierge", "Valet Parking"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children 12 and above welcome"
    },
    rooms: [
      {
        type: "Classic Room",
        size: "32m²",
        pricePerNight: 5500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_bosphorus_palace.png"
      },
      {
        type: "Bosphorus View Suite",
        size: "55m²",
        pricePerNight: 12000,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Mini Bar", "Bosphorus Balcony", "Wireless Internet"],
        image: "images/hotels/hotel_bosphorus_palace.png"
      },
      {
        type: "Royal Suite",
        size: "120m²",
        pricePerNight: 17500,
        guests: 2,
        conditions: ["Breakfast included", "Butler Service"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "Jacuzzi", "Panoramic Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_bosphorus_palace.png"
      }
    ]
  },
  {
    id: 6,
    name: "Grand Bazaar Suites",
    city: "Istanbul",
    country: "Turkey",
    address: "Kapalıçarşı Sokak 14, Fatih, Istanbul",
    description: "Steps away from the world-famous Grand Bazaar and Sultanahmet mosque, this boutique hotel immerses you in Istanbul's vibrant history. The rooftop terrace offers stunning views of the Blue Mosque and Hagia Sophia.",
    stars: 4,
    rating: 8.7,
    reviewCount: 3120,
    lowRate: 2200,
    highRate: 6800,
    checkIn: "After 14:00",
    checkOut: "Before 11:00",
    image: "images/hotels/hotel_grand_bazaar.png",
    images: [
      "images/hotels/hotel_grand_bazaar.png",
      "images/popular/popular_istanbul.png",
      "images/deals/istanbul_bosphorus.png"
    ],
    amenities: ["Free WiFi", "Rooftop Terrace", "Restaurant", "Tour Desk", "Airport Shuttle", "24h Reception"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Standard Room",
        size: "20m²",
        pricePerNight: 2200,
        guests: 2,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Wireless Internet"],
        image: "images/hotels/hotel_grand_bazaar.png"
      },
      {
        type: "Deluxe Suite",
        size: "35m²",
        pricePerNight: 4600,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "City View", "Wireless Internet"],
        image: "images/hotels/hotel_grand_bazaar.png"
      },
      {
        type: "Terrace Suite",
        size: "50m²",
        pricePerNight: 6500,
        guests: 3,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Private Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_grand_bazaar.png"
      }
    ]
  },
  {
    id: 7,
    name: "Taksim Square Hotel",
    city: "Istanbul",
    country: "Turkey",
    address: "İstiklal Caddesi 28, Beyoğlu, Istanbul",
    description: "Located in the heart of modern Istanbul, Taksim Square Hotel puts you at the center of the city's vibrant nightlife, shopping, and cultural scene. Walk to galleries, restaurants, and the famous pedestrian İstiklal Avenue.",
    stars: 4,
    rating: 8.3,
    reviewCount: 6780,
    lowRate: 1800,
    highRate: 5500,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_taksim_square.png",
    images: [
      "images/hotels/hotel_taksim_square.png",
      "images/popular/popular_istanbul.png",
      "images/deals/istanbul_bosphorus.png"
    ],
    amenities: ["Free WiFi", "Restaurant", "Bar", "Gym", "24h Reception", "Business Center"],
    policies: {
      pets: "Pets not allowed",
      smoking: "Designated smoking areas",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "City View Room",
        size: "22m²",
        pricePerNight: 1800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "City View", "Wireless Internet"],
        image: "images/hotels/hotel_taksim_square.png"
      },
      {
        type: "Superior Room",
        size: "30m²",
        pricePerNight: 3200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "City View", "Wireless Internet"],
        image: "images/hotels/hotel_taksim_square.png"
      },
      {
        type: "Junior Suite",
        size: "45m²",
        pricePerNight: 5200,
        guests: 3,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Mini Bar", "City Panorama", "Wireless Internet"],
        image: "images/hotels/hotel_taksim_square.png"
      }
    ]
  },
  {
    id: 8,
    name: "Princes Islands Resort",
    city: "Istanbul",
    country: "Turkey",
    address: "Büyükada Yolu 5, Adalar, Istanbul",
    description: "Escape the city bustle at Princes Islands Resort on the car-free Büyükada island. Arrive by ferry and enjoy horse-drawn carriages, Victorian mansions, and crystal-clear Marmara Sea.",
    stars: 4,
    rating: 9.1,
    reviewCount: 980,
    lowRate: 2600,
    highRate: 7200,
    checkIn: "After 15:00",
    checkOut: "Before 11:00",
    image: "images/hotels/hotel_princes_islands.png",
    images: [
      "images/hotels/hotel_princes_islands.png",
      "images/popular/popular_istanbul.png",
      "images/deals/istanbul_bosphorus.png"
    ],
    amenities: ["Free WiFi", "Swimming Pool", "Private Beach", "Restaurant", "Bicycle Rental", "Sea View"],
    policies: {
      pets: "Pets allowed",
      smoking: "Outdoor areas only",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Garden Room",
        size: "25m²",
        pricePerNight: 2600,
        guests: 2,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Garden View", "Wireless Internet"],
        image: "images/hotels/hotel_princes_islands.png"
      },
      {
        type: "Sea View Room",
        size: "30m²",
        pricePerNight: 4400,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Sea View Balcony", "Wireless Internet"],
        image: "images/hotels/hotel_princes_islands.png"
      },
      {
        type: "Family Villa",
        size: "80m²",
        pricePerNight: 7000,
        guests: 5,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Full Kitchen", "TV", "Private Garden", "Wireless Internet"],
        image: "images/hotels/hotel_princes_islands.png"
      }
    ]
  },
  {
    id: 9,
    name: "Cave Hotel Göreme",
    city: "Cappadocia",
    country: "Turkey",
    address: "Aydınlı Mah. 25, Göreme, Nevşehir",
    description: "Carved into ancient volcanic rock formations, Cave Hotel Göreme offers an unforgettable stay in authentic cave rooms with modern amenities. Watch hot air balloons drift over the fairy chimneys from your private terrace at sunrise.",
    stars: 5,
    rating: 9.6,
    reviewCount: 2340,
    lowRate: 4200,
    highRate: 12000,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_cave_goreme.png",
    images: [
      "images/hotels/hotel_cave_goreme.png",
      "images/popular/popular_cappadocia.png",
      "images/deals/cappadocia_balloons.png"
    ],
    amenities: ["Free WiFi", "Cave Rooms", "Terrace", "Restaurant", "Balloon Tour Desk", "Spa"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in cave rooms",
      children: "Children above 8 welcome"
    },
    rooms: [
      {
        type: "Standard Cave Room",
        size: "20m²",
        pricePerNight: 4200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Cave Architecture", "Wireless Internet"],
        image: "images/hotels/hotel_cave_goreme.png"
      },
      {
        type: "Cave Suite",
        size: "40m²",
        pricePerNight: 8500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Jacuzzi", "Private Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_cave_goreme.png"
      },
      {
        type: "Honeymoon Cave",
        size: "50m²",
        pricePerNight: 11500,
        guests: 2,
        conditions: ["Breakfast included", "Welcome Champagne", "Late Checkout"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Private Jacuzzi", "Valley View Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_cave_goreme.png"
      }
    ]
  },
  {
    id: 10,
    name: "Fairy Chimney Hotel",
    city: "Cappadocia",
    country: "Turkey",
    address: "Uçhisar Köyü 12, Uçhisar, Nevşehir",
    description: "Perched on the edge of the magnificent Pigeon Valley, Fairy Chimney Hotel offers panoramic views of Cappadocia's surreal landscape. The stone-carved rooms blend seamlessly with the natural rock formations around them.",
    stars: 4,
    rating: 9.0,
    reviewCount: 1560,
    lowRate: 3100,
    highRate: 8800,
    checkIn: "After 14:00",
    checkOut: "Before 11:00",
    image: "images/hotels/hotel_fairy_chimney.png",
    images: [
      "images/hotels/hotel_fairy_chimney.png",
      "images/popular/popular_cappadocia.png",
      "images/deals/cappadocia_balloons.png"
    ],
    amenities: ["Free WiFi", "Terrace", "Restaurant", "Valley Views", "Balloon Tour Arrangements", "Library"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking inside",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Valley View Room",
        size: "22m²",
        pricePerNight: 3100,
        guests: 2,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Valley View", "Wireless Internet"],
        image: "images/hotels/hotel_fairy_chimney.png"
      },
      {
        type: "Rock Suite",
        size: "38m²",
        pricePerNight: 6200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Jacuzzi", "Panoramic Terrace", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_fairy_chimney.png"
      },
      {
        type: "Family Stone House",
        size: "65m²",
        pricePerNight: 8500,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Living room", "TV", "Kitchen", "Private Garden", "Wireless Internet"],
        image: "images/hotels/hotel_fairy_chimney.png"
      }
    ]
  },
  {
    id: 11,
    name: "Uçhisar Castle Hotel",
    city: "Cappadocia",
    country: "Turkey",
    address: "Belediye Caddesi 3, Uçhisar, Nevşehir",
    description: "Directly below the iconic Uçhisar Castle, this luxury hotel commands the highest point in Cappadocia. The rooftop infinity pool overlooking the valley is one of the most photographed spots in all of Turkey.",
    stars: 5,
    rating: 9.3,
    reviewCount: 1890,
    lowRate: 5800,
    highRate: 16000,
    checkIn: "After 15:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_uchisar_castle.png",
    images: [
      "images/hotels/hotel_uchisar_castle.png",
      "images/popular/popular_cappadocia.png",
      "images/deals/cappadocia_balloons.png"
    ],
    amenities: ["Free WiFi", "Infinity Pool", "Spa", "Fine Dining", "Terrace", "Helicopter Tours", "Concierge"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the hotel",
      children: "Children above 12 welcome"
    },
    rooms: [
      {
        type: "Deluxe Room",
        size: "30m²",
        pricePerNight: 5800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Valley View", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_uchisar_castle.png"
      },
      {
        type: "Cappadocia Suite",
        size: "60m²",
        pricePerNight: 10500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting room", "TV", "Mini Bar", "Private Jacuzzi", "Panoramic View", "Wireless Internet"],
        image: "images/hotels/hotel_uchisar_castle.png"
      },
      {
        type: "Presidential Suite",
        size: "120m²",
        pricePerNight: 15500,
        guests: 2,
        conditions: ["Breakfast included", "Butler Service", "FREE Cancellation"],
        amenities: ["Air conditioning", "Full living room", "TV", "Full Bar", "Private Pool", "360° Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_uchisar_castle.png"
      }
    ]
  },
  {
    id: 12,
    name: "Bodrum Bay Resort",
    city: "Bodrum",
    country: "Turkey",
    address: "Kıyıkışlacık Mevkii 1, Bodrum, Muğla",
    description: "Surrounded by the shimmering Aegean Sea, Bodrum Bay Resort is a haven of tranquility in Turkey's premier resort town. The whitewashed architecture and azure sea create an idyllic Greek island atmosphere.",
    stars: 5,
    rating: 9.1,
    reviewCount: 2760,
    lowRate: 4800,
    highRate: 14000,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_bodrum_bay.png",
    images: [
      "images/hotels/hotel_bodrum_bay.png",
      "images/popular/popular_bodrum.png",
      "images/deals/aegean_resort.png"
    ],
    amenities: ["Free WiFi", "Private Beach", "Swimming Pool", "Spa", "Marina", "Water Sports", "Restaurant"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Standard Room",
        size: "28m²",
        pricePerNight: 4800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Garden View", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_bodrum_bay.png"
      },
      {
        type: "Sea View Room",
        size: "35m²",
        pricePerNight: 8500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_bodrum_bay.png"
      },
      {
        type: "Villa with Private Pool",
        size: "90m²",
        pricePerNight: 13500,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "Private Pool", "Sea View Garden", "Wireless Internet"],
        image: "images/hotels/hotel_bodrum_bay.png"
      }
    ]
  },
  {
    id: 13,
    name: "Blue Voyage Hotel",
    city: "Bodrum",
    country: "Turkey",
    address: "Türkbükü Sokak 18, Türkbükü, Bodrum, Muğla",
    description: "Tucked into the exclusive Türkbükü bay, Blue Voyage Hotel is Bodrum's best-kept secret. A celebrity favorite, this intimate boutique property is surrounded by yachts, azure waters, and vibrant nightlife.",
    stars: 5,
    rating: 9.5,
    reviewCount: 1120,
    lowRate: 7200,
    highRate: 22000,
    checkIn: "After 15:00",
    checkOut: "Before 11:00",
    image: "images/hotels/hotel_blue_voyage.png",
    images: [
      "images/hotels/hotel_blue_voyage.png",
      "images/popular/popular_bodrum.png",
      "images/deals/aegean_resort.png"
    ],
    amenities: ["Free WiFi", "Private Pier", "Swimming Pool", "Spa", "Fine Dining", "Yacht Charter", "Concierge"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the hotel",
      children: "Adults only (16+)"
    },
    rooms: [
      {
        type: "Deluxe Sea View Room",
        size: "35m²",
        pricePerNight: 7200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_blue_voyage.png"
      },
      {
        type: "Junior Suite",
        size: "55m²",
        pricePerNight: 12500,
        guests: 2,
        conditions: ["Breakfast included", "Butler Service"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Full Bar", "Private Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_blue_voyage.png"
      },
      {
        type: "Grand Sea Suite",
        size: "100m²",
        pricePerNight: 21000,
        guests: 2,
        conditions: ["All Inclusive", "Butler Service", "Yacht Transfer"],
        amenities: ["Air conditioning", "Full living room", "TV", "Full Bar", "Private Pool", "Pier Access", "Wireless Internet"],
        image: "images/hotels/hotel_blue_voyage.png"
      }
    ]
  },
  {
    id: 14,
    name: "Gümbet Beach Hotel",
    city: "Bodrum",
    country: "Turkey",
    address: "Gümbet Yolu 4, Gümbet, Bodrum, Muğla",
    description: "Set on the lively Gümbet beach, this value-for-money hotel is perfect for guests who want easy beach access and vibrant nightlife. Bodrum town center is just 3 km away.",
    stars: 3,
    rating: 7.8,
    reviewCount: 4350,
    lowRate: 1200,
    highRate: 3500,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_gumbet_beach.png",
    images: [
      "images/hotels/hotel_gumbet_beach.png",
      "images/popular/popular_bodrum.png",
      "images/deals/aegean_resort.png"
    ],
    amenities: ["Free WiFi", "Beach Access", "Swimming Pool", "Restaurant", "Bar", "Tour Desk"],
    policies: {
      pets: "Pets not allowed",
      smoking: "Designated smoking areas",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Economy Room",
        size: "18m²",
        pricePerNight: 1200,
        guests: 2,
        conditions: ["Room Only", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Wireless Internet"],
        image: "images/hotels/hotel_gumbet_beach.png"
      },
      {
        type: "Standard Room",
        size: "24m²",
        pricePerNight: 1900,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Pool View", "Wireless Internet"],
        image: "images/hotels/hotel_gumbet_beach.png"
      },
      {
        type: "Family Room",
        size: "40m²",
        pricePerNight: 3200,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Pool View", "Sofa Bed", "Wireless Internet"],
        image: "images/hotels/hotel_gumbet_beach.png"
      }
    ]
  },
  {
    id: 15,
    name: "Aegean Pearl Hotel",
    city: "Izmir",
    country: "Turkey",
    address: "Kordon Boyu 22, Alsancak, İzmir",
    description: "Elegantly positioned on İzmir's iconic Kordon waterfront, Aegean Pearl Hotel offers breathtaking Aegean Sea views. Walk along the promenade, explore Alsancak's lively café culture, and discover İzmir's rich heritage.",
    stars: 5,
    rating: 9.0,
    reviewCount: 1870,
    lowRate: 3800,
    highRate: 11000,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_aegean_pearl.png",
    images: [
      "images/hotels/hotel_aegean_pearl.png",
      "images/popular/popular_izmir.png",
      "images/deals/aegean_resort.png"
    ],
    amenities: ["Free WiFi", "Sea View", "Swimming Pool", "Spa", "Fine Dining", "Gym", "Meeting Rooms"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "City View Room",
        size: "26m²",
        pricePerNight: 3800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_aegean_pearl.png"
      },
      {
        type: "Sea View Room",
        size: "32m²",
        pricePerNight: 6500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_aegean_pearl.png"
      },
      {
        type: "Penthouse Suite",
        size: "80m²",
        pricePerNight: 10500,
        guests: 3,
        conditions: ["Breakfast included", "FREE Cancellation", "Airport Transfer"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "Panoramic Terrace", "Wireless Internet"],
        image: "images/hotels/hotel_aegean_pearl.png"
      }
    ]
  },
  {
    id: 16,
    name: "Kordon Boutique Hotel",
    city: "Izmir",
    country: "Turkey",
    address: "Atatürk Caddesi 8, Konak, İzmir",
    description: "A charming boutique hotel in the heart of İzmir's historic Konak district. Close to the iconic Clock Tower and Kemeraltı Bazaar, this restored Ottoman building combines architectural beauty with contemporary comfort.",
    stars: 4,
    rating: 8.8,
    reviewCount: 1240,
    lowRate: 2400,
    highRate: 6200,
    checkIn: "After 14:00",
    checkOut: "Before 11:00",
    image: "images/hotels/hotel_kordon_boutique.png",
    images: [
      "images/hotels/hotel_kordon_boutique.png",
      "images/popular/popular_izmir.png",
      "images/deals/aegean_resort.png"
    ],
    amenities: ["Free WiFi", "Rooftop Terrace", "Restaurant", "Bar", "Airport Shuttle", "Bicycle Rental"],
    policies: {
      pets: "Small pets allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Standard Room",
        size: "20m²",
        pricePerNight: 2400,
        guests: 2,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Wireless Internet"],
        image: "images/hotels/hotel_kordon_boutique.png"
      },
      {
        type: "Superior Room",
        size: "28m²",
        pricePerNight: 4200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Sea View", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_kordon_boutique.png"
      },
      {
        type: "Penthouse Room",
        size: "45m²",
        pricePerNight: 6000,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Panoramic Rooftop Terrace", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_kordon_boutique.png"
      }
    ]
  },
  {
    id: 17,
    name: "Ankara Garden Hotel",
    city: "Ankara",
    country: "Turkey",
    address: "Tunalı Hilmi Caddesi 45, Çankaya, Ankara",
    description: "A sophisticated business and leisure hotel in the upscale Çankaya district of Turkey's capital. Well connected to the city's embassies, government buildings, and the historic Anıtkabir.",
    stars: 5,
    rating: 8.6,
    reviewCount: 2100,
    lowRate: 2500,
    highRate: 7000,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_ankara_garden.png",
    images: [
      "images/hotels/hotel_ankara_garden.png",
      "images/popular/popular_istanbul.png",
      "images/deals/istanbul_bosphorus.png"
    ],
    amenities: ["Free WiFi", "Swimming Pool", "Spa", "Restaurant", "Gym", "Business Center", "Parking"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Superior Room",
        size: "28m²",
        pricePerNight: 2500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Wireless Internet"],
        image: "images/hotels/hotel_ankara_garden.png"
      },
      {
        type: "Executive Room",
        size: "35m²",
        pricePerNight: 4500,
        guests: 2,
        conditions: ["Breakfast included", "Club Lounge Access", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Wireless Internet", "Work Desk"],
        image: "images/hotels/hotel_ankara_garden.png"
      },
      {
        type: "Diplomatic Suite",
        size: "75m²",
        pricePerNight: 6800,
        guests: 3,
        conditions: ["Breakfast included", "Butler Service"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "City Panorama", "Wireless Internet"],
        image: "images/hotels/hotel_ankara_garden.png"
      }
    ]
  },
  {
    id: 18,
    name: "Kızılay Central Hotel",
    city: "Ankara",
    country: "Turkey",
    address: "Kızılay Meydanı 12, Çankaya, Ankara",
    description: "Located directly on Kızılay Square, the beating heart of Ankara, this modern business hotel offers immediate access to shopping malls, government offices, and metro connections to all parts of the city.",
    stars: 4,
    rating: 8.2,
    reviewCount: 3450,
    lowRate: 1800,
    highRate: 4800,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/hotels/hotel_ankara_garden.png",
    images: [
      "images/hotels/hotel_ankara_garden.png",
      "images/popular/popular_istanbul.png",
      "images/deals/istanbul_bosphorus.png"
    ],
    amenities: ["Free WiFi", "Restaurant", "Bar", "Gym", "Meeting Rooms", "24h Reception"],
    policies: {
      pets: "Pets not allowed",
      smoking: "Designated smoking areas",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Standard Room",
        size: "22m²",
        pricePerNight: 1800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "City View", "Wireless Internet"],
        image: "images/hotels/hotel_ankara_garden.png"
      },
      {
        type: "Business Room",
        size: "30m²",
        pricePerNight: 3200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Work Desk", "Wireless Internet"],
        image: "images/hotels/hotel_ankara_garden.png"
      },
      {
        type: "Junior Suite",
        size: "48m²",
        pricePerNight: 4600,
        guests: 3,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Mini Bar", "City Panorama", "Wireless Internet"],
        image: "images/hotels/hotel_ankara_garden.png"
      }
    ]
  },
  {
    id: 19,
    name: "Pamukkale Thermal Hotel",
    city: "Pamukkale",
    country: "Turkey",
    address: "Pamukkale Yolu 5, Pamukkale, Denizli",
    description: "Adjacent to the UNESCO World Heritage Site of Pamukkale's white terraces, this hotel gives guests direct access to the ancient thermal springs and Hierapolis ruins. Bathe in the same mineral-rich waters that Romans enjoyed millennia ago.",
    stars: 4,
    rating: 8.9,
    reviewCount: 2890,
    lowRate: 2100,
    highRate: 6500,
    checkIn: "After 14:00",
    checkOut: "Before 12:00",
    image: "images/popular/popular_pamukkale.png",
    images: [
      "images/popular/popular_pamukkale.png",
      "images/popular/popular_pamukkale.png",
      "images/deals/thermal_spa.png"
    ],
    amenities: ["Free WiFi", "Thermal Pool", "Spa", "Restaurant", "Terrace", "Tour Desk"],
    policies: {
      pets: "Pets not allowed",
      smoking: "No smoking in the room",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Standard Room",
        size: "24m²",
        pricePerNight: 2100,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Wireless Internet"],
        image: "images/popular/popular_pamukkale.png"
      },
      {
        type: "Terrace View Room",
        size: "30m²",
        pricePerNight: 4200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Terrace View", "Mini Bar", "Wireless Internet"],
        image: "images/popular/popular_pamukkale.png"
      },
      {
        type: "Thermal Suite",
        size: "55m²",
        pricePerNight: 6200,
        guests: 2,
        conditions: ["Breakfast included", "In-room Jacuzzi", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Private Thermal Tub", "Terrace", "Wireless Internet"],
        image: "images/popular/popular_pamukkale.png"
      }
    ]
  },
  {
    id: 20,
    name: "Cotton Castle Resort",
    city: "Pamukkale",
    country: "Turkey",
    address: "Karahayıt Caddesi 8, Karahayıt, Denizli",
    description: "Set in the nearby Karahayıt village, famous for its red mineral springs, Cotton Castle Resort offers a peaceful retreat with direct access to natural thermal pools. The resort's own thermal water features are open 24 hours for guests.",
    stars: 3,
    rating: 8.1,
    reviewCount: 3210,
    lowRate: 1400,
    highRate: 3800,
    checkIn: "After 14:00",
    checkOut: "Before 11:00",
    image: "images/deals/thermal_spa.png",
    images: [
      "images/deals/thermal_spa.png",
      "images/popular/popular_pamukkale.png",
      "images/deals/thermal_spa.png"
    ],
    amenities: ["Free WiFi", "Thermal Pool", "Restaurant", "Bar", "Parking", "Massage"],
    policies: {
      pets: "Pets not allowed",
      smoking: "Designated smoking areas",
      children: "Children of all ages welcome"
    },
    rooms: [
      {
        type: "Economy Room",
        size: "18m²",
        pricePerNight: 1400,
        guests: 2,
        conditions: ["Room Only", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Wireless Internet"],
        image: "images/deals/thermal_spa.png"
      },
      {
        type: "Standard Room",
        size: "24m²",
        pricePerNight: 2200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Garden View", "Wireless Internet"],
        image: "images/deals/thermal_spa.png"
      },
      {
        type: "Family Room",
        size: "42m²",
        pricePerNight: 3600,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Garden View", "Sofa Bed", "Wireless Internet"],
        image: "images/deals/thermal_spa.png"
      }
    ]
  }
];

// ============================================================
// Deals and Discounts Array
// ============================================================

const dealsArray = [
  {
    id: 1,
    title: "Aegean Early Booking – 40% Off",
    details: "Plan your summer getaway to Bodrum or Marmaris now! Book 90 days in advance to save up to 40% on beachfront resorts. Valid for stays between June and September.",
    imageUrl: "images/deals/aegean_resort.png"
  },
  {
    id: 2,
    title: "Cappadocia Balloon & Cave Stay",
    details: "Experience the magic of fairy chimneys. This package includes a 2-night stay in an authentic cave suite, daily local breakfast, and a discounted sunrise hot air balloon flight.",
    imageUrl: "images/deals/cappadocia_balloons.png"
  },
  {
    id: 3,
    title: "Antalya All-Inclusive Family Deal",
    details: "Perfect for families! Children under 12 stay free at participating Antalya mega-resorts. Includes unlimited aquapark access, kids club, and full-board dining.",
    imageUrl: "images/deals/antalya_resort.png"
  },
  {
    id: 4,
    title: "Istanbul Bosphorus Weekend",
    details: "Enjoy a romantic Friday–Sunday stay at premium Istanbul hotels. Includes a complimentary Bosphorus dinner cruise, late checkout, and traditional Turkish breakfast.",
    imageUrl: "images/deals/istanbul_bosphorus.png"
  },
  {
    id: 5,
    title: "Thermal Spa & Wellness Retreat",
    details: "Rejuvenate at top-rated thermal hotels in Afyon or Bursa. Includes free access to thermal pools, a 30-minute traditional Hammam treatment, and half-board meals.",
    imageUrl: "images/deals/thermal_spa.png"
  },
  {
    id: 6,
    title: "Ski Season Last Minute: Uludağ",
    details: "Hit the slopes before the snow melts! Grab up to 25% off on last-minute ski resort bookings in Uludağ. Includes daily ski pass and gear rental discounts.",
    imageUrl: "images/deals/uludag_ski.png"
  }
];

// ============================================================
// Popular Searches Array
// ============================================================

const popularSearchesArray = [
  {
    id: 1,
    title: "Antalya",
    numHotels: 8280,
    avgPrice: 5454,
    minPrice: 1900,
    maxPrice: 22000,
    imageUrl: "images/popular/popular_antalya.png"
  },
  {
    id: 2,
    title: "Istanbul",
    numHotels: 12500,
    avgPrice: 7200,
    minPrice: 1800,
    maxPrice: 35000,
    imageUrl: "images/popular/popular_istanbul.png"
  },
  {
    id: 3,
    title: "Cappadocia",
    numHotels: 1386,
    avgPrice: 6800,
    minPrice: 3100,
    maxPrice: 21000,
    imageUrl: "images/popular/popular_cappadocia.png"
  },
  {
    id: 4,
    title: "Bodrum",
    numHotels: 3240,
    avgPrice: 8100,
    minPrice: 1200,
    maxPrice: 22000,
    imageUrl: "images/popular/popular_bodrum.png"
  },
  {
    id: 5,
    title: "Izmir",
    numHotels: 4500,
    avgPrice: 4900,
    minPrice: 2400,
    maxPrice: 11000,
    imageUrl: "images/popular/popular_izmir.png"
  },
  {
    id: 6,
    title: "Pamukkale",
    numHotels: 592,
    avgPrice: 3800,
    minPrice: 1400,
    maxPrice: 6500,
    imageUrl: "images/popular/popular_pamukkale.png"
  }
];
