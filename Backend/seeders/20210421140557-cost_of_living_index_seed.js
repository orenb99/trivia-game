"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cost_of_living_index",
      [
        {
          country: "Switzerland",
          cost_of_living_index: 122.4,
          restaurant_price_index: 123.01,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Norway",
          cost_of_living_index: 101.43,
          restaurant_price_index: 109.28,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Iceland",
          cost_of_living_index: 100.48,
          restaurant_price_index: 113.74,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Japan",
          cost_of_living_index: 83.35,
          restaurant_price_index: 48.95,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Denmark",
          cost_of_living_index: 83,
          restaurant_price_index: 100.75,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Bahamas",
          cost_of_living_index: 82.51,
          restaurant_price_index: 83.66,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Luxembourg",
          cost_of_living_index: 81.89,
          restaurant_price_index: 89.85,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Israel",
          cost_of_living_index: 81.15,
          restaurant_price_index: 88.65,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Singapore",
          cost_of_living_index: 81.1,
          restaurant_price_index: 58.99,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "South Korea",
          cost_of_living_index: 78.18,
          restaurant_price_index: 44.87,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Hong Kong",
          cost_of_living_index: 77.22,
          restaurant_price_index: 54.36,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Barbados",
          cost_of_living_index: 76.02,
          restaurant_price_index: 68.14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Ireland",
          cost_of_living_index: 75.91,
          restaurant_price_index: 81.24,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "France",
          cost_of_living_index: 74.14,
          restaurant_price_index: 72.54,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Netherlands",
          cost_of_living_index: 73.75,
          restaurant_price_index: 80.48,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Australia",
          cost_of_living_index: 73.54,
          restaurant_price_index: 70.32,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "New Zealand",
          cost_of_living_index: 72.53,
          restaurant_price_index: 68.8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Belgium",
          cost_of_living_index: 71.78,
          restaurant_price_index: 80.14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Seychelles",
          cost_of_living_index: 71.59,
          restaurant_price_index: 84.86,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "United States",
          cost_of_living_index: 71.05,
          restaurant_price_index: 70.74,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Austria",
          cost_of_living_index: 70.38,
          restaurant_price_index: 68.09,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Finland",
          cost_of_living_index: 70.29,
          restaurant_price_index: 76.81,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Sweden",
          cost_of_living_index: 69.85,
          restaurant_price_index: 72.35,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Canada",
          cost_of_living_index: 67.62,
          restaurant_price_index: 63.53,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Puerto Rico",
          cost_of_living_index: 67.54,
          restaurant_price_index: 58.68,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Malta",
          cost_of_living_index: 67.46,
          restaurant_price_index: 75.94,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "United Kingdom",
          cost_of_living_index: 67.28,
          restaurant_price_index: 74.13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Italy",
          cost_of_living_index: 67.26,
          restaurant_price_index: 72.32,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Germany",
          cost_of_living_index: 65.26,
          restaurant_price_index: 61.58,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Macao",
          cost_of_living_index: 64.84,
          restaurant_price_index: 43.37,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Qatar",
          cost_of_living_index: 64.04,
          restaurant_price_index: 66.83,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "United Arab Emirates",
          cost_of_living_index: 61.98,
          restaurant_price_index: 61.32,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Taiwan",
          cost_of_living_index: 61.37,
          restaurant_price_index: 28.49,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Lebanon",
          cost_of_living_index: 60.5,
          restaurant_price_index: 58.16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Bahrain",
          cost_of_living_index: 58.94,
          restaurant_price_index: 54.55,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Cyprus",
          cost_of_living_index: 57.93,
          restaurant_price_index: 63.11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Jamaica",
          cost_of_living_index: 57.82,
          restaurant_price_index: 38.12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Greece",
          cost_of_living_index: 55.67,
          restaurant_price_index: 53.74,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Zimbabwe",
          cost_of_living_index: 55.3,
          restaurant_price_index: 40.79,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Palestine",
          cost_of_living_index: 54.54,
          restaurant_price_index: 38.93,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Ethiopia",
          cost_of_living_index: 54.39,
          restaurant_price_index: 19.37,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Panama",
          cost_of_living_index: 54.16,
          restaurant_price_index: 47.27,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Costa Rica",
          cost_of_living_index: 53.98,
          restaurant_price_index: 43.51,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Spain",
          cost_of_living_index: 53.77,
          restaurant_price_index: 52.07,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Trinidad And Tobago",
          cost_of_living_index: 53.7,
          restaurant_price_index: 49.83,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Jordan",
          cost_of_living_index: 53.67,
          restaurant_price_index: 47.12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Slovenia",
          cost_of_living_index: 53.43,
          restaurant_price_index: 45.43,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Mauritius",
          cost_of_living_index: 53.04,
          restaurant_price_index: 43.96,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Uruguay",
          cost_of_living_index: 51.04,
          restaurant_price_index: 47.41,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Estonia",
          cost_of_living_index: 50.93,
          restaurant_price_index: 52.94,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Kuwait",
          cost_of_living_index: 50.37,
          restaurant_price_index: 47.08,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Thailand",
          cost_of_living_index: 49.77,
          restaurant_price_index: 24.9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Croatia",
          cost_of_living_index: 49.7,
          restaurant_price_index: 42.44,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Portugal",
          cost_of_living_index: 49.52,
          restaurant_price_index: 42.48,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Oman",
          cost_of_living_index: 49.28,
          restaurant_price_index: 44.26,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Belize",
          cost_of_living_index: 49.23,
          restaurant_price_index: 37.05,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Saudi Arabia",
          cost_of_living_index: 48.34,
          restaurant_price_index: 33.51,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Latvia",
          cost_of_living_index: 47.94,
          restaurant_price_index: 42.88,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Cambodia",
          cost_of_living_index: 47.49,
          restaurant_price_index: 25.19,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Fiji",
          cost_of_living_index: 47.48,
          restaurant_price_index: 35.87,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Czech Republic",
          cost_of_living_index: 46.15,
          restaurant_price_index: 34.1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "El Salvador",
          cost_of_living_index: 45.57,
          restaurant_price_index: 34.8,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Brunei",
          cost_of_living_index: 44.71,
          restaurant_price_index: 38.06,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Nicaragua",
          cost_of_living_index: 44.56,
          restaurant_price_index: 31.41,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Slovakia",
          cost_of_living_index: 44.46,
          restaurant_price_index: 33.82,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Lithuania",
          cost_of_living_index: 44.28,
          restaurant_price_index: 42.7,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Dominican Republic",
          cost_of_living_index: 44.06,
          restaurant_price_index: 38.27,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Chile",
          cost_of_living_index: 43.62,
          restaurant_price_index: 41.57,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Cuba",
          cost_of_living_index: 43.46,
          restaurant_price_index: 30.95,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Suriname",
          cost_of_living_index: 43.14,
          restaurant_price_index: 34.98,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Namibia",
          cost_of_living_index: 43.1,
          restaurant_price_index: 39.22,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "South Africa",
          cost_of_living_index: 42.87,
          restaurant_price_index: 40.58,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Guatemala",
          cost_of_living_index: 42.7,
          restaurant_price_index: 33,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Honduras",
          cost_of_living_index: 42.17,
          restaurant_price_index: 30.55,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Myanmar",
          cost_of_living_index: 42.11,
          restaurant_price_index: 19.04,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Ecuador",
          cost_of_living_index: 40.98,
          restaurant_price_index: 30.66,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Hungary",
          cost_of_living_index: 40.85,
          restaurant_price_index: 34.46,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Brazil",
          cost_of_living_index: 40.22,
          restaurant_price_index: 30.78,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Kenya",
          cost_of_living_index: 40.21,
          restaurant_price_index: 35.06,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "China",
          cost_of_living_index: 40.04,
          restaurant_price_index: 29.16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Poland",
          cost_of_living_index: 40.04,
          restaurant_price_index: 33.45,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Russia",
          cost_of_living_index: 39.21,
          restaurant_price_index: 39.61,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Botswana",
          cost_of_living_index: 39.13,
          restaurant_price_index: 39.98,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Malaysia",
          cost_of_living_index: 39.12,
          restaurant_price_index: 22.94,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Iraq",
          cost_of_living_index: 39.04,
          restaurant_price_index: 32.72,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Iran",
          cost_of_living_index: 39.01,
          restaurant_price_index: 25.12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Somalia",
          cost_of_living_index: 38.68,
          restaurant_price_index: 27.04,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Peru",
          cost_of_living_index: 38.65,
          restaurant_price_index: 24.69,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Vietnam",
          cost_of_living_index: 38.34,
          restaurant_price_index: 19.59,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Montenegro",
          cost_of_living_index: 38.23,
          restaurant_price_index: 33.16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Ghana",
          cost_of_living_index: 37.65,
          restaurant_price_index: 26.59,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Philippines",
          cost_of_living_index: 37.63,
          restaurant_price_index: 20.84,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Indonesia",
          cost_of_living_index: 37.27,
          restaurant_price_index: 18.25,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Bulgaria",
          cost_of_living_index: 36.7,
          restaurant_price_index: 29.14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Albania",
          cost_of_living_index: 36.39,
          restaurant_price_index: 26.75,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Bosnia And Herzegovina",
          cost_of_living_index: 35.97,
          restaurant_price_index: 25.1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Mexico",
          cost_of_living_index: 35.72,
          restaurant_price_index: 32.12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Serbia",
          cost_of_living_index: 35.72,
          restaurant_price_index: 28.63,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Romania",
          cost_of_living_index: 35.31,
          restaurant_price_index: 30.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Tanzania",
          cost_of_living_index: 35.25,
          restaurant_price_index: 22.57,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Belarus",
          cost_of_living_index: 34.7,
          restaurant_price_index: 38.94,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Turkey",
          cost_of_living_index: 34.69,
          restaurant_price_index: 24.16,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Bolivia",
          cost_of_living_index: 34.56,
          restaurant_price_index: 25.11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Morocco",
          cost_of_living_index: 34.32,
          restaurant_price_index: 24.5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Moldova",
          cost_of_living_index: 33.7,
          restaurant_price_index: 27.79,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Rwanda",
          cost_of_living_index: 33.35,
          restaurant_price_index: 29.17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Ukraine",
          cost_of_living_index: 33.18,
          restaurant_price_index: 26.42,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Argentina",
          cost_of_living_index: 32.95,
          restaurant_price_index: 30.52,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Armenia",
          cost_of_living_index: 32.84,
          restaurant_price_index: 30.43,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Bangladesh",
          cost_of_living_index: 32.25,
          restaurant_price_index: 19.21,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Zambia",
          cost_of_living_index: 31.72,
          restaurant_price_index: 22.07,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Sri Lanka",
          cost_of_living_index: 31.61,
          restaurant_price_index: 18.76,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "North Macedonia",
          cost_of_living_index: 31.59,
          restaurant_price_index: 23.31,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Paraguay",
          cost_of_living_index: 31.1,
          restaurant_price_index: 25.01,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Nigeria",
          cost_of_living_index: 31,
          restaurant_price_index: 17.71,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Colombia",
          cost_of_living_index: 30.66,
          restaurant_price_index: 22.44,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Kazakhstan",
          cost_of_living_index: 30.64,
          restaurant_price_index: 29.87,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Uganda",
          cost_of_living_index: 30.18,
          restaurant_price_index: 22.14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Algeria",
          cost_of_living_index: 30.1,
          restaurant_price_index: 15.89,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Azerbaijan",
          cost_of_living_index: 29.92,
          restaurant_price_index: 30.36,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Egypt",
          cost_of_living_index: 29.54,
          restaurant_price_index: 23.53,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Nepal",
          cost_of_living_index: 29.05,
          restaurant_price_index: 20.36,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Georgia",
          cost_of_living_index: 28.48,
          restaurant_price_index: 26.66,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Kosovo (Disputed Territory)",
          cost_of_living_index: 28.47,
          restaurant_price_index: 21.04,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Venezuela",
          cost_of_living_index: 27.17,
          restaurant_price_index: 24.41,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Tunisia",
          cost_of_living_index: 27.04,
          restaurant_price_index: 14.95,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Kyrgyzstan",
          cost_of_living_index: 26.97,
          restaurant_price_index: 21.45,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Uzbekistan",
          cost_of_living_index: 26.01,
          restaurant_price_index: 20.17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Syria",
          cost_of_living_index: 25.31,
          restaurant_price_index: 21.38,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "India",
          cost_of_living_index: 24.58,
          restaurant_price_index: 17.17,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Afghanistan",
          cost_of_living_index: 24.24,
          restaurant_price_index: 17.38,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          country: "Pakistan",
          cost_of_living_index: 21.98,
          restaurant_price_index: 16.78,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("cost_of_living_index", null, {});
  },
};