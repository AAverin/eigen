/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { CityFairList_city$ref } from "./CityFairList_city.graphql";
export type CityFairListQueryVariables = {
    readonly count: number;
    readonly cursor?: string | null;
    readonly citySlug: string;
};
export type CityFairListQueryResponse = {
    readonly city: ({
        readonly " $fragmentRefs": CityFairList_city$ref;
    }) | null;
};
export type CityFairListQuery = {
    readonly response: CityFairListQueryResponse;
    readonly variables: CityFairListQueryVariables;
};



/*
query CityFairListQuery(
  $count: Int!
  $cursor: String
  $citySlug: String!
) {
  city(slug: $citySlug) {
    ...CityFairList_city_1G22uz
  }
}

fragment CityFairList_city_1G22uz on City {
  slug
  fairs(first: $count, after: $cursor, status: CURRENT, sort: START_AT_ASC) {
    edges {
      node {
        gravityID
        name
        exhibition_period
        counts {
          partners
        }
        location {
          coordinates {
            lat
            lng
          }
          __id: id
        }
        image {
          image_url
          aspect_ratio
          url
        }
        profile {
          icon {
            gravityID
            href
            height
            width
            url(version: "square140")
          }
          id
          gravityID
          name
          __id: id
        }
        start_at
        end_at
        __id: id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "citySlug",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "citySlug",
    "type": "String"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gravityID",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CityFairListQuery",
  "id": null,
  "text": "query CityFairListQuery(\n  $count: Int!\n  $cursor: String\n  $citySlug: String!\n) {\n  city(slug: $citySlug) {\n    ...CityFairList_city_1G22uz\n  }\n}\n\nfragment CityFairList_city_1G22uz on City {\n  slug\n  fairs(first: $count, after: $cursor, status: CURRENT, sort: START_AT_ASC) {\n    edges {\n      node {\n        gravityID\n        name\n        exhibition_period\n        counts {\n          partners\n        }\n        location {\n          coordinates {\n            lat\n            lng\n          }\n          __id: id\n        }\n        image {\n          image_url\n          aspect_ratio\n          url\n        }\n        profile {\n          icon {\n            gravityID\n            href\n            height\n            width\n            url(version: \"square140\")\n          }\n          id\n          gravityID\n          name\n          __id: id\n        }\n        start_at\n        end_at\n        __id: id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CityFairListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": v1,
        "concreteType": "City",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "CityFairList_city",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count",
                "type": null
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor",
                "type": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CityFairListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": v1,
        "concreteType": "City",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "slug",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fairs",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "START_AT_ASC",
                "type": "FairSorts"
              },
              {
                "kind": "Literal",
                "name": "status",
                "value": "CURRENT",
                "type": "EventStatus"
              }
            ],
            "concreteType": "FairConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "FairEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Fair",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "image_url",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "aspect_ratio",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      v2,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "exhibition_period",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "counts",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "FairCounts",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "partners",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "location",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "coordinates",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "LatLng",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "lat",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "lng",
                                "args": null,
                                "storageKey": null
                              }
                            ]
                          },
                          v3
                        ]
                      },
                      v4,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "profile",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Profile",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "icon",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              v2,
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "href",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "height",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "width",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "url",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "square140",
                                    "type": "[String]"
                                  }
                                ],
                                "storageKey": "url(version:\"square140\")"
                              }
                            ]
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
                            "args": null,
                            "storageKey": null
                          },
                          v2,
                          v4,
                          v3
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "start_at",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "end_at",
                        "args": null,
                        "storageKey": null
                      },
                      v3,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "fairs",
            "args": [
              {
                "kind": "Variable",
                "name": "after",
                "variableName": "cursor",
                "type": "String"
              },
              {
                "kind": "Variable",
                "name": "first",
                "variableName": "count",
                "type": "Int"
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "START_AT_ASC",
                "type": "FairSorts"
              },
              {
                "kind": "Literal",
                "name": "status",
                "value": "CURRENT",
                "type": "EventStatus"
              }
            ],
            "handle": "connection",
            "key": "CityFairList_fairs",
            "filters": [
              "status",
              "sort"
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '67a71dd0b56ee5d2552a6e45579f8921';
export default node;
