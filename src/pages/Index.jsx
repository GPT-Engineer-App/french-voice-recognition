import React, { useState } from "react";
import { Container, VStack, Text, Button, useToast, Box } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { useDropzone } from "react-dropzone";

const Index = () => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      toast({
        title: "Fichier téléchargé.",
        description: `Vous avez téléchargé ${acceptedFiles[0].name}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "audio/*" });

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Reconnaissance de doublage français</Text>
        <Text>Veuillez télécharger un fichier audio pour commencer.</Text>
        <Box {...getRootProps()} border="2px dashed" borderColor="gray.300" padding={4} borderRadius="md" cursor="pointer">
          <input {...getInputProps()} />
          <Button leftIcon={<FaUpload />} colorScheme="teal" variant="outline">
            Télécharger un fichier audio
          </Button>
        </Box>
        {file && <Text mt={4}>Fichier sélectionné : {file.name}</Text>}
      </VStack>
    </Container>
  );
};

export default Index;
