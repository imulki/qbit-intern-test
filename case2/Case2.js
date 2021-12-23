/*
type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}
*/

const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

// Function 1: countComment 
// Function to count the comment from array, including comment in comment
// Input: Array of IComment
// Output: Sum of comment in the array

// Note: This is a recursive function

function countComment(commArr) {
    commSum = 0
    for (const comm of commArr) {
        commSum += 1
        if (comm.replies !== undefined) {
            commSum += countComment(comm.replies)
        }
    }

    return commSum;
}

console.log("SOAL 5 \nJumlah comment dalam array:", countComment(comments));