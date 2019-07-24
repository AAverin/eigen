/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _FollowArtistButton_artist$ref: unique symbol;
export type FollowArtistButton_artist$ref = typeof _FollowArtistButton_artist$ref;
export type FollowArtistButton_artist = {
    readonly id: string;
    readonly slug: string;
    readonly internalID: string;
    readonly is_followed: boolean | null;
    readonly " $refType": FollowArtistButton_artist$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "FollowArtistButton_artist",
  "type": "Artist",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "slug",
      "args": null,
      "storageKey": null
    },
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
      "name": "is_followed",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'eee7f655b41839900361749e24f62a7e';
export default node;
