import axios from "axios";

const quizzesAPI = {
  get: (limit, skip, point, participantCnt, sort) =>
    axios.get("/api/sci-quiz/quizzes", {
      params: {
        limit: limit,
        skip: skip,
        point: point,
        participantCnt: participantCnt,
        sort: sort
      }
    }),
  post: (author, title, explanation, answers, rightAnswer, point) =>
    axios.post("/api/sci-quiz/quizzes", {
      author: author,
      title: title,
      explanation: explanation,
      answers: answers,
      rightAnswer: rightAnswer,
      point: point
    })
};

export default {
  get: async (limit, skip, point, participantCnt, sort) => {
    const quizzesResponse = await quizzesAPI.get(
      limit,
      skip,
      point,
      participantCnt,
      sort
    );

    return {
      quizzes: quizzesResponse.data.data.quizzes
    };
  },
  post: async (author, title, explanation, answers, rightAnswer, point) => {
    const quizzesResponse = await quizzesAPI.post(
      author,
      title,
      explanation,
      answers,
      rightAnswer,
      point
    );

    return {
      quizID: quizzesResponse.data.data.quizID,
      isSuccess: quizzesResponse.data.data.isSuccess,
      message: quizzesResponse.data.data.message
    };
  }
};
