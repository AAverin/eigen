/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Partner_partner = {
    readonly id: string;
    readonly name: string | null;
    readonly slug: string;
    readonly profile: {
        readonly id: string;
        readonly isFollowed: boolean | null;
        readonly internalID: string;
    } | null;
    readonly locations: ReadonlyArray<{
        readonly city: string | null;
    } | null> | null;
    readonly " $fragmentRefs": FragmentRefs<"PartnerArtwork_partner" | "PartnerOverview_partner" | "PartnerShows_partner">;
    readonly " $refType": "Partner_partner";
};



const node: ReaderFragment = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Partner_partner",
  "type": "Partner",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "profile",
      "storageKey": null,
      "args": null,
      "concreteType": "Profile",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "isFollowed",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "internalID",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "locations",
      "storageKey": null,
      "args": null,
      "concreteType": "Location",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "city",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "PartnerArtwork_partner",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PartnerOverview_partner",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "PartnerShows_partner",
      "args": null
    }
  ]
};
})();
(node as any).hash = 'cd31ee0097fe03c4a02dc0ae3500f61f';
export default node;
