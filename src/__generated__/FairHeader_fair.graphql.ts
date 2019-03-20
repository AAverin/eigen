/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _FairHeader_fair$ref: unique symbol;
export type FairHeader_fair$ref = typeof _FairHeader_fair$ref;
export type FairHeader_fair = {
    readonly id: string;
    readonly _id: string;
    readonly name: string | null;
    readonly counts: ({
        readonly artists: any | null;
        readonly partners: any | null;
    }) | null;
    readonly followed_content: ({
        readonly artists: ReadonlyArray<({
            readonly name: string | null;
            readonly href: string | null;
            readonly id: string;
            readonly _id: string;
        }) | null> | null;
        readonly galleries: ReadonlyArray<({
            readonly _id: string;
            readonly name: string | null;
        }) | null> | null;
    }) | null;
    readonly partner_names: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly id: string;
                readonly partner: ({
                    readonly profile?: ({
                        readonly name: string | null;
                        readonly id: string;
                        readonly _id: string;
                    }) | null;
                }) | null;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly artists_names: ({
        readonly edges: ReadonlyArray<({
            readonly node: ({
                readonly name: string | null;
                readonly href: string | null;
                readonly id: string;
                readonly _id: string;
            }) | null;
        }) | null> | null;
    }) | null;
    readonly image: ({
        readonly image_url: string | null;
        readonly aspect_ratio: number;
        readonly url: string | null;
    }) | null;
    readonly profile: ({
        readonly icon: ({
            readonly id: string | null;
            readonly href: string | null;
            readonly height: number | null;
            readonly width: number | null;
            readonly url: string | null;
        }) | null;
        readonly __id: string;
        readonly id: string;
        readonly name: string | null;
        readonly is_followed: boolean | null;
    }) | null;
    readonly start_at: string | null;
    readonly end_at: string | null;
    readonly exhibition_period: string | null;
    readonly " $refType": FairHeader_fair$ref;
};



const node: ConcreteFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v5 = [
  v2,
  v3,
  v0,
  v1,
  v4
];
return {
  "kind": "Fragment",
  "name": "FairHeader_fair",
  "type": "Fair",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    v1,
    v2,
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
          "name": "artists",
          "args": null,
          "storageKey": null
        },
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
      "name": "followed_content",
      "storageKey": null,
      "args": null,
      "concreteType": "FollowedContent",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "artists",
          "storageKey": null,
          "args": null,
          "concreteType": "Artist",
          "plural": true,
          "selections": v5
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "galleries",
          "storageKey": null,
          "args": null,
          "concreteType": "Partner",
          "plural": true,
          "selections": [
            v1,
            v2,
            v4
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "partner_names",
      "name": "shows_connection",
      "storageKey": "shows_connection(first:2)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 2,
          "type": "Int"
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
                v0,
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "partner",
                  "storageKey": null,
                  "args": null,
                  "concreteType": null,
                  "plural": false,
                  "selections": [
                    v4,
                    {
                      "kind": "InlineFragment",
                      "type": "Partner",
                      "selections": [
                        {
                          "kind": "LinkedField",
                          "alias": null,
                          "name": "profile",
                          "storageKey": null,
                          "args": null,
                          "concreteType": "Profile",
                          "plural": false,
                          "selections": [
                            v2,
                            v0,
                            v1,
                            v4
                          ]
                        }
                      ]
                    }
                  ]
                },
                v4
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "artists_names",
      "name": "artists",
      "storageKey": "artists(first:3)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3,
          "type": "Int"
        }
      ],
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
              "selections": v5
            }
          ]
        }
      ]
    },
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
            v0,
            v3,
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
        v4,
        v0,
        v2,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "is_followed",
          "args": null,
          "storageKey": null
        }
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
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "exhibition_period",
      "args": null,
      "storageKey": null
    },
    v4
  ]
};
})();
(node as any).hash = '56735f5b815fcf6e09e8406e96d36777';
export default node;
