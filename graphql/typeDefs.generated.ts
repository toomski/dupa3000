import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Mutation", loc: { start: 12, end: 20 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "login", loc: { start: 25, end: 30 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 31, end: 36 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 38, end: 44 },
                  },
                  loc: { start: 38, end: 44 },
                },
                loc: { start: 38, end: 45 },
              },
              directives: [],
              loc: { start: 31, end: 45 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 47, end: 55 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 57, end: 63 },
                  },
                  loc: { start: 57, end: 63 },
                },
                loc: { start: 57, end: 64 },
              },
              directives: [],
              loc: { start: 47, end: 64 },
            },
          ],
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "Token", loc: { start: 67, end: 72 } },
            loc: { start: 67, end: 72 },
          },
          directives: [],
          loc: { start: 25, end: 72 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "register",
            loc: { start: 75, end: 83 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "email",
                loc: { start: 84, end: 89 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 91, end: 97 },
                  },
                  loc: { start: 91, end: 97 },
                },
                loc: { start: 91, end: 98 },
              },
              directives: [],
              loc: { start: 84, end: 98 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "password",
                loc: { start: 100, end: 108 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 110, end: 116 },
                  },
                  loc: { start: 110, end: 116 },
                },
                loc: { start: 110, end: 117 },
              },
              directives: [],
              loc: { start: 100, end: 117 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "firstName",
                loc: { start: 119, end: 128 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 130, end: 136 },
                  },
                  loc: { start: 130, end: 136 },
                },
                loc: { start: 130, end: 137 },
              },
              directives: [],
              loc: { start: 119, end: 137 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "lastName",
                loc: { start: 139, end: 147 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String",
                    loc: { start: 149, end: 155 },
                  },
                  loc: { start: 149, end: 155 },
                },
                loc: { start: 149, end: 156 },
              },
              directives: [],
              loc: { start: 139, end: 156 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "newsletter",
                loc: { start: 158, end: 168 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 170, end: 177 },
                },
                loc: { start: 170, end: 177 },
              },
              directives: [],
              loc: { start: 158, end: 177 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "remember",
                loc: { start: 179, end: 187 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean",
                  loc: { start: 189, end: 196 },
                },
                loc: { start: 189, end: 196 },
              },
              directives: [],
              loc: { start: 179, end: 196 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Token",
              loc: { start: 199, end: 204 },
            },
            loc: { start: 199, end: 204 },
          },
          directives: [],
          loc: { start: 75, end: 204 },
        },
      ],
      loc: { start: 0, end: 206 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Token", loc: { start: 213, end: 218 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "token", loc: { start: 223, end: 228 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 230, end: 236 },
              },
              loc: { start: 230, end: 236 },
            },
            loc: { start: 230, end: 237 },
          },
          directives: [],
          loc: { start: 223, end: 237 },
        },
      ],
      loc: { start: 208, end: 239 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 252, end: 257 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "product",
            loc: { start: 262, end: 269 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 270, end: 272 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 274, end: 276 },
                  },
                  loc: { start: 274, end: 276 },
                },
                loc: { start: 274, end: 277 },
              },
              directives: [],
              loc: { start: 270, end: 277 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 280, end: 287 },
            },
            loc: { start: 280, end: 287 },
          },
          directives: [],
          loc: { start: 262, end: 287 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 290, end: 298 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "first",
                loc: { start: 299, end: 304 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Int",
                    loc: { start: 306, end: 309 },
                  },
                  loc: { start: 306, end: 309 },
                },
                loc: { start: 306, end: 310 },
              },
              directives: [],
              loc: { start: 299, end: 310 },
            },
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "skip",
                loc: { start: 312, end: 316 },
              },
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Int",
                  loc: { start: 318, end: 321 },
                },
                loc: { start: 318, end: 321 },
              },
              directives: [],
              loc: { start: 312, end: 321 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Product",
                    loc: { start: 325, end: 332 },
                  },
                  loc: { start: 325, end: 332 },
                },
                loc: { start: 325, end: 333 },
              },
              loc: { start: 324, end: 334 },
            },
            loc: { start: 324, end: 335 },
          },
          directives: [],
          loc: { start: 290, end: 335 },
        },
      ],
      loc: { start: 240, end: 337 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Image", loc: { start: 344, end: 349 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "url", loc: { start: 354, end: 357 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 359, end: 365 },
              },
              loc: { start: 359, end: 365 },
            },
            loc: { start: 359, end: 366 },
          },
          directives: [],
          loc: { start: 354, end: 366 },
        },
      ],
      loc: { start: 339, end: 368 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 375, end: 382 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 387, end: 389 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 391, end: 393 },
              },
              loc: { start: 391, end: 393 },
            },
            loc: { start: 391, end: 394 },
          },
          directives: [],
          loc: { start: 387, end: 394 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 397, end: 401 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 403, end: 409 },
              },
              loc: { start: 403, end: 409 },
            },
            loc: { start: 403, end: 410 },
          },
          directives: [],
          loc: { start: 397, end: 410 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "slug", loc: { start: 413, end: 417 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 419, end: 425 },
              },
              loc: { start: 419, end: 425 },
            },
            loc: { start: 419, end: 426 },
          },
          directives: [],
          loc: { start: 413, end: 426 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 429, end: 440 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 442, end: 448 },
              },
              loc: { start: 442, end: 448 },
            },
            loc: { start: 442, end: 449 },
          },
          directives: [],
          loc: { start: 429, end: 449 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 452, end: 457 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 459, end: 462 },
              },
              loc: { start: 459, end: 462 },
            },
            loc: { start: 459, end: 463 },
          },
          directives: [],
          loc: { start: 452, end: 463 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "images",
            loc: { start: 466, end: 472 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Image",
                    loc: { start: 475, end: 480 },
                  },
                  loc: { start: 475, end: 480 },
                },
                loc: { start: 475, end: 481 },
              },
              loc: { start: 474, end: 482 },
            },
            loc: { start: 474, end: 483 },
          },
          directives: [],
          loc: { start: 466, end: 483 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "reviews",
            loc: { start: 486, end: 493 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Review",
                    loc: { start: 496, end: 502 },
                  },
                  loc: { start: 496, end: 502 },
                },
                loc: { start: 496, end: 503 },
              },
              loc: { start: 495, end: 504 },
            },
            loc: { start: 495, end: 505 },
          },
          directives: [],
          loc: { start: 486, end: 505 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 508, end: 517 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 519, end: 527 },
              },
              loc: { start: 519, end: 527 },
            },
            loc: { start: 519, end: 528 },
          },
          directives: [],
          loc: { start: 508, end: 528 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 531, end: 540 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 542, end: 550 },
              },
              loc: { start: 542, end: 550 },
            },
            loc: { start: 542, end: 551 },
          },
          directives: [],
          loc: { start: 531, end: 551 },
        },
      ],
      loc: { start: 370, end: 553 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Review", loc: { start: 559, end: 565 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 570, end: 572 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 574, end: 576 },
              },
              loc: { start: 574, end: 576 },
            },
            loc: { start: 574, end: 577 },
          },
          directives: [],
          loc: { start: 570, end: 577 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "title", loc: { start: 580, end: 585 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 587, end: 593 },
              },
              loc: { start: 587, end: 593 },
            },
            loc: { start: 587, end: 594 },
          },
          directives: [],
          loc: { start: 580, end: 594 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "description",
            loc: { start: 597, end: 608 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 610, end: 616 },
              },
              loc: { start: 610, end: 616 },
            },
            loc: { start: 610, end: 617 },
          },
          directives: [],
          loc: { start: 597, end: 617 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "rating",
            loc: { start: 620, end: 626 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 628, end: 631 },
              },
              loc: { start: 628, end: 631 },
            },
            loc: { start: 628, end: 632 },
          },
          directives: [],
          loc: { start: 620, end: 632 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "createdAt",
            loc: { start: 635, end: 644 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 646, end: 654 },
              },
              loc: { start: 646, end: 654 },
            },
            loc: { start: 646, end: 655 },
          },
          directives: [],
          loc: { start: 635, end: 655 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "updatedAt",
            loc: { start: 658, end: 667 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "DateTime",
                loc: { start: 669, end: 677 },
              },
              loc: { start: 669, end: 677 },
            },
            loc: { start: 669, end: 678 },
          },
          directives: [],
          loc: { start: 658, end: 678 },
        },
      ],
      loc: { start: 554, end: 680 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 686, end: 691 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 681, end: 691 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 698, end: 706 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 693, end: 706 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 715, end: 723 } },
      directives: [],
      loc: { start: 708, end: 723 },
    },
  ],
  loc: { start: 0, end: 724 },
} as unknown as DocumentNode;
