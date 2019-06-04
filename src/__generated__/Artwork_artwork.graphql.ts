/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ArtworkActions_artwork$ref } from "./ArtworkActions_artwork.graphql";
import { ArtworkAvailability_artwork$ref } from "./ArtworkAvailability_artwork.graphql";
import { ArtworkTombstone_artwork$ref } from "./ArtworkTombstone_artwork.graphql";
import { ImageCarousel_images$ref } from "./ImageCarousel_images.graphql";
import { OtherWorks_artwork$ref } from "./OtherWorks_artwork.graphql";
import { SellerInfo_artwork$ref } from "./SellerInfo_artwork.graphql";
declare const _Artwork_artwork$ref: unique symbol;
export type Artwork_artwork$ref = typeof _Artwork_artwork$ref;
export type Artwork_artwork = {
    readonly images: ReadonlyArray<{
        readonly " $fragmentRefs": ImageCarousel_images$ref;
    } | null> | null;
    readonly " $fragmentRefs": ArtworkTombstone_artwork$ref & ArtworkActions_artwork$ref & ArtworkAvailability_artwork$ref & SellerInfo_artwork$ref & OtherWorks_artwork$ref;
    readonly " $refType": Artwork_artwork$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Artwork_artwork",
  "type": "Artwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "images",
      "storageKey": null,
      "args": null,
      "concreteType": "Image",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ImageCarousel_images",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkTombstone_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkActions_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ArtworkAvailability_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SellerInfo_artwork",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "OtherWorks_artwork",
      "args": null
    }
  ]
};
(node as any).hash = '8fc5f37fde36f7a4c9f075c9e9b3969a';
export default node;
