import {
  FeatureModel,
  PhaseModel,
  StatusModel,
  TaskModel,
  UserModel,
} from "../model";

const features = async () => await FeatureModel.find();
const feature = async (id: string) => await FeatureModel.findById(id);

export { features, feature };
