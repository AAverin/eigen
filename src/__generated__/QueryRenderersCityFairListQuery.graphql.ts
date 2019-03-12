/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { CityFairList_city$ref } from "./CityFairList_city.graphql";
export type QueryRenderersCityFairListQueryVariables = {
    readonly citySlug: string;
};
export type QueryRenderersCityFairListQueryResponse = {
    readonly city: ({
        readonly " $fragmentRefs": CityFairList_city$ref;
    }) | null;
};
export type QueryRenderersCityFairListQuery = {
    readonly response: QueryRenderersCityFairListQueryResponse;
    readonly variables: QueryRenderersCityFairListQueryVariables;
};



/*
query QueryRenderersCityFairListQuery(
  $citySlug: String!
) {
  city(slug: $citySlug) {
    ...CityFairList_city
  }
}

fragment CityFairList_city on City {
  fairs(first: 20, after: "", status: CURRENT, sort: START_AT_ASC) {
    edges {
      node {
        id
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
          __id
        }
        image {
          image_url
          aspect_ratio
          url
        }
        profile {
          icon {
            id
            href
            height
            width
            url(version: "square140")
          }
          __id
          id
          name
        }
        start_at
        end_at
        __id
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
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
  "name": "QueryRenderersCityFairListQuery",
  "id": "bfe8c6bb7845966a72300f363f1ac087",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "QueryRenderersCityFairListQuery",
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
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QueryRenderersCityFairListQuery",
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
            "kind": "LinkedField",
            "alias": null,
            "name": "fairs",
            "storageKey": "fairs(after:\"\",first:20,sort:\"START_AT_ASC\",status:\"CURRENT\")",
            "args": [
              {
                "kind": "Literal",
                "name": "after",
                "value": "",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 20,
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
                          v3,
                          v2,
                          v4
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
                "kind": "Literal",
                "name": "after",
                "value": "",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "first",
                "value": 20,
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
(node as any).hash = '0c133553ee090f49b2897e3fe7cca243';
export default node;
