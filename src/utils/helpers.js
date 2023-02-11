import axios from "axios";

export const createUserMessage = (message) => {
  return {
    text: message,
    sender: "USER",
    messageType: "text",
    ts: new Date(),
  };
};

export const getBotResponse = async ({
  serverUrl,
  sender,
  message,
  metadata = {},
}) => {
  try {
    const response = await axios({
      method: "post",
      url: serverUrl,
      data: {
        sender,
        message,
        metadata,
      },
    });
    return response.data;
  } catch (error) {
    console.log("error occurred fetching bot response", error);
    return [];
  }
};
