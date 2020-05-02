import feedbackModel from "../models/feedback";
import IFeedback from "../models/interfaces/feedback";

// gets all feedback from all users
export async function getAllFeedback() {
  return await feedbackModel.find();
}

// get feedback from a particular user
export async function getFeedbackById(userId: string) {
  return await feedbackModel.findById(userId);
}

// receive feedback from user and save it in the collection
export async function submitFeedbackById(
  userId: string,
  feedbackParams: IFeedback
) {
  const fullParams = { user: userId, ...feedbackParams };
  const newFeedback = new feedbackModel(fullParams);
  return await newFeedback.save();
}
