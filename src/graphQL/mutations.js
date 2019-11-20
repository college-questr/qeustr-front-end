import gql from 'graphql-tag';



export const POST_QUESTION = gql`
        mutation($questionTitle:String!,$questionBody: String!){
            addQuestion(questionTitle: $questionTitle, questionBody: $questionBody  ) {
                questionTitle
                questionBody
                votes
                createdBy
                createdAt
                id
            }
        }
`

export const POST_TAG = gql`
        mutation($tag: String!, $question_id: String!) {
            addTags(tag: $tag, question_id: $question_id) {
                tag
                question_id
            }
        }
`