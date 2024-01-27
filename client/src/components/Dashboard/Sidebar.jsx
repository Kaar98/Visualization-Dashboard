import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  useDisclosure,
  SimpleGrid,
  Divider,
  Text,
  Flex,
  Heading,
  Avatar,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAssignment,
  MdSettings,
  MdExitToApp,
  MdPeople,
  MdCalendarToday,
  MdInsertDriveFile,
  MdAnalytics,
} from "react-icons/md";


const AdminDashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const toast = useToast();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async () => {
    try {
      await axios.post("/data", formData);
      setFormData({});
      setIsModalOpen(false);
      toast({
        title: "Data Added",
        description: "Data has been successfully added.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error adding data:", error);
      toast({
        title: "Error",
        description: "An error occurred while adding data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };


  const handleLogout = () => {
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }
  return (
    <Container>
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={onOpen}
        position="fixed"
        top="50%"
        left={0}
        transform="translateY(-50%)"
        zIndex={1}
        colorScheme="teal"
        variant="outline"
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg={useColorModeValue("gray.100", "gray.800")}
          color={useColorModeValue("gray.800", "white")}
        >
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            fontWeight="bold"
            color="blue.500"
            display="flex"
            alignItems="center"
          >
            <SettingsIcon mr={2} /> Admin Dashboard
          </DrawerHeader>
          <DrawerBody>
            <Text fontSize="lg" mb={2} fontWeight="bold">
              Menu
            </Text>
            <Divider
              mb={4}
              borderColor={useColorModeValue("gray.300", "gray.600")}
            />

            <List spacing={3}>
              <ListItem cursor="pointer" onClick={() => setIsModalOpen(true)}>
                <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                Add Data
              </ListItem>
              <ListItem cursor="pointer" onClick={onClose}>
                <ListIcon as={MdDashboard} fontSize="xl"/>
                Dashboard
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdAssignment} fontSize="xl" />
                Tasks
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdPeople} fontSize="xl" />
                Users
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdCalendarToday} fontSize="xl" />
                Calendar
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdInsertDriveFile} fontSize="xl" />
                Files
              </ListItem>
              <ListItem cursor="pointer" onClick={onClose}>
                <ListIcon as={MdAnalytics} fontSize="xl" />
                Analytics
              </ListItem>
              <ListItem cursor="pointer">
                <ListIcon as={MdSettings} fontSize="xl" />
                Settings
              </ListItem>
              <ListItem cursor="pointer" onClick={handleLogout}>
                <ListIcon as={MdExitToApp} fontSize="xl" />
                Logout
              </ListItem>
            </List>

            <Flex alignItems="center" mt="140%">
              <Avatar
                size="lg"
                src="https://i.pinimg.com/originals/5a/6e/55/5a6e557d8c5a68bc93106239dc2779fe.jpg"
                mr={4}
              />
              <Box>
                <Heading size="md">Kanak Dwivedi</Heading>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.400")}
                >
                  Full Stack Web Developer
                </Text>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Data</ModalHeader>
          <ModalBody>
            <SimpleGrid columns={3} spacing={4}>
              <FormControl>
                <FormLabel>End Year</FormLabel>
                <Input
                  name="end_year"
                  value={formData.end_year || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Intensity</FormLabel>
                <Input
                  name="intensity"
                  value={formData.intensity || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Sector</FormLabel>
                <Input
                  name="sector"
                  value={formData.sector || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Topic</FormLabel>
                <Input
                  name="topic"
                  value={formData.topic || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Insight</FormLabel>
                <Input
                  name="insight"
                  value={formData.insight || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>URL</FormLabel>
                <Input
                  name="url"
                  value={formData.url || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Region</FormLabel>
                <Input
                  name="region"
                  value={formData.region || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Start Year</FormLabel>
                <Input
                  name="start_year"
                  value={formData.start_year || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Impact</FormLabel>
                <Input
                  name="impact"
                  value={formData.impact || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Added</FormLabel>
                <Input
                  name="added"
                  value={formData.added || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Published</FormLabel>
                <Input
                  name="published"
                  value={formData.published || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Country</FormLabel>
                <Input
                  name="country"
                  value={formData.country || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Relevance</FormLabel>
                <Input
                  name="relevance"
                  value={formData.relevance || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Pestle</FormLabel>
                <Input
                  name="pestle"
                  value={formData.pestle || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Source</FormLabel>
                <Input
                  name="source"
                  value={formData.source || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Title</FormLabel>
                <Input
                  name="title"
                  value={formData.title || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Likelihood</FormLabel>
                <Input
                  name="likelihood"
                  value={formData.likelihood || ""}
                  onChange={handleFormChange}
                />
              </FormControl>
            </SimpleGrid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleFormSubmit} colorScheme="teal" mr={3}>
              Submit
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default AdminDashboard;