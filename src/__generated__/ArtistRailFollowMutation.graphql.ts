/* tslint:disable */
/* eslint-disable */
/* @relayHash 1afbded170b86122aafb207b46c8ac79 */

import { ConcreteRequest } from "relay-runtime";
export type FollowArtistInput = {
    artistID: string;
    unfollow?: boolean | null;
    clientMutationId?: string | null;
};
export type ArtistRailFollowMutationVariables = {
    input: FollowArtistInput;
    excludeArtistIDs: Array<string | null>;
};
export type ArtistRailFollowMutationResponse = {
    readonly followArtist: {
        readonly artist: {
            readonly related: {
                readonly suggestedConnection: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly id: string;
                            readonly slug: string;
                            readonly internalID: string;
                            readonly href: string | null;
                            readonly name: string | null;
                            readonly formattedNationalityAndBirthday: string | null;
                            readonly avatar: {
                                readonly url: string | null;
                            } | null;
                            readonly artworksConnection: {
                                readonly edges: ReadonlyArray<{
                                    readonly node: {
                                        readonly image: {
                                            readonly url: string | null;
                                        } | null;
                                    } | null;
                                } | null> | null;
                            } | null;
                        } | null;
                    } | null> | null;
                } | null;
            } | null;
        } | null;
    } | null;
};
export type ArtistRailFollowMutation = {
    readonly response: ArtistRailFollowMutationResponse;
    readonly variables: ArtistRailFollowMutationVariables;
};



/*
mutation ArtistRailFollowMutation(
  $input: FollowArtistInput!
  $excludeArtistIDs: [String]!
) {
  followArtist(input: $input) {
    artist {
      related {
        suggestedConnection(first: 1, excludeArtistIDs: $excludeArtistIDs, excludeFollowedArtists: true, excludeArtistsWithoutForsaleArtworks: true) {
          edges {
            node {
              id
              slug
              internalID
              href
              name
              formattedNationalityAndBirthday
              avatar: image {
                url(version: "small")
              }
              artworksConnection(first: 3) {
                edges {
                  node {
                    image {
                      url(version: "large")
                    }
                    id
                  }
                }
              }
            }
          }
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "FollowArtistInput!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "excludeArtistIDs",
    "type": "[String]!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "excludeArtistIDs",
    "variableName": "excludeArtistIDs"
  },
  {
    "kind": "Literal",
    "name": "excludeArtistsWithoutForsaleArtworks",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "excludeFollowedArtists",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  }
],
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
  "name": "slug",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "formattedNationalityAndBirthday",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "LinkedField",
  "alias": "avatar",
  "name": "image",
  "storageKey": null,
  "args": null,
  "concreteType": "Image",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": "small"
        }
      ],
      "storageKey": "url(version:\"small\")"
    }
  ]
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v11 = {
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
      "name": "url",
      "args": [
        {
          "kind": "Literal",
          "name": "version",
          "value": "large"
        }
      ],
      "storageKey": "url(version:\"large\")"
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtistRailFollowMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followArtist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowArtistPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artist",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "related",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtistRelatedData",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "suggestedConnection",
                    "storageKey": null,
                    "args": (v2/*: any*/),
                    "concreteType": "ArtistConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ArtistEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Artist",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "artworksConnection",
                                "storageKey": "artworksConnection(first:3)",
                                "args": (v10/*: any*/),
                                "concreteType": "ArtworkConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "ArtworkEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Artwork",
                                        "plural": false,
                                        "selections": [
                                          (v11/*: any*/)
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
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
  "operation": {
    "kind": "Operation",
    "name": "ArtistRailFollowMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "followArtist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "FollowArtistPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artist",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "related",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtistRelatedData",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "suggestedConnection",
                    "storageKey": null,
                    "args": (v2/*: any*/),
                    "concreteType": "ArtistConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ArtistEdge",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Artist",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/),
                              (v9/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "artworksConnection",
                                "storageKey": "artworksConnection(first:3)",
                                "args": (v10/*: any*/),
                                "concreteType": "ArtworkConnection",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "edges",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "ArtworkEdge",
                                    "plural": true,
                                    "selections": [
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "node",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "Artwork",
                                        "plural": false,
                                        "selections": [
                                          (v11/*: any*/),
                                          (v3/*: any*/)
                                        ]
                                      }
                                    ]
                                  }
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
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ArtistRailFollowMutation",
    "id": "d3fd2523f4a5016b72b8065dbfaf9e54",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'b92f45f01f6a5c6a19621cd608aa97d9';
export default node;
