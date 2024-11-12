import { ICompany, IVacants, ICardProps } from "@/models/organisms/Cards";
import styled from "styled-components";
import { LuPencil, LuTrash2 } from "react-icons/lu";
import { CardContent } from "@/ui/molecules/CardContent/CardContent";
import Button from "@/ui/atoms/Button/Button";
import FormEdit from "../Form/FormEdit";
import { FormEditProvider } from "@/ui/contexts/FormEditContext";
import { useModalContext } from "@/ui/contexts/ModalContext";

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid ${({ theme }) => theme.colors.bgInactive};
    border-radius: 20px;
    padding: 20px;
    width: 32%;
    max-width: 400px;
    min-width: 150px;
    height: 160px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    margin: 0;
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    
    &:hover {
        transform: scale(0.99);
}
`;

const ButtonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
    gap: 6px;
    justify-content: end;
`;

export const Card = ({ $data, isView }: ICardProps) => {
    const { openModal, setModalContent } = useModalContext();

    const handleModal = (dataToEdit: string | number) => {
        const id: string = dataToEdit.toString()

        setModalContent(
            (<FormEditProvider>
                <FormEdit isView={isView} idToEdit={id} />
            </FormEditProvider>)
        );
        openModal()
    }

    const onDelete = async (idToDelete: number | string) => {
        const id: string = idToDelete.toString();
        try {
            const url = isView === "companies"
                ? `https://vacantsbackendgates-production.up.railway.app/api/v1/company/${id}`
                : `https://vacantsbackendgates-production.up.railway.app/api/v1/vacants/${id}`;

            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': "*/*"
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            console.log("Deleted card:", idToDelete);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <StyledCard>
            {isView == 'vacants' ? (
                <ul>
                    <h3>{($data as IVacants).title}</h3>
                    <CardContent
                        $text={[
                            `Description: ${($data as IVacants).description}`,
                            `Status: ${($data as IVacants).status}`,
                            `Company: ${($data as IVacants).company?.name}`,
                        ]}
                    />
                </ul>
            ) : (
                <ul>
                    <h3>{($data as ICompany).name}</h3>
                    <CardContent
                        $text={[
                            `City: ${($data as ICompany).location}`,
                            `Contact: ${($data as ICompany).contact}`,
                            `Vacants: ${($data as ICompany).vacants?.length}`
                        ]}
                    />
                </ul>
            )}
            <ButtonsContainer>
                <div className="editBtn">
                    <Button
                        type="button"
                        icon={<LuPencil />}
                        onClick={() => handleModal($data!.id)}
                    />
                </div>
                <div className="deleteBtn">
                    <Button
                        type="button"
                        icon={<LuTrash2 />}
                        onClick={() => onDelete($data!.id)}
                    />
                </div>
            </ButtonsContainer>
        </StyledCard>
    );
};