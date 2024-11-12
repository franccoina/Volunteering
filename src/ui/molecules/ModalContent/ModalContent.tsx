import styled from "styled-components";
import { IContentModalProps } from "@/models/molecules/ModalContent";

const Content = styled.div`
    background-color:  ${({ theme }) => theme.colors.bgSecondary};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    min-width: 200px;
    width: 100%;
    max-width: 400px;
`;
const ModalContent: React.FC<IContentModalProps> = ({children}) => {
    return (
        <Content>
            {children}
        </Content>
    );
};

export default ModalContent;