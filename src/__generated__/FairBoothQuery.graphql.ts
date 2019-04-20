/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FairBooth_show$ref } from "./FairBooth_show.graphql";
export type FairBoothQueryVariables = {
    readonly showID: string;
};
export type FairBoothQueryResponse = {
    readonly show: ({
        readonly " $fragmentRefs": FairBooth_show$ref;
    }) | null;
};
export type FairBoothQuery = {
    readonly response: FairBoothQueryResponse;
    readonly variables: FairBoothQueryVariables;
};



/*
query FairBoothQuery(
  $showID: String!
) {
  show(id: $showID) {
    ...FairBooth_show
  }
}

fragment FairBooth_show on Show {
  gravityID
  _id
  ...FairBoothHeader_show
  ...ShowArtworksPreview_show
  ...ShowArtistsPreview_show
  ...ShowArtists_show
  ...ShowArtworks_show
}

fragment FairBoothHeader_show on Show {
  fair {
    name
  }
  partner {
    __typename
    ... on Partner {
      name
      gravityID
      _id
      __id
      href
      profile {
        _id
        gravityID
        is_followed
      }
    }
    ... on Node {
      id
    }
  }
  counts {
    artworks
    artists
  }
  location {
    display
  }
}

fragment ShowArtworksPreview_show on Show {
  __id
  artworks(size: 6) {
    ...GenericGrid_artworks
  }
  counts {
    artworks
  }
}

fragment ShowArtistsPreview_show on Show {
  _id
  gravityID
  artists {
    _id
    gravityID
    href
    ...ArtistListItem_artist
  }
  artists_without_artworks {
    _id
    gravityID
    href
    ...ArtistListItem_artist
  }
}

fragment ShowArtists_show on Show {
  _id
  gravityID
  artists_grouped_by_name {
    letter
    items {
      ...ArtistListItem_artist
      sortable_id
      href
    }
  }
}

fragment ShowArtworks_show on Show {
  __id
  gravityID
  _id
  filteredArtworks(size: 0, medium: "*", price_range: "*-*", aggregations: [MEDIUM, PRICE_RANGE, TOTAL]) {
    ...FilteredInfiniteScrollGrid_filteredArtworks
  }
}

fragment FilteredInfiniteScrollGrid_filteredArtworks on FilterArtworks {
  ...Filters_filteredArtworks
  ...ArtworksGridPaginationContainer_filteredArtworks
}

fragment Filters_filteredArtworks on FilterArtworks {
  aggregations {
    slice
    counts {
      gravityID
      name
    }
  }
}

fragment ArtworksGridPaginationContainer_filteredArtworks on FilterArtworks {
  __id
  artworks: artworks_connection(first: 10) {
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
    edges {
      node {
        gravityID
        __id
        image {
          aspect_ratio
        }
        ...Artwork_artwork
        __typename
      }
      cursor
    }
  }
}

fragment Artwork_artwork on Artwork {
  title
  date
  sale_message
  is_in_auction
  is_biddable
  is_acquireable
  is_offerable
  gravityID
  sale {
    is_auction
    is_live_open
    is_open
    is_closed
    display_timely_at
  }
  sale_artwork {
    opening_bid {
      display
    }
    current_bid {
      display
    }
    bidder_positions_count
    sale {
      is_closed
    }
  }
  image {
    url(version: "large")
    aspect_ratio
  }
  artists(shallow: true) {
    name
  }
  partner {
    name
  }
  href
}

fragment ArtistListItem_artist on Artist {
  __id
  _id
  gravityID
  name
  is_followed
  nationality
  birthday
  deathday
  image {
    url
  }
}

fragment GenericGrid_artworks on Artwork {
  __id
  gravityID
  image {
    aspect_ratio
  }
  ...Artwork_artwork
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "showID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "showID",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gravityID",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "_id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_followed",
  "args": null,
  "storageKey": null
},
v10 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_biddable",
  "args": null,
  "storageKey": null
},
v12 = {
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
      "name": "aspect_ratio",
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
          "value": "large",
          "type": "[String]"
        }
      ],
      "storageKey": "url(version:\"large\")"
    }
  ]
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sale_message",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_in_auction",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_acquireable",
  "args": null,
  "storageKey": null
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_offerable",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "is_closed",
  "args": null,
  "storageKey": null
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sale",
  "storageKey": null,
  "args": null,
  "concreteType": "Sale",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_auction",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_live_open",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "is_open",
      "args": null,
      "storageKey": null
    },
    (v19/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "display_timely_at",
      "args": null,
      "storageKey": null
    }
  ]
},
v21 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sale_artwork",
  "storageKey": null,
  "args": null,
  "concreteType": "SaleArtwork",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "opening_bid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkOpeningBid",
      "plural": false,
      "selections": (v10/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "current_bid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkCurrentBid",
      "plural": false,
      "selections": (v10/*: any*/)
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "bidder_positions_count",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "sale",
      "storageKey": null,
      "args": null,
      "concreteType": "Sale",
      "plural": false,
      "selections": [
        (v19/*: any*/)
      ]
    }
  ]
},
v22 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artists",
  "storageKey": "artists(shallow:true)",
  "args": [
    {
      "kind": "Literal",
      "name": "shallow",
      "value": true,
      "type": "Boolean"
    }
  ],
  "concreteType": "Artist",
  "plural": true,
  "selections": (v5/*: any*/)
},
v23 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "partner",
  "storageKey": null,
  "args": null,
  "concreteType": "Partner",
  "plural": false,
  "selections": (v5/*: any*/)
},
v24 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nationality",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "birthday",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "deathday",
  "args": null,
  "storageKey": null
},
v27 = {
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
      "args": null,
      "storageKey": null
    }
  ]
},
v28 = [
  (v7/*: any*/),
  (v3/*: any*/),
  (v8/*: any*/),
  (v2/*: any*/),
  (v4/*: any*/),
  (v9/*: any*/),
  (v24/*: any*/),
  (v25/*: any*/),
  (v26/*: any*/),
  (v27/*: any*/)
],
v29 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FairBoothQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "show",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FairBooth_show",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FairBoothQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "show",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Show",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "fair",
            "storageKey": null,
            "args": null,
            "concreteType": "Fair",
            "plural": false,
            "selections": (v5/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "partner",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v6/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "Partner",
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/),
                  (v7/*: any*/),
                  (v2/*: any*/),
                  (v8/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "profile",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Profile",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v3/*: any*/),
                      (v9/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "counts",
            "storageKey": null,
            "args": null,
            "concreteType": "ShowCounts",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "artworks",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "artists",
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
            "selections": (v10/*: any*/)
          },
          (v7/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artworks",
            "storageKey": "artworks(size:6)",
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 6,
                "type": "Int"
              }
            ],
            "concreteType": "Artwork",
            "plural": true,
            "selections": [
              (v11/*: any*/),
              (v2/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v3/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v8/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": true,
            "selections": (v28/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists_without_artworks",
            "storageKey": null,
            "args": null,
            "concreteType": "Artist",
            "plural": true,
            "selections": (v28/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "artists_grouped_by_name",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistGroup",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "letter",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "items",
                "storageKey": null,
                "args": null,
                "concreteType": "Artist",
                "plural": true,
                "selections": [
                  (v24/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v9/*: any*/),
                  (v7/*: any*/),
                  (v25/*: any*/),
                  (v26/*: any*/),
                  (v27/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "sortable_id",
                    "args": null,
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "filteredArtworks",
            "storageKey": "filteredArtworks(aggregations:[\"MEDIUM\",\"PRICE_RANGE\",\"TOTAL\"],medium:\"*\",price_range:\"*-*\",size:0)",
            "args": [
              {
                "kind": "Literal",
                "name": "aggregations",
                "value": [
                  "MEDIUM",
                  "PRICE_RANGE",
                  "TOTAL"
                ],
                "type": "[ArtworkAggregation]"
              },
              {
                "kind": "Literal",
                "name": "medium",
                "value": "*",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "price_range",
                "value": "*-*",
                "type": "String"
              },
              {
                "kind": "Literal",
                "name": "size",
                "value": 0,
                "type": "Int"
              }
            ],
            "concreteType": "FilterArtworks",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "aggregations",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtworksAggregationResults",
                "plural": true,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "slice",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "counts",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AggregationCount",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ]
                  }
                ]
              },
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "artworks",
                "name": "artworks_connection",
                "storageKey": "artworks_connection(first:10)",
                "args": (v29/*: any*/),
                "concreteType": "ArtworkConnection",
                "plural": false,
                "selections": [
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
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "startCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
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
                          (v17/*: any*/),
                          (v3/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v14/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v11/*: any*/),
                          (v2/*: any*/),
                          (v18/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v8/*: any*/),
                          (v6/*: any*/)
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
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": "artworks",
                "name": "artworks_connection",
                "args": (v29/*: any*/),
                "handle": "connection",
                "key": "ArtworksGridPaginationContainer_artworks",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FairBoothQuery",
    "id": "a5a94f15b08c48781401d35a1bd49987",
    "text": null,
    "metadata": {}
  }
};
})();
(node as any).hash = 'a5a94f15b08c48781401d35a1bd49987';
export default node;
