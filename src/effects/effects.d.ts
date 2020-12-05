export const Effects = [
  {
    name: "echo",
    parameters: [
      {
        name: "Offset",
        value: {
          min: 0,
          max: 100,
          default: 50,
        },
      },
      {
        name: "Direction",
        value: {
          min: -180,
          max: 180,
          default: 0,
        },
      },
      {
        name: "Blur",
        value: {
          min: 0,
          max: 100,
          default: 0,
        },
      },
      {
        name: "Transparency",
        value: {
          min: 0,
          max: 100,
          default: 30,
        },
      },
    ],
  },
];
