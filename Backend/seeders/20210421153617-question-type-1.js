"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "question-type1",
      [
        {
          question: "Which country is most populous?",
          field: "population",
          table: "PopulationDensity",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is least populous?",
          field: "population",
          table: "PopulationDensity",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the largest by total area?",
          field: "area_km2",
          table: "PopulationDensity",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the smallest by total area?",
          field: "area_km2",
          table: "PopulationDensity",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the most densely populated?",
          field: "density_pop_to_km2",
          table: "PopulationDensity",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the least densely populated?",
          field: "density_pop_to_km2",
          table: "PopulationDensity",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country has the most cell phones per person?",
          field: "phones",
          table: "CountriesGeneral",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the safest?",
          field: "safety_index",
          table: "QualityOfLife",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country has the highest birthrate?",
          field: "birthrate",
          table: "CountriesGeneral",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country has the most amount of people below 15?",
          field: "age_0_14_years",
          table: "CountriesAgeStructure",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question:
            "Which country has the least amount of people between age 15 and 64?",
          field: "age_15_64_years",
          table: "CountriesAgeStructure",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question-type1", null, {});
  },
};
