import { supabase } from "@/lib/supabaseClient";

export const useImageUploader = () => {
  // Upload image to storage and return the public URL
  const uploadImage = async (file, bucketName) => {
    try {
      const fileName = `${Date.now()}essam_${file.name}`;
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

      return data.publicUrl; // Ensure this returns a valid URL
    } catch (err) {
      console.log("Error uploading image:", err);
      return null;
    }
  };

  return {
    uploadImage,
  };
};
