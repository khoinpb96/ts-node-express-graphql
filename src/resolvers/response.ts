const SucessResponse = (name: string) => {
  return {
    code: 200,
    success: true,
    message: `Successfully handle ${name}`,
  };
};

const FailedResponse = (name: string) => {
  return {
    code: 400,
    success: true,
    message: `Unsuccessfully handle ${name}`,
  };
};

export { SucessResponse, FailedResponse };
