import { useState } from "react";
import { Button, Input, Box, Text } from "@chakra-ui/react";

function UploadAudio() {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (audioFile) {
      console.log("Uploading:", audioFile);
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>
        Upload Audio
      </Text>
      <Input type="file" accept="audio/*" onChange={handleFileChange} />
      <Button mt={4} onClick={handleUpload}>
        Upload
      </Button>
    </Box>
  );
}

export default UploadAudio;
