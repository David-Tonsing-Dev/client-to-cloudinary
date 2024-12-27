import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (req, res) => {
  try {
    const { image } = req.file;
    // return;
    cloudinary.uploader.upload(
      req.file.path,
      { use_filename: true, folder: "Test1" },
      function (err, result) {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error",
          });
        }

        res.status(200).json({
          success: true,
          message: "Uploaded!",
          imgData: result,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};
