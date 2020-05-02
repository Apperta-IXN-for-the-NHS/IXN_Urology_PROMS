import questModel from "../models/questionnaire";
import IQuestionnaire from "../models/interfaces/questionnaire";

// returns all questionnaire results for all users
export async function getAllQuests() {
  return await questModel.find();
}

// returns a particular questionnaire result by its id
export async function getQuestbyId(id: string) {
  return await questModel.findById(id);
}

// returns all questionnaire results for a particular user
export async function getQuestbyUserId(userId: string) {
  return await questModel.find({ user: userId });
}

// creates a new questionnaire response
export async function createQuestResponse(
  userId: string,
  questParams: IQuestionnaire
) {
  const fullParams = { user: userId, ...questParams };
  const newQuestResponse = new questModel(fullParams);
  return await newQuestResponse.save();
}
