import { GlobalTheme, GlobalDarkTheme } from "@/ui/themes/GlobalStyling";

export const getTheme = (isView: string) => {
    return isView == 'vacants' ? GlobalDarkTheme : GlobalTheme;
};

export const toggleTheme = (isView: string) => {
    if (isView == 'vacants') {
        return 'companies' ;
    }else{
        return 'vacants' ;
    }
};