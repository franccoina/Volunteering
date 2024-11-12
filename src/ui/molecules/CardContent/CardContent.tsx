import styled from "styled-components";
import { IContentCardProps } from "@/models/molecules/CardContent";

const StyledContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const CardContent = ({ $text }: IContentCardProps) => {
    return (
        <StyledContent>
            {$text?.map((item, index) => (
                <li className="card-ellipsis" key={index}>{item}</li>
            ))}
        </StyledContent>
    );
};