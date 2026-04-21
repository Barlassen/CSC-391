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
    image: "https://images.unsplash.com/photo-eZgeylk2mBw?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-eZgeylk2mBw?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-MdshtB1VOj8?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-cxPsNriIaDM?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-vlUfaHmGUDk?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-vlUfaHmGUDk?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Deluxe Room",
        size: "35m²",
        pricePerNight: 4500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-MdshtB1VOj8?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Suite",
        size: "60m²",
        pricePerNight: 7200,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Wireless Internet", "Balcony"],
        image: "https://images.unsplash.com/photo-cxPsNriIaDM?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-MdshtB1VOj8?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-MdshtB1VOj8?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-eZgeylk2mBw?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-cxPsNriIaDM?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-eZgeylk2mBw?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Sea View Room",
        size: "32m²",
        pricePerNight: 5800,
        guests: 2,
        conditions: ["All Inclusive", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-cxPsNriIaDM?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Room",
        size: "55m²",
        pricePerNight: 8400,
        guests: 4,
        conditions: ["All Inclusive", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Wireless Internet", "Two Bathrooms"],
        image: "https://images.unsplash.com/photo-MdshtB1VOj8?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-6ypLalh88XI?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-6ypLalh88XI?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-vlUfaHmGUDk?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-eZgeylk2mBw?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-vlUfaHmGUDk?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Superior Room",
        size: "28m²",
        pricePerNight: 3100,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-6ypLalh88XI?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Room",
        size: "45m²",
        pricePerNight: 4800,
        guests: 4,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Wireless Internet", "Sofa Bed"],
        image: "https://images.unsplash.com/photo-cxPsNriIaDM?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-lqD-YIvQUPY?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-lqD-YIvQUPY?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-MdshtB1VOj8?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-eZgeylk2mBw?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-cxPsNriIaDM?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-lqD-YIvQUPY?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Sea View Bungalow",
        size: "40m²",
        pricePerNight: 7800,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Sitting group", "TV", "Mini Bar", "Private Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-cxPsNriIaDM?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Bungalow",
        size: "65m²",
        pricePerNight: 10200,
        guests: 5,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Full Kitchen", "TV", "Mini Bar", "Private Pool", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-MdshtB1VOj8?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-UM_YUJUGK6g?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-UM_YUJUGK6g?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-qpvLP1-hrjc?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-lciwYx5XVOk?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-jRWwhFhYOKY?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-qpvLP1-hrjc?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Bosphorus View Suite",
        size: "55m²",
        pricePerNight: 12000,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Mini Bar", "Bosphorus Balcony", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-UM_YUJUGK6g?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Royal Suite",
        size: "120m²",
        pricePerNight: 17500,
        guests: 2,
        conditions: ["Breakfast included", "Butler Service"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "Jacuzzi", "Panoramic Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-lciwYx5XVOk?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-NGJyOFKyGpw?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-NGJyOFKyGpw?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-jRWwhFhYOKY?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-lciwYx5XVOk?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-jRWwhFhYOKY?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Deluxe Suite",
        size: "35m²",
        pricePerNight: 4600,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "City View", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-NGJyOFKyGpw?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Terrace Suite",
        size: "50m²",
        pricePerNight: 6500,
        guests: 3,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Private Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-lciwYx5XVOk?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-jxmHxpcu5ss?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-jxmHxpcu5ss?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-EpGf5ZpTBWw?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-UM_YUJUGK6g?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-jxmHxpcu5ss?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Superior Room",
        size: "30m²",
        pricePerNight: 3200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "City View", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-EpGf5ZpTBWw?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Junior Suite",
        size: "45m²",
        pricePerNight: 5200,
        guests: 3,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Mini Bar", "City Panorama", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-UM_YUJUGK6g?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-MBluR5dSQsY?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-MBluR5dSQsY?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-NFFe0Qcb3v4?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-UM_YUJUGK6g?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-NFFe0Qcb3v4?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Sea View Room",
        size: "30m²",
        pricePerNight: 4400,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Mini Bar", "Sea View Balcony", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-MBluR5dSQsY?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Villa",
        size: "80m²",
        pricePerNight: 7000,
        guests: 5,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Full Kitchen", "TV", "Private Garden", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-UM_YUJUGK6g?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-ewaufEl_BD0?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-ewaufEl_BD0?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-SagXn7H6HFg?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-fA8z6L89_H0?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-82CRnSTU33w?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-fA8z6L89_H0?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Cave Suite",
        size: "40m²",
        pricePerNight: 8500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Jacuzzi", "Private Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-ewaufEl_BD0?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Honeymoon Cave",
        size: "50m²",
        pricePerNight: 11500,
        guests: 2,
        conditions: ["Breakfast included", "Welcome Champagne", "Late Checkout"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Private Jacuzzi", "Valley View Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-SagXn7H6HFg?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-fA8z6L89_H0?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-fA8z6L89_H0?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-KGwK6n7rxSg?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-SagXn7H6HFg?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-KGwK6n7rxSg?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Rock Suite",
        size: "38m²",
        pricePerNight: 6200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Jacuzzi", "Panoramic Terrace", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-fA8z6L89_H0?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Stone House",
        size: "65m²",
        pricePerNight: 8500,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Living room", "TV", "Kitchen", "Private Garden", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-82CRnSTU33w?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-SagXn7H6HFg?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-SagXn7H6HFg?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-ewaufEl_BD0?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-KGwK6n7rxSg?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-82CRnSTU33w?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-82CRnSTU33w?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Cappadocia Suite",
        size: "60m²",
        pricePerNight: 10500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting room", "TV", "Mini Bar", "Private Jacuzzi", "Panoramic View", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-SagXn7H6HFg?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Presidential Suite",
        size: "120m²",
        pricePerNight: 15500,
        guests: 2,
        conditions: ["Breakfast included", "Butler Service", "FREE Cancellation"],
        amenities: ["Air conditioning", "Full living room", "TV", "Full Bar", "Private Pool", "360° Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-ewaufEl_BD0?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-8D9_vzCqDlY?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-8D9_vzCqDlY?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-odfWue8fwuE?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-6gVzRavVIW0?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-8D9_vzCqDlY?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Sea View Room",
        size: "35m²",
        pricePerNight: 8500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-6gVzRavVIW0?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Villa with Private Pool",
        size: "90m²",
        pricePerNight: 13500,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "Private Pool", "Sea View Garden", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-odfWue8fwuE?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-6gVzRavVIW0?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-6gVzRavVIW0?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-odfWue8fwuE?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-qmemqNn_3xM?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-odfWue8fwuE?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Junior Suite",
        size: "55m²",
        pricePerNight: 12500,
        guests: 2,
        conditions: ["Breakfast included", "Butler Service"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Full Bar", "Private Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-6gVzRavVIW0?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Grand Sea Suite",
        size: "100m²",
        pricePerNight: 21000,
        guests: 2,
        conditions: ["All Inclusive", "Butler Service", "Yacht Transfer"],
        amenities: ["Air conditioning", "Full living room", "TV", "Full Bar", "Private Pool", "Pier Access", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-qmemqNn_3xM?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-qmemqNn_3xM?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-qmemqNn_3xM?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-8D9_vzCqDlY?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-6gVzRavVIW0?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-8D9_vzCqDlY?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Standard Room",
        size: "24m²",
        pricePerNight: 1900,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Pool View", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-qmemqNn_3xM?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Room",
        size: "40m²",
        pricePerNight: 3200,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Pool View", "Sofa Bed", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-odfWue8fwuE?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-8GskgAIoenI?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-8GskgAIoenI?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-6gVzRavVIW0?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-cxPsNriIaDM?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-8GskgAIoenI?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Sea View Room",
        size: "32m²",
        pricePerNight: 6500,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Sea View Balcony", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-6gVzRavVIW0?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Penthouse Suite",
        size: "80m²",
        pricePerNight: 10500,
        guests: 3,
        conditions: ["Breakfast included", "FREE Cancellation", "Airport Transfer"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "Panoramic Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-cxPsNriIaDM?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-jRWwhFhYOKY?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-jRWwhFhYOKY?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-8GskgAIoenI?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-6gVzRavVIW0?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-jRWwhFhYOKY?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Superior Room",
        size: "28m²",
        pricePerNight: 4200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Sea View", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-8GskgAIoenI?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Penthouse Room",
        size: "45m²",
        pricePerNight: 6000,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Panoramic Rooftop Terrace", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-6gVzRavVIW0?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-vSsjAkjMDj4?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-vSsjAkjMDj4?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-YwcMlX9XnM4?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-qpvLP1-hrjc?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-YwcMlX9XnM4?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Executive Room",
        size: "35m²",
        pricePerNight: 4500,
        guests: 2,
        conditions: ["Breakfast included", "Club Lounge Access", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Wireless Internet", "Work Desk"],
        image: "https://images.unsplash.com/photo-vSsjAkjMDj4?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Diplomatic Suite",
        size: "75m²",
        pricePerNight: 6800,
        guests: 3,
        conditions: ["Breakfast included", "Butler Service"],
        amenities: ["Air conditioning", "Living room", "TV", "Full Bar", "City Panorama", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-qpvLP1-hrjc?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-YwcMlX9XnM4?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-YwcMlX9XnM4?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-vSsjAkjMDj4?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-EpGf5ZpTBWw?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-vSsjAkjMDj4?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Business Room",
        size: "30m²",
        pricePerNight: 3200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "City View", "Mini Bar", "Work Desk", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-YwcMlX9XnM4?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Junior Suite",
        size: "48m²",
        pricePerNight: 4600,
        guests: 3,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Mini Bar", "City Panorama", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-EpGf5ZpTBWw?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-uYThZZmJFik?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-uYThZZmJFik?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-p6p5-uR5N5U?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-r86NLYwkhBM?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-r86NLYwkhBM?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Terrace View Room",
        size: "30m²",
        pricePerNight: 4200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later"],
        amenities: ["Air conditioning", "TV", "Terrace View", "Mini Bar", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-uYThZZmJFik?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Thermal Suite",
        size: "55m²",
        pricePerNight: 6200,
        guests: 2,
        conditions: ["Breakfast included", "In-room Jacuzzi", "FREE Cancellation"],
        amenities: ["Air conditioning", "Sitting area", "TV", "Private Thermal Tub", "Terrace", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-p6p5-uR5N5U?w=300&h=200&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-p6p5-uR5N5U?w=600&h=400&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-p6p5-uR5N5U?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-uYThZZmJFik?w=900&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-r86NLYwkhBM?w=900&h=500&fit=crop&q=80"
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
        image: "https://images.unsplash.com/photo-r86NLYwkhBM?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Standard Room",
        size: "24m²",
        pricePerNight: 2200,
        guests: 2,
        conditions: ["Breakfast included", "Book Now, Pay Later", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Garden View", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-uYThZZmJFik?w=300&h=200&fit=crop&q=80"
      },
      {
        type: "Family Room",
        size: "42m²",
        pricePerNight: 3600,
        guests: 4,
        conditions: ["Breakfast included", "FREE Cancellation"],
        amenities: ["Air conditioning", "TV", "Garden View", "Sofa Bed", "Wireless Internet"],
        image: "https://images.unsplash.com/photo-p6p5-uR5N5U?w=300&h=200&fit=crop&q=80"
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
    title: "Early Bird Special – 30% Off",
    details: "Book your stay at least 60 days in advance and save up to 30% on your total reservation. Valid for stays between May 1 – October 31, 2026. Terms apply.",
    imageUrl: "https://images.unsplash.com/photo-eZgeylk2mBw?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Weekend Getaway Package",
    details: "Enjoy special Friday–Sunday rates with complimentary breakfast included. Stay 2 nights, get a 20% discount on your third night. Available at selected properties.",
    imageUrl: "https://images.unsplash.com/photo-MdshtB1VOj8?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Family Holiday Bundle",
    details: "Children under 12 stay free when sharing a room with parents. Includes complimentary kids club access, family breakfast buffet, and one free dinner per stay.",
    imageUrl: "https://images.unsplash.com/photo-cxPsNriIaDM?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Earn 3K Bonus Points Per Night",
    details: "For a limited time, earn up to 3000 Bonus Points on each qualifying stay between March 15, 2026 and May 15, 2026, at participating hotels. Terms apply.",
    imageUrl: "https://images.unsplash.com/photo-ewaufEl_BD0?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Last Minute Deals – Up to 40% Off",
    details: "Grab incredible savings on rooms available within the next 7 days. Prices drop as availability decreases. Book now before rooms are gone!",
    imageUrl: "https://images.unsplash.com/photo-8D9_vzCqDlY?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Honeymoon Escape Package",
    details: "Celebrate your love with our exclusive honeymoon package. Includes champagne on arrival, couples spa treatment, candlelit dinner, and late checkout. Contact us for details.",
    imageUrl: "https://images.unsplash.com/photo-uYThZZmJFik?w=400&h=280&fit=crop&q=80"
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
    minPrice: 1200,
    maxPrice: 22000,
    imageUrl: "https://images.unsplash.com/photo-eZgeylk2mBw?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Istanbul",
    numHotels: 12500,
    avgPrice: 7200,
    minPrice: 1800,
    maxPrice: 35000,
    imageUrl: "https://images.unsplash.com/photo-NGJyOFKyGpw?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Cappadocia",
    numHotels: 1386,
    avgPrice: 6800,
    minPrice: 3100,
    maxPrice: 21000,
    imageUrl: "https://images.unsplash.com/photo-ewaufEl_BD0?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Bodrum",
    numHotels: 3240,
    avgPrice: 8100,
    minPrice: 1200,
    maxPrice: 22000,
    imageUrl: "https://images.unsplash.com/photo-8D9_vzCqDlY?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Izmir",
    numHotels: 4500,
    avgPrice: 4900,
    minPrice: 2400,
    maxPrice: 11000,
    imageUrl: "https://images.unsplash.com/photo-8GskgAIoenI?w=400&h=280&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Pamukkale",
    numHotels: 592,
    avgPrice: 3800,
    minPrice: 1400,
    maxPrice: 6500,
    imageUrl: "https://images.unsplash.com/photo-uYThZZmJFik?w=400&h=280&fit=crop&q=80"
  }
];
