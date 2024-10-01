import { IoMdMail } from "react-icons/io";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./Components/SupportCard";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
const Support = () => {
    return (
        <DashboardLayout>
            <Stack spacing="5rem"
                alignItems={{
                    base: "center", // Center for base (mobile)
                    xl: "stretch",  // Default behavior for larger screens
                }}
            // width={{
            //     base: "100%", // Full width for mobile screens
            //     md: "50%",    // 50% width for medium screens (tablet)
            //     xl: "25%"     // 25% width for larger screens
            // }}
            >
                <SupportCard
                    icon={IoMdMail}
                    leftComponent={<ContactCard />}
                    title="Contact Us"
                    text=" Have a question or just want to know more? Feel free to reach out to us."
                />
                <SupportCard
                    icon={AiTwotoneMessage}
                    leftComponent={
                        <InfoCard
                            inverted={true}
                            tagText="Chat Bot   "
                            imgUrl="/Visual.png"
                            text="Chat with us now"
                        />
                    }
                    title="Live Chat"
                    text="Don’t have time to wait for the answer? Chat with us now."
                />
            </Stack>
        </DashboardLayout>
    );
};

export default Support;