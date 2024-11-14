import React, { useState } from 'react';
import styles from './Dropdown.module.scss'; 
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import Button from '@/ui/atoms/Button/Button';

interface DropdownProps {
    user: {
        id?: string;
        token?: string;
        email?: string | null; 
        role?: string | null;
        photo?: string | null;
    }
  signOut: () => void; 
}

const Dropdown = ({ user, signOut }: DropdownProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };
  
    return (
      <div className={styles.containerProfile}>
        <div className={styles.profile} onClick={toggleDropdown}>
        <div className={styles.avatar}>
        {user?.photo ? (
                    <Image
                        src={user.photo}
                        alt="Foto de perfil"
                        width={80}
                        height={80}
                        quality={100}
                        className={styles.avatarImage}
                    />
                ) : (
                    <p>No se ha cargado la foto de perfil</p>
                )}
        </div>
        <div className={styles.email}>
          <span>{user.email || "Email no disponible"}</span>
        </div>
  
        {isDropdownOpen && (
          <div className={styles.dropdown}>
            <Button className={styles.dropdownItem} onClick={signOut}>
              Cerrar sesión
            </Button>
          </div>
        )}
        <IoIosArrowForward/>
      </div>
      </div>
    );
  };
  
export default Dropdown;