export const COUNTRIES = [
  { code: 'UK',  flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AUS', flag: '🇦🇺', name: 'Australia' },
  { code: 'USA', flag: '🇺🇸', name: 'United States' },
  { code: 'GER', flag: '🇩🇪', name: 'Germany' },
  { code: 'CAN', flag: '🇨🇦', name: 'Canada' },
  { code: 'IRL', flag: '🇮🇪', name: 'Ireland' },
  { code: 'ITA', flag: '🇮🇹', name: 'Italy' },
  { code: 'PRT', flag: '🇵🇹', name: 'Portugal' },
];

export const DATA = {
  UK: {
    cities: ['London','Birmingham','Manchester','Nottingham','Glasgow','Cardiff','Liverpool','Edinburgh','Leeds','Sheffield','Bristol','Coventry'],
    universities: [
      "King's College London (KCL)",
      "Queen Mary University of London (QMUL)",
      "University of Manchester",
      "Birmingham City University (BCU)",
      "Nottingham Trent University (NTU)",
      "University of Glasgow",
      "University of Edinburgh",
      "University College London (UCL)",
      "Imperial College London",
      "University of Leeds",
    ],
  },
  AUS: {
    cities: ['Sydney','Melbourne','Brisbane','Perth','Adelaide','Canberra','Gold Coast','Hobart'],
    universities: ['University of Sydney','University of Melbourne','Monash University','UNSW Sydney','RMIT University','Australian National University','University of Queensland','UTS Sydney'],
  },
  USA: {
    cities: ['New York','Boston','Los Angeles','Chicago','San Francisco','Seattle','Washington DC','Miami','Houston','Philadelphia'],
    universities: ['Harvard University','MIT','Columbia University','NYU','Stanford University','UCLA','UC Berkeley','Boston University','University of Chicago','Yale University'],
  },
  GER: {
    cities: ['Berlin','Munich','Hamburg','Frankfurt','Cologne','Stuttgart','Heidelberg','Leipzig'],
    universities: ['TU Munich','LMU Munich','Humboldt University Berlin','TU Berlin','Heidelberg University','RWTH Aachen','University of Hamburg','Goethe University Frankfurt'],
  },
  CAN: {
    cities: ['Toronto','Vancouver','Montreal','Ottawa','Calgary','Edmonton','London (Canada)','Waterloo'],
    universities: ['University of Toronto','UBC','McGill University','University of Waterloo','York University','Western University','Queen’s University','Concordia University'],
  },
  IRL: {
    cities: ['Dublin','Cork','Galway','Limerick','Maynooth'],
    universities: ['Trinity College Dublin','University College Dublin (UCD)','Dublin City University','University of Galway','University College Cork','University of Limerick'],
  },
  ITA: {
    cities: ['Rome','Milan','Florence','Bologna','Turin','Naples','Venice'],
    universities: ['Politecnico di Milano','Bocconi University','Sapienza University Rome','University of Bologna','University of Milan','University of Padua'],
  },
  PRT: {
    cities: ['Lisbon','Porto','Coimbra','Braga','Aveiro'],
    universities: ['University of Lisbon','University of Porto','Universidade NOVA de Lisboa','University of Coimbra','ISCTE Lisbon'],
  },
};

// Property mock dataset by city slug
export const PROPERTIES = {
  default: [
    {
      name: 'iQ Sterling Court',
      address: '6 Lakeside Way, Wembley Park, Wembley HA9 0BU, United Kingdom',
      distance: '7.34 miles from city centre',
      img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
      tag: { type: 'cash', text: 'Up to £550 Cashback' },
      rating: 3.9,
      features: ['Trending','International Guarantor Accepted','Recently Refurbished'],
      amenities: ['Common Area','Table Tennis','Outdoor Courtyard','BBQ'],
      from: 269, now: 265,
    },
    {
      name: 'Wick Park',
      address: '1 Stour Rd, Bow, London E3 2EQ, United Kingdom',
      distance: '5.70 miles from city centre',
      img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
      tag: { type: 'green', text: 'Price Drop' },
      rating: 4.2,
      features: ['No Visa No Pay','No Place No Pay'],
      amenities: ['Furnished','Karaoke Room','Outdoor Courtyard','Common Area'],
      from: 379, now: 353,
    },
    {
      name: 'Mannequin House',
      address: '5 Blackhorse Ln, London E17 6DS, United Kingdom',
      distance: '9.10 miles from city centre',
      img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
      tag: { type: 'orange', text: 'Save up to £1,880' },
      rating: 4.8,
      features: ['Monthly Installment Plan','International Guarantor Accepted'],
      amenities: ['Air Conditioner','BBQ','Bicycle storage','Car-Parking'],
      from: 279, now: 275,
    },
    {
      name: 'Chapter Old Street',
      address: '18 Paul St, London EC2A 4JH, United Kingdom',
      distance: '2.40 miles from city centre',
      img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
      tag: { type: 'cash', text: 'Up to £350 Cashback' },
      rating: 4.2,
      features: ['Trending','Furnished'],
      amenities: ['Gym','Cinema Room','Study Area','Wi-Fi'],
      from: 459, now: 429,
    },
    {
      name: 'Spring Mews',
      address: '10 Tinworth St, London SE11 5AL, United Kingdom',
      distance: '1.50 miles from city centre',
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=80',
      tag: { type: 'orange', text: 'Save up to £130' },
      rating: 4.7,
      features: ['Premium','Bills Included'],
      amenities: ['Gym','Lounge','Laundry','24/7 Security'],
      from: 389, now: 365,
    },
    {
      name: 'iQ Shoreditch',
      address: 'Pitfield St, London N1 6BU, United Kingdom',
      distance: '3.20 miles from city centre',
      img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
      tag: { type: 'green', text: 'Price Drop' },
      rating: 4.5,
      features: ['Trending','Recently Refurbished'],
      amenities: ['Bike Storage','Common Area','Roof Terrace'],
      from: 419, now: 389,
    },
  ],
};
