/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type UpdateConversationMutationInput = {
    readonly conversationId: string;
    readonly fromLastViewedMessageId: string;
    readonly clientMutationId?: string | null;
};
export type UpdateConversationMutationVariables = {
    readonly input: UpdateConversationMutationInput;
};
export type UpdateConversationMutationResponse = {
    readonly updateConversation: ({
        readonly conversation: ({
            readonly internalID: string;
            readonly from_last_viewed_message_id: string | null;
        }) | null;
    }) | null;
};
export type UpdateConversationMutation = {
    readonly response: UpdateConversationMutationResponse;
    readonly variables: UpdateConversationMutationVariables;
};



/*
mutation UpdateConversationMutation(
  $input: UpdateConversationMutationInput!
) {
  updateConversation(input: $input) {
    conversation {
      internalID
      from_last_viewed_message_id
      __id: id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateConversationMutationInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateConversation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateConversationMutationInput!"
      }
    ],
    "concreteType": "UpdateConversationMutationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "conversation",
        "storageKey": null,
        "args": null,
        "concreteType": "Conversation",
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
            "name": "from_last_viewed_message_id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": "__id",
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateConversationMutation",
  "id": null,
  "text": "mutation UpdateConversationMutation(\n  $input: UpdateConversationMutationInput!\n) {\n  updateConversation(input: $input) {\n    conversation {\n      internalID\n      from_last_viewed_message_id\n      __id: id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateConversationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateConversationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node as any).hash = '626412cd0663f305e8f508f8aeb9c553';
export default node;
