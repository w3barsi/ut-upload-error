
"use client";

import { UploadButton, useUploadThing } from "~/utils/uploadthing";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function DefaultUploadButton() {
  return (
    <UploadButton
      endpoint="imageUploader"
      onClientUploadComplete={(res) => {
        // Do something with the response
        console.log("Files: ", res);
        alert("Upload Completed");
      }}
      onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
      }}
    />
  )
}

export function UploadButtonForCreate(props: { for: "pic" | "sig" }) {
  const { startUpload } = useUploadThing("imageUploader", {});
  //
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    // Check if a file is selected
    const files = event.target.files;
    if (files && files.length === 1 && files[0] !== null) {
      const file = files[0];
      if (file !== undefined) {
        toast.promise(startUpload([file]), {
          loading: `Uploading picture...`,
          success: "Successfully uploaded picture...",
          error: "Failed to upload picture!",
        });
      }
    }
  };
  //
  return (
    <Button asChild className="cursor-pointer" >
      <label htmlFor="uploadPicture" >
        {props.for === "pic" ? "Upload Picture" : "Upload Signature"}
        < Input
          id="uploadPicture"
          type="file"
          accept="image/*"
          className="hidden"
          capture={false}
          onChange={handleFileChange}
        />
      </label>
    </Button>
  );
}

