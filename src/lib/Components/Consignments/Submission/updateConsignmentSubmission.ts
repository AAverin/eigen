import { updateConsignmentSubmissionMutation } from "__generated__/updateConsignmentSubmissionMutation.graphql"
import { defaultEnvironment } from "lib/relay/createEnvironment"
import { commitMutation, graphql } from "relay-runtime"
import { ConsignmentSetup } from "../index"
import { consignmentSetupToMutationInput } from "./consignmentSetupToSubmission"

export const updateConsignmentSubmission = (submission: ConsignmentSetup) => {
  const input = consignmentSetupToMutationInput(submission)

  // const query = `mutation {
  //   updateConsignmentSubmission(input:${input}) {
  //     consignment_submission {
  //       internalID
  //     }
  //   }
  // }`
  // const results = await metaphysics<UpdateSubmissionResponse>({ query })
  // return results.data.updateConsignmentSubmission.consignment_submission

  return new Promise((resolve, reject) => {
    commitMutation<updateConsignmentSubmissionMutation>(defaultEnvironment, {
      mutation: graphql`
        mutation updateConsignmentSubmissionMutation($input: UpdateSubmissionMutationInput!) {
          updateConsignmentSubmission(input: $input) {
            consignmentSubmission {
              internalID
            }
          }
        }
      `,
      variables: { input },
      onError: reject,
      onCompleted: (response, errors) => {
        if (errors.length > 0) {
          reject(new Error(JSON.stringify(errors)))
        } else {
          resolve(response)
        }
      },
    })
  })
}
