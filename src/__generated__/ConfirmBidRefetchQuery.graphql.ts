/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ConfirmBidRefetchQueryVariables = {
    readonly saleID: string;
};
export type ConfirmBidRefetchQueryResponse = {
    readonly me: ({
        readonly has_qualified_credit_cards: boolean | null;
        readonly bidders: ReadonlyArray<({
            readonly qualified_for_bidding: boolean | null;
        }) | null> | null;
    }) | null;
};
export type ConfirmBidRefetchQuery = {
    readonly response: ConfirmBidRefetchQueryResponse;
    readonly variables: ConfirmBidRefetchQueryVariables;
};



/*
query ConfirmBidRefetchQuery(
  $saleID: String!
) {
  me {
    has_qualified_credit_cards
    bidders(sale_id: $saleID) {
      qualified_for_bidding
      __id: id
    }
    __id: id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "saleID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": "__id",
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "me",
    "storageKey": null,
    "args": null,
    "concreteType": "Me",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "has_qualified_credit_cards",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bidders",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "sale_id",
            "variableName": "saleID",
            "type": "String"
          }
        ],
        "concreteType": "Bidder",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "qualified_for_bidding",
            "args": null,
            "storageKey": null
          },
          v1
        ]
      },
      v1
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ConfirmBidRefetchQuery",
  "id": null,
  "text": "query ConfirmBidRefetchQuery(\n  $saleID: String!\n) {\n  me {\n    has_qualified_credit_cards\n    bidders(sale_id: $saleID) {\n      qualified_for_bidding\n      __id: id\n    }\n    __id: id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ConfirmBidRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "ConfirmBidRefetchQuery",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
(node as any).hash = '12cc69f9d8252cdd1c762eea37e5ae8f';
export default node;
