/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { GlobalMap_viewer$ref } from "./GlobalMap_viewer.graphql";
export type Near = {
    readonly lat: number;
    readonly lng: number;
    readonly max_distance?: number | null;
};
export type MapRendererQueryVariables = {
    readonly near: Near;
};
export type MapRendererQueryResponse = {
    readonly viewer: ({
        readonly " $fragmentRefs": GlobalMap_viewer$ref;
    }) | null;
};
export type MapRendererQuery = {
    readonly response: MapRendererQueryResponse;
    readonly variables: MapRendererQueryVariables;
};



/*
query MapRendererQuery(
  $near: Near!
) {
  viewer {
    ...GlobalMap_viewer_279V1T
  }
}

fragment GlobalMap_viewer_279V1T on Viewer {
  city(near: $near) {
    name
    coordinates {
      lat
      lng
    }
    shows(discoverable: true, first: 50, sort: START_AT_ASC) {
      edges {
        node {
          id
          name
          is_followed
          cover_image {
            url
          }
          location {
            coordinates {
              lat
              lng
            }
            __id
          }
          type
          start_at
          end_at
          partner {
            __typename
            ... on Partner {
              name
              type
            }
            ... on ExternalPartner {
              name
              __id
            }
            ... on Node {
              __id
            }
          }
          __id
        }
      }
    }
    fairs(first: 10) {
      edges {
        node {
          id
          name
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
              url
            }
            __id
            id
            name
          }
          start_at
          end_at
          __id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "near",
    "type": "Near!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
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
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v2,
    v5
  ]
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "start_at",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "end_at",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MapRendererQuery",
  "id": "cc9b91e8a668770dba92719ac854b3da",
  "text": null,
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MapRendererQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "name": "__viewer_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "GlobalMap_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "near",
                "variableName": "near",
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
    "name": "MapRendererQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "city",
            "storageKey": null,
            "args": [
              {
                "kind": "Variable",
                "name": "near",
                "variableName": "near",
                "type": "Near"
              }
            ],
            "concreteType": "City",
            "plural": false,
            "selections": [
              v1,
              v2,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "shows",
                "storageKey": "shows(discoverable:true,first:50,sort:\"START_AT_ASC\")",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "discoverable",
                    "value": true,
                    "type": "Boolean"
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 50,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "sort",
                    "value": "START_AT_ASC",
                    "type": "PartnerShowSorts"
                  }
                ],
                "concreteType": "ShowConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ShowEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Show",
                        "plural": false,
                        "selections": [
                          v3,
                          v1,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "is_followed",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "cover_image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              v4
                            ]
                          },
                          v6,
                          v7,
                          v8,
                          v9,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "partner",
                            "storageKey": null,
                            "args": null,
                            "concreteType": null,
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "__typename",
                                "args": null,
                                "storageKey": null
                              },
                              v5,
                              {
                                "kind": "InlineFragment",
                                "type": "ExternalPartner",
                                "selections": [
                                  v1
                                ]
                              },
                              {
                                "kind": "InlineFragment",
                                "type": "Partner",
                                "selections": [
                                  v1,
                                  v7
                                ]
                              }
                            ]
                          },
                          v5
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "fairs",
                "storageKey": "fairs(first:10)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
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
                          v3,
                          v1,
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
                          v6,
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
                              v4
                            ]
                          },
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
                                  v3,
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
                                  v4
                                ]
                              },
                              v5,
                              v3,
                              v1
                            ]
                          },
                          v8,
                          v9,
                          v5
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "viewer",
        "args": null,
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
})();
(node as any).hash = 'a924837874386dd66ef68c243edd0a54';
export default node;
