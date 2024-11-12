'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ICompany, IVacants } from '@/models/organisms/Cards';

interface FormContextType {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  cardData: Array<ICompany | IVacants>;
  setCardData: React.Dispatch<React.SetStateAction<Array<ICompany | IVacants>>>;
  children: ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormEditProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    title: '',
    description: '',
    status: '',
    name: '',
    location: '',
    contact: '',
    companyId: '',
  });

  const [cardData, setCardData] = useState<Array<ICompany | IVacants>>([]);

  return (
    <FormContext.Provider value={{ formData, setFormData, cardData, setCardData, children }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormEditContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
