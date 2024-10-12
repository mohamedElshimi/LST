import { supabase } from "@/lib/supabaseClient";

export const useImageUploader = () => {
  // Upload image to storage and return the public URL
  const uploadImage = async (file, bucketName) => {
    try {
      const fileName = `${Date.now()}-${file.name}`;
      const { error } = await supabase.storage
        .from(bucketName)
        .upload(fileName, file);

      if (error) {
        throw error;
      }

      // Retrieve the public URL after uploading the image
      const { data, error: urlError } = supabase.storage
        .from(bucketName)
        .getPublicUrl(fileName);

      if (urlError) {
        throw urlError;
      }

      // dah hwa el public url**
      return data.publicUrl;
    } catch (err) {
      console.log("Error uploading image:", err);
      return null;
    }
  };

  return {
    uploadImage,
  };
};
