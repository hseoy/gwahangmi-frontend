import axios from "axios";

const quiz = {
  get: quizID => axios.get("/api/sci-quiz/quizzes/" + quizID)
};

export default {
  get: async quizID => {
    const quizResponse = await quiz.get(quizID);

    return {
      quizID: quizResponse.data.data.quizID,
      author: quizResponse.data.data.author,
      title: quizResponse.data.data.title,
      explanation: quizResponse.data.data.explanation,
      answers: quizResponse.data.data.answers,
      rightAnswer: quizResponse.data.data.rightAnswer,
      participantCnt: quizResponse.data.data.participantCnt,
      point: quizResponse.data.data.point,
      uploadDate: quizResponse.data.data.uploadDate
    };
  }
};
