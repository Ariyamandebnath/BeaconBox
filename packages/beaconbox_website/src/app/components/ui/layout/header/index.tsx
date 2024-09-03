import { HeaderDesktop } from '@/app/components/ui/layout/header/DesktopHeader';
import { HeaderMobile } from './HeaderMobile';


export const AppHeader = async () => {
 

  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};