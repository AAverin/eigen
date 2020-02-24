/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ArtworkCarouselHeader_rail = {
    readonly title: string | null;
    readonly key: string | null;
    readonly context: ({
        readonly __typename: "HomePageFollowedArtistArtworkModule";
        readonly artist: {
            readonly internalID: string;
            readonly slug: string;
        } | null;
    } | {
        readonly __typename: "HomePageRelatedArtistArtworkModule";
        readonly artist: {
            readonly internalID: string;
            readonly slug: string;
        } | null;
        readonly based_on: {
            readonly name: string | null;
        } | null;
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
    readonly " $refType": "ArtworkCarouselHeader_rail";
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artist",
  "storageKey": null,
  "args": null,
  "concreteType": "Artist",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "internalID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Fragment",
  "name": "ArtworkCarouselHeader_rail",
  "type": "HomePageArtworkModule",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "key",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "context",
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
        {
          "kind": "InlineFragment",
          "type": "HomePageFollowedArtistArtworkModule",
          "selections": [
            (v0/*: any*/)
          ]
        },
        {
          "kind": "InlineFragment",
          "type": "HomePageRelatedArtistArtworkModule",
          "selections": [
            (v0/*: any*/),
            {
              "kind": "LinkedField",
              "alias": "based_on",
              "name": "basedOn",
              "storageKey": null,
              "args": null,
              "concreteType": "Artist",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
(node as any).hash = '10ec360b5f90309ed8d545432533520f';
export default node;
