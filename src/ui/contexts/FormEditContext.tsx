'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';
interface FormContextType {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  cardData: Array<unknown>;
  setCardData: React.Dispatch<React.SetStateAction<Array<unknown>>>;
  children: ReactNode;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormEditProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    
  });

  const [cardData, setCardData] = useState<Array<unknown>>([]);

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
