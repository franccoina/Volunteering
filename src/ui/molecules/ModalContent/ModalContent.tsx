import { IContentModalProps } from "@/app/core/application/models/molecules/ModalContent";
import styles from "./ModalContent.module.scss";

const ModalContent: React.FC<IContentModalProps> = ({children}) => {
    return (
        <div className={styles.modalContent}>
            {children}
        </div>
    );
};

export default ModalContent;