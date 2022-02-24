import { SucessResponse, FailedResponse } from "./response";
import {
  FeatureModel,
  PhaseModel,
  StatusModel,
  TaskModel,
  UserModel,
} from "../model";

const createUser = async (_: any, args: any) => {
  try {
    await UserModel.create(args);
    return SucessResponse(args.name);
  } catch (error) {
    return FailedResponse(args.name);
  }
};

const createPhase = async (_: any, args: any) => {
  try {
    await PhaseModel.create(args);
    return SucessResponse(args.name);
  } catch (error) {
    return FailedResponse(args.name);
  }
};

const createFeature = async (_: any, args: any) => {
  try {
    await FeatureModel.create(args);
    return SucessResponse(args.name);
  } catch (error) {
    return FailedResponse(args.name);
  }
};

const createStatus = async (_: any, args: any) => {
  try {
    const newStatus = await StatusModel.create(args);
    const feature = await FeatureModel.findById(args.feature_id);
    feature.statuses.push(newStatus);
    await feature.save();
    return SucessResponse(args.name);
  } catch (error) {
    return FailedResponse(args.name);
  }
};

const deleteStatus = async (_: any, { id, feature_id }: any) => {
  try {
    await StatusModel.findByIdAndDelete(id);
    const feature = await FeatureModel.findById(feature_id);
    feature.statuses = feature.statuses.filter((status: string) => {
      return status.toString() !== id;
    });
    await feature.save();
    return SucessResponse(id);
  } catch (error) {
    return FailedResponse(id);
  }
};

const createTask = async (_: any, { task }: any) => {
  try {
    const newTask = await TaskModel.create({
      name: task.name,
      users: task.user_id,
      phase: task.phase_id,
      create_at: new Date(),
      due_date: new Date(),
    });
    const status = await StatusModel.findById(task.status_id);
    status.tasks.push(newTask);
    await status.save();
    return SucessResponse(task.name);
  } catch (error) {
    return FailedResponse(task.name);
  }
};

const deleteTask = async (_: any, { id, status_id }: any) => {
  try {
    await TaskModel.findByIdAndDelete(id);
    const status = await StatusModel.findById(status_id);
    status.tasks = status.tasks.filter((task: string) => {
      return task.toString() !== id;
    });
    await status.save();
    return SucessResponse(id);
  } catch (error) {
    return FailedResponse(id);
  }
};

const updatePhase = async (_: any, args: any) => {
  try {
    await PhaseModel.updateOne({ _id: args.id }, args.phase);
    return SucessResponse(args.phase.name);
  } catch (error) {
    return FailedResponse(args.phase.name);
  }
};

export {
  createUser,
  createPhase,
  updatePhase,
  createFeature,
  createStatus,
  deleteStatus,
  createTask,
  deleteTask,
};
