"use server";
export const createPost = async function (formData: FormData) {
  const title = formData.get("title") as string;
  console.log(title);
};
