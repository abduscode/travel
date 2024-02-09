const destinations = [
  {
    "id": 1,
    "name": "Paris",
    "country": "France",
    "description": "Experience the romantic charm of the City of Love. Explore iconic landmarks such as the Eiffel Tower and Louvre Museum.",
    "shortDescription": "Romantic charm, iconic landmarks like the Eiffel Tower and Louvre Museum.",
    "image": "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
    "popularActivities": [
      "Eiffel Tower tour",
      "Louvre Museum visit",
      "Seine River cruise"
    ],
    "travelType": ["Romantic", "Cultural"],
    "rating": 4.8,
    "cost": 1500  // Example cost in your preferred currency
  },
  {
    "id": 2,
    "name": "Tokyo",
    "country": "Japan",
    "description": "Discover the vibrant culture of Tokyo, from traditional temples to futuristic technology. Enjoy sushi and ramen in the bustling streets.",
    "shortDescription": "Vibrant culture, traditional temples, futuristic technology, and delicious sushi.",
    "image": "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
    "popularActivities": [
      "Senso-ji Temple visit",
      "Shibuya Crossing experience",
      "Tsukiji Fish Market tour"
    ],
    "travelType": ["Cultural"],
    "rating": 4.5,
    "cost": 1200  // Example cost in your preferred currency
  },
  {
    "id": 3,
    "name": "New York City",
    "country": "United States",
    "description": "Explore the city that never sleeps. Visit Times Square, Central Park, and take a stroll through the diverse neighborhoods of NYC.",
    "shortDescription": "The city that never sleeps, Times Square, Central Park, and diverse neighborhoods.",
    "image": "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg",
    "popularActivities": [
      "Broadway show",
      "Central Park bike ride",
      "Statue of Liberty tour"
    ],
    "travelType": ["Urban", "Historical"],
    "rating": 4.7,
    "cost": 1800  // Example cost in your preferred currency
  },
  {
    "id": 4,
    "name": "Rome",
    "country": "Italy",
    "description": "Immerse yourself in the rich history of Rome. Visit the Colosseum, Roman Forum, and indulge in authentic Italian cuisine.",
    "shortDescription": "Rich history, Colosseum, Roman Forum, and authentic Italian cuisine.",
    "image": "https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "popularActivities": [
      "Colosseum guided tour",
      "Vatican City exploration",
      "Trevi Fountain visit"
    ],
    "travelType": ["Historical"],
    "rating": 4.9,
    "cost": 1600  // Example cost in your preferred currency
  },
  {
    "id": 5,
    "name": "Sydney",
    "country": "Australia",
    "description": "Experience the beauty of Sydney Harbor, iconic Opera House, and relax on Bondi Beach. Discover the unique wildlife of Australia.",
    "shortDescription": "Beautiful Sydney Harbor, iconic Opera House, Bondi Beach, and unique Australian wildlife.",
    "image": "https://images.pexels.com/photos/17607753/pexels-photo-17607753/free-photo-of-mer-ville-monument-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "popularActivities": [
      "Sydney Opera House tour",
      "Bondi Beach relaxation",
      "Taronga Zoo visit"
    ],
    "travelType": ["Scenic"],
    "rating": 4.6,
    "cost": 1400  // Example cost in your preferred currency
  },
  
];


const blogs = [
  {
    id: 1,
    title: 'Exploring the Beauty of Paris',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue vel neque auctor fermentum. Fusce in convallis nisl. Donec hendrerit bibendum suscipit. Phasellus in mi vel dui tincidunt euismod eu a purus.',
    author: 'John Doe',
    date: '2024-01-25',
    slug: 'exploring-beauty-paris',
    images: [
      "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg",
      "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg"
    ],
    comments: [
      { id: 101, user: 'Alice', content: 'Great blog post!' },
      { id: 102, user: 'Bob', content: 'Love the pictures!' },
    ],
  },
  {
    id: 2,
    title: 'Tokyo: Where Tradition Meets Technology',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue vel neque auctor fermentum. Fusce in convallis nisl. Donec hendrerit bibendum suscipit. Phasellus in mi vel dui tincidunt euismod eu a purus.',
    author: 'Jane Smith',
    date: '2024-01-28',
    slug: 'tokyo-tradition-technology',
    images: [
      "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg"
    ],
    comments: [
      { id: 201, user: 'Charlie', content: 'Amazing pictures!' },
      { id: 202, user: 'Diana', content: 'Would love to visit Tokyo someday.' },
    ],
  },
  {
    id: 3,
    title: 'A Journey Through New York City',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue vel neque auctor fermentum. Fusce in convallis nisl. Donec hendrerit bibendum suscipit. Phasellus in mi vel dui tincidunt euismod eu a purus.',
    author: 'Alice Johnson',
    date: '2024-02-02',
    slug: 'journey-through-new-york',
    images: [
      "https://images.pexels.com/photos/3581916/pexels-photo-3581916.jpeg"
    ],
    comments: [
      { id: 301, user: 'Eva', content: 'Fantastic journey!' },
      { id: 302, user: 'Frank', content: 'Love the cityscape views.' },
    ],
  },
  {
    id: 4,
    title: 'Ancient Wonders of Rome',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue vel neque auctor fermentum. Fusce in convallis nisl. Donec hendrerit bibendum suscipit. Phasellus in mi vel dui tincidunt euismod eu a purus.',
    author: 'Michael Anderson',
    date: '2024-02-10',
    slug: 'ancient-wonders-rome',
    images: [
      "https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    comments: [
      { id: 401, user: 'George', content: 'Rome is truly mesmerizing!' },
      { id: 402, user: 'Hannah', content: 'Wonderful historical insights.' },
    ],
  },
  {
    id: 5,
    title: 'Serenity in Sydney',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue vel neque auctor fermentum. Fusce in convallis nisl. Donec hendrerit bibendum suscipit. Phasellus in mi vel dui tincidunt euismod eu a purus.',
    author: 'Emily Clark',
    date: '2024-02-15',
    slug: 'serenity-in-sydney',
    images: [
      "https://images.pexels.com/photos/17607753/pexels-photo-17607753/free-photo-of-mer-ville-monument-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    comments: [
      { id: 501, user: 'Isaac', content: 'Serenity captured beautifully!' },
      { id: 502, user: 'Jessica', content: 'I dream of visiting Sydney.' },
    ],
  },
  {
    id: 6,
    title: 'A Glimpse of Tokyo Nights',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu augue vel neque auctor fermentum. Fusce in convallis nisl. Donec hendrerit bibendum suscipit. Phasellus in mi vel dui tincidunt euismod eu a purus.',
    author: 'Daniel Lee',
    date: '2024-02-20',
    slug: 'tokyo-nights',
    images: [
      "https://images.pexels.com/photos/17607753/pexels-photo-17607753/free-photo-of-mer-ville-monument-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    comments: [
      { id: 601, user: 'Katherine', content: 'Tokyo nights look enchanting!' },
      { id: 602, user: 'Leo', content: 'Amazing city lights.' },
    ],
  },
];
  

  const countries = [
    {
      id: 1,
      name: "Morocco",
      cities: ["Marrakech", "Fes", "Casablanca", "Chefchaouen"]
    },
    {
      id: 2,
      name: "France",
      cities: ["Paris", "Nice", "Lyon", "Marseille"]
    },
    {
      id: 3,
      name: "Italy",
      cities: ["Rome", "Venice", "Florence", "Milan"]
    },
    {
      id: 4,
      name: "Spain",
      cities: ["Barcelona", "Madrid", "Seville", "Valencia"]
    },
    {
      id: 5,
      name: "Japan",
      cities: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"]
    },
    {
      id: 6,
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
      id: 7,
      name: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Calgary"]
    },

  ];
  
  const faqs = [
    {
      id: 1,
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      question: 'How can I contact support?',
      answer: 'You can contact our support team by emailing support@example.com or by calling our toll-free number at 1-800-123-4567.',
    },
    {
      id: 3,
      question: 'Is there a mobile app?',
      answer: 'Yes, we have a mobile app available for both iOS and Android devices. You can download it from the respective app stores.',
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards, PayPal, and other secure payment methods for online transactions.',
    },
  ];
  
 
  
  export { destinations , blogs, faqs  , countries};
  