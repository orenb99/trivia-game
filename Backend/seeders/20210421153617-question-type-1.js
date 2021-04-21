"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "question-type1",
      [
        {
          question: "Which country is most populous?",
          field: "population",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is least populous?",
          field: "population",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the largest by total area?",
          field: "area_km2",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the smallest by total area?",
          field: "area_km2",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the most densely populated?",
          field: "density_pop_to_km2",
          operator: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country is the least densely populated?",
          field: "density_pop_to_km2",
          operator: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          question: "Which country has the most cell phones per person?",
          field: "phones",
          operator: true,
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