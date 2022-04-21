export default {
  openapi: "3.0.0",
  info: {
    title: "Boilerplace",
    version: "1.0.0",
    contact: {
      name: "boilerplate",
      email: "matheus.la1999@gmail.com",
    },
  },
  tags: [
    {
      name: "Boilerplate",
      description: "Boilerplate engine",
    },
  ],
  schemes: ["https", "http"],
  paths: {
    "/create": {
      post: {
        tags: ["Boilerplate"],
        consumes: ["application/json"],
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            required: true,
            schema: {
              $ref: "#definitions/create",
            },
          },
        ],
      },
    },
  },
  definitions: {
    create: {
      type: "object",
    },
  },
};
