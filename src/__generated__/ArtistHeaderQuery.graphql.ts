/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ArtistHeaderQueryVariables = {
    readonly artistID: string;
};
export type ArtistHeaderQueryResponse = {
    readonly artist: ({
    }) | null;
};



/*
query ArtistHeaderQuery(
  $artistID: String!
) {
  artist(id: $artistID) {
    ...Header_artist
    __id
  }
}

fragment Header_artist on Artist {
  _id
  id
  name
  nationality
  birthday
  counts {
    follows
  }
  __id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID",
    "type": "String!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ArtistHeaderQuery",
  "id": null,
  "text": "query ArtistHeaderQuery(\n  $artistID: String!\n) {\n  artist(id: $artistID) {\n    ...Header_artist\n    __id\n  }\n}\n\nfragment Header_artist on Artist {\n  _id\n  id\n  name\n  nationality\n  birthday\n  counts {\n    follows\n  }\n  __id\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ArtistHeaderQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Header_artist",
            "args": null
          },
          v2
        ],
        "idField": "__id"
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtistHeaderQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": v1,
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "_id",
            "args": null,
            "storageKey": null
          },
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
            "name": "name",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "nationality",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "birthday",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "counts",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistCounts",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "follows",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v2
        ],
        "idField": "__id"
      }
    ]
  }
};
})();
(node as any).hash = 'e7898450d087c728259c6cf89d6d7ce0';
export default node;
